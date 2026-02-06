<script setup lang="ts">
import { MotionDirective as motion } from '@vueuse/motion'
import { useI18n } from '@/composables/useI18n'

interface Atividade {
  chave: string
  icone: string
  cor: string
}

interface Props {
  atividade: Atividade
  indice: number
  obterImagemAtividade: (chave: string, indice: number) => string
  obterQuantidadeImagensAtividade: (chave: string) => number
  abrirGaleria: (atividade: Atividade, imagemClicada: number) => void
}

const props = defineProps<Props>()
const { t } = useI18n()
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 0 }"
    :visible="{ opacity: 1, y: 0 }"
    :duration="600"
    :delay="indice * 50"
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
          <h6 class="font-weight-bold mb-3 text-primary">
            {{ t('componentes.atividadeCard.galeriaFotos') }}
          </h6>
          <div
            class="imagens-grid"
            :class="{
              'grid-single': obterQuantidadeImagensAtividade(atividade.chave) === 1,
              'grid-multiple': obterQuantidadeImagensAtividade(atividade.chave) > 1,
            }"
          >
            <div
              v-for="imgIndex in obterQuantidadeImagensAtividade(atividade.chave)"
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
                :src="obterImagemAtividade(atividade.chave, imgIndex)"
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
</template>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

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

.atividade-galeria {
  padding-top: 1rem;

  h6 {
    flex-shrink: 0;
  }
}

.imagens-grid {
  display: grid;
  gap: 0.4rem;
  flex-grow: 1;
  min-height: 120px;

  &.grid-single {
    grid-template-columns: 1fr;
    max-width: 400px;
    min-height: 200px;
    margin: 0 auto;
    align-content: center;

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
      aspect-ratio: 16/9;
      min-height: 200px;

      @media (max-width: 768px) {
        min-height: 180px;
      }

      @media (max-width: 576px) {
        min-height: 150px;
      }

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
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;

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

.atividade-imagem-container:nth-child(5)::after {
  content: '+1';
}

.atividade-imagem {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
  min-height: 100%;
  display: block;
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

@media (max-width: 768px) {
  .atividade-icon {
    width: 70px;
    height: 70px;

    i {
      font-size: 1.8rem;
    }
  }
}

@media (max-width: 576px) {
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
