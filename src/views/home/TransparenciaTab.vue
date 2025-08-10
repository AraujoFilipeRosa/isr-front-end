<script setup lang="ts">
import { ref } from 'vue'
import { MotionDirective as motion } from '@vueuse/motion'
import { Image } from 'primevue'
import { useI18n } from '@/composables/useI18n'
import CallToActionComponent from '@/components/CallToActionComponent.vue'
import PdfViewerComponent from '@/components/PdfViewerComponent.vue'
import HeaderSectionComponent from '@/components/HeaderSectionComponent.vue'

import cmdaRio from '@/assets/certificacoes/imagens/cmdca-rio.png'
import cebasAssistenciaSocial from '@/assets/certificacoes/imagens/cebas-assistencia-social.png'
import cmasRio from '@/assets/certificacoes/imagens/cmas-rio.png'

const { t } = useI18n()

// Estado do visualizador PDF
const pdfViewerVisible = ref(false)
const currentPdfPath = ref('')
const currentPdfTitle = ref('')

// Dados das certificações usando localização
const certificacoes = [
  {
    titulo: t('transparencia.certificacoes.itens.cmdca.titulo'),
    descricao: t('transparencia.certificacoes.itens.cmdca.descricao'),
    imagem: cmdaRio,
    pdf: '/certificacoes/CMDCA.pdf',
  },
  {
    titulo: t('transparencia.certificacoes.itens.cebas.titulo'),
    descricao: t('transparencia.certificacoes.itens.cebas.descricao'),
    imagem: cebasAssistenciaSocial,
    pdf: '/certificacoes/CEBAS.pdf',
  },
  {
    titulo: t('transparencia.certificacoes.itens.cmas.titulo'),
    descricao: t('transparencia.certificacoes.itens.cmas.descricao'),
    imagem: cmasRio,
    pdf: '/certificacoes/CMAS.pdf',
  },
]

const abrirCertificado = (pdfPath: string, titulo: string) => {
  currentPdfPath.value = pdfPath
  currentPdfTitle.value = titulo
  pdfViewerVisible.value = true
}
</script>

<template>
  <div id="transparencia" class="container my-5 page-container">
    <!-- Header Principal -->
    <HeaderSectionComponent
      icon="pi-shield"
      :title="t('transparencia.titulo')"
      :description="t('transparencia.descricao')"
      :duration="1000"
    />

    <!-- Certificações -->
    <section
      v-motion
      :initial="{ opacity: 0, y: 0 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="1000"
      :delay="400"
      class="row my-5"
    >
      <div class="col-12 text-center mb-5">
        <h2 class="title font-weight-bold">{{ t('transparencia.certificacoes.titulo') }}</h2>
        <p class="text-muted">{{ t('transparencia.certificacoes.descricao') }}</p>
        <p class="text-info">
          <i class="pi pi-info-circle me-2"></i>
          {{ t('transparencia.certificacoes.instrucao') }}
        </p>
      </div>

      <div v-for="(cert, index) in certificacoes" :key="index" class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100 card-custom card-hover-strong certificacao-card">
          <div class="card-body text-center p-4 d-flex flex-column">
            <div class="certificacao-image-container mb-3 flex-shrink-0">
              <Image
                :src="cert.imagem"
                :alt="cert.titulo"
                class="certificacao-image"
                @click="abrirCertificado(cert.pdf, cert.titulo)"
              />
            </div>
            <h3 class="card-title h5 font-weight-bold mb-3">{{ cert.titulo }}</h3>
            <p class="card-text text-muted flex-grow-1 mb-4">
              {{ cert.descricao }}
            </p>
            <button @click="abrirCertificado(cert.pdf, cert.titulo)" class="btn btn-primary btn-sm">
              <i class="pi pi-eye me-2"></i>
              {{ t('transparencia.certificacoes.botao') }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Transparência Financeira -->
    <section
      v-motion
      :initial="{ opacity: 0, y: 0 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="1000"
      :delay="600"
      class="row my-5"
    >
      <div class="col-12 text-center mb-5">
        <h2 class="title font-weight-bold">{{ t('transparencia.financeira.titulo') }}</h2>
        <p class="text-muted">{{ t('transparencia.financeira.descricao') }}</p>
      </div>

      <div class="col-lg-6 col-md-8 mx-auto">
        <div class="card h-100 card-custom card-hover-strong">
          <div class="card-body text-center p-4">
            <div class="mb-4">
              <i class="pi pi-chart-line text-primary" style="font-size: 3rem"></i>
            </div>
            <h3 class="card-title h4 font-weight-bold mb-3">
              {{ t('transparencia.financeira.portal.titulo') }}
            </h3>
            <p class="card-text text-muted mb-4">
              {{ t('transparencia.financeira.portal.descricao') }}
            </p>
            <a
              href="https://etransparente.org/oscs/instituto-severa-romana/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary btn-lg"
            >
              <i class="pi pi-external-link me-2"></i>
              {{ t('transparencia.financeira.portal.botao') }}
            </a>
            <p class="text-muted mt-3 small">
              <i class="pi pi-info-circle me-1"></i>
              {{ t('transparencia.financeira.portal.aviso') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <CallToActionComponent
      :title="t('transparencia.callToAction.titulo')"
      :description="t('transparencia.callToAction.descricao')"
      :primary-button-text="t('transparencia.callToAction.botaoPrimario')"
      :secondary-button-text="t('transparencia.callToAction.botaoSecundario')"
      primary-route="como-ajudar"
      secondary-route="sobre"
    />

    <!-- PDF Viewer Component -->
    <PdfViewerComponent
      v-model="pdfViewerVisible"
      :titulo="currentPdfTitle"
      :pdf-path="currentPdfPath"
    />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

// Estilos globais agora estão em utilities.scss

// Estilos específicos para as certificações
.certificacao-card {
  .certificacao-image-container {
    position: relative;
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    }
  }

  .certificacao-image {
    width: 100%;
    height: auto;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      filter: brightness(1.1);
    }
  }

  &:hover {
    .certificacao-image-container {
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          135deg,
          rgba($nav-font-color, 0.8) 0%,
          rgba($nav-font-color-light, 0.8) 100%
        );
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
      }
    }

    .certificacao-image-container:hover::after {
      opacity: 1;
    }
  }
}

// Responsividade específica
@media (max-width: 768px) {
  .certificacao-image-container {
    max-width: 150px !important;
  }
}
</style>
