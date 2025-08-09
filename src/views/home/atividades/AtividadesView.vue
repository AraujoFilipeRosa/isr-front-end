<script setup lang="ts">
import { MotionDirective as motion } from '@vueuse/motion'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <div id="atividades-container" class="container my-5">
    <!-- Header Principal com Animação -->
    <section
      v-motion
      :initial="{ opacity: 0, y: 0 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="1000"
      class="row my-4 py-5 px-4 bg-custom-primary text-white rounded shadow-lg"
    >
      <div class="col-12 text-center">
        <i class="pi pi-sitemap display-1 mb-3" style="font-size: 3rem !important"></i>
        <h1 class="display-4 font-weight-bold mb-4">{{ t('atividades.titulo') }}</h1>
        <p class="lead text-center mx-auto" style="max-width: 800px">
          Conheça nossa equipe e as atividades desenvolvidas no Instituto Severa Romana
        </p>
      </div>
    </section>

    <!-- Organograma de Liderança - Fátima no topo -->
    <section
      v-motion
      :initial="{ opacity: 0, y: 0 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="1000"
      :delay="50"
      class="row my-5"
    >
      <div class="col-12">
        <div class="organization-chart">
          <!-- Coordenadora Principal -->
          <div class="coordinator-node">
            <div class="card border-0 shadow-lg coordinator-card">
              <div class="card-body text-center p-4">
                <div class="position-relative mb-3">
                  <img
                    :src="`/src/assets/imagens/atividades/fatima.jpg`"
                    :alt="t('atividades.coordenacao.fatima.nome')"
                    class="coordinator-photo rounded-circle"
                  />
                  <div class="coordinator-badge">
                    <i class="pi pi-crown"></i>
                  </div>
                </div>
                <h3 class="card-title h4 font-weight-bold mb-2">
                  {{ t('atividades.coordenacao.fatima.nome') }}
                </h3>
                <p class="text-primary font-weight-bold mb-3">
                  {{ t('atividades.coordenacao.fatima.cargo') }}
                </p>
                <p class="text-muted">
                  {{ t('atividades.coordenacao.fatima.descricao') }}
                </p>
              </div>
            </div>
          </div>

          <!-- Linha Conectora -->
          <div class="connector-line"></div>

          <!-- Divisões das Áreas -->
          <div class="divisions-container">
            <router-link to="/atividades/equipe-atendimentos" class="division-link">
              <div class="division-box">
                <div class="division-header">
                  <i class="pi pi-users"></i>
                  <span>{{ t('atividades.equipeAtendimentos.titulo') }}</span>
                </div>
              </div>
            </router-link>
            <router-link to="/atividades/atividades-grupos" class="division-link">
              <div class="division-box">
                <div class="division-header">
                  <i class="pi pi-calendar"></i>
                  <span>{{ t('atividades.atividadesGrupos.titulo') }}</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Galeria Fátima em Ação - Serviço Social -->
    <section
      v-motion
      :initial="{ opacity: 0, y: 0 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="1000"
      :delay="50"
      class="row my-5"
    >
      <div class="col-12">
        <div class="text-center mb-4">
          <h3 class="h4 font-weight-bold text-primary mb-2">Serviço Social em Ação</h3>
          <p class="text-muted">Acompanhe o trabalho da nossa coordenadora junto às famílias</p>
        </div>

        <!-- Grid das 3 Imagens -->
        <div class="fatima-gallery">
          <div
            v-for="imagemIndex in 3"
            :key="`fatima-acao-${imagemIndex}`"
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :visible="{ opacity: 1, scale: 1 }"
            :duration="600"
            :delay="150 + imagemIndex * 100"
            class="gallery-item"
          >
            <div>
              <Image
                :src="`/src/assets/imagens/atividades/fatima-atendimento-${imagemIndex}.jpg`"
                :alt="`Fátima em atendimento ${imagemIndex}`"
                class="gallery-image"
                width="100%"
                height="auto"
                loading="lazy"
                preview
                :pt="{
                  root: { class: 'w-100 h-100' },
                  image: { class: 'w-100 h-100 object-fit-cover' },
                }"
              />
              <div class="image-overlay">
                <i class="pi pi-eye"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Container das Sub-páginas -->
    <section class="row">
      <div class="col-12">
        <router-view />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

#atividades-container {
  padding-top: $app-padding-top;
}

// Header colorido
.bg-custom-primary {
  background: $nav-font-color;
}

// ===== ORGANOGRAMA INOVADOR =====
.organization-chart {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 2rem 0;
}

.coordinator-node {
  position: relative;
  z-index: 3;

  .coordinator-card {
    max-width: 400px;
    transition: all 0.3s ease;
    border-radius: 20px;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
    }
  }
}

.coordinator-photo {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
}

.coordinator-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #ffd700, #ff8c00);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  i {
    color: white;
    font-size: 1.2rem;
  }
}

.connector-line {
  width: 4px;
  height: 60px;
  background: linear-gradient(180deg, $nav-font-color, $nav-font-color-light);
  margin: 1rem 0;
  border-radius: 2px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 12px solid $nav-font-color-light;
  }
}

.divisions-container {
  display: flex;
  gap: 3rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
}

.division-link {
  text-decoration: none;
  color: inherit;
}

.division-box {
  background: white;
  border-radius: 15px;
  padding: 1.5rem 2rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(44, 109, 173, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: $nav-font-color-light;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }

  .division-header {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: $nav-font-color;
    font-weight: 600;
    font-size: 1.1rem;

    i {
      font-size: 1.5rem;
      color: $nav-font-color-light;
    }
  }
}

// ===== GALERIA FÁTIMA EM AÇÃO =====
.fatima-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.gallery-item {
  display: flex;
  justify-content: center;
}

// Estilos de galeria agora estão centralizados em utilities.scss

// ===== RESPONSIVIDADE =====
@media (max-width: 768px) {
  .coordinator-photo {
    width: 100px;
    height: 100px;
  }

  .coordinator-badge {
    width: 35px;
    height: 35px;
    top: -5px;
    right: -5px;

    i {
      font-size: 1rem;
    }
  }
}

@media (max-width: 576px) {
  .divisions-container {
    .division-box {
      padding: 1rem 1.5rem;

      .division-header {
        font-size: 1rem;

        i {
          font-size: 1.2rem;
        }
      }
    }
  }
}

// Ajustes gerais
.card {
  border-radius: 15px;
}

.rounded {
  border-radius: 15px !important;
}
</style>
