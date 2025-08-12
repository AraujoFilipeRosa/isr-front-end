<script setup lang="ts">
import ComponenteNavegacao from '@/components/ComponenteNavegacao.vue'
import ComponenteRodape from '@/components/ComponenteRodape.vue'
</script>

<template>
  <ComponenteNavegacao></ComponenteNavegacao>
  <router-view />
  <ComponenteRodape />
</template>

<style scoped></style>
