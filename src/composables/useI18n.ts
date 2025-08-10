import { ref, computed } from 'vue'
import { TRADUCOES, IDIOMA_PADRAO, type IdiomaDisponivel, type Translations } from '@/locales'

const detectarIdiomaUrl = (): IdiomaDisponivel => {
  const hostname = window.location.hostname

  if (hostname.startsWith('pt.')) {
    return 'pt-PT'
  } else if (hostname.startsWith('br.')) {
    return 'pt-BR'
  }

  return IDIOMA_PADRAO
}

const idiomaAtual = ref<IdiomaDisponivel>(detectarIdiomaUrl())

export function useI18n() {
  const textos = computed((): Translations => {
    return TRADUCOES[idiomaAtual.value]
  })

  const getText = (chave: string, parametros?: Record<string, string | number>): string => {
    const chaves = chave.split('.')
    let valor: any = textos.value

    for (const k of chaves) {
      if (valor && typeof valor === 'object' && k in valor) {
        valor = valor[k]
      } else {
        console.warn(`Chave de tradução não encontrada: ${chave}`)
        return chave
      }
    }

    if (typeof valor !== 'string') {
      console.warn(`Tradução inválida para chave: ${chave}`)
      return chave
    }

    if (parametros) {
      return valor.replace(/\{(\w+)\}/g, (match, param) => {
        return parametros[param]?.toString() || match
      })
    }

    return valor
  }

  const t = getText

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

  const definirIdioma = (novoIdioma: IdiomaDisponivel): void => {
    if (novoIdioma in TRADUCOES) {
      const currentUrl = window.location
      let novoSubdominio = ''

      if (novoIdioma === 'pt-PT') {
        novoSubdominio = 'pt.'
      } else if (novoIdioma === 'pt-BR') {
        novoSubdominio = 'br.'
      }

      const novaUrl = `${currentUrl.protocol}//${novoSubdominio}${currentUrl.hostname.replace(/^(pt\.|br\.)/, '')}${currentUrl.port ? ':' + currentUrl.port : ''}${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`

      window.location.href = novaUrl
    } else {
      console.warn(`Idioma não suportado: ${novoIdioma}`)
    }
  }

  const obterIdiomaAtual = (): IdiomaDisponivel => {
    return idiomaAtual.value
  }

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

  const redetectarIdioma = (): void => {
    idiomaAtual.value = detectarIdiomaUrl()
  }

  return {
    textos,
    idiomaAtual: computed(() => idiomaAtual.value),

    getText,
    t,
    getSection,

    definirIdioma,
    obterIdiomaAtual,

    existeTraducao,
    redetectarIdioma,
  }
}

export const i18n = useI18n()
