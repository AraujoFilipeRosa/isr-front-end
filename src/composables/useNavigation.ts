import { computed } from 'vue'
import { useRouter, type RouteRecordNormalized } from 'vue-router'

export interface MenuItem {
  label: string
  icon?: string
  to?: { name: string }
  items?: MenuItem[]
  badge?: string
  shortcut?: string
}

/**
 * Composable para gerar navegação dinâmica baseada nas rotas
 */
export function useNavigation() {
  const router = useRouter()

  /**
   * Converte uma rota em item de menu
   */
  const routeToMenuItem = (
    route: RouteRecordNormalized,
    hasChildren: boolean = false,
  ): MenuItem | null => {
    const meta = route.meta

    // Só incluir se tiver metadados e showInMenu for true
    if (!meta || !meta.showInMenu) {
      return null
    }

    const menuItem: MenuItem = {
      label: meta.title as string,
      icon: meta.icon as string,
      badge: meta.badge as string,
      shortcut: meta.shortcut as string,
    }

    // Se tem filhos (submenu), não adicionar o link "to"
    // Isso previne a navegação quando o item é apenas um container de submenu
    if (!hasChildren) {
      menuItem.to = { name: route.name as string }
    }

    return menuItem
  }

  /**
   * Encontra todas as rotas filhas de uma rota pai
   */
  const findChildRoutes = (parentName: string): MenuItem[] => {
    const allRoutes = router.getRoutes()

    return allRoutes
      .filter((route) => route.meta?.parent === parentName)
      .map((route) => routeToMenuItem(route, false)) // Explicitar que itens de submenu não têm filhos
      .filter((item): item is MenuItem => item !== null)
      .sort((a, b) => {
        // Se houver ordem definida, usar ela
        const orderA =
          (router.getRoutes().find((r) => r.name === a.to?.name)?.meta?.order as number) || 999
        const orderB =
          (router.getRoutes().find((r) => r.name === b.to?.name)?.meta?.order as number) || 999
        return orderA - orderB
      })
  }

  /**
   * Gera itens de menu principais (nível raiz)
   */
  const menuItems = computed((): MenuItem[] => {
    const allRoutes = router.getRoutes()

    // Filtrar rotas principais (que aparecem no menu e não têm parent)
    const mainRoutes = allRoutes.filter((route) => {
      const meta = route.meta
      return meta && meta.showInMenu && !meta.parent
    })

    // Converter para itens de menu e adicionar filhos
    const items = mainRoutes
      .map((route) => {
        // Primeiro, verificar se a rota tem filhos
        const children = findChildRoutes(route.name as string)
        const hasChildren = children.length > 0

        // Converter para item de menu, informando se tem filhos
        const menuItem = routeToMenuItem(route, hasChildren)
        if (!menuItem) return null

        // Se tem filhos, adicionar ao item
        if (hasChildren) {
          menuItem.items = children
        }

        return menuItem
      })
      .filter((item): item is MenuItem => item !== null)

    // Ordenar por ordem definida nos metadados
    return items.sort((a, b) => {
      // Para itens com submenu, buscar a rota pelo label
      const routeA = a.to
        ? allRoutes.find((r) => r.name === a.to?.name)
        : allRoutes.find((r) => r.meta?.title === a.label)

      const routeB = b.to
        ? allRoutes.find((r) => r.name === b.to?.name)
        : allRoutes.find((r) => r.meta?.title === b.label)

      const orderA = (routeA?.meta?.order as number) || 999
      const orderB = (routeB?.meta?.order as number) || 999

      return orderA - orderB
    })
  })

  /**
   * Gera itens de submenu baseado na rota atual
   */
  const subMenuItems = computed((): MenuItem[] => {
    const currentRoute = router.currentRoute.value

    // Se a rota atual tem parent, buscar irmãos
    if (currentRoute.meta?.parent) {
      return findChildRoutes(currentRoute.meta.parent as string)
    }

    // Se a rota atual tem filhos, retornar eles
    if (currentRoute.name) {
      return findChildRoutes(currentRoute.name as string)
    }

    return []
  })

  /**
   * Encontra breadcrumbs para a rota atual
   */
  const breadcrumbs = computed(() => {
    const currentRoute = router.currentRoute.value
    const breadcrumbs: MenuItem[] = []

    // Adicionar item atual
    if (currentRoute.meta?.title) {
      breadcrumbs.unshift({
        label: currentRoute.meta.title as string,
        icon: currentRoute.meta.icon as string,
        to: { name: currentRoute.name as string },
      })
    }

    // Se tem parent, adicionar ele também
    if (currentRoute.meta?.parent) {
      const parentRoute = router.getRoutes().find((r) => r.name === currentRoute.meta?.parent)
      if (parentRoute?.meta?.title) {
        breadcrumbs.unshift({
          label: parentRoute.meta.title as string,
          icon: parentRoute.meta.icon as string,
          to: { name: parentRoute.name as string },
        })
      }
    }

    return breadcrumbs
  })

  /**
   * Verifica se uma rota está ativa
   */
  const isRouteActive = (routeName: string): boolean => {
    const currentRoute = router.currentRoute.value

    // Verificação direta
    if (currentRoute.name === routeName) {
      return true
    }

    // Verificação por parent (para submenus)
    if (currentRoute.meta?.parent === routeName) {
      return true
    }

    return false
  }

  return {
    menuItems,
    subMenuItems,
    breadcrumbs,
    isRouteActive,
    router,
  }
}
