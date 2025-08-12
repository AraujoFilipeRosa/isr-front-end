<script setup lang="ts">
import { Image } from 'primevue'

interface Certificacao {
  titulo: string
  descricao: string
  imagem: string
  pdf: string
}

interface Props {
  certificacao: Certificacao
  textoBotao: string
}

interface Emits {
  (e: 'abrirCertificado', pdfPath: string, titulo: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const abrirCertificado = (pdfPath: string, titulo: string) => {
  emit('abrirCertificado', pdfPath, titulo)
}
</script>

<template>
  <div class="card h-100 card-custom card-hover-strong certificacao-card">
    <div class="card-body text-center p-4 d-flex flex-column">
      <div class="certificacao-image-container mb-3 flex-shrink-0">
        <Image
          :src="certificacao.imagem"
          :alt="certificacao.titulo"
          class="certificacao-image"
          @click="abrirCertificado(certificacao.pdf, certificacao.titulo)"
        />
        <div class="overlay">
          <i class="pi pi-eye overlay-icon"></i>
        </div>
      </div>
      <h3 class="card-title h5 font-weight-bold mb-3">{{ certificacao.titulo }}</h3>
      <p class="card-text text-muted flex-grow-1 mb-4">
        {{ certificacao.descricao }}
      </p>
      <button
        @click="abrirCertificado(certificacao.pdf, certificacao.titulo)"
        class="btn btn-primary btn-sm"
      >
        <i class="pi pi-eye me-2"></i>
        {{ textoBotao }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

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
    display: block;
  }

  .overlay {
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
    border-radius: 12px;
  }

  .overlay-icon {
    font-size: 2rem;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  &:hover {
    .overlay {
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
