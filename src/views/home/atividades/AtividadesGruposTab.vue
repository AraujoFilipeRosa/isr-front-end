<script setup lang="ts">
import { ref } from 'vue'
import { MotionDirective as motion } from '@vueuse/motion'
import { useI18n } from '@/composables/useI18n'
import ComponenteSecaoTitulo from '@/components/ComponenteSecaoTitulo.vue'
import ComponenteGaleriaImagens from '@/components/ComponenteGaleriaImagens.vue'
import AtividadeCardComponent from '@/components/AtividadeCardComponent.vue'

import atividadeExterna1 from '@/assets/imagens/atividades/atividade-externa-1.jpg'
import atividadeExterna2 from '@/assets/imagens/atividades/atividade-externa-2.jpg'
import atividadeExterna3 from '@/assets/imagens/atividades/atividade-externa-3.jpg'
import atividadeExterna4 from '@/assets/imagens/atividades/atividade-externa-4.jpg'
import atividadeExterna5 from '@/assets/imagens/atividades/atividade-externa-5.jpg'
import atividadeExterna6 from '@/assets/imagens/atividades/atividade-externa-6.jpg'

import palestrasRodaConversa1 from '@/assets/imagens/atividades/palestras-roda-conversa-1.jpg'
import palestrasRodaConversa2 from '@/assets/imagens/atividades/palestras-roda-conversa-2.jpg'
import palestrasRodaConversa3 from '@/assets/imagens/atividades/palestras-roda-conversa-3.jpg'
import palestrasRodaConversa4 from '@/assets/imagens/atividades/palestras-roda-conversa-4.jpg'
import palestrasRodaConversa5 from '@/assets/imagens/atividades/palestras-roda-conversa-5.jpg'
import palestrasRodaConversa6 from '@/assets/imagens/atividades/palestras-roda-conversa-6.jpg'

import encontroIntegrado1 from '@/assets/imagens/atividades/encontro-integrado-1.jpg'
import encontroIntegrado2 from '@/assets/imagens/atividades/encontro-integrado-2.jpg'
import encontroIntegrado3 from '@/assets/imagens/atividades/encontro-integrado-3.jpg'
import encontroIntegrado4 from '@/assets/imagens/atividades/encontro-integrado-4.jpg'
import encontroIntegrado5 from '@/assets/imagens/atividades/encontro-integrado-5.jpg'
import encontroIntegrado6 from '@/assets/imagens/atividades/encontro-integrado-6.jpg'

import oficinas1 from '@/assets/imagens/atividades/oficinas-1.jpg'
import oficinas2 from '@/assets/imagens/atividades/oficinas-2.jpg'
import oficinas3 from '@/assets/imagens/atividades/oficinas-3.jpg'
import oficinas4 from '@/assets/imagens/atividades/oficinas-4.jpg'
import oficinas5 from '@/assets/imagens/atividades/oficinas-5.jpg'
import oficinas6 from '@/assets/imagens/atividades/oficinas-6.jpg'

import reuniaoEquipe from '@/assets/imagens/atividades/reuniao-equipe.jpg'

const { t } = useI18n()

const galeriaVisivel = ref(false)
const imagensGaleria = ref<string[]>([])
const tituloGaleria = ref('')
const imagemInicial = ref(0)

const imagensAtividades = {
  rumoCerto: [
    atividadeExterna1,
    atividadeExterna2,
    atividadeExterna3,
    atividadeExterna4,
    atividadeExterna5,
    atividadeExterna6,
  ],
  palestras: [
    palestrasRodaConversa1,
    palestrasRodaConversa2,
    palestrasRodaConversa3,
    palestrasRodaConversa4,
    palestrasRodaConversa5,
    palestrasRodaConversa6,
  ],
  encontros: [
    encontroIntegrado1,
    encontroIntegrado2,
    encontroIntegrado3,
    encontroIntegrado4,
    encontroIntegrado5,
    encontroIntegrado6,
  ],
  oficinas: [oficinas1, oficinas2, oficinas3, oficinas4, oficinas5, oficinas6],
  reunioes: [reuniaoEquipe],
}

// Função para mapear as imagens das atividades corretamente
const getImagemAtividade = (chave: string, index: number) => {
  return imagensAtividades[chave as keyof typeof imagensAtividades]?.[index - 1] || ''
}

// Função para retornar a quantidade de imagens por atividade
const getQuantidadeImagensAtividade = (chave: string) => {
  const quantidades: Record<string, number> = {
    rumoCerto: 6,
    palestras: 6,
    encontros: 6,
    oficinas: 6,
    reunioes: 1,
  }

  return quantidades[chave] || 0
}

// Função para abrir galeria de imagens
const abrirGaleria = (atividade: any, imagemClicada: number = 0) => {
  const quantidade = getQuantidadeImagensAtividade(atividade.chave)
  const imagens: string[] = []

  for (let i = 1; i <= quantidade; i++) {
    const imagem = getImagemAtividade(atividade.chave, i)
    if (imagem) {
      imagens.push(imagem)
    }
  }

  imagensGaleria.value = imagens
  tituloGaleria.value = t(`atividades.atividadesGrupos.atividades.${atividade.chave}.titulo`)
  imagemInicial.value = imagemClicada
  galeriaVisivel.value = true
}

// Dados das atividades organizadas
const atividades = [
  {
    chave: 'rumoCerto',
    icone: 'pi-map-marker',
    cor: '#e74c3c',
  },
  {
    chave: 'palestras',
    icone: 'pi-megaphone',
    cor: '#3498db',
  },
  {
    chave: 'encontros',
    icone: 'pi-users',
    cor: '#2ecc71',
  },
  {
    chave: 'oficinas',
    icone: 'pi-wrench',
    cor: '#f39c12',
  },
  {
    chave: 'reunioes',
    icone: 'pi-calendar',
    cor: '#9b59b6',
  },
]
</script>

<template>
  <div class="atividades-grupos">
    <!-- Header da Seção -->
    <ComponenteSecaoTitulo
      :titulo="t('atividades.atividadesGrupos.titulo')"
      :descricao="t('atividades.atividadesGrupos.descricao')"
    />

    <!-- Grid das Atividades -->
    <section class="atividades-grid">
      <div
        v-for="(atividade, index) in atividades"
        :key="atividade.chave"
        v-motion
        :initial="{ opacity: 0, y: 0 }"
        :visible="{ opacity: 1, y: 0 }"
        :duration="600"
        :delay="index * 50"
        class="atividade-card-container"
      >
        <AtividadeCardComponent
          :atividade="atividade"
          :index="index"
          :get-imagem-atividade="getImagemAtividade"
          :get-quantidade-imagens-atividade="getQuantidadeImagensAtividade"
          :abrir-galeria="abrirGaleria"
        />
      </div>
    </section>

    <!-- Galeria de Imagens Modal -->
    <ComponenteGaleriaImagens
      v-model="galeriaVisivel"
      :titulo="tituloGaleria"
      :imagens="imagensGaleria"
      :imagem-inicial="imagemInicial"
    />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

.atividades-grupos {
  padding: 2rem 0;
}

// ===== GRID DAS ATIVIDADES =====
.atividades-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
