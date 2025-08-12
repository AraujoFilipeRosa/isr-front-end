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
  const rota = useRoute()

  /**
   * Metadados da rota atual
   */
  const metadadosAtuais = computed((): RouteMeta => {
    return rota.meta as RouteMeta
  })

  /**
   * Título da página atual
   */
  const tituloPagina = computed((): string => {
    return metadadosAtuais.value?.title || 'ISR'
  })

  /**
   * Ícone da página atual
   */
  const iconePagina = computed((): string | undefined => {
    return metadadosAtuais.value?.icon
  })

  /**
   * Verifica se a página atual deve aparecer no menu
   */
  const mostrarNoMenu = computed((): boolean => {
    return metadadosAtuais.value?.showInMenu || false
  })

  /**
   * Descrição da página para SEO
   */
  const descricaoPagina = computed((): string => {
    return (
      metadadosAtuais.value?.description ||
      'Instituto Severa Romana - Transformando vidas através da educação e ação social.'
    )
  })

  /**
   * Palavras-chave para SEO
   */
  const palavrasChavePagina = computed((): string[] => {
    return (
      metadadosAtuais.value?.keywords || ['ISR', 'Instituto', 'Severa Romana', 'educação', 'social']
    )
  })

  /**
   * Verifica se a rota requer autenticação
   */
  const requerAutenticacao = computed((): boolean => {
    return metadadosAtuais.value?.requiresAuth || false
  })

  /**
   * Roles necessárias para acessar a rota
   */
  const rolesNecessarias = computed((): string[] => {
    return metadadosAtuais.value?.roles || []
  })

  return {
    metadadosAtuais,
    tituloPagina,
    iconePagina,
    mostrarNoMenu,
    descricaoPagina,
    palavrasChavePagina,
    requerAutenticacao,
    rolesNecessarias,
  }
}
