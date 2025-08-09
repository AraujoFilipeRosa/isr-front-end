<script setup lang="ts">
import NavComponent from '@/components/NavComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <NavComponent></NavComponent>
  <router-view />
  <FooterComponent />
</template>

<style scoped></style>
