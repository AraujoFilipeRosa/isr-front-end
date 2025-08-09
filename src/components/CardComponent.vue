<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'value' | 'vision' | 'social'
  customClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  customClass: '',
})

const cardClass = computed(() => {
  const baseClass = 'card h-100 border-0 shadow-sm'
  const variantClass = props.variant !== 'default' ? `${props.variant}-card` : ''
  return `${baseClass} ${variantClass} ${props.customClass}`.trim()
})
</script>

<template>
  <div :class="cardClass">
    <div class="card-body text-center p-4 d-flex flex-column">
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
.value-card:hover {
  transform: translateY(-3px);
}

.vision-card:hover {
  transform: translateY(-3px);
}

.social-card:hover {
  transform: translateY(-8px);
}
</style>
