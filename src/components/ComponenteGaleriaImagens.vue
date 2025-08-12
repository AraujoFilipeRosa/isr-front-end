<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { Dialog } from 'primevue'
import { MotionDirective as motion } from '@vueuse/motion'
import { useI18n } from '@/composables/useI18n'

// Props
interface Props {
  titulo: string
  imagens: string[]
  imagemInicial?: number
  modelValue: boolean
}

const props = withDefaults(defineProps<Props>(), {
  imagemInicial: 0,
})

// Emits
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const { t } = useI18n()

// Estado local
const indiceImagemAtual = ref(0)
const carregando = ref(false)
const erro = ref<string | null>(null)

// Computed
const visivel = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value),
})

const urlImagemAtual = computed(() => {
  return props.imagens[indiceImagemAtual.value] || ''
})

const temMultiplasImagens = computed(() => props.imagens.length > 1)

// Watchers
watch(
  () => props.imagemInicial,
  (novoIndice) => {
    if (novoIndice >= 0 && novoIndice < props.imagens.length) {
      indiceImagemAtual.value = novoIndice
    }
  },
)

watch(visivel, (visivel) => {
  if (visivel) {
    indiceImagemAtual.value = props.imagemInicial
    erro.value = null
  }
})

// Funções
const proximaImagem = () => {
  if (indiceImagemAtual.value < props.imagens.length - 1) {
    indiceImagemAtual.value++
  } else {
    indiceImagemAtual.value = 0 // Loop para a primeira
  }
}

const imagemAnterior = () => {
  if (indiceImagemAtual.value > 0) {
    indiceImagemAtual.value--
  } else {
    indiceImagemAtual.value = props.imagens.length - 1 // Loop para a última
  }
}

const irParaImagem = (indice: number) => {
  if (indice >= 0 && indice < props.imagens.length) {
    indiceImagemAtual.value = indice
  }
}

const aoCarregarImagem = () => {
  carregando.value = false
  erro.value = null
}

const aoErroImagem = () => {
  carregando.value = false
  erro.value = t('componentes.galeriaImagens.erroCarregar')
}

const fecharDialog = () => {
  visivel.value = false
  indiceImagemAtual.value = 0
  erro.value = null
}

// Navegação por teclado
const aoTeclaPressionada = (event: KeyboardEvent) => {
  if (!visivel.value) return

  switch (event.key) {
    case 'ArrowLeft':
      event.preventDefault()
      imagemAnterior()
      break
    case 'ArrowRight':
      event.preventDefault()
      proximaImagem()
      break
    case 'Escape':
      event.preventDefault()
      fecharDialog()
      break
  }
}

// Event listeners
watch(visivel, (visivel) => {
  if (visivel) {
    document.addEventListener('keydown', aoTeclaPressionada)
  } else {
    document.removeEventListener('keydown', aoTeclaPressionada)
  }
})
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
      <div class="d-flex align-items-center gap-2">
        <i class="pi pi-images text-primary"></i>
        <span class="font-weight-bold">{{ titulo }}</span>
        <span v-if="temMultiplasImagens" class="badge badge-secondary ms-2">
          {{ indiceImagemAtual + 1 }} / {{ imagens.length }}
        </span>
      </div>
    </template>

    <div class="gallery-viewer-container h-100 d-flex flex-column">
      <!-- Controles de navegação e zoom -->
      <div
        class="gallery-controls d-flex align-items-center justify-content-between gap-3 p-3 border-bottom"
      >
        <!-- Controles de navegação -->
        <div v-if="temMultiplasImagens" class="image-controls d-flex align-items-center">
          <button
            @click="imagemAnterior"
            :disabled="indiceImagemAtual <= 0"
            class="control-btn"
            :title="t('componentes.galeriaImagens.imagemAnterior')"
          >
            <i class="pi pi-chevron-left"></i>
          </button>

          <div class="image-info">
            <input
              type="number"
              :value="indiceImagemAtual + 1"
              :min="1"
              :max="imagens.length"
              @input="irParaImagem(parseInt(($event.target as HTMLInputElement).value) - 1)"
              class="image-input"
            />
            <span class="total-images">/ {{ imagens.length }}</span>
          </div>

          <button
            @click="proximaImagem"
            :disabled="indiceImagemAtual >= imagens.length - 1"
            class="control-btn"
            :title="t('componentes.galeriaImagens.proximaImagem')"
          >
            <i class="pi pi-chevron-right"></i>
          </button>
        </div>
      </div>

      <!-- Loading -->
      <div v-if="carregando" class="flex-grow-1 d-flex align-items-center justify-content-center">
        <div class="text-center">
          <i class="pi pi-spin pi-spinner text-primary" style="font-size: 2rem"></i>
          <p class="mt-3 text-muted">{{ t('componentes.galeriaImagens.carregando') }}</p>
        </div>
      </div>

      <!-- Erro -->
      <div v-else-if="erro" class="flex-grow-1 d-flex align-items-center justify-content-center">
        <div class="text-center">
          <i class="pi pi-exclamation-triangle text-warning" style="font-size: 3rem"></i>
          <h4 class="mt-3 text-danger">{{ t('componentes.galeriaImagens.erroTitulo') }}</h4>
          <p class="text-muted">{{ erro }}</p>
          <button @click="fecharDialog" class="btn btn-primary mt-3">
            <i class="pi pi-times me-2"></i>
            {{ t('componentes.galeriaImagens.fechar') }}
          </button>
        </div>
      </div>

      <!-- Visualizador de Imagem -->
      <div v-else class="image-content flex-grow-1">
        <div class="image-scroll-container">
          <img
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :visible="{ opacity: 1, scale: 1 }"
            :duration="300"
            :key="`img-${indiceImagemAtual}`"
            :src="urlImagemAtual"
            :alt="`${titulo} - Imagem ${indiceImagemAtual + 1}`"
            class="gallery-image"
            loading="lazy"
            @load="aoCarregarImagem"
            @error="aoErroImagem"
          />
        </div>
      </div>

      <!-- Miniaturas (se múltiplas imagens) -->
      <div
        v-if="temMultiplasImagens && imagens.length <= 10"
        class="thumbnails-container p-3 border-top"
      >
        <div class="d-flex gap-2 justify-content-center flex-wrap">
          <div
            v-for="(imagem, index) in imagens"
            :key="`thumb-${index}`"
            @click="irParaImagem(index)"
            class="thumbnail"
            :class="{ active: index === indiceImagemAtual }"
          >
            <Image
              :src="imagem"
              :alt="`${t('componentes.galeriaImagens.miniatura')} ${index + 1}`"
              class="thumbnail-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </Dialog>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

.gallery-viewer-container {
  height: 100%;
  background: #f8f9fa;
}

.gallery-controls {
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

.image-controls {
  gap: 4px;
}

.image-info {
  display: flex;
  align-items: center;
  margin: 0 8px;
  gap: 4px;
}

.image-input {
  width: 40px;
  height: 22px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
  font-size: 0.8rem;
  padding: 0 2px;

  &:focus {
    outline: none;
    border-color: $nav-font-color;
    box-shadow: 0 0 0 2px rgba($nav-font-color, 0.2);
  }
}

.total-images {
  font-size: 0.8rem;
  color: #666;
  white-space: nowrap;
}

.image-content {
  background: #e9ecef;
  height: 100%;
  overflow: hidden;
}

.image-scroll-container {
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  box-sizing: border-box;
  scroll-behavior: smooth;

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

.gallery-image {
  max-width: 100%;
  max-height: 100%;
  min-width: 300px;
  min-height: 300px;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: opacity 0.3s ease;
  cursor: zoom-in;

  // Para imagens muito pequenas, garantir um tamanho mínimo decente
  @media (min-width: 768px) {
    min-width: 250px;
    min-height: 250px;
  }

  @media (min-width: 1200px) {
    min-width: 300px;
    min-height: 300px;
  }
}

.thumbnails-container {
  background: white;
  max-height: 120px;
}

.thumbnail {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid transparent;
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba($nav-font-color, 0.5);
    transform: scale(1.05);
  }

  &.active {
    border-color: $nav-font-color;
    box-shadow: 0 0 0 1px $nav-font-color;
  }
}

.thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

// Responsividade
@media (max-width: 768px) {
  .gallery-controls {
    flex-direction: column;
    gap: 1rem;
  }

  .control-btn {
    width: 24px;
    height: 24px;

    i {
      font-size: 0.7rem;
    }
  }

  .image-input {
    width: 36px;
    height: 20px;
    font-size: 0.75rem;
  }

  .image-scroll-container {
    padding: 0.25rem;
  }

  .gallery-image {
    min-width: 250px;
    min-height: 250px;
  }

  .thumbnail {
    width: 50px;
    height: 50px;
  }
}
</style>
