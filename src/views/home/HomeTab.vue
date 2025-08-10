<script setup lang="ts">
import { MotionDirective as motion } from '@vueuse/motion'
import { useI18n } from '@/composables/useI18n'

import bannerReciclagemImg from '@/assets/imagens/banner-reciclagem.jpg'
import bannerNossosProgramasImg from '@/assets/imagens/banner-nossos-programas.jpg'
import bannerDoacoesBazarImg from '@/assets/imagens/banner-doacoes-bazar.jpg'
import bannerVoluntarioImg from '@/assets/imagens/banner-voluntario.jpg'

// Acessar textos traduzidos
const { t } = useI18n()
</script>
<template>
  <div id="home" class="container my-5 page-container">
    <section class="row">
      <div class="col-md">
        <h1 class="title mb-4 text-center font-weight-bold">{{ t('home.titulo') }}</h1>
        <p class="text-center text-muted text-justify">
          {{ t('home.descricao') }}
        </p>
      </div>
    </section>

    <section
      v-motion
      :initial="{ opacity: 0, x: 0 }"
      :visible="{ opacity: 1, x: 0, scale: 1 }"
      :variants="{ custom: { scale: 2 } }"
      :delay="50"
      :duration="1200"
      class="row py-5"
    >
      <div class="col-md">
        <Image
          :src="bannerReciclagemImg"
          alt="Reciclagem"
          class="img-fluid rounded shadow-lg"
          loading="lazy"
        />
      </div>
      <div class="col-md">
        <h2 class="title mb-4 font-weight-bold">{{ t('home.secoes.reciclagem.titulo') }}</h2>
        <p class="text-muted text-justify">
          {{ t('home.secoes.reciclagem.descricao') }}
        </p>
      </div>
    </section>
    <section
      v-motion
      :initial="{ opacity: 0, x: 0 }"
      :visible="{ opacity: 1, x: 0, scale: 1 }"
      :variants="{ custom: { scale: 2 } }"
      :delay="50"
      :duration="1200"
      class="row py-5"
    >
      <div class="col-md text-end">
        <h2 class="title mb-4 font-weight-bold">{{ t('home.secoes.programas.titulo') }}</h2>
        <p class="text-muted text-justify">
          {{ t('home.secoes.programas.descricao') }}
        </p>
      </div>
      <div class="col-md">
        <Image
          :src="bannerNossosProgramasImg"
          alt="Nossos Programas"
          class="img-fluid rounded shadow-lg"
          loading="lazy"
        />
      </div>
    </section>
    <section
      v-motion
      :initial="{ opacity: 0, x: 0 }"
      :visible="{ opacity: 1, x: 0, scale: 1 }"
      :variants="{ custom: { scale: 2 } }"
      :delay="50"
      :duration="1200"
      class="row py-5"
    >
      <div class="col-md">
        <Image
          :src="bannerVoluntarioImg"
          alt="Doações e Bazar"
          class="img-fluid rounded shadow-lg"
          loading="lazy"
        />
      </div>
      <div class="col-md">
        <h2 class="title mb-4 font-weight-bold">{{ t('home.secoes.doacoesBazar.titulo') }}</h2>
        <p class="text-muted text-justify">
          {{ t('home.secoes.doacoesBazar.descricao') }}
        </p>
      </div>
    </section>
    <section
      v-motion
      :initial="{ opacity: 0, x: 0 }"
      :visible="{ opacity: 1, x: 0, scale: 1 }"
      :variants="{ custom: { scale: 2 } }"
      :delay="50"
      :duration="1200"
      class="row py-5"
    >
      <div class="col-md text-end">
        <h2 class="title mb-4 font-weight-bold">{{ t('home.secoes.metodologia.titulo') }}</h2>
        <p class="text-muted text-justify">
          {{ t('home.secoes.metodologia.descricao') }}
        </p>
      </div>
      <div class="col-md">
        <Image
          :src="bannerDoacoesBazarImg"
          alt="Banner Doações e Bazar"
          class="img-fluid rounded shadow-lg"
          loading="lazy"
        />
      </div>
    </section>
    <section class="row rounded-custom bg-primary-custom text-white shadow-custom-strong py-5">
      <div class="col-md text-center">
        <h1 class="display-4 mb-4 font-weight-bold">{{ t('home.secoes.chamadaAcao.titulo') }}</h1>
        <p class="lead">{{ t('home.secoes.chamadaAcao.descricao') }}</p>
        <router-link :to="{ name: 'contato' }">
          <Button :label="t('home.secoes.chamadaAcao.botao')" />
        </router-link>
      </div>
    </section>
  </div>
</template>
<style scoped lang="scss">
@use '@/assets/base.scss' as *;

// Estilos globais agora estão em utilities.scss
</style>
