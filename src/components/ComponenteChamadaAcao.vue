<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

interface Props {
  title: string
  description: string
  primaryButtonText?: string | null
  primaryButtonIcon?: string | null
  primaryRoute?: string | null
  secondaryButtonText?: string | null
  secondaryButtonIcon?: string | null
  secondaryRoute?: string | null
}

const props = withDefaults(defineProps<Props>(), {
  primaryButtonText: null,
  primaryButtonIcon: null,
  secondaryButtonText: null,
  secondaryButtonIcon: null,
  primaryRoute: null,
  secondaryRoute: null,
})
</script>

<template>
  <section
    v-motion
    :initial="{ opacity: 0, y: 0 }"
    :visible="{ opacity: 1, y: 0 }"
    :duration="1000"
    :delay="200"
    class="row my-5"
  >
    <div class="col-12 text-center">
      <div class="bg-primary-custom text-white p-5 rounded-custom shadow-custom-strong">
        <h2 class="font-weight-bold mb-3">{{ title }}</h2>
        <p class="lead mb-4">{{ description }}</p>
        <div class="d-flex justify-content-center gap-3 flex-wrap">
          <div v-if="primaryRoute && primaryButtonText && primaryButtonIcon">
            <router-link :to="{ name: primaryRoute }" class="btn btn-light btn-lg">
              <i :class="primaryButtonIcon + ' me-2'"></i>{{ primaryButtonText }}
            </router-link>
          </div>
          <div v-if="secondaryRoute && secondaryButtonText && secondaryButtonIcon">
            <router-link
              :to="{ name: secondaryRoute as string }"
              class="btn btn-outline-light btn-lg"
            >
              <i :class="secondaryButtonIcon + ' me-2'"></i>{{ secondaryButtonText }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

// Estilos globais agora estão em utilities.scss
</style>
