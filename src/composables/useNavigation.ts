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
  const roteador = useRouter()

  /**
   * Converte uma rota em item de menu
   */
  const rotaParaItemMenu = (
    rota: RouteRecordNormalized,
    temFilhos: boolean = false,
  ): MenuItem | null => {
    const metadados = rota.meta

    // Só incluir se tiver metadados e showInMenu for true
    if (!metadados || !metadados.showInMenu) {
      return null
    }

    const itemMenu: MenuItem = {
      label: metadados.title as string,
      icon: metadados.icon as string,
      badge: metadados.badge as string,
      shortcut: metadados.shortcut as string,
    }

    // Se tem filhos (submenu), não adicionar o link "to"
    // Isso previne a navegação quando o item é apenas um container de submenu
    if (!temFilhos) {
      itemMenu.to = { name: rota.name as string }
    }

    return itemMenu
  }

  /**
   * Encontra todas as rotas filhas de uma rota pai
   */
  const encontrarRotasFilhas = (nomePai: string): MenuItem[] => {
    const todasRotas = roteador.getRoutes()

    return todasRotas
      .filter((rota) => rota.meta?.parent === nomePai)
      .map((rota) => rotaParaItemMenu(rota, false)) // Explicitar que itens de submenu não têm filhos
      .filter((item): item is MenuItem => item !== null)
      .sort((a, b) => {
        // Se houver ordem definida, usar ela
        const ordemA =
          (roteador.getRoutes().find((r) => r.name === a.to?.name)?.meta?.order as number) || 999
        const ordemB =
          (roteador.getRoutes().find((r) => r.name === b.to?.name)?.meta?.order as number) || 999
        return ordemA - ordemB
      })
  }

  /**
   * Gera itens de menu principais (nível raiz)
   */
  const itensMenu = computed((): MenuItem[] => {
    const todasRotas = roteador.getRoutes()

    // Filtrar rotas principais (que aparecem no menu e não têm parent)
    const rotasPrincipais = todasRotas.filter((rota) => {
      const metadados = rota.meta
      return metadados && metadados.showInMenu && !metadados.parent
    })

    // Converter para itens de menu e adicionar filhos
    const itens = rotasPrincipais
      .map((rota) => {
        // Primeiro, verificar se a rota tem filhos
        const filhos = encontrarRotasFilhas(rota.name as string)
        const temFilhos = filhos.length > 0

        // Converter para item de menu, informando se tem filhos
        const itemMenu = rotaParaItemMenu(rota, temFilhos)
        if (!itemMenu) return null

        // Se tem filhos, adicionar ao item
        if (temFilhos) {
          itemMenu.items = filhos
        }

        return itemMenu
      })
      .filter((item): item is MenuItem => item !== null)

    // Ordenar por ordem definida nos metadados
    return itens.sort((a, b) => {
      // Para itens com submenu, buscar a rota pelo label
      const rotaA = a.to
        ? todasRotas.find((r) => r.name === a.to?.name)
        : todasRotas.find((r) => r.meta?.title === a.label)

      const rotaB = b.to
        ? todasRotas.find((r) => r.name === b.to?.name)
        : todasRotas.find((r) => r.meta?.title === b.label)

      const ordemA = (rotaA?.meta?.order as number) || 999
      const ordemB = (rotaB?.meta?.order as number) || 999

      return ordemA - ordemB
    })
  })

  /**
   * Gera itens de submenu baseado na rota atual
   */
  const itensSubMenu = computed((): MenuItem[] => {
    const rotaAtual = roteador.currentRoute.value

    // Se a rota atual tem parent, buscar irmãos
    if (rotaAtual.meta?.parent) {
      return encontrarRotasFilhas(rotaAtual.meta.parent as string)
    }

    // Se a rota atual tem filhos, retornar eles
    if (rotaAtual.name) {
      return encontrarRotasFilhas(rotaAtual.name as string)
    }

    return []
  })

  /**
   * Encontra breadcrumbs para a rota atual
   */
  const migalhas = computed(() => {
    const rotaAtual = roteador.currentRoute.value
    const migalhas: MenuItem[] = []

    // Adicionar item atual
    if (rotaAtual.meta?.title) {
      migalhas.unshift({
        label: rotaAtual.meta.title as string,
        icon: rotaAtual.meta.icon as string,
        to: { name: rotaAtual.name as string },
      })
    }

    // Se tem parent, adicionar ele também
    if (rotaAtual.meta?.parent) {
      const rotaPai = roteador.getRoutes().find((r) => r.name === rotaAtual.meta?.parent)
      if (rotaPai?.meta?.title) {
        migalhas.unshift({
          label: rotaPai.meta.title as string,
          icon: rotaPai.meta.icon as string,
          to: { name: rotaPai.name as string },
        })
      }
    }

    return migalhas
  })

  /**
   * Verifica se uma rota está ativa
   */
  const rotaEstaAtiva = (nomeRota: string): boolean => {
    const rotaAtual = roteador.currentRoute.value

    // Verificação direta
    if (rotaAtual.name === nomeRota) {
      return true
    }

    // Verificação por parent (para submenus)
    if (rotaAtual.meta?.parent === nomeRota) {
      return true
    }

    return false
  }

  return {
    itensMenu,
    itensSubMenu,
    migalhas,
    rotaEstaAtiva,
    roteador,
  }
}
