<script setup lang="ts">
import ComponenteChamadaAcao from '@/components/ComponenteChamadaAcao.vue';
import ComponenteSecaoCabecalho from '@/components/ComponenteSecaoCabecalho.vue';
import { useI18n } from '@/composables/useI18n';

const { t } = useI18n()
</script>

<template>
  <div id="missao" class="container-sm-fluid container-md-fluid container-lg my-5 page-container">
    <!-- Header da Missão -->
    <ComponenteSecaoCabecalho icone="pi-bullseye" :titulo="t('sobre.missao.titulo')"
      :descricao="t('sobre.missao.descricao')" :duracao="1000" />

    <!-- Pilares da Missão -->
    <section v-motion :initial="{ opacity: 0, y: 0 }" :visible="{ opacity: 1, y: 0 }" :duration="1000" :delay="200"
      class="row my-5">
      <div class="col-12 text-center mb-5">
        <h2 class="title font-weight-bold">Pilares da Nossa Missão</h2>
        <p class="text-muted">{{ t('sobre.missao.pilares.subtitulo') }}</p>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100 card-custom mission-card">
          <div class="card-body text-center p-4 d-flex flex-column">
            <div class="icon-circle mb-3 flex-shrink-0">
              <i class="pi pi-heart"></i>
            </div>
            <h3 class="card-title h5 font-weight-bold mb-3">
              {{ t('sobre.missao.pilares.inclusaoSocial.titulo') }}
            </h3>
            <p class="card-text text-muted flex-grow-1">
              {{ t('sobre.missao.pilares.inclusaoSocial.descricao') }}
            </p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100 card-custom mission-card">
          <div class="card-body text-center p-4 d-flex flex-column">
            <div class="icon-circle mb-3 flex-shrink-0">
              <i class="pi pi-users"></i>
            </div>
            <h3 class="card-title h5 font-weight-bold mb-3">
              {{ t('sobre.missao.pilares.autonomia.titulo') }}
            </h3>
            <p class="card-text text-muted flex-grow-1">
              {{ t('sobre.missao.pilares.autonomia.descricao') }}
            </p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100 card-custom mission-card">
          <div class="card-body text-center p-4 d-flex flex-column">
            <div class="icon-circle mb-3 flex-shrink-0">
              <i class="pi pi-home"></i>
            </div>
            <h3 class="card-title h5 font-weight-bold mb-3">
              {{ t('sobre.missao.pilares.familiaComunidade.titulo') }}
            </h3>
            <p class="card-text text-muted flex-grow-1">
              {{ t('sobre.missao.pilares.familiaComunidade.descricao') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Como Atuamos -->
    <section v-motion :initial="{ opacity: 0, x: 0 }" :visible="{ opacity: 1, x: 0 }" :duration="1000" :delay="200"
      class="row my-5 py-4 px-3 bg-light rounded">
      <div class="col-sm-12 col-md-12 col-lg-6">
        <h2 class="title font-weight-bold mb-4">Como Atuamos</h2>
        <div class="mb-4">
          <div class="d-flex align-items-center mb-3">
            <i class="pi pi-check-circle text-success me-3"></i>
            <h5 class="mb-0">Programas Psicossociais</h5>
          </div>
          <p class="text-muted ms-5">
            Desenvolvemos programas especializados que atendem às necessidades específicas de cada
            indivíduo, promovendo seu desenvolvimento integral.
          </p>
        </div>

        <div class="mb-4">
          <div class="d-flex align-items-center mb-3">
            <i class="pi pi-check-circle text-success me-3"></i>
            <h5 class="mb-0">Programas Pedagógicos</h5>
          </div>
          <p class="text-muted ms-5">
            Oferecemos atividades educacionais que complementam o desenvolvimento acadêmico e social
            de nossas crianças e jovens.
          </p>
        </div>

        <div class="mb-4">
          <div class="d-flex align-items-center mb-3">
            <i class="pi pi-check-circle text-success me-3"></i>
            <h5 class="mb-0">Defesa de Direitos</h5>
          </div>
          <p class="text-muted ms-5">
            Articulamos ações para garantir que os direitos de pessoas com deficiência sejam
            respeitados e promovidos em todos os âmbitos sociais.
          </p>
        </div>
      </div>

      <div class="col-sm-12 col-md-12 col-lg-6">
        <div class="bg-white p-4 rounded shadow-sm">
          <h3 class="font-weight-bold mb-3">Nossos Pilares</h3>
          <ul class="list-unstyled">
            <li class="mb-2">
              <i class="pi pi-check-circle text-success me-2"></i>
              <strong>Programas Psicossociais:</strong> Desenvolvimento integral personalizado
            </li>
            <li class="mb-2">
              <i class="pi pi-book text-primary me-2"></i>
              <strong>Programas Pedagógicos:</strong> Complementação educacional e social
            </li>
            <li class="mb-2">
              <i class="pi pi-shield text-info me-2"></i>
              <strong>Defesa de Direitos:</strong> Articulação e promoção de direitos
            </li>
            <li class="mb-2">
              <i class="pi pi-users text-warning me-2"></i>
              <strong>Trabalho em Rede:</strong> Parcerias comunitárias e institucionais
            </li>
            <li class="mb-2">
              <i class="pi pi-heart text-danger me-2"></i>
              <strong>Acolhimento:</strong> Ambiente seguro e acolhedor
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Impacto -->
    <section v-motion :initial="{ opacity: 0, x: 0 }" :visible="{ opacity: 1, x: 0 }" :duration="1000" :delay="200"
      class="row my-5">
      <div class="col-12 text-center mb-4">
        <h2 class="title font-weight-bold">{{ t('sobre.missao.impacto.titulo') }}</h2>
        <p class="text-muted">{{ t('sobre.missao.impacto.subtitulo') }}</p>
      </div>

      <div class="col-lg-3 col-md-6 text-center mb-4">
        <div class="card-custom card-hover-light p-4 h-100">
          <i class="pi pi-users display-4 text-primary mb-3"></i>
          <h3 class="h4 font-weight-bold">{{ t('sobre.missao.impacto.criancasJovens.titulo') }}</h3>
          <p class="text-muted">{{ t('sobre.missao.impacto.criancasJovens.descricao') }}</p>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 text-center mb-4">
        <div class="card-custom card-hover-light p-4 h-100">
          <i class="pi pi-home display-4 text-success mb-3"></i>
          <h3 class="h4 font-weight-bold">{{ t('sobre.missao.impacto.familias.titulo') }}</h3>
          <p class="text-muted">{{ t('sobre.missao.impacto.familias.descricao') }}</p>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 text-center mb-4">
        <div class="card-custom card-hover-light p-4 h-100">
          <i class="pi pi-globe display-4 text-info mb-3"></i>
          <h3 class="h4 font-weight-bold">{{ t('sobre.missao.impacto.comunidade.titulo') }}</h3>
          <p class="text-muted">{{ t('sobre.missao.impacto.comunidade.descricao') }}</p>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 text-center mb-4">
        <div class="card-custom card-hover-light p-4 h-100">
          <i class="pi pi-heart display-4 text-danger mb-3"></i>
          <h3 class="h4 font-weight-bold">{{ t('sobre.missao.impacto.inclusao.titulo') }}</h3>
          <p class="text-muted">{{ t('sobre.missao.impacto.inclusao.descricao') }}</p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <ComponenteChamadaAcao :titulo="t('sobre.missao.callToAction.titulo')"
      :descricao="t('sobre.missao.callToAction.descricao')" textoBotaoSecundario="Faça parte"
      iconeBotaoSecundario="pi pi-envelope" rotaSecundaria="contato" />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

.bg-primary {
  background: #6c757d !important;
}

.card {
  border-radius: 12px;
}

.rounded {
  border-radius: 12px !important;
}
</style>
