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

// Função para mapear as imagens de trabalho corretamente
const getImagemTrabalho = (chave: string, index: number) => {
  const mapeamento: Record<string, string> = {
    sandra: `sandra-atendimento-${index}.jpg`,
    patricia: `patricia-atendimento-${index}.jpg`,
    suzana: `suzana-atendimento-${index}.jpg`,
    virna: `virna-atendimento-${index}.jpg`,
    dayse: `dayse-atendimento-${index}.jpg`,
  }

  return mapeamento[chave] || `${chave}-trabalho-${index}.jpg`
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
    imagens.push(`/src/assets/imagens/atividades/${getImagemTrabalho(profissional.chave, i)}`)
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
    imagem: 'paulo-cezar.jpg',
    icone: 'pi-graduation-cap',
  },
  {
    chave: 'sandra',
    imagem: 'sandra.jpg',
    icone: 'pi-microphone',
  },
  {
    chave: 'psicologia',
    imagem: null, // Sem imagem da pessoa
    icone: 'pi-heart',
  },
  {
    chave: 'patricia',
    imagem: 'patricia.jpg',
    icone: 'pi-directions',
  },
  {
    chave: 'suzana',
    imagem: 'suzana.jpg',
    icone: 'pi-book',
  },
  {
    chave: 'terapiaOcupacional',
    imagem: null, // Sem imagem da pessoa
    icone: 'pi-wrench',
  },
  {
    chave: 'virna',
    imagem: 'virna.jpg',
    icone: 'pi-heart',
  },
  {
    chave: 'dayse',
    imagem: 'dayse.jpg',
    icone: 'pi-phone',
  },
  {
    chave: 'osmar',
    imagem: 'osmar.jpg',
    icone: 'pi-crown',
  },
  {
    chave: 'neusa',
    imagem: 'neusa.jpg',
    icone: 'pi-cog',
  },
  {
    chave: 'cristiane',
    imagem: 'cristiane.jpg',
    icone: 'pi-file-edit',
  },
  {
    chave: 'manutencao',
    imagem: null, // Sem imagem da pessoa
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
        <h2 class="display-5 font-weight-bold text-primary mb-3">
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
        :delay="index * 100"
        class="profissional-card-container"
      >
        <div class="card border-0 shadow profissional-card h-100">
          <div class="card-body p-4">
            <!-- Header do Card com Foto/Ícone -->
            <div class="profissional-header mb-3">
              <div class="photo-container">
                <img
                  v-if="profissional.imagem"
                  :src="`/src/assets/imagens/atividades/${profissional.imagem}`"
                  :alt="t(`atividades.equipeAtendimentos.profissionais.${profissional.chave}.nome`)"
                  class="profissional-photo"
                />
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
                {{
                  t(`atividades.equipeAtendimentos.profissionais.${profissional.chave}.descricao`)
                }}
              </p>
            </div>

            <!-- Galeria de Imagens do Trabalho (se tiver) -->
            <div v-if="getQuantidadeImagens(profissional.chave) > 0" class="trabalho-galeria">
              <h6 class="font-weight-bold mb-3 text-primary">Trabalho em Ação</h6>
              <div class="imagens-grid">
                <div
                  v-for="imgIndex in getQuantidadeImagens(profissional.chave)"
                  :key="`${profissional.chave}-trabalho-${imgIndex}`"
                  class="trabalho-imagem-container"
                  @click="abrirGaleriaTrabalho(profissional, imgIndex - 1)"
                >
                  <img
                    :src="`/src/assets/imagens/atividades/${getImagemTrabalho(profissional.chave, imgIndex)}`"
                    :alt="`${t(`atividades.equipeAtendimentos.profissionais.${profissional.chave}.nome`)} trabalhando ${imgIndex}`"
                    class="trabalho-imagem"
                  />
                  <div class="imagem-overlay">
                    <i class="pi pi-eye"></i>
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
  background: linear-gradient(135deg, $nav-font-color-light, $nav-font-color);
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
  background: linear-gradient(135deg, $nav-font-color, $nav-font-color-light);
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
  .profissionais-grid {
    grid-template-columns: 1fr;
  }

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
  .equipe-atendimentos {
    padding: 1rem 0;
  }

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
