<script setup lang="ts">
import { MotionDirective as motion } from '@vueuse/motion'
import { useI18n } from '@/composables/useI18n'
import CallToActionComponent from '@/components/CallToActionComponent.vue'
import CardComponent from '@/components/CardComponent.vue'

const { t } = useI18n()
</script>

<template>
  <div id="erro-404" class="container my-5">
    <!-- Header da Página 404 -->
    <section class="row bg-custom-primary text-white rounded shadow-lg">
      <div class="col-12 text-center">
        <RouterLink to="/">
          <img
            src="@/assets/imagens/isr-logo.png"
            alt="Logo ISR"
            class="mt-2"
            style="height: 80px"
            loading="lazy"
          />
        </RouterLink>
        <h1 class="display-1 font-weight-bold mb-3" style="font-size: 8rem">
          {{ t('erro404.codigo') }}
        </h1>
        <h2 class="display-4 font-weight-bold mb-4">{{ t('erro404.titulo') }}</h2>
        <p class="lead text-center mx-auto mb-5" style="max-width: 600px">
          {{ t('erro404.descricao') }}
        </p>
      </div>
    </section>

    <!-- Links de Navegação Úteis -->
    <section class="row my-5">
      <div class="col-12 text-center mb-5">
        <h2 class="title font-weight-bold">{{ t('erro404.sugestoes.titulo') }}</h2>
        <p class="text-muted">{{ t('erro404.sugestoes.descricao') }}</p>
      </div>

      <div class="col-lg-3 col-md-6 mb-4">
        <CardComponent>
          <div class="mb-3 flex-shrink-0">
            <i class="pi pi-users display-4 text-primary"></i>
          </div>
          <h3 class="card-title h5 font-weight-bold mb-3">
            {{ t('erro404.sugestoes.itens.sobre.titulo') }}
          </h3>
          <p class="card-text text-muted flex-grow-1 mb-4">
            {{ t('erro404.sugestoes.itens.sobre.descricao') }}
          </p>
          <RouterLink to="/sobre" class="btn btn-primary mt-auto">
            <i class="pi pi-arrow-right me-2"></i>{{ t('erro404.sugestoes.botao') }}
          </RouterLink>
        </CardComponent>
      </div>

      <div class="col-lg-3 col-md-6 mb-4">
        <CardComponent>
          <div class="mb-3 flex-shrink-0">
            <i class="pi pi-calendar display-4 text-success"></i>
          </div>
          <h3 class="card-title h5 font-weight-bold mb-3">
            {{ t('erro404.sugestoes.itens.atividades.titulo') }}
          </h3>
          <p class="card-text text-muted flex-grow-1 mb-4">
            {{ t('erro404.sugestoes.itens.atividades.descricao') }}
          </p>
          <RouterLink to="/atividades" class="btn btn-success mt-auto">
            <i class="pi pi-arrow-right me-2"></i>{{ t('erro404.sugestoes.botao') }}
          </RouterLink>
        </CardComponent>
      </div>

      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body text-center p-4 d-flex flex-column">
            <div class="mb-3 flex-shrink-0">
              <i class="pi pi-heart display-4 text-danger"></i>
            </div>
            <h3 class="card-title h5 font-weight-bold mb-3">
              {{ t('erro404.sugestoes.itens.comoAjudar.titulo') }}
            </h3>
            <p class="card-text text-muted flex-grow-1 mb-4">
              {{ t('erro404.sugestoes.itens.comoAjudar.descricao') }}
            </p>
            <RouterLink to="/como-ajudar" class="btn btn-danger mt-auto">
              <i class="pi pi-arrow-right me-2"></i>{{ t('erro404.sugestoes.botao') }}
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body text-center p-4 d-flex flex-column">
            <div class="mb-3 flex-shrink-0">
              <i class="pi pi-shield display-4 text-info"></i>
            </div>
            <h3 class="card-title h5 font-weight-bold mb-3">
              {{ t('erro404.sugestoes.itens.transparencia.titulo') }}
            </h3>
            <p class="card-text text-muted flex-grow-1 mb-4">
              {{ t('erro404.sugestoes.itens.transparencia.descricao') }}
            </p>
            <RouterLink to="/transparencia" class="btn btn-info mt-auto">
              <i class="pi pi-arrow-right me-2"></i>{{ t('erro404.sugestoes.botao') }}
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped lang="scss">
@use '@/assets/base.scss' as *;

.bg-custom-primary {
  background: $nav-font-color;
}
</style>
