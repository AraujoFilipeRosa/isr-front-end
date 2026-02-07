<script setup lang="ts">
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
  <div id="home" class="container-sm-fluid container-md-fluid container-lg mt-lg-5 mb-lg-5 page-container">
    <ComponenteSecaoTitulo :titulo="t('home.titulo')" :descricao="t('home.descricao')" />
    <ComponenteSecaoConteudo :src-imagem="bannerReciclagemImg" alt-imagem="Reciclagem"
      :titulo="t('home.secoes.reciclagem.titulo')" :descricao="t('home.secoes.reciclagem.descricao')" />
    <ComponenteSecaoConteudo :src-imagem="bannerNossosProgramasImg" alt-imagem="Nossos Programas"
      :titulo="t('home.secoes.programas.titulo')" :descricao="t('home.secoes.programas.descricao')" :invertido="true" />
    <ComponenteSecaoConteudo :src-imagem="bannerVoluntarioImg" alt-imagem="Doações e Bazar"
      :titulo="t('home.secoes.doacoesBazar.titulo')" :descricao="t('home.secoes.doacoesBazar.descricao')" />
    <ComponenteSecaoConteudo :src-imagem="bannerDoacoesBazarImg" alt-imagem="Banner Doações e Bazar"
      :titulo="t('home.secoes.metodologia.titulo')" :descricao="t('home.secoes.metodologia.descricao')"
      :invertido="true" />
    <ComponenteChamadaAcao :titulo="t('home.secoes.chamadaAcao.titulo')"
      :descricao="t('home.secoes.chamadaAcao.descricao')" textoBotaoPrimario="Faça parte"
      iconeBotaoPrimario="pi pi-envelope" rotaPrimaria="contato" />

    <!-- Seção de Parceiros -->
    <ParceirosComponent />
  </div>
</template>
<style scoped lang="scss">
@use '@/assets/base.scss' as *;
</style>
