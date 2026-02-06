<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

interface Profissional {
  chave: string
  imagem: string | null
  icone: string
}

interface Props {
  profissional: Profissional
  imagensProfissionais: Record<string, string>
  obterQuantidadeImagens: (chave: string) => number
  obterImagemTrabalho: (chave: string, indice: number) => string
  abrirGaleriaTrabalho: (profissional: Profissional, imagemClicada: number) => void
}

const props = defineProps<Props>()
const { t } = useI18n()
</script>

<template>
  <div class="card border-0 shadow profissional-card h-100">
    <div class="card-body p-4">
      <!-- Header do Card com Foto/Ícone -->
      <div class="profissional-header mb-3">
        <div class="photo-container">
          <img v-if="profissional.imagem"
            :src="imagensProfissionais[profissional.imagem as keyof typeof imagensProfissionais]"
            :alt="t(`atividades.equipeAtendimentos.profissionais.${profissional.chave}.nome`)"
            class="profissional-photo" loading="lazy" />
          <div v-else class="default-avatar">
            <i :class="`pi ${profissional.icone}`"></i>
          </div>
          <div class="profissional-badge">
            <i :class="`pi ${profissional.icone}`"></i>
          </div>
        </div>
        <div class="profissional-info">
          <h3 class="h5 font-weight-bold mb-1">
            {{ t(`atividades.equipeAtendimentos.profissionais.${profissional.chave}.nome`) }}
          </h3>
          <p class="text-primary font-weight-semibold mb-0">
            {{ t(`atividades.equipeAtendimentos.profissionais.${profissional.chave}.cargo`) }}
          </p>
        </div>
      </div>

      <!-- Descrição do Trabalho -->
      <div class="profissional-descricao mb-4">
        <p class="text-muted">
          {{ t(`atividades.equipeAtendimentos.profissionais.${profissional.chave}.descricao`) }}
        </p>
      </div>

      <!-- Galeria de Imagens do Trabalho (se tiver) -->
      <div v-if="obterQuantidadeImagens(profissional.chave) > 0" class="trabalho-galeria">
        <h6 class="font-weight-bold mb-3 text-primary">
          {{ t('componentes.profissionalCard.trabalhoAcao') }}
        </h6>
        <div class="imagens-grid">
          <div v-for="imgIndex in obterQuantidadeImagens(profissional.chave)"
            :key="`${profissional.chave}-trabalho-${imgIndex}`" class="trabalho-imagem-container"
            @click="abrirGaleriaTrabalho(profissional, imgIndex - 1)">
            <img :src="obterImagemTrabalho(profissional.chave, imgIndex)"
              :alt="`${t(`atividades.equipeAtendimentos.profissionais.${profissional.chave}.nome`)} trabalhando ${imgIndex}`"
              class="trabalho-imagem" loading="lazy" />
            <div class="imagem-overlay">
              <i class="pi pi-eye"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

// ===== CARDS DOS PROFISSIONAIS =====
.profissional-card {
  transition: all 0.3s ease;
  border-radius: 20px;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
  }
}

.profissional-header {
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 576px) {
    flex-direction: column;
    text-align: center;
    gap: 0.8rem;
  }
}

.photo-container {
  position: relative;
  flex-shrink: 0;
}

.profissional-photo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

.default-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(318deg, $nav-font-color-light, $nav-font-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid white;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);

  i {
    color: white;
    font-size: 2rem;
  }
}

.profissional-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 32px;
  height: 32px;
  background: linear-gradient(318deg, $nav-font-color, $nav-font-color-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid white;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);

  i {
    color: white;
    font-size: 0.9rem;
  }
}

.profissional-info {
  flex: 1;
  min-width: 0;
}

.profissional-descricao {
  line-height: 1.6;
  font-size: 0.95rem;
}

// ===== GALERIA DE TRABALHO =====
.trabalho-galeria {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 1rem;
}

.imagens-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.6rem;
  }
}

.trabalho-imagem-container {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  aspect-ratio: 1;
  cursor: pointer;

  &:hover {
    .trabalho-imagem {
      transform: scale(1.1);
    }

    .imagem-overlay {
      opacity: 1;
    }
  }
}

.trabalho-imagem {
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
  background: rgba(44, 109, 173, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  i {
    color: white;
    font-size: 1.2rem;
  }
}

// ===== RESPONSIVIDADE =====
@media (max-width: 768px) {

  .profissional-photo,
  .default-avatar {
    width: 70px;
    height: 70px;
  }

  .profissional-badge {
    width: 28px;
    height: 28px;
    top: -6px;
    right: -6px;

    i {
      font-size: 0.8rem;
    }
  }
}

@media (max-width: 576px) {

  .profissional-photo,
  .default-avatar {
    width: 60px;
    height: 60px;
  }

  .profissional-badge {
    width: 24px;
    height: 24px;
    top: -4px;
    right: -4px;

    i {
      font-size: 0.7rem;
    }
  }

  .profissional-descricao {
    font-size: 0.9rem;
  }
}
</style>
