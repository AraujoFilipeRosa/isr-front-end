<script setup lang="ts">
import { ref } from 'vue'
import { MotionDirective as motion } from '@vueuse/motion'
import { useI18n } from '@/composables/useI18n'
import ImageGalleryComponent from '@/components/ImageGalleryComponent.vue'

// Importar todas as imagens necessárias
import pauloCezarImg from '@/assets/imagens/profissionais/paulo-cezar.jpg'
import sandraImg from '@/assets/imagens/profissionais/sandra.jpg'
import patriciaImg from '@/assets/imagens/profissionais/patricia.jpg'
import suzanaImg from '@/assets/imagens/profissionais/suzana.jpg'
import virnaImg from '@/assets/imagens/profissionais/virna.jpg'
import dayseImg from '@/assets/imagens/profissionais/dayse.jpg'
import osmarImg from '@/assets/imagens/profissionais/osmar.jpg'
import neusaImg from '@/assets/imagens/profissionais/neusa.jpg'
import cristianeImg from '@/assets/imagens/profissionais/cristiane.jpg'

// Importar imagens de trabalho
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

// Estado para galeria de imagens
const galeriaVisivel = ref(false)
const imagensGaleria = ref<string[]>([])
const tituloGaleria = ref('')
const imagemInicial = ref(0)

// Mapeamento de imagens de trabalho
const imagensTrabalho = {
  sandra: [sandraAtendimento1, sandraAtendimento2, sandraAtendimento3],
  patricia: [patriciaAtendimento1, patriciaAtendimento2, patriciaAtendimento3],
  suzana: [suzanaAtendimento1, suzanaAtendimento2, suzanaAtendimento3],
  virna: [virnaAtendimento1, virnaAtendimento2, virnaAtendimento3],
  dayse: [dayseAtendimento1, dayseAtendimento2, dayseAtendimento3],
}

// Mapeamento de imagens dos profissionais
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
    imagem: null, // Sem imagem da pessoa
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
    imagem: null, // Sem imagem da pessoa
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
                  :src="
                    imagensProfissionais[profissional.imagem as keyof typeof imagensProfissionais]
                  "
                  :alt="t(`atividades.equipeAtendimentos.profissionais.${profissional.chave}.nome`)"
                  class="profissional-photo"
                  loading="lazy"
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
                    :src="getImagemTrabalho(profissional.chave, imgIndex)"
                    :alt="`${t(`atividades.equipeAtendimentos.profissionais.${profissional.chave}.nome`)} trabalhando ${imgIndex}`"
                    class="trabalho-imagem"
                    loading="lazy"
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
