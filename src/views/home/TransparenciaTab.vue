<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '@/composables/useI18n'
import ComponenteVisualizadorPdf from '@/components/ComponenteVisualizadorPdf.vue'
import ComponenteSecaoCabecalho from '@/components/ComponenteSecaoCabecalho.vue'
import CertificacaoCardComponent from '@/components/CertificacaoCardComponent.vue'
import ParceirosComponent from '@/components/ParceirosComponent.vue'

import cmdaRio from '@/assets/certificacoes/imagens/cmdca-rio.png'
import cebasAssistenciaSocial from '@/assets/certificacoes/imagens/cebas-assistencia-social.png'
import cmasRio from '@/assets/certificacoes/imagens/cmas-rio.png'

const { t } = useI18n()

const pdfViewerVisible = ref(false)
const currentPdfPath = ref('')
const currentPdfTitle = ref('')

const certificacoes = [
  {
    titulo: t('transparencia.certificacoes.itens.cmdca.titulo'),
    descricao: t('transparencia.certificacoes.itens.cmdca.descricao'),
    imagem: cmdaRio,
    pdf: '/certificacoes/CMDCA.pdf',
  },
  {
    titulo: t('transparencia.certificacoes.itens.cebas.titulo'),
    descricao: t('transparencia.certificacoes.itens.cebas.descricao'),
    imagem: cebasAssistenciaSocial,
    pdf: '/certificacoes/CEBAS.pdf',
  },
  {
    titulo: t('transparencia.certificacoes.itens.cmas.titulo'),
    descricao: t('transparencia.certificacoes.itens.cmas.descricao'),
    imagem: cmasRio,
    pdf: '/certificacoes/CMAS.pdf',
  },
]

const abrirCertificado = (pdfPath: string, titulo: string) => {
  currentPdfPath.value = pdfPath
  currentPdfTitle.value = titulo
  pdfViewerVisible.value = true
}
</script>

<template>
  <div id="transparencia" class="container-sm-fluid container-md-fluid container-lg my-5 page-container">
    <!-- Header Principal -->
    <ComponenteSecaoCabecalho icone="pi-shield" :titulo="t('transparencia.titulo')"
      :descricao="t('transparencia.descricao')" :duracao="1000" />

    <ComponenteSecaoTitulo :titulo="t('transparencia.titulo')" :descricao="t('transparencia.descricao')" />

    <!-- Transparência Financeira -->
    <section v-motion :initial="{ opacity: 0, y: 0 }" :visible="{ opacity: 1, y: 0 }" :duration="1000" :delay="600"
      class="row my-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <div class="card h-100 card-custom card-hover-strong">
          <div class="card-body text-center p-4">
            <div class="mb-4">
              <i class="pi pi-chart-line text-primary" style="font-size: 3rem"></i>
            </div>
            <h3 class="card-title h4 font-weight-bold mb-3">
              {{ t('transparencia.financeira.portal.titulo') }}
            </h3>
            <p class="card-text text-muted mb-4">
              {{ t('transparencia.financeira.portal.descricao') }}
            </p>
            <a href="https://etransparente.org/oscs/instituto-severa-romana/" target="_blank" rel="noopener noreferrer"
              class="btn btn-primary btn-lg">
              <i class="pi pi-external-link me-2"></i>
              {{ t('transparencia.financeira.portal.botao') }}
            </a>
            <p class="text-muted mt-3 small">
              <i class="pi pi-info-circle me-1"></i>
              {{ t('transparencia.financeira.portal.aviso') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <ComponenteSecaoTitulo :titulo="t('transparencia.certificacoes.titulo')"
      :descricao="t('transparencia.certificacoes.descricao')" :info="t('transparencia.certificacoes.instrucao')" />

    <!-- Certificações -->
    <section v-motion :initial="{ opacity: 0, y: 0 }" :visible="{ opacity: 1, y: 0 }" :duration="1000" :delay="400"
      class="row my-5">
      <div v-for="(cert, index) in certificacoes" :key="index" class="col-lg-4 col-md-6 mb-4">
        <CertificacaoCardComponent :certificacao="cert" :texto-botao="t('transparencia.certificacoes.botao')"
          @abrir-certificado="abrirCertificado" />
      </div>
    </section>

    <!-- Seção de Parceiros -->
    <ParceirosComponent />

    <!-- PDF Viewer Component -->
    <ComponenteVisualizadorPdf v-model="pdfViewerVisible" :titulo="currentPdfTitle" :caminho-pdf="currentPdfPath" />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;
</style>
