<template>
  <section class="row my-4">
    <div class="col-md">
      <h1 class="title mb-4 text-center font-weight-bold">{{ titulo }}</h1>

      <!-- Slot para descrição customizada -->
      <template v-if="$slots.descricao">
        <slot name="descricao" />
      </template>

      <!-- Slot para conteúdo customizado -->
      <template v-if="$slots.default">
        <slot />
      </template>

      <!-- Caso contrário, use a descrição padrão -->
      <p v-else-if="descricao" class="text-center text-muted text-justify">
        {{ descricao }}
      </p>

      <!-- Informação adicional (opcional) -->
      <div v-if="info" class="info-section text-center">
        <p class="custom-text-info">
          <i class="pi pi-info-circle me-2"></i>
          {{ info }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  titulo: string
  descricao?: string
  info?: string
}

defineProps<Props>()
</script>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

/* Estilos específicos do componente podem ser adicionados aqui se necessário */

/* Estilos para seção de informação */
.info-section {
  .custom-text-info {
    font-size: 0.9rem;
    color: $text-info;
  }
}
</style>
