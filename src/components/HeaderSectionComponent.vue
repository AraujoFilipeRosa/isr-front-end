<script setup lang="ts">
import { MotionDirective as motion } from '@vueuse/motion'

interface Props {
  icon: string
  title: string
  description: string
  delay?: number
  duration?: number
  customClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0,
  duration: 1000,
  customClass: '',
})
</script>

<template>
  <section
    v-motion
    :initial="{ opacity: 0, y: 0 }"
    :visible="{ opacity: 1, y: 0 }"
    :duration="props.duration"
    :delay="props.delay"
    :class="`row my-4 py-5 px-4 bg-primary-custom text-white rounded-custom shadow-custom-strong ${props.customClass}`"
  >
    <div class="col-12 text-center">
      <i :class="`pi ${props.icon} display-1 mb-3`" style="font-size: 3rem !important"></i>
      <h1 class="display-4 font-weight-bold mb-4">{{ props.title }}</h1>
      <p class="lead text-center mx-auto" style="max-width: 800px">
        {{ props.description }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.rounded-custom {
  border-radius: 16px;
}

.shadow-custom-strong {
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}
</style>
