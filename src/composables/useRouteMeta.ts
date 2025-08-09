import { computed } from 'vue'
import { useRoute } from 'vue-router'

/**
 * Interface para metadados estendidos das rotas
 */
export interface RouteMeta {
  title?: string
  icon?: string
  showInMenu?: boolean
  order?: number
  parent?: string
  badge?: string
  shortcut?: string
  description?: string
  keywords?: string[]
  requiresAuth?: boolean
  roles?: string[]
}

/**
 * Composable para trabalhar com metadados das rotas
 */
export function useRouteMeta() {
  const route = useRoute()

  /**
   * Metadados da rota atual
   */
  const currentMeta = computed((): RouteMeta => {
    return route.meta as RouteMeta
  })

  /**
   * Título da página atual
   */
  const pageTitle = computed((): string => {
    return currentMeta.value?.title || 'ISR'
  })

  /**
   * Ícone da página atual
   */
  const pageIcon = computed((): string | undefined => {
    return currentMeta.value?.icon
  })

  /**
   * Verifica se a página atual deve aparecer no menu
   */
  const showInMenu = computed((): boolean => {
    return currentMeta.value?.showInMenu || false
  })

  /**
   * Descrição da página para SEO
   */
  const pageDescription = computed((): string => {
    return (
      currentMeta.value?.description ||
      'Instituto Severa Romana - Transformando vidas através da educação e ação social.'
    )
  })

  /**
   * Palavras-chave para SEO
   */
  const pageKeywords = computed((): string[] => {
    return (
      currentMeta.value?.keywords || ['ISR', 'Instituto', 'Severa Romana', 'educação', 'social']
    )
  })

  /**
   * Verifica se a rota requer autenticação
   */
  const requiresAuth = computed((): boolean => {
    return currentMeta.value?.requiresAuth || false
  })

  /**
   * Roles necessárias para acessar a rota
   */
  const requiredRoles = computed((): string[] => {
    return currentMeta.value?.roles || []
  })

  return {
    currentMeta,
    pageTitle,
    pageIcon,
    showInMenu,
    pageDescription,
    pageKeywords,
    requiresAuth,
    requiredRoles,
  }
}
