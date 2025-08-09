<script setup lang="ts">
import { ref } from 'vue'
import { MotionDirective as motion } from '@vueuse/motion'
import { useI18n } from '@/composables/useI18n'
import ImageGalleryComponent from '@/components/ImageGalleryComponent.vue'

const { t } = useI18n()

// Estado para galeria de imagens
const galeriaVisivel = ref(false)
const imagensGaleria = ref<string[]>([])
const tituloGaleria = ref('')
const imagemInicial = ref(0)

// Função para mapear as imagens das atividades corretamente
const getImagemAtividade = (chave: string, index: number) => {
  const mapeamento: Record<string, string> = {
    rumoCerto: `atividade-externa-${index}.jpg`,
    palestras: `palestras-roda-conversa-${index}.jpg`,
    encontros: `encontro-integrado-${index}.jpg`,
    oficinas: `oficinas-${index}.jpg`,
    reunioes: 'reuniao-equipe.jpg', // Só tem 1 imagem
  }

  return mapeamento[chave] || `${chave}-${index}.jpg`
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
    imagens.push(`/src/assets/imagens/atividades/${getImagemAtividade(atividade.chave, i)}`)
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
    <section
      v-motion
      :initial="{ opacity: 0, y: 0 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="1000"
      class="mb-5"
    >
      <div class="text-center">
        <h2 class="display-5 font-weight-bold text-primary mb-3">
          {{ t('atividades.atividadesGrupos.titulo') }}
        </h2>
        <p class="lead text-muted">
          {{ t('atividades.atividadesGrupos.descricao') }}
        </p>
      </div>
    </section>

    <!-- Grid das Atividades -->
    <section class="atividades-grid">
      <div
        v-for="(atividade, index) in atividades"
        :key="atividade.chave"
        v-motion
        :initial="{ opacity: 0, y: 0 }"
        :visible="{ opacity: 1, y: 0 }"
        :duration="600"
        :delay="index * 150"
        class="atividade-card-container"
      >
        <div class="card border-0 shadow atividade-card h-100">
          <div class="card-body p-4 d-flex flex-column">
            <!-- Header da Atividade -->
            <div class="atividade-header mb-4 text-center">
              <div class="atividade-icon-container mb-3">
                <div class="atividade-icon" :style="{ backgroundColor: atividade.cor }">
                  <i :class="`pi ${atividade.icone}`"></i>
                </div>
              </div>
              <h3 class="h4 font-weight-bold mb-2">
                {{ t(`atividades.atividadesGrupos.atividades.${atividade.chave}.titulo`) }}
              </h3>
            </div>

            <!-- Descrição da Atividade -->
            <div class="atividade-descricao mb-4">
              <p class="text-muted">
                {{ t(`atividades.atividadesGrupos.atividades.${atividade.chave}.descricao`) }}
              </p>
            </div>

            <!-- Galeria de Imagens da Atividade -->
            <div class="atividade-galeria flex-grow-1 d-flex flex-column">
              <h6 class="font-weight-bold mb-3 text-primary">Galeria de Fotos</h6>
              <div
                class="imagens-grid"
                :class="{
                  'grid-single': getQuantidadeImagensAtividade(atividade.chave) === 1,
                  'grid-multiple': getQuantidadeImagensAtividade(atividade.chave) > 1,
                }"
              >
                <div
                  v-for="imgIndex in getQuantidadeImagensAtividade(atividade.chave)"
                  :key="`${atividade.chave}-${imgIndex}`"
                  v-motion
                  :initial="{ opacity: 0, scale: 0.9 }"
                  :visible="{ opacity: 1, scale: 1 }"
                  :duration="400"
                  :delay="50 + imgIndex * 100"
                  class="atividade-imagem-container"
                  @click="abrirGaleria(atividade, imgIndex - 1)"
                >
                  <img
                    :src="`/src/assets/imagens/atividades/${getImagemAtividade(atividade.chave, imgIndex)}`"
                    :alt="`${t(`atividades.atividadesGrupos.atividades.${atividade.chave}.titulo`)} ${imgIndex}`"
                    class="atividade-imagem"
                    loading="lazy"
                  />
                  <div class="imagem-overlay">
                    <i class="pi pi-search-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Galeria de Imagens Modal -->
    <ImageGalleryComponent
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

// ===== CARDS DAS ATIVIDADES =====
.atividade-card {
  transition: all 0.3s ease;
  border-radius: 20px;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
  }
}

.atividade-header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 1rem;
}

.atividade-icon-container {
  display: flex;
  justify-content: center;
}

.atividade-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  i {
    color: white;
    font-size: 2rem;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
  }
}

.atividade-descricao {
  line-height: 1.6;
  font-size: 0.95rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 1rem;
}

// ===== GALERIA DE ATIVIDADES =====
.atividade-galeria {
  padding-top: 1rem;

  h6 {
    flex-shrink: 0; // Evita que o título encolha
  }
}

.imagens-grid {
  display: grid;
  gap: 0.4rem;
  flex-grow: 1; // Ocupa todo o espaço restante
  min-height: 120px; // Altura mínima mantida

  &.grid-single {
    grid-template-columns: 1fr;
    max-width: 400px;
    min-height: 200px;
    margin: 0 auto;
    align-content: center; // Centraliza o conteúdo verticalmente

    @media (max-width: 768px) {
      max-width: 350px;
      min-height: 180px;
    }

    @media (max-width: 576px) {
      max-width: 300px;
      min-height: 150px;
    }

    .atividade-imagem-container {
      border-radius: 12px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      aspect-ratio: 16/9; // Formato mais amplo e elegante para foto de equipe

      &:hover {
        transform: scale(1.03);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
      }
    }
  }

  &.grid-multiple {
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'main img2 img3'
      'main img4 img5';

    @media (max-width: 768px) {
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        'main img2'
        'main img3';
    }

    @media (max-width: 576px) {
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        'main img2'
        'main img3';
    }
  }
}

.atividade-imagem-container {
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  // Layout mosaico específico
  &:nth-child(1) {
    grid-area: main;
  }

  &:nth-child(2) {
    grid-area: img2;
  }

  &:nth-child(3) {
    grid-area: img3;
  }

  &:nth-child(4) {
    grid-area: img4;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &:nth-child(5) {
    grid-area: img5;

    @media (max-width: 768px) {
      display: none;
    }
  }

  // Esconder imagens extras no mosaico
  &:nth-child(n + 6) {
    display: none;
  }

  &:hover {
    transform: scale(1.02);
    z-index: 2;

    .atividade-imagem {
      transform: scale(1.08);
    }

    .imagem-overlay {
      opacity: 1;
    }
  }
}

// Contador "+X" na última imagem visível quando há mais fotos
.atividade-imagem-container:nth-child(5) {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &::after {
    content: '+1';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 0.9rem;
    font-weight: bold;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s ease;

    @media (max-width: 576px) {
      font-size: 0.8rem;
    }
  }

  &:hover {
    &::before,
    &::after {
      opacity: 1;
    }
  }
}

// Para atividades com exatamente 6 imagens, mostra "+1"
.atividade-imagem-container:nth-child(5)::after {
  content: '+1';
}

.atividade-imagem {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.imagem-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(44, 109, 173, 0.8), rgba(92, 159, 226, 0.7));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  i {
    color: white;
    font-size: 1rem;
    animation: pulse 2s infinite;

    @media (max-width: 576px) {
      font-size: 0.8rem;
    }
  }
}

// Animação pulse agora está centralizada em utilities.scss

// ===== CASOS ESPECIAIS =====
// Reunião de equipe já é tratada pela classe .grid-single acima

// ===== RESPONSIVIDADE =====
@media (max-width: 768px) {
  .atividades-grid {
    grid-template-columns: 1fr;
  }

  .atividade-icon {
    width: 70px;
    height: 70px;

    i {
      font-size: 1.8rem;
    }
  }
}

@media (max-width: 576px) {
  .atividades-grupos {
    padding: 1rem 0;
  }

  .atividade-icon {
    width: 60px;
    height: 60px;

    i {
      font-size: 1.5rem;
    }
  }

  .atividade-descricao {
    font-size: 0.9rem;
  }

  .imagens-grid.grid-multiple {
    grid-template-columns: 1fr;
  }
}

// ===== ANIMAÇÕES EXTRAS =====
.atividade-card {
  &:nth-child(odd) {
    .atividade-icon {
      animation: float 3s ease-in-out infinite;
    }
  }

  &:nth-child(even) {
    .atividade-icon {
      animation: float 3s ease-in-out infinite reverse;
    }
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
