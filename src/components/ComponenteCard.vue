<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variante?: 'padrao' | 'valor' | 'visao' | 'social'
  classeCustomizada?: string
}

const props = withDefaults(defineProps<Props>(), {
  variante: 'padrao',
  classeCustomizada: '',
})

const cardClass = computed(() => {
  const baseClass = 'card h-100 border-0 shadow-sm'
  const variantClass = props.variante !== 'padrao' ? `${props.variante}-card` : ''
  return `${baseClass} ${variantClass} ${props.classeCustomizada}`.trim()
})
</script>

<template>
  <div :class="cardClass">
    <div class="card-body align-items-center text-center p-lg-4 d-flex flex-lg-column gap-sm-3">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

/* Variantes específicas podem ser adicionadas aqui se necessário */
.valor-card:hover {
  transform: translateY(-3px);
}

.visao-card:hover {
  transform: translateY(-3px);
}

.social-card:hover {
  transform: translateY(-8px);
}
</style>
