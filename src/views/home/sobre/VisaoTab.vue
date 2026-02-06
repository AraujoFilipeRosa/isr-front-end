<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'
import ComponenteChamadaAcao from '@/components/ComponenteChamadaAcao.vue'
import ComponenteSecaoCabecalho from '@/components/ComponenteSecaoCabecalho.vue'
import ComponenteCard from '@/components/ComponenteCard.vue'

const { t } = useI18n()
</script>

<template>
  <div id="visao" class="container my-5">
    <!-- Header da Visão -->
    <ComponenteSecaoCabecalho icone="pi-eye" :titulo="t('visao.titulo')" :descricao="t('visao.descricao')"
      :duracao="1000" />

    <!-- Visão Detalhada -->
    <section v-motion :initial="{ opacity: 0, y: 0 }" :visible="{ opacity: 1, y: 0 }" :duration="1000" :delay="200"
      class="row justify-content-center my-5">
      <div class="col-12 text-center mb-5">
        <h2 class="title font-weight-bold">{{ t('visao.futuro.titulo') }}</h2>
        <p class="text-muted">{{ t('visao.futuro.descricao') }}</p>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <ComponenteCard variante="visao">
          <div class="vision-icon mb-3 flex-shrink-0">
            <i class="pi pi-eye"></i>
          </div>
          <h3 class="card-title h5 font-weight-bold mb-3">
            {{ t('visao.objetivos.inovacao.titulo') }}
          </h3>
          <p class="card-text text-muted flex-grow-1">
            {{ t('visao.objetivos.inovacao.descricao') }}
          </p>
        </ComponenteCard>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <ComponenteCard variante="visao">
          <div class="vision-icon mb-3 flex-shrink-0">
            <i class="pi pi-globe"></i>
          </div>
          <h3 class="card-title h5 font-weight-bold mb-3">
            {{ t('visao.objetivos.sustentabilidade.titulo') }}
          </h3>
          <p class="card-text text-muted flex-grow-1">
            {{ t('visao.objetivos.sustentabilidade.descricao') }}
          </p>
        </ComponenteCard>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <ComponenteCard variante="visao">
          <div class="vision-icon mb-3 flex-shrink-0">
            <i class="pi pi-users"></i>
          </div>
          <h3 class="card-title h5 font-weight-bold mb-3">
            {{ t('visao.objetivos.impacto.titulo') }}
          </h3>
          <p class="card-text text-muted flex-grow-1">
            {{ t('visao.objetivos.impacto.descricao') }}
          </p>
        </ComponenteCard>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <ComponenteCard variante="visao">
          <div class="vision-icon mb-3 flex-shrink-0">
            <i class="pi pi-star"></i>
          </div>
          <h3 class="card-title h5 font-weight-bold mb-3">
            {{ t('visao.objetivos.excelencia.titulo') }}
          </h3>
          <p class="card-text text-muted flex-grow-1">
            {{ t('visao.objetivos.excelencia.descricao') }}
          </p>
        </ComponenteCard>
      </div>
    </section>

    <!-- Call to Action -->
    <ComponenteChamadaAcao :titulo="t('visao.callToAction.titulo')" :descricao="t('visao.callToAction.descricao')"
      :textoBotaoSecundario="t('visao.callToAction.botao')" iconeBotaoSecundario="pi pi-envelope"
      rotaSecundaria="contato" />
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
    background: linear-gradient(318deg, $nav-font-color, $nav-font-color-light);
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
