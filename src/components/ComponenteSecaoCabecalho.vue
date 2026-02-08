<script setup lang="ts">

interface Props {
  icone: string
  titulo: string
  descricao: string
  atraso?: number
  duracao?: number
  classeCustomizada?: string
}

const props = withDefaults(defineProps<Props>(), {
  classeCustomizada: '',
})
</script>

<template>
  <section
    :class="`row mt-lg-4 mb-4 py-5 px-4 bg-primary-custom text-white rounded-none md:rounded-lg shadow-custom-strong ${props.classeCustomizada}`">
    <div class="col-12 text-center">
      <i :class="`pi ${props.icone} display-1 mb-3`" style="font-size: 3rem !important"></i>
      <h1 class="display-4 font-weight-bold mb-4">{{ props.titulo }}</h1>
      <p class="lead text-center mx-auto" style="max-width: 800px">
        {{ props.descricao }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.rounded-custom {
  border-radius: 16px;
}

.shadow-custom-strong {
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}
</style>
