/**
 * Ponto de entrada para o sistema de localização
 * Permite facilmente adicionar novos idiomas no futuro
 */
import ptBR from './pt-BR'
import ptPT from './pt-PT'

// Tipo para as traduções
export type Translations = typeof ptBR

// Idiomas disponíveis
export const IDIOMAS_DISPONIVEIS = {
  'pt-BR': 'Português (Brasil)',
  'pt-PT': 'Português (Portugal)',
  // Futuramente: 'en-US': 'English (United States)',
  // Futuramente: 'es-ES': 'Español (España)',
} as const

export type IdiomaDisponivel = keyof typeof IDIOMAS_DISPONIVEIS

// Mapeamento dos idiomas para suas traduções
export const TRADUCOES: Record<IdiomaDisponivel, Translations> = {
  'pt-BR': ptBR,
  'pt-PT': ptPT,
  // Futuramente: 'en-US': enUS,
  // Futuramente: 'es-ES': esES,
}

// Idioma padrão
export const IDIOMA_PADRAO: IdiomaDisponivel = 'pt-BR'

// Exportar o idioma padrão para uso direto
export default ptBR
