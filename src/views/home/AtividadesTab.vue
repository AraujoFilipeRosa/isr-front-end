<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

import fatimaImg from '@/assets/imagens/profissionais/fatima.jpg'
import fatimaAtendimento1 from '@/assets/imagens/atendimentos/fatima-atendimento-1.jpg'
import fatimaAtendimento2 from '@/assets/imagens/atendimentos/fatima-atendimento-2.jpg'
import fatimaAtendimento3 from '@/assets/imagens/atendimentos/fatima-atendimento-3.jpg'

const { t } = useI18n()

const imagensFatima = {
  foto: fatimaImg,
  atendimento1: fatimaAtendimento1,
  atendimento2: fatimaAtendimento2,
  atendimento3: fatimaAtendimento3,
}

const equipeProtecaoEspecial = [
  {
    chave: 'pauloCesar',
    imagem: 'paulo-cezar.jpg',
    nome: t('atividades.protecaoEspecial.equipe.pauloCesar.nome'),
    cargo: t('atividades.protecaoEspecial.equipe.pauloCesar.cargo'),
    descricao: t('atividades.protecaoEspecial.equipe.pauloCesar.descricao'),
    icone: 'pi-graduation-cap',
  },
  {
    chave: 'osmar',
    imagem: 'osmar.jpg',
    nome: t('atividades.protecaoEspecial.equipe.osmar.nome'),
    cargo: t('atividades.protecaoEspecial.equipe.osmar.cargo'),
    descricao: t('atividades.protecaoEspecial.equipe.osmar.descricao'),
    icone: 'pi-crown',
  },
  {
    chave: 'sandra',
    imagem: 'sandra.jpg',
    nome: t('atividades.protecaoEspecial.equipe.sandra.nome'),
    cargo: t('atividades.protecaoEspecial.equipe.sandra.cargo'),
    descricao: t('atividades.protecaoEspecial.equipe.sandra.descricao'),
    icone: 'pi-microphone',
  },
  {
    chave: 'dayse',
    imagem: 'dayse.jpg',
    nome: t('atividades.protecaoEspecial.equipe.dayse.nome'),
    cargo: t('atividades.protecaoEspecial.equipe.dayse.cargo'),
    descricao: t('atividades.protecaoEspecial.equipe.dayse.descricao'),
    icone: 'pi-phone',
  },
  {
    chave: 'patricia',
    imagem: 'patricia.jpg',
    nome: t('atividades.protecaoEspecial.equipe.patricia.nome'),
    cargo: t('atividades.protecaoEspecial.equipe.patricia.cargo'),
    descricao: t('atividades.protecaoEspecial.equipe.patricia.descricao'),
    icone: 'pi-directions',
  },
  {
    chave: 'neusa',
    imagem: 'neusa.jpg',
    nome: t('atividades.protecaoEspecial.equipe.neusa.nome'),
    cargo: t('atividades.protecaoEspecial.equipe.neusa.cargo'),
    descricao: t('atividades.protecaoEspecial.equipe.neusa.descricao'),
    icone: 'pi-cog',
  },
  {
    chave: 'suzana',
    imagem: 'suzana.jpg',
    nome: t('atividades.protecaoEspecial.equipe.suzana.nome'),
    cargo: t('atividades.protecaoEspecial.equipe.suzana.cargo'),
    descricao: t('atividades.protecaoEspecial.equipe.suzana.descricao'),
    icone: 'pi-book',
  },
  {
    chave: 'cristiane',
    imagem: 'cristiane.jpg',
    nome: t('atividades.protecaoEspecial.equipe.cristiane.nome'),
    cargo: t('atividades.protecaoEspecial.equipe.cristiane.cargo'),
    descricao: t('atividades.protecaoEspecial.equipe.cristiane.descricao'),
    icone: 'pi-file-edit',
  },
  {
    chave: 'virna',
    imagem: 'virna.jpg',
    nome: t('atividades.protecaoEspecial.equipe.virna.nome'),
    cargo: t('atividades.protecaoEspecial.equipe.virna.cargo'),
    descricao: t('atividades.protecaoEspecial.equipe.virna.descricao'),
    icone: 'pi-heart',
  },
]

const tiposAtividades = [
  {
    nome: t('atividades.protecaoBasica.tipos.palestras'),
    icone: 'pi-megaphone',
    cor: '#3b82f6',
  },
  {
    nome: t('atividades.protecaoBasica.tipos.oficinas'),
    icone: 'pi-wrench',
    cor: '#10b981',
  },
  {
    nome: t('atividades.protecaoBasica.tipos.rodasConversa'),
    icone: 'pi-comments',
    cor: '#f59e0b',
  },
  {
    nome: t('atividades.protecaoBasica.tipos.reunioesEquipe'),
    icone: 'pi-users',
    cor: '#8b5cf6',
  },
]
</script>

<template>
  <div id="atividades" class="container-sm-fluid container-md-fluid container-lg mt-lg-5 mb-lg-5 page-container">
    <section v-motion :initial="{ opacity: 0, y: 0 }" :visible="{ opacity: 1, y: 0 }" :duration="1000"
      class="row my-4 py-5 px-4 bg-custom-primary text-white rounded shadow-lg">
      <div class="col-12 text-center">
        <i class="pi pi-sitemap display-1 mb-3" style="font-size: 3rem !important"></i>
        <h1 class="display-4 font-weight-bold mb-4">{{ t('atividades.titulo') }}</h1>
        <p class="lead text-center mx-auto" style="max-width: 800px">
          Conheça nossa equipe e as atividades desenvolvidas no Instituto Severa Romana
        </p>
      </div>
    </section>

    <section v-motion :initial="{ opacity: 0, y: 0 }" :visible="{ opacity: 1, y: 0 }" :duration="1000" :delay="50"
      class="row my-5">
      <div class="col-12">
        <div class="organization-chart">
          <div class="coordinator-node">
            <div class="card border-0 shadow-lg coordinator-card">
              <div class="card-body text-center p-4">
                <div class="position-relative mb-3">
                  <img :src="imagensFatima.foto" :alt="t('atividades.coordenacao.fatima.nome')"
                    class="coordinator-photo rounded-circle" />
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
            <div class="division-box">
              <div class="division-header">
                <i class="pi pi-users"></i>
                <span>{{ t('atividades.protecaoEspecial.titulo') }}</span>
              </div>
            </div>
            <div class="division-box">
              <div class="division-header">
                <i class="pi pi-calendar"></i>
                <span>{{ t('atividades.protecaoBasica.titulo') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Galeria Fátima em Ação - Serviço Social -->
    <section v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0 }" :duration="1000" :delay="50"
      class="row my-5">
      <div class="col-12">
        <div class="text-center mb-4">
          <h3 class="h4 font-weight-bold text-primary mb-2">Serviço Social em Ação</h3>
          <p class="text-muted">Acompanhe o trabalho da nossa coordenadora junto às famílias</p>
        </div>

        <div class="fatima-gallery">
          <div v-for="imagemIndex in 3" :key="`fatima-acao-${imagemIndex}`" v-motion
            :initial="{ opacity: 0, scale: 0.9 }" :visible="{ opacity: 1, scale: 1 }" :duration="600"
            :delay="150 + imagemIndex * 100" class="gallery-item">
            <div class="image-container">
              <Image :src="imagensFatima[`atendimento${imagemIndex}` as keyof typeof imagensFatima]"
                :alt="`Fátima em atendimento ${imagemIndex}`" class="gallery-image" width="100%" height="auto" preview
                :pt="{
                  root: { class: 'w-100 h-100' },
                  image: { class: 'w-100 h-100 object-fit-cover' },
                }" />
              <div class="image-overlay">
                <i class="pi pi-eye"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-motion :initial="{ opacity: 0, x: 0 }" :visible="{ opacity: 1, x: 0 }" :duration="1000" :delay="50"
      class="row my-5 py-5 bg-light rounded">
      <div class="col-12">
        <div class="text-center mb-5">
          <h2 class="title font-weight-bold mb-3">{{ t('atividades.protecaoEspecial.titulo') }}</h2>
          <p class="text-muted">{{ t('atividades.protecaoEspecial.descricao') }}</p>
        </div>

        <div class="team-organogram">
          <div class="main-connector-line"></div>

          <div class="team-grid">
            <div v-for="(membro, index) in equipeProtecaoEspecial" :key="membro.chave" v-motion
              :initial="{ opacity: 0, scale: 0.8 }" :visible="{ opacity: 1, scale: 1 }" :duration="600"
              :delay="50 + index * 100" class="team-node">
              <div class="member-connector-line"></div>

              <div class="card border-0 shadow team-member-card">
                <div class="card-body p-3 text-center">
                  <div class="position-relative mb-3">
                    <img :src="`/imagens/atividades/${membro.imagem}`" :alt="membro.nome"
                      class="member-photo rounded-circle" />
                    <div class="member-badge">
                      <i :class="`pi ${membro.icone}`"></i>
                    </div>
                  </div>
                  <h4 class="card-title h6 font-weight-bold mb-2">{{ membro.nome }}</h4>
                  <p class="text-primary font-weight-semibold mb-2 small">{{ membro.cargo }}</p>
                  <p class="card-text text-muted small">{{ membro.descricao }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-motion :initial="{ opacity: 0, x: 0 }" :visible="{ opacity: 1, x: 0 }" :duration="1000" :delay="50"
      class="row my-5 py-5 bg-light rounded">
      <div class="col-12">
        <div class="text-center mb-5">
          <h2 class="title font-weight-bold mb-3">
            {{ t('atividades.protecaoBasica.titulo') }}
          </h2>
          <p class="text-muted">{{ t('atividades.protecaoBasica.descricao') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

// #atividades {
//   padding-top: $app-padding-top;
// }

.bg-custom-primary {
  background: $heading-section-color;
}

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
  background: linear-gradient(318deg, #ffd700, #ff8c00);
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

.team-organogram {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
}

.main-connector-line {
  width: 4px;
  height: 80px;
  background: linear-gradient(180deg, $nav-font-color, $nav-font-color-light);
  margin: 0 auto 2rem;
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

  &::after {
    content: '';
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100vw - 4rem);
    max-width: 1000px;
    height: 4px;
    background: linear-gradient(90deg, transparent, $nav-font-color-light, transparent);
    border-radius: 2px;

    @media (max-width: 992px) {
      width: calc(100vw - 2rem);
    }
  }
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.team-node {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.member-connector-line {
  width: 4px;
  height: 60px;
  background: linear-gradient(180deg, $nav-font-color-light, $nav-font-color);
  border-radius: 2px;
  margin-bottom: 1rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 10px solid $nav-font-color;
  }
}

.team-member-card {
  transition: all 0.3s ease;
  border-radius: 15px;
  width: 100%;
  max-width: 280px;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15) !important;
  }
}

.member-photo {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
}

.member-badge {
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

.activity-type-card {
  transition: all 0.3s ease;
  border-radius: 15px;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15) !important;
  }
}

.activity-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);

  i {
    color: white;
    font-size: 2rem;
  }
}

.activity-mosaic {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 180px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 150px;
    gap: 0.8rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 200px;
    gap: 0.5rem;
  }
}

.mosaic-item {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;

  &.mosaic-item-1 {
    grid-column: span 2;
    grid-row: span 2;

    @media (max-width: 992px) {
      grid-column: span 2;
      grid-row: span 1;
    }

    @media (max-width: 768px) {
      grid-column: span 2;
      grid-row: span 1;
    }

    @media (max-width: 576px) {
      grid-column: span 1;
      grid-row: span 1;
    }
  }

  &.mosaic-item-3 {
    grid-row: span 2;

    @media (max-width: 992px) {
      grid-row: span 1;
    }
  }

  &.mosaic-item-7 {
    grid-column: span 2;

    @media (max-width: 768px) {
      grid-column: span 1;
    }
  }
}

.mosaic-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.mosaic-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(318deg, rgba(44, 109, 173, 0.8), rgba(92, 159, 226, 0.6));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;

  i {
    color: white;
    font-size: 2rem;
    transform: scale(0.5);
    transition: transform 0.3s ease;
  }
}

.mosaic-item:hover {
  .mosaic-image {
    transform: scale(1.1);
  }

  .mosaic-overlay {
    opacity: 1;

    i {
      transform: scale(1);
    }
  }
}

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

  .member-photo {
    width: 70px;
    height: 70px;
  }

  .member-badge {
    width: 28px;
    height: 28px;
    top: -6px;
    right: -6px;

    i {
      font-size: 0.8rem;
    }
  }

  .activity-icon {
    width: 60px;
    height: 60px;

    i {
      font-size: 1.5rem;
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

  .member-photo {
    width: 60px;
    height: 60px;
  }

  .member-badge {
    width: 24px;
    height: 24px;
    top: -4px;
    right: -4px;

    i {
      font-size: 0.7rem;
    }
  }

  .member-connector-line {
    height: 40px;
  }
}

.card {
  border-radius: 15px;
}

.rounded {
  border-radius: 15px !important;
}
</style>
