<script setup lang="ts">
import { ref } from 'vue'
import { MotionDirective as motion } from '@vueuse/motion'
import { useI18n } from '@/composables/useI18n'
import ComponenteGaleriaImagens from '@/components/ComponenteGaleriaImagens.vue'
import ProfissionalCardComponent from '@/components/ProfissionalCardComponent.vue'

import pauloCezarImg from '@/assets/imagens/profissionais/paulo-cezar.jpg'
import sandraImg from '@/assets/imagens/profissionais/sandra.jpg'
import patriciaImg from '@/assets/imagens/profissionais/patricia.jpg'
import suzanaImg from '@/assets/imagens/profissionais/suzana.jpg'
import virnaImg from '@/assets/imagens/profissionais/virna.jpg'
import dayseImg from '@/assets/imagens/profissionais/dayse.jpg'
import osmarImg from '@/assets/imagens/profissionais/osmar.jpg'
import neusaImg from '@/assets/imagens/profissionais/neusa.jpg'
import cristianeImg from '@/assets/imagens/profissionais/cristiane.jpg'

import sandraAtendimento1 from '@/assets/imagens/atendimentos/sandra-atendimento-1.jpg'
import sandraAtendimento2 from '@/assets/imagens/atendimentos/sandra-atendimento-2.jpg'
import sandraAtendimento3 from '@/assets/imagens/atendimentos/sandra-atendimento-3.jpg'
import patriciaAtendimento1 from '@/assets/imagens/atendimentos/patricia-atendimento-1.jpg'
import patriciaAtendimento2 from '@/assets/imagens/atendimentos/patricia-atendimento-2.jpg'
import patriciaAtendimento3 from '@/assets/imagens/atendimentos/patricia-atendimento-3.jpg'
import suzanaAtendimento1 from '@/assets/imagens/atendimentos/suzana-atendimento-1.jpg'
import suzanaAtendimento2 from '@/assets/imagens/atendimentos/suzana-atendimento-2.jpg'
import suzanaAtendimento3 from '@/assets/imagens/atendimentos/suzana-atendimento-3.jpg'
import virnaAtendimento1 from '@/assets/imagens/atendimentos/virna-atendimento-1.jpg'
import virnaAtendimento2 from '@/assets/imagens/atendimentos/virna-atendimento-2.jpg'
import virnaAtendimento3 from '@/assets/imagens/atendimentos/virna-atendimento-3.jpg'
import dayseAtendimento1 from '@/assets/imagens/atendimentos/dayse-atendimento-1.jpg'
import dayseAtendimento2 from '@/assets/imagens/atendimentos/dayse-atendimento-2.jpg'
import dayseAtendimento3 from '@/assets/imagens/atendimentos/dayse-atendimento-3.jpg'

const { t } = useI18n()

const galeriaVisivel = ref(false)
const imagensGaleria = ref<string[]>([])
const tituloGaleria = ref('')
const imagemInicial = ref(0)

const imagensTrabalho = {
  sandra: [sandraAtendimento1, sandraAtendimento2, sandraAtendimento3],
  patricia: [patriciaAtendimento1, patriciaAtendimento2, patriciaAtendimento3],
  suzana: [suzanaAtendimento1, suzanaAtendimento2, suzanaAtendimento3],
  virna: [virnaAtendimento1, virnaAtendimento2, virnaAtendimento3],
  dayse: [dayseAtendimento1, dayseAtendimento2, dayseAtendimento3],
}

const imagensProfissionais = {
  pauloCesar: pauloCezarImg,
  sandra: sandraImg,
  patricia: patriciaImg,
  suzana: suzanaImg,
  virna: virnaImg,
  dayse: dayseImg,
  osmar: osmarImg,
  neusa: neusaImg,
  cristiane: cristianeImg,
}

// Função para mapear as imagens de trabalho corretamente
const getImagemTrabalho = (chave: string, index: number) => {
  return imagensTrabalho[chave as keyof typeof imagensTrabalho]?.[index - 1] || ''
}

// Função para retornar a quantidade de imagens por profissional
const getQuantidadeImagens = (chave: string) => {
  const quantidades: Record<string, number> = {
    sandra: 3,
    patricia: 3,
    suzana: 3,
    virna: 3,
    dayse: 3,
  }

  return quantidades[chave] || 0
}

// Função para abrir galeria de imagens
const abrirGaleriaTrabalho = (profissional: any, imagemClicada: number = 0) => {
  const quantidade = getQuantidadeImagens(profissional.chave)
  const imagens: string[] = []

  for (let i = 1; i <= quantidade; i++) {
    const imagem = getImagemTrabalho(profissional.chave, i)
    if (imagem) {
      imagens.push(imagem)
    }
  }

  imagensGaleria.value = imagens
  tituloGaleria.value = `${t(`atividades.equipeAtendimentos.profissionais.${profissional.chave}.nome`)} - Trabalho em Ação`
  imagemInicial.value = imagemClicada
  galeriaVisivel.value = true
}

// Dados dos profissionais organizados
const profissionais = [
  {
    chave: 'pauloCesar',
    imagem: 'pauloCesar',
    icone: 'pi-graduation-cap',
  },
  {
    chave: 'sandra',
    imagem: 'sandra',
    icone: 'pi-microphone',
  },
  {
    chave: 'psicologia',
    imagem: null,
    icone: 'pi-heart',
  },
  {
    chave: 'patricia',
    imagem: 'patricia',
    icone: 'pi-directions',
  },
  {
    chave: 'suzana',
    imagem: 'suzana',
    icone: 'pi-book',
  },
  {
    chave: 'terapiaOcupacional',
    imagem: null,
    icone: 'pi-wrench',
  },
  {
    chave: 'virna',
    imagem: 'virna',
    icone: 'pi-heart',
  },
  {
    chave: 'dayse',
    imagem: 'dayse',
    icone: 'pi-phone',
  },
  {
    chave: 'osmar',
    imagem: 'osmar',
    icone: 'pi-crown',
  },
  {
    chave: 'neusa',
    imagem: 'neusa',
    icone: 'pi-cog',
  },
  {
    chave: 'cristiane',
    imagem: 'cristiane',
    icone: 'pi-file-edit',
  },
  {
    chave: 'manutencao',
    imagem: null,
    icone: 'pi-wrench',
  },
]
</script>

<template>
  <div class="equipe-atendimentos">
    <!-- Header da Seção -->
    <section
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="1000"
      class="mb-5"
    >
      <div class="text-center">
        <h2 class="title font-weight-bold mb-3">
          {{ t('atividades.equipeAtendimentos.titulo') }}
        </h2>
        <p class="lead text-muted">
          {{ t('atividades.equipeAtendimentos.descricao') }}
        </p>
      </div>
    </section>

    <!-- Grid dos Profissionais -->
    <section class="profissionais-grid">
      <div
        v-for="(profissional, index) in profissionais"
        :key="profissional.chave"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0 }"
        :duration="600"
        :delay="index * 5"
        class="profissional-card-container"
      >
        <ProfissionalCardComponent
          :profissional="profissional"
          :imagens-profissionais="imagensProfissionais"
          :get-quantidade-imagens="getQuantidadeImagens"
          :get-imagem-trabalho="getImagemTrabalho"
          :abrir-galeria-trabalho="abrirGaleriaTrabalho"
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

.equipe-atendimentos {
  padding: 2rem 0;
}

// ===== GRID DOS PROFISSIONAIS =====
.profissionais-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

// ===== RESPONSIVIDADE =====
@media (max-width: 768px) {
  .profissionais-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .equipe-atendimentos {
    padding: 1rem 0;
  }
}
</style>
