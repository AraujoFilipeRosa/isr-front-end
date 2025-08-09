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
          <h3 class="card-title h5 font-weight-bold mb-3">Excelência e Reconhecimento</h3>
          <p class="card-text text-muted">
            Almejamos ser reconhecidos como uma das principais instituições de assistência social do
            Rio de Janeiro, destacando-nos pela qualidade técnica de nossos serviços e pela
            capacidade de inovação em nossos programas psicossociais e pedagógicos.
          </p>
        </CardComponent>
      </div>

      <div class="col-lg-6 mb-4">
        <CardComponent variant="vision">
          <div class="vision-icon mb-3">
            <i class="pi pi-globe"></i>
          </div>
          <h3 class="card-title h5 font-weight-bold mb-3">Expansão e Impacto</h3>
          <p class="card-text text-muted">
            Em médio prazo, queremos replicar nosso modelo de atendimento em outras regiões do
            estado, ampliando significativamente o impacto positivo do ISR e levando nossa
            experiência para mais comunidades.
          </p>
        </CardComponent>
      </div>
    </section>

    <!-- Visão Completa -->
    <section
      v-motion
      :initial="{ opacity: 0, x: 0 }"
      :visible="{ opacity: 1, x: 0 }"
      :duration="1000"
      :delay="200"
      class="row my-5 py-5 bg-light rounded"
    >
      <div class="col-12 text-center mb-5">
        <h2 class="title font-weight-bold">Nossa Visão Completa</h2>
        <p class="text-muted">O futuro que almejamos para o Instituto Severa Romana</p>
      </div>

      <div class="col-12">
        <div class="card border-0 shadow-sm">
          <div class="card-body p-4">
            <p class="text-justify text-muted lead">
              Almejamos consolidar o Instituto Severa Romana como referência de excelência em
              assistência social no Rio de Janeiro, reconhecido tanto pela qualidade técnica de
              nossos serviços quanto pela capacidade de inovação e articulação comunitária. Buscamos
              ser porta‑voz de boas práticas, estimulando políticas públicas que garantam direitos e
              fortaleçam o protagonismo de pessoas com deficiência ou em risco social. Em médio
              prazo, queremos replicar nosso modelo de atendimento em outras regiões, ampliando o
              impacto positivo do ISR.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Nossa História e Experiência -->
    <section
      v-motion
      :initial="{ opacity: 0, x: 0 }"
      :visible="{ opacity: 1, x: 0 }"
      :duration="1000"
      :delay="200"
      class="row my-5"
    >
      <div class="col-12 text-center mb-5">
        <h2 class="title font-weight-bold">Nossa Jornada</h2>
        <p class="text-muted">Mais de 50 anos dedicados à transformação social</p>
      </div>

      <div class="col-lg-4 col-md-6 text-center mb-4">
        <div class="journey-card p-4 h-100">
          <i class="pi pi-star display-4 text-primary mb-3"></i>
          <h3 class="h5 font-weight-bold">Excelência Técnica</h3>
          <p class="text-muted small">Reconhecimento pela qualidade de nossos serviços</p>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 text-center mb-4">
        <div class="journey-card p-4 h-100">
          <i class="pi pi-lightbulb display-4 text-success mb-3"></i>
          <h3 class="h5 font-weight-bold">Inovação</h3>
          <p class="text-muted small">Capacidade de inovação em nossos programas</p>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 text-center mb-4">
        <div class="journey-card p-4 h-100">
          <i class="pi pi-globe display-4 text-danger mb-3"></i>
          <h3 class="h5 font-weight-bold">Expansão</h3>
          <p class="text-muted small">Replicação do modelo em outras regiões</p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <CallToActionComponent
      title="Faça Parte da Nossa Visão"
      description="Junte-se a nós na construção de um futuro mais inclusivo e solidário para todas as crianças, adolescentes e jovens do Rio de Janeiro."
    />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

#visao {
  padding-top: $app-padding-top;
}

.bg-custom-primary {
  background: $nav-font-color;
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

.journey-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
}

.card {
  border-radius: 12px;
}

.rounded {
  border-radius: 12px !important;
}
</style>
