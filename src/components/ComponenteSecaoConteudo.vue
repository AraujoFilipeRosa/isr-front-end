<template>
  <section
    v-motion
    :initial="{ opacity: 0, x: 0 }"
    :visible="{ opacity: 1, x: 0, scale: 1 }"
    :variants="{ custom: { scale: 2 } }"
    :delay="50"
    :duration="1200"
    class="row py-5 my-5"
  >
    <!-- Slot da imagem ou vídeo -->
    <div class="col-md" :class="{ 'order-md-2': invertido }">
      <slot name="media">
        <!-- Se tiver vídeo, mostra o vídeo -->
        <div v-if="srcVideo" class="video-container">
          <iframe
            class="rounded-2 w-100"
            :src="srcVideo"
            :title="t('componentes.secaoConteudo.playerVideo')"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <!-- Se não tiver vídeo, mostra a imagem -->
        <Image
          v-else
          :src="srcImagem"
          :alt="altImagem"
          class="img-fluid rounded shadow-lg rounded-image"
          loading="lazy"
        />
      </slot>
    </div>

    <!-- Slot do conteúdo -->
    <div class="col-md" :class="{ 'order-md-1': invertido }">
      <slot name="content">
        <h2 class="title mb-4 font-weight-bold">{{ titulo }}</h2>
        <p class="text-muted text-justify">
          {{ descricao }}
        </p>
      </slot>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Image } from 'primevue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

interface Props {
  srcImagem?: string
  altImagem?: string
  srcVideo?: string
  titulo?: string
  descricao?: string
  invertido?: boolean
}

withDefaults(defineProps<Props>(), {
  srcImagem: '',
  altImagem: '',
  titulo: '',
  descricao: '',
  invertido: false,
})
</script>

<style scoped>
:deep(.p-image img) {
  border-radius: 0.375rem !important;
}

.video-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* Proporção 16:9 */
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.375rem;
}
</style>
