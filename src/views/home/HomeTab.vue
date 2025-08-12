<script setup lang="ts">
import { MotionDirective as motion } from '@vueuse/motion'
import { useI18n } from '@/composables/useI18n'
import ComponenteSecaoConteudo from '@/components/ComponenteSecaoConteudo.vue'
import ComponenteSecaoTitulo from '@/components/ComponenteSecaoTitulo.vue'
import ParceirosComponent from '@/components/ParceirosComponent.vue'

import bannerReciclagemImg from '@/assets/imagens/banner-reciclagem.jpg'
import bannerNossosProgramasImg from '@/assets/imagens/banner-nossos-programas.jpg'
import bannerDoacoesBazarImg from '@/assets/imagens/banner-doacoes-bazar.jpg'
import bannerVoluntarioImg from '@/assets/imagens/banner-voluntario.jpg'

const { t } = useI18n()
</script>
<template>
  <div id="home" class="container my-5 page-container">
    <ComponenteSecaoTitulo :titulo="t('home.titulo')" :descricao="t('home.descricao')" />
    <ComponenteSecaoConteudo
      :image-src="bannerReciclagemImg"
      image-alt="Reciclagem"
      :title="t('home.secoes.reciclagem.titulo')"
      :description="t('home.secoes.reciclagem.descricao')"
    />
    <ComponenteSecaoConteudo
      :image-src="bannerNossosProgramasImg"
      image-alt="Nossos Programas"
      :title="t('home.secoes.programas.titulo')"
      :description="t('home.secoes.programas.descricao')"
      :inverted="true"
    />
    <ComponenteSecaoConteudo
      :image-src="bannerVoluntarioImg"
      image-alt="Doações e Bazar"
      :title="t('home.secoes.doacoesBazar.titulo')"
      :description="t('home.secoes.doacoesBazar.descricao')"
    />
    <ComponenteSecaoConteudo
      :image-src="bannerDoacoesBazarImg"
      image-alt="Banner Doações e Bazar"
      :title="t('home.secoes.metodologia.titulo')"
      :description="t('home.secoes.metodologia.descricao')"
      :inverted="true"
    />
    <ComponenteChamadaAcao
      :title="t('home.secoes.chamadaAcao.titulo')"
      :description="t('home.secoes.chamadaAcao.descricao')"
      primaryButtonText="Faça parte"
      primaryButtonIcon="pi pi-envelope"
      primaryRoute="contato"
    />

    <!-- Seção de Parceiros -->
    <ParceirosComponent />
  </div>
</template>
<style scoped lang="scss">
@use '@/assets/base.scss' as *;
</style>
