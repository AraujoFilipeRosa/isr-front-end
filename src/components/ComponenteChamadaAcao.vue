<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

interface Props {
  titulo: string
  descricao: string
  textoBotaoPrimario?: string | null
  iconeBotaoPrimario?: string | null
  rotaPrimaria?: string | null
  textoBotaoSecundario?: string | null
  iconeBotaoSecundario?: string | null
  rotaSecundaria?: string | null
}

const props = withDefaults(defineProps<Props>(), {
  textoBotaoPrimario: null,
  iconeBotaoPrimario: null,
  textoBotaoSecundario: null,
  iconeBotaoSecundario: null,
  rotaPrimaria: null,
  rotaSecundaria: null,
})
</script>

<template>
  <section v-motion :initial="{ opacity: 0, y: 0 }" :visible="{ opacity: 1, y: 0 }" :duration="1000" :delay="200"
    class="row my-5">
    <div class="col-12 text-center">
      <div class="bg-primary-custom text-white p-5 rounded-none md:rounded-lg shadow-custom-strong">
        <h2 class="font-weight-bold mb-3">{{ titulo }}</h2>
        <p class="lead mb-4">{{ descricao }}</p>
        <div class="d-flex justify-content-center gap-3 flex-wrap">
          <div v-if="rotaPrimaria && textoBotaoPrimario && iconeBotaoPrimario">
            <router-link :to="{ name: rotaPrimaria }" class="btn btn-light btn-lg">
              <i :class="iconeBotaoPrimario + ' me-2'"></i>{{ textoBotaoPrimario }}
            </router-link>
          </div>
          <div v-if="rotaSecundaria && textoBotaoSecundario && iconeBotaoSecundario">
            <router-link :to="{ name: rotaSecundaria as string }" class="btn btn-outline-light btn-lg">
              <i :class="iconeBotaoSecundario + ' me-2'"></i>{{ textoBotaoSecundario }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

// Estilos globais agora estão em utilities.scss</style>
