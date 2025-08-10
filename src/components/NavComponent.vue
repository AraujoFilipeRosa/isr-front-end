<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useNavigation } from '@/composables/useNavigation'

import isrLogo from '@/assets/imagens/isr-logo.png'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Usar navegação dinâmica baseada nas rotas
const { menuItems, subMenuItems } = useNavigation()
</script>
<template>
  <div
    class="custom-navbar p-0 container-fluid position-fixed w-100"
    :class="{ 'navbar-scrolled': isScrolled }"
    style="top: 0; z-index: 1000"
  >
    <!-- <div class="row py-3">
			<router-link class="col-md d-flex justify-content-center align-items-center gap-3" :to="{ name: 'home' }">
				        <img src="/imagens/isr-logo.png" alt="Logo" width="100">
        <img src="/imagens/isr-logo-texto.png" alt="Logo" class="d-none d-md-block me-2" width="450">
			</router-link>
		</div> -->
    <Menubar
      :model="menuItems"
      :pt="{
        root: { class: 'border-0 rounded-0 custom-menubar-nav justify-content-center' },
        rootList: { class: 'custom-navbar-root-list' },
        itemContent: {
          class: 'custom-navbar-item-content',
          style: {
            '--p-menubar-item-focus-background': 'transparent',
          },
        },
        itemLink: {
          class: 'custom-navbar-item fs-5',
        },
        itemIocon: {
          class: 'fs-5',
        },
        button: { class: 'flex-fill rounded-1' },
      }"
    >
      <template #start>
        <router-link :to="{ name: 'home' }">
          <img
            :src="isrLogo"
            alt="Logo"
            :width="isScrolled ? '60' : '80'"
            :class="{ 'logo-shrink': isScrolled }"
          />
        </router-link>
        <!-- <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg"
					class="h-8">
					<path d="..." fill="var(--p-primary-color)" />
					<path d="..." fill="var(--p-text-color)" />
				</svg> -->
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <component
          :is="item.to ? 'RouterLink' : 'span'"
          v-bind="item.to ? { ...props.action, to: item.to } : props.action"
          :class="{ 'cursor-pointer': !item.to }"
        >
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
          <Badge
            v-if="item.badge"
            :class="{ 'ml-auto': !root, 'ml-2': root }"
            :value="item.badge"
          />
          <span
            v-if="item.shortcut"
            class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
            >{{ item.shortcut }}</span
          >
          <i
            v-if="hasSubmenu"
            :class="[
              'pi pi-angle-down ml-auto',
              { 'pi-angle-down': root, 'pi-angle-right': !root },
            ]"
          ></i>
        </component>
      </template>
    </Menubar>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

.custom-navbar {
  transition: all 0.3s ease;

  &.navbar-scrolled {
    padding: 0.5rem 0;

    .custom-menubar-nav {
      padding: 0.5rem 1rem;
    }

    .custom-navbar-item {
      font-size: 0.9rem !important;
      padding: 0.5rem 0.75rem !important;
    }

    .logo-shrink {
      transition: all 0.3s ease;
      transform: scale(0.9);
    }
  }

  .custom-menubar-nav {
    transition: all 0.3s ease;
    padding: 1rem;
  }

  .custom-navbar-item {
    transition: all 0.3s ease;
    font-size: 1.1rem !important;
    padding: 0.75rem 1rem !important;
  }
}

.custom-menubar-nav {
  background: $primary-color;
}

.custom-navbar-root-list {
  gap: 0.5rem;
}

.custom-navbar-item-content {
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
  }
}

.custom-navbar-item {
  font-family: $app-nav-font-family;
  color: $nav-font-color;
}

.router-link-active {
  color: $nav-font-color-hover;
}

.custom-menubar-subnav {
  background: $subnav-color;
}
</style>
