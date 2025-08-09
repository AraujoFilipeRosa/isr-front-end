<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

interface Props {
  title: string
  description: string
  primaryButtonText?: string
  primaryButtonIcon?: string
  secondaryButtonText?: string
  secondaryButtonIcon?: string
  primaryRoute?: string
  secondaryRoute?: string
}

const props = withDefaults(defineProps<Props>(), {
  primaryButtonText: 'Como Ajudar',
  primaryButtonIcon: 'pi pi-heart',
  secondaryButtonText: 'Entre em Contato',
  secondaryButtonIcon: 'pi pi-envelope',
  primaryRoute: 'como-ajudar',
  secondaryRoute: 'contato',
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
          <router-link :to="{ name: primaryRoute }" class="btn btn-light btn-lg">
            <i :class="primaryButtonIcon + ' me-2'"></i>{{ primaryButtonText }}
          </router-link>
          <router-link :to="{ name: secondaryRoute }" class="btn btn-outline-light btn-lg">
            <i :class="secondaryButtonIcon + ' me-2'"></i>{{ secondaryButtonText }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

// Estilos globais agora estão em utilities.scss
</style>
