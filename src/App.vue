<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useRouteMeta } from '@/composables/useRouteMeta'
import { watch } from 'vue'

const { pageTitle, pageDescription } = useRouteMeta()

// Atualizar título da página dinamicamente
watch(
  pageTitle,
  (newTitle) => {
    document.title = `${newTitle} - Instituto Shanti Rao`
  },
  { immediate: true },
)

// Atualizar meta description dinamicamente
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
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
</template>

<style scoped></style>
