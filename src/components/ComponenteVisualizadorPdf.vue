<script setup lang="ts">
import { ref, computed } from 'vue'
import { Dialog } from 'primevue'
import VuePdfEmbed from 'vue-pdf-embed'
import { useI18n } from '@/composables/useI18n'

// Props
interface Props {
  titulo: string
  caminhoPdf: string
  modelValue: boolean
}

const props = defineProps<Props>()

// Emits
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const { t } = useI18n()

// Estado local
const carregando = ref(false)
const paginaAtual = ref(1)
const totalPaginas = ref(0)
const erro = ref<string | null>(null)
const escala = ref(2.5)
const chavePdf = ref(0) // Chave para forçar re-render do PDF

// Computed
const visivel = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value),
})

// Funções
const aoCarregar = (data: any) => {
  carregando.value = false
  totalPaginas.value = data.numPages
  erro.value = null

  // Força visibilidade após carregamento
  setTimeout(() => {
    const canvas = document.querySelector('.pdf-embed canvas')
    if (canvas) {
      ;(canvas as HTMLElement).style.visibility = 'visible'
      ;(canvas as HTMLElement).style.opacity = '1'
    }
  }, 100)
}

const aoErro = (error: any) => {
  carregando.value = false
  erro.value = t('componentes.visualizadorPdf.erroCarregar')
  console.error('Erro ao carregar PDF:', error)

  // Reset do componente em caso de erro
  chavePdf.value++
}

const aoMudarPagina = (novaPagina: number) => {
  if (novaPagina >= 1 && novaPagina <= totalPaginas.value) {
    paginaAtual.value = novaPagina
  }
}

const proximaPagina = () => {
  if (paginaAtual.value < totalPaginas.value) {
    paginaAtual.value++
  }
}

const paginaAnterior = () => {
  if (paginaAtual.value > 1) {
    paginaAtual.value--
  }
}

const aumentarZoom = () => {
  if (escala.value < 3) {
    escala.value = Math.round((escala.value + 0.25) * 100) / 100
    // Força re-render após mudança de zoom
    forcarReRender()
  }
}

const diminuirZoom = () => {
  if (escala.value > 0.5) {
    escala.value = Math.round((escala.value - 0.25) * 100) / 100
    // Força re-render após mudança de zoom
    forcarReRender()
  }
}

const forcarReRender = () => {
  // Força re-render do componente PDF
  chavePdf.value++

  // Pequeno delay para garantir que o DOM atualize
  setTimeout(() => {
    const container = document.querySelector('.pdf-scroll-container')
    if (container) {
      container.scrollTop = container.scrollTop + 1
      container.scrollTop = container.scrollTop - 1
    }
  }, 100)
}

const resetarZoom = () => {
  escala.value = 2.5
  forcarReRender()
}

const fecharDialog = () => {
  visivel.value = false
  // Reset estado quando fechar
  paginaAtual.value = 1
  erro.value = null
  escala.value = 2.5
}
</script>

<template>
  <Dialog
    v-model:visible="visivel"
    :header="titulo"
    modal
    maximizable
    :style="{ width: '95vw', height: '95vh' }"
    :contentStyle="{ height: 'calc(100% - 80px)', padding: '0' }"
    @hide="fecharDialog"
  >
    <template #header>
      <div class="flex align-items-center gap-2">
        <i class="pi pi-file-pdf text-red-500"></i>
        <span class="font-semibold">{{ titulo }}</span>
      </div>
    </template>

    <div class="pdf-viewer-container h-full flex flex-column">
      <!-- Controles de navegação e zoom -->
      <div
        v-if="!erro"
        class="pdf-controls-compact d-flex align-items-center justify-content-between p-2 bg-light border-bottom"
      >
        <!-- Controles de página compactos -->
        <div v-if="totalPaginas > 1" class="page-controls d-flex align-items-center">
          <button
            @click="paginaAnterior"
            :disabled="paginaAtual <= 1"
            class="control-btn"
            :title="t('componentes.visualizadorPdf.paginaAnterior')"
          >
            <i class="pi pi-chevron-left"></i>
          </button>

          <div class="page-info">
            <input
              v-model.number="paginaAtual"
              @change="aoMudarPagina(paginaAtual)"
              type="number"
              :min="1"
              :max="totalPaginas"
              class="page-input"
            />
            <span class="total-pages">/ {{ totalPaginas }}</span>
          </div>

          <button
            @click="proximaPagina"
            :disabled="paginaAtual >= totalPaginas"
            class="control-btn"
            :title="t('componentes.visualizadorPdf.proximaPagina')"
          >
            <i class="pi pi-chevron-right"></i>
          </button>
        </div>

        <!-- Info do documento quando página única -->
        <div v-else class="document-info">
          <i class="pi pi-file-pdf text-danger me-1"></i>
          <small class="text-muted">{{ t('componentes.visualizadorPdf.documentoPdf') }}</small>
        </div>

        <!-- Controles de zoom compactos -->
        <div class="zoom-controls d-flex align-items-center">
          <button
            @click="diminuirZoom"
            :disabled="escala <= 0.5"
            class="control-btn"
            :title="`${t('componentes.visualizadorPdf.diminuirZoom')} (${Math.round(escala * 100)}%)`"
          >
            <i class="pi pi-search-minus"></i>
          </button>

          <span
            class="zoom-display"
            @click="resetarZoom"
            :title="t('componentes.visualizadorPdf.cliqueResetarZoom')"
          >
            {{ Math.round(escala * 100) }}%
          </span>

          <button
            @click="aumentarZoom"
            :disabled="escala >= 3"
            class="control-btn"
            :title="`${t('componentes.visualizadorPdf.aumentarZoom')} (${Math.round(escala * 100)}%)`"
          >
            <i class="pi pi-search-plus"></i>
          </button>
        </div>
      </div>

      <!-- Loading -->
      <div v-if="carregando" class="flex-1 flex align-items-center justify-content-center">
        <div class="text-center">
          <i class="pi pi-spin pi-spinner text-primary" style="font-size: 2rem"></i>
          <p class="mt-3 text-muted">{{ t('componentes.visualizadorPdf.carregando') }}</p>
        </div>
      </div>

      <!-- Erro -->
      <div v-else-if="erro" class="flex-1 flex align-items-center justify-content-center">
        <div class="text-center">
          <i class="pi pi-exclamation-triangle text-orange-500" style="font-size: 3rem"></i>
          <h4 class="mt-3 text-danger">{{ t('componentes.visualizadorPdf.erroTitulo') }}</h4>
          <p class="text-muted">{{ erro }}</p>
          <button @click="fecharDialog" class="btn btn-primary mt-3">
            <i class="pi pi-times me-2"></i>
            {{ t('componentes.visualizadorPdf.fechar') }}
          </button>
        </div>
      </div>

      <!-- PDF Viewer -->
      <div v-else class="pdf-content flex-1">
        <div class="pdf-scroll-container">
          <VuePdfEmbed
            :key="`pdf-${chavePdf}-${escala}`"
            :source="caminhoPdf"
            :page="paginaAtual"
            :scale="escala"
            class="pdf-embed"
            @loading="carregando = true"
            @loaded="aoCarregar"
            @load-failed="aoErro"
          />
        </div>
      </div>
    </div>
  </Dialog>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

.pdf-viewer-container {
  height: 100%;
  background: #f8f9fa;
}

.pdf-controls {
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.pdf-content {
  background: #e9ecef;
  height: 100%;
  overflow: hidden;
}

.pdf-scroll-container {
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  box-sizing: border-box;

  // Scroll suave
  scroll-behavior: smooth;

  // Customização da scrollbar
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;

    &:hover {
      background: #a8a8a8;
    }
  }
}

.pdf-embed {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  background: white;
  border-radius: 8px;
  overflow: visible;
  margin: 0 auto;
  display: block;
  min-width: 200px;
  transition: all 0.2s ease-in-out;

  // Permite que o PDF seja centralizado e com scroll
  :deep(canvas) {
    display: block !important;
    margin: 0 auto !important;
    max-width: none !important;
    height: auto !important;
    width: auto !important;
    transition: all 0.2s ease-in-out !important;
    visibility: visible !important;
    opacity: 1 !important;
  }

  // Garante visibilidade durante transições
  :deep(.vue-pdf-embed) {
    visibility: visible !important;
    opacity: 1 !important;
    display: block !important;
  }
}

// Responsividade
@media (max-width: 768px) {
  .pdf-controls {
    flex-direction: column;
    gap: 0.5rem !important;
    align-items: center !important;

    .flex {
      gap: 0.5rem !important;
    }
  }

  #pageInput {
    width: 50px !important;
  }

  .pdf-scroll-container {
    padding: 0.5rem;
  }

  .pdf-embed {
    :deep(canvas) {
      max-width: 100% !important;
    }
  }
}

// ===== CONTROLES COMPACTOS =====
.pdf-controls-compact {
  height: 40px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-bottom: 1px solid rgba($nav-font-color, 0.1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.control-btn {
  width: 28px;
  height: 28px;
  border: none;
  background: white;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  cursor: pointer;
  margin: 0 1px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  &:hover:not(:disabled) {
    background: $nav-font-color;
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: #f1f1f1;
  }

  i {
    font-size: 0.75rem;
  }
}

.page-controls {
  gap: 4px;
}

.page-info {
  display: flex;
  align-items: center;
  margin: 0 8px;
  gap: 4px;
}

.page-input {
  width: 40px;
  height: 24px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
  background: white;

  &:focus {
    outline: none;
    border-color: $nav-font-color;
    box-shadow: 0 0 0 2px rgba($nav-font-color, 0.2);
  }
}

.total-pages {
  font-size: 0.75rem;
  color: $gray-dark;
  font-weight: 500;
}

.document-info {
  display: flex;
  align-items: center;
  font-size: 0.8rem;

  i {
    font-size: 0.9rem;
  }
}

.zoom-controls {
  gap: 2px;
}

.zoom-display {
  font-size: 0.75rem;
  font-weight: 600;
  color: $nav-font-color;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background 0.2s ease;
  user-select: none;
  min-width: 45px;
  text-align: center;

  &:hover {
    background: rgba($nav-font-color, 0.1);
  }
}

@media (max-width: 480px) {
  .pdf-controls-compact {
    height: 36px;
    padding: 0 8px;
  }

  .control-btn {
    width: 24px;
    height: 24px;

    i {
      font-size: 0.7rem;
    }
  }

  .page-input {
    width: 36px;
    height: 22px;
    font-size: 0.7rem;
  }

  .zoom-display {
    font-size: 0.7rem;
    padding: 2px 6px;
    min-width: 40px;
  }
}

// Customização do dialog
:deep(.p-dialog) {
  .p-dialog-content {
    padding: 0 !important;
  }

  .p-dialog-header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #dee2e6;
  }
}
</style>
