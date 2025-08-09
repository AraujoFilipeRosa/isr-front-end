<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'
import albumImg1 from '@/assets/imagens/album-1.jpg'
import albumImg2 from '@/assets/imagens/album-2.jpg'
import albumImg3 from '@/assets/imagens/album-3.jpg'
import albumImg4 from '@/assets/imagens/album-4.jpg'
import albumImg5 from '@/assets/imagens/album-5.jpg'

const { t } = useI18n()

// Array com as imagens e informações da nova sede usando localização
const imagensNovaSede = [
  {
    src: albumImg1,
    alt: t('nossaHistoria.novaSede.imagens.novaSede'),
  },
  {
    src: albumImg2,
    alt: t('nossaHistoria.novaSede.imagens.construcao'),
  },
  {
    src: albumImg3,
    alt: t('nossaHistoria.novaSede.imagens.fundacao'),
  },
  {
    src: albumImg4,
    alt: t('nossaHistoria.novaSede.imagens.trabalhadores'),
  },
  {
    src: albumImg5,
    alt: t('nossaHistoria.novaSede.imagens.concluida'),
  },
]
</script>
<script lang="ts">
import { MotionDirective as motion } from '@vueuse/motion'

export default {
  directives: {
    motion: motion(),
  },
}
</script>
<template>
  <div id="nossa-historia" class="container my-5">
    <section class="row my-3 my-md-4 py-3 py-md-4 px-3 px-md-4 bg-light rounded shadow">
      <div class="col-md">
        <h1 class="title text-center mb-3 mb-md-4 fs-2 fs-md-1">{{ t('nossaHistoria.titulo') }}</h1>
        <p class="text-justify text-secondary mb-3">
          {{ t('nossaHistoria.historia.paragrafos.fundacao') }}
        </p>
        <p class="text-justify text-secondary mb-3">
          {{ t('nossaHistoria.historia.paragrafos.inicio') }}
        </p>
        <p class="text-justify text-secondary">
          {{ t('nossaHistoria.historia.paragrafos.atualmente') }}
        </p>
      </div>
    </section>

    <section
      v-motion
      :initial="{ opacity: 0, x: 0 }"
      :visible="{ opacity: 1, x: 0, scale: 1 }"
      :variants="{ custom: { scale: 2 } }"
      :delay="50"
      :duration="1200"
      class="row my-3 my-md-4 py-3 py-md-4"
    >
      <div class="col-md col-lg-6 mb-4 mb-lg-0">
        <div class="video-container">
          <iframe
            class="rounded-2 w-100"
            src="https://www.youtube.com/embed/0wbL6taCXu4?si=vRbab7Q42RZNnxsJ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="col-12 col-lg-6 d-flex flex-column justify-content-center">
        <h2 class="title mb-3 mb-md-4 font-weight-bold fs-3 fs-md-2">
          {{ t('nossaHistoria.video.titulo') }}
        </h2>
        <p class="text-muted text-justify mb-0">
          {{ t('nossaHistoria.video.descricao') }}
        </p>
      </div>
    </section>

    <section
      v-motion
      :initial="{ opacity: 0, y: 0 }"
      :visible="{ opacity: 1, y: 0, scale: 1 }"
      :variants="{ custom: { scale: 2 } }"
      :delay="50"
      :duration="1200"
      class="row my-3 my-md-4 py-3 py-md-4"
    >
      <div class="col-md">
        <h2 class="title text-center mb-3 mb-md-4 font-weight-bold fs-3 fs-md-2">
          {{ t('nossaHistoria.novaSede.titulo') }}
        </h2>
        <p class="text-muted text-center mb-4">
          {{ t('nossaHistoria.novaSede.descricao') }}
        </p>
        <Carousel
          :value="imagensNovaSede"
          :numVisible="1"
          :numScroll="1"
          :autoplayInterval="5000"
          :showNavigators="true"
          :showIndicators="true"
          circular
          class="custom-carousel nova-sede-carousel"
        >
          <template #item="slotProps">
            <div class="carousel-item-container">
              <Image
                :src="slotProps.data.src"
                :alt="slotProps.data.alt"
                width="100%"
                height="auto"
                preview
                :pt="{
                  root: { class: 'w-100 h-100' },
                  image: { class: 'w-100 h-100 object-fit-cover' },
                }"
              />
              <div class="carousel-caption">
                <h3 class="carousel-title">{{ slotProps.data.title }}</h3>
                <p class="carousel-description">{{ slotProps.data.description }}</p>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </section>
  </div>
</template>
<style scoped lang="scss">
@use '@/assets/base.scss' as *;

#nossa-historia {
  padding-top: $app-padding-top;
}

// Container responsivo
.container-fluid {
  max-width: 1200px;
  margin: 0 auto;
}

// Container do vídeo responsivo
.video-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; // Aspect ratio 16:9
  overflow: hidden;
  border-radius: 8px;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.nova-sede-carousel {
  max-width: 800px;
  margin: 0 auto;

  .carousel-item-container {
    height: 250px;
    background-color: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

    @media (min-width: 768px) {
      height: 350px;
    }

    .carousel-caption {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
      color: white;
      padding: 1rem 0.75rem 0.75rem;
      text-align: center;

      @media (min-width: 768px) {
        padding: 2rem 1.5rem 1.5rem;
      }

      .carousel-title {
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 0.25rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

        @media (min-width: 768px) {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
      }

      .carousel-description {
        font-size: 0.8rem;
        line-height: 1.3;
        margin-bottom: 0;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

        @media (min-width: 768px) {
          font-size: 0.95rem;
          line-height: 1.4;
        }
      }
    }
  }
}

.custom-carousel {
  .carousel-item-container {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

    .carousel-caption {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
      color: white;
      padding: 1rem 0.75rem 0.75rem;
      text-align: center;

      @media (min-width: 768px) {
        padding: 2rem 1.5rem 1.5rem;
      }

      .carousel-title {
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 0.25rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

        @media (min-width: 768px) {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
      }

      .carousel-description {
        font-size: 0.8rem;
        line-height: 1.3;
        margin-bottom: 0;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

        @media (min-width: 768px) {
          font-size: 0.95rem;
          line-height: 1.4;
        }
      }
    }
  }
}

// Estilos para os navegadores do carrossel
:deep(.p-carousel) {
  .p-carousel-indicators {
    .p-carousel-indicator {
      button {
        background-color: rgba(255, 255, 255, 0.5);
        border: 2px solid rgba(255, 255, 255, 0.8);

        &.p-highlight {
          background-color: white;
        }
      }
    }
  }

  .p-carousel-prev,
  .p-carousel-next {
    background-color: rgba(255, 255, 255, 0.9);
    border: none;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    color: #333;
    font-weight: bold;

    @media (min-width: 768px) {
      width: 40px;
      height: 40px;
    }

    &:hover {
      background-color: white;
      transform: scale(1.1);
    }
  }
}

// Ajustes responsivos para textos
@media (max-width: 767px) {
  .title {
    font-size: 1.5rem !important;
  }

  .text-justify {
    text-align: left !important;
  }

  .container-fluid {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
}

// Melhorias para dispositivos muito pequenos
@media (max-width: 575px) {
  .container-fluid {
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;
  }

  .carousel-item-container {
    height: 200px !important;
  }

  .carousel-caption {
    padding: 0.75rem 0.5rem 0.5rem !important;

    .carousel-title {
      font-size: 0.9rem !important;
    }

    .carousel-description {
      font-size: 0.75rem !important;
    }
  }
}
</style>
