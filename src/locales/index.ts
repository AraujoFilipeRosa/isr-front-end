/**
 * Ponto de entrada para o sistema de localização
 * Permite facilmente adicionar novos idiomas no futuro
 */
import ptBR from './pt-BR'
import ptPT from './pt-PT'

export type Translations = typeof ptBR

export const IDIOMAS_DISPONIVEIS = {
  'pt-BR': 'Português (Brasil)',
  'pt-PT': 'Português (Portugal)',
} as const

export type IdiomaDisponivel = keyof typeof IDIOMAS_DISPONIVEIS

export const TRADUCOES: Record<IdiomaDisponivel, Translations> = {
  'pt-BR': ptBR,
  'pt-PT': ptPT,
}

export const IDIOMA_PADRAO: IdiomaDisponivel = 'pt-BR'

export default ptBR
