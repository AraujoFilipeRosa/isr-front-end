<script setup lang="ts">
import { MotionDirective as motion } from '@vueuse/motion'
import { useI18n } from '@/composables/useI18n'
import CallToActionComponent from '@/components/CallToActionComponent.vue'
import HeaderSectionComponent from '@/components/HeaderSectionComponent.vue'
import CardComponent from '@/components/CardComponent.vue'

const { t } = useI18n()
</script>

<template>
  <div id="valores" class="container my-5">
    <!-- Header dos Valores -->
    <HeaderSectionComponent
      icon="pi-heart"
      :title="t('valores.titulo')"
      :description="t('valores.descricao')"
      :duration="1000"
    />

    <!-- Valores Principais -->
    <section
      v-motion
      :initial="{ opacity: 0, y: 0 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="1000"
      :delay="200"
      class="row my-5"
    >
      <div class="col-12 text-center mb-5">
        <h2 class="title font-weight-bold">{{ t('valores.fundamentais.titulo') }}</h2>
        <p class="text-muted">{{ t('valores.fundamentais.descricao') }}</p>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <CardComponent variant="value">
          <div class="value-icon mb-3 flex-shrink-0">
            <i class="pi pi-heart"></i>
          </div>
          <h3 class="card-title h5 font-weight-bold mb-3">
            {{ t('valores.lista.empatia.titulo') }}
          </h3>
          <p class="card-text text-muted flex-grow-1">
            {{ t('valores.lista.empatia.descricao') }}
          </p>
        </CardComponent>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <CardComponent variant="value">
          <div class="value-icon mb-3 flex-shrink-0">
            <i class="pi pi-globe"></i>
          </div>
          <h3 class="card-title h5 font-weight-bold mb-3">
            {{ t('valores.lista.sustentabilidade.titulo') }}
          </h3>
          <p class="card-text text-muted flex-grow-1">
            {{ t('valores.lista.sustentabilidade.descricao') }}
          </p>
        </CardComponent>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <CardComponent variant="value">
          <div class="value-icon mb-3 flex-shrink-0">
            <i class="pi pi-users"></i>
          </div>
          <h3 class="card-title h5 font-weight-bold mb-3">
            {{ t('valores.lista.equidade.titulo') }}
          </h3>
          <p class="card-text text-muted flex-grow-1">
            {{ t('valores.lista.equidade.descricao') }}
          </p>
        </CardComponent>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <CardComponent variant="value">
          <div class="value-icon mb-3 flex-shrink-0">
            <i class="pi pi-star"></i>
          </div>
          <h3 class="card-title h5 font-weight-bold mb-3">
            {{ t('valores.lista.qualidade.titulo') }}
          </h3>
          <p class="card-text text-muted flex-grow-1">
            {{ t('valores.lista.qualidade.descricao') }}
          </p>
        </CardComponent>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <CardComponent variant="value">
          <div class="value-icon mb-3 flex-shrink-0">
            <i class="pi pi-shield"></i>
          </div>
          <h3 class="card-title h5 font-weight-bold mb-3">
            {{ t('valores.lista.eticaProfissional.titulo') }}
          </h3>
          <p class="card-text text-muted flex-grow-1">
            {{ t('valores.lista.eticaProfissional.descricao') }}
          </p>
        </CardComponent>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <CardComponent variant="value">
          <div class="value-icon mb-3 flex-shrink-0">
            <i class="pi pi-user"></i>
          </div>
          <h3 class="card-title h5 font-weight-bold mb-3">
            {{ t('valores.lista.individualidade.titulo') }}
          </h3>
          <p class="card-text text-muted flex-grow-1">
            {{ t('valores.lista.individualidade.descricao') }}
          </p>
        </CardComponent>
      </div>
    </section>

    <!-- Como Aplicamos Nossos Valores -->
    <section
      v-motion
      :initial="{ opacity: 0, x: 0 }"
      :visible="{ opacity: 1, x: 0 }"
      :duration="1000"
      :delay="200"
      class="row my-5 py-5 bg-light rounded"
    >
      <div class="col-12 text-center mb-4">
        <h2 class="title font-weight-bold">{{ t('valores.aplicacao.titulo') }}</h2>
        <p class="text-muted">{{ t('valores.aplicacao.descricao') }}</p>
      </div>

      <div class="col-md-6">
        <div class="d-flex align-items-start mb-4">
          <div class="application-icon me-3">
            <i class="pi pi-heart"></i>
          </div>
          <div>
            <h4 class="h6 font-weight-bold mb-2">
              {{ t('valores.aplicacao.itens.atendimentoHumanizado.titulo') }}
            </h4>
            <p class="text-muted small">
              {{ t('valores.aplicacao.itens.atendimentoHumanizado.descricao') }}
            </p>
          </div>
        </div>

        <div class="d-flex align-items-start mb-4">
          <div class="application-icon me-3">
            <i class="pi pi-globe"></i>
          </div>
          <div>
            <h4 class="h6 font-weight-bold mb-2">
              {{ t('valores.aplicacao.itens.praticasSustentaveis.titulo') }}
            </h4>
            <p class="text-muted small">
              {{ t('valores.aplicacao.itens.praticasSustentaveis.descricao') }}
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="d-flex align-items-start mb-4">
          <div class="application-icon me-3">
            <i class="pi pi-users"></i>
          </div>
          <div>
            <h4 class="h6 font-weight-bold mb-2">
              {{ t('valores.aplicacao.itens.inclusaoSocial.titulo') }}
            </h4>
            <p class="text-muted small">
              {{ t('valores.aplicacao.itens.inclusaoSocial.descricao') }}
            </p>
          </div>
        </div>

        <div class="d-flex align-items-start mb-4">
          <div class="application-icon me-3">
            <i class="pi pi-star"></i>
          </div>
          <div>
            <h4 class="h6 font-weight-bold mb-2">
              {{ t('valores.aplicacao.itens.excelenciaServicos.titulo') }}
            </h4>
            <p class="text-muted small">
              {{ t('valores.aplicacao.itens.excelenciaServicos.descricao') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <CallToActionComponent
      :title="t('valores.callToAction.titulo')"
      :description="t('valores.callToAction.descricao')"
      secondaryButtonText="Faça parte"
      secondaryButtonIcon="pi pi-envelope"
      secondaryRoute="contato"
    />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

#valores {
  padding-top: $app-padding-top;
}

.bg-custom-primary {
  background: $heading-section-color;
}

.value-card {
  transition: all 0.3s ease;
  border-radius: 12px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
  }

  .value-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, $nav-font-color, $nav-font-color-light);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    i {
      font-size: 2rem;
      color: white;
    }
  }
}

.application-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, $nav-font-color, $nav-font-color-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  i {
    font-size: 1rem;
    color: white;
  }
}

.card {
  border-radius: 12px;
}

.rounded {
  border-radius: 12px !important;
}
</style>
