<script setup lang="ts">
import { MotionDirective as motion } from '@vueuse/motion'
import { useI18n } from '@/composables/useI18n'
import CallToActionComponent from '@/components/CallToActionComponent.vue'
import HeaderSectionComponent from '@/components/HeaderSectionComponent.vue'
import CardComponent from '@/components/CardComponent.vue'

const { t } = useI18n()
</script>

<template>
  <div id="visao" class="container my-5">
    <!-- Header da Visão -->
    <HeaderSectionComponent
      icon="pi-eye"
      :title="t('visao.titulo')"
      :description="t('visao.descricao')"
      :duration="1000"
    />

    <!-- Visão Detalhada -->
    <section
      v-motion
      :initial="{ opacity: 0, y: 0 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="1000"
      :delay="200"
      class="row my-5"
    >
      <div class="col-12 text-center mb-5">
        <h2 class="title font-weight-bold">{{ t('visao.futuro.titulo') }}</h2>
        <p class="text-muted">{{ t('visao.futuro.descricao') }}</p>
      </div>

      <div class="col-lg-6 mb-4">
        <CardComponent variant="vision">
          <div class="vision-icon mb-3">
            <i class="pi pi-star"></i>
          </div>
          <h3 class="card-title h5 font-weight-bold mb-3">
            {{ t('visao.objetivos.excelencia.titulo') }}
          </h3>
          <p class="card-text text-muted">
            {{ t('visao.objetivos.excelencia.descricao') }}
          </p>
        </CardComponent>
      </div>

      <div class="col-lg-6 mb-4">
        <CardComponent variant="vision">
          <div class="vision-icon mb-3">
            <i class="pi pi-lightbulb"></i>
          </div>
          <h3 class="card-title h5 font-weight-bold mb-3">
            {{ t('visao.objetivos.inovacao.titulo') }}
          </h3>
          <p class="card-text text-muted">
            {{ t('visao.objetivos.inovacao.descricao') }}
          </p>
        </CardComponent>
      </div>

      <div class="col-lg-6 mb-4">
        <CardComponent variant="vision">
          <div class="vision-icon mb-3">
            <i class="pi pi-globe"></i>
          </div>
          <h3 class="card-title h5 font-weight-bold mb-3">
            {{ t('visao.objetivos.impacto.titulo') }}
          </h3>
          <p class="card-text text-muted">
            {{ t('visao.objetivos.impacto.descricao') }}
          </p>
        </CardComponent>
      </div>

      <div class="col-lg-6 mb-4">
        <CardComponent variant="vision">
          <div class="vision-icon mb-3">
            <i class="pi pi-heart"></i>
          </div>
          <h3 class="card-title h5 font-weight-bold mb-3">
            {{ t('visao.objetivos.sustentabilidade.titulo') }}
          </h3>
          <p class="card-text text-muted">
            {{ t('visao.objetivos.sustentabilidade.descricao') }}
          </p>
        </CardComponent>
      </div>
    </section>

    <!-- Call to Action -->
    <CallToActionComponent
      title="Faça Parte da Nossa Visão"
      description="Junte-se a nós na construção de um futuro mais inclusivo e solidário para todas as crianças, adolescentes e jovens do Rio de Janeiro."
      secondaryButtonText="Entre em Contato"
      secondaryButtonIcon="pi pi-envelope"
      secondaryRoute="contato"
    />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

#visao {
  padding-top: $app-padding-top;
}

.vision-card {
  transition: all 0.3s ease;
  border-radius: 12px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
  }

  .vision-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, $nav-font-color, $nav-font-color-light);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;

    i {
      font-size: 1.5rem;
      color: white;
    }
  }
}

.card {
  border-radius: 12px;
}

.rounded {
  border-radius: 12px !important;
}
</style>
