<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useRouteMeta } from '@/composables/useRouteMeta'
import { watch } from 'vue'

const { pageTitle, pageDescription } = useRouteMeta()

watch(
  pageTitle,
  (newTitle) => {
    document.title = `${newTitle} - Instituto Severa Romana`
  },
  { immediate: true },
)

watch(
  pageDescription,
  (newDescription) => {
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', newDescription)
  },
  { immediate: true },
)
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
