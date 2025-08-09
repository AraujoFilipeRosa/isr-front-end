/**
 * Composable para internacionalização (i18n)
 * Centraliza o acesso aos textos traduzidos da aplicação
 */
import { ref, computed } from 'vue'
import { TRADUCOES, IDIOMA_PADRAO, type IdiomaDisponivel, type Translations } from '@/locales'

/**
 * Detecta o idioma baseado no subdomínio da URL
 */
const detectarIdiomaUrl = (): IdiomaDisponivel => {
  const hostname = window.location.hostname

  // Verifica se é um subdomínio de idioma
  if (hostname.startsWith('pt.')) {
    return 'pt-PT'
  } else if (hostname.startsWith('br.')) {
    return 'pt-BR'
  }

  // Se não há subdomínio específico, usa o padrão (Brasil)
  return IDIOMA_PADRAO
}

// Estado reativo global do idioma atual (detectado pela URL)
const idiomaAtual = ref<IdiomaDisponivel>(detectarIdiomaUrl())

/**
 * Hook para trabalhar com internacionalização
 */
export function useI18n() {
  /**
   * Traduções do idioma atual
   */
  const textos = computed((): Translations => {
    return TRADUCOES[idiomaAtual.value]
  })

  /**
   * Obtém uma tradução específica usando notação de pontos
   * Exemplo: getText('home.titulo') ou getText('navegacao.sobre.titulo')
   */
  const getText = (chave: string, parametros?: Record<string, string | number>): string => {
    const chaves = chave.split('.')
    let valor: any = textos.value

    // Navegar pela estrutura do objeto usando as chaves
    for (const k of chaves) {
      if (valor && typeof valor === 'object' && k in valor) {
        valor = valor[k]
      } else {
        console.warn(`Chave de tradução não encontrada: ${chave}`)
        return chave // Retorna a própria chave se não encontrar
      }
    }

    // Se não é string, retorna a chave
    if (typeof valor !== 'string') {
      console.warn(`Tradução inválida para chave: ${chave}`)
      return chave
    }

    // Substitui parâmetros se fornecidos
    if (parametros) {
      return valor.replace(/\{(\w+)\}/g, (match, param) => {
        return parametros[param]?.toString() || match
      })
    }

    return valor
  }

  /**
   * Alias mais curto para getText
   */
  const t = getText

  /**
   * Obtém todo o objeto de uma seção
   * Exemplo: getSection('navegacao') retorna todo o objeto navegacao
   */
  const getSection = <T = any>(secao: string): T => {
    const chaves = secao.split('.')
    let valor: any = textos.value

    for (const k of chaves) {
      if (valor && typeof valor === 'object' && k in valor) {
        valor = valor[k]
      } else {
        console.warn(`Seção de tradução não encontrada: ${secao}`)
        return {} as T
      }
    }

    return valor as T
  }

  /**
   * Redireciona para o subdomínio correto baseado no idioma
   */
  const definirIdioma = (novoIdioma: IdiomaDisponivel): void => {
    if (novoIdioma in TRADUCOES) {
      const currentUrl = window.location
      let novoSubdominio = ''

      if (novoIdioma === 'pt-PT') {
        novoSubdominio = 'pt.'
      } else if (novoIdioma === 'pt-BR') {
        novoSubdominio = 'br.'
      }

      // Constrói a nova URL com o subdomínio correto
      const novaUrl = `${currentUrl.protocol}//${novoSubdominio}${currentUrl.hostname.replace(/^(pt\.|br\.)/, '')}${currentUrl.port ? ':' + currentUrl.port : ''}${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`

      // Redireciona para a nova URL
      window.location.href = novaUrl
    } else {
      console.warn(`Idioma não suportado: ${novoIdioma}`)
    }
  }

  /**
   * Obtém o idioma atual
   */
  const obterIdiomaAtual = (): IdiomaDisponivel => {
    return idiomaAtual.value
  }

  /**
   * Verifica se uma chave de tradução existe
   */
  const existeTraducao = (chave: string): boolean => {
    const chaves = chave.split('.')
    let valor: any = textos.value

    for (const k of chaves) {
      if (valor && typeof valor === 'object' && k in valor) {
        valor = valor[k]
      } else {
        return false
      }
    }

    return typeof valor === 'string'
  }

  /**
   * Re-detecta o idioma pela URL (útil para casos especiais)
   */
  const redetectarIdioma = (): void => {
    idiomaAtual.value = detectarIdiomaUrl()
  }

  return {
    // Estado
    textos,
    idiomaAtual: computed(() => idiomaAtual.value),

    // Métodos principais
    getText,
    t, // Alias mais curto
    getSection,

    // Gerenciamento de idioma
    definirIdioma,
    obterIdiomaAtual,

    // Utilitários
    existeTraducao,
    redetectarIdioma,
  }
}

/**
 * Exportar uma instância global para uso em componentes
 * que não usam Composition API
 */
export const i18n = useI18n()
