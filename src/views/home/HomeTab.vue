<script setup lang="ts">
import { MotionDirective as motion } from '@vueuse/motion'
import { useI18n } from '@/composables/useI18n'
import ContentSectionComponent from '@/components/ContentSectionComponent.vue'
import TitleSectionComponent from '@/components/TitleSectionComponent.vue'

import bannerReciclagemImg from '@/assets/imagens/banner-reciclagem.jpg'
import bannerNossosProgramasImg from '@/assets/imagens/banner-nossos-programas.jpg'
import bannerDoacoesBazarImg from '@/assets/imagens/banner-doacoes-bazar.jpg'
import bannerVoluntarioImg from '@/assets/imagens/banner-voluntario.jpg'

const { t } = useI18n()
</script>
<template>
  <div id="home" class="container my-5 page-container">
    <TitleSectionComponent :titulo="t('home.titulo')" :descricao="t('home.descricao')" />
    <ContentSectionComponent
      :image-src="bannerReciclagemImg"
      image-alt="Reciclagem"
      :title="t('home.secoes.reciclagem.titulo')"
      :description="t('home.secoes.reciclagem.descricao')"
    />
    <ContentSectionComponent
      :image-src="bannerNossosProgramasImg"
      image-alt="Nossos Programas"
      :title="t('home.secoes.programas.titulo')"
      :description="t('home.secoes.programas.descricao')"
      :inverted="true"
    />
    <ContentSectionComponent
      :image-src="bannerVoluntarioImg"
      image-alt="Doações e Bazar"
      :title="t('home.secoes.doacoesBazar.titulo')"
      :description="t('home.secoes.doacoesBazar.descricao')"
    />
    <ContentSectionComponent
      :image-src="bannerDoacoesBazarImg"
      image-alt="Banner Doações e Bazar"
      :title="t('home.secoes.metodologia.titulo')"
      :description="t('home.secoes.metodologia.descricao')"
      :inverted="true"
    />
    <CallToActionComponent
      :title="t('home.secoes.chamadaAcao.titulo')"
      :description="t('home.secoes.chamadaAcao.descricao')"
      primaryButtonText="Faça parte"
      primaryButtonIcon="pi pi-envelope"
      primaryRoute="contato"
    />
  </div>
</template>
<style scoped lang="scss">
@use '@/assets/base.scss' as *;
</style>
