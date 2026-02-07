<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useNavigation } from '@/composables/useNavigation';

import isrLogo from '@/assets/imagens/isr-logo.png';
import isrLogoTexto from '@/assets/imagens/isr-logo-texto.png';

const visible = ref(false);
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
const { itensMenu, itensSubMenu } = useNavigation()
</script>
<template>
  <div class="custom-navbar p-0 container-fluid position-fixed w-100 d-none d-sm-none d-md-block"
    :class="{ 'navbar-scrolled': isScrolled }" style="top: 0; z-index: 1000">
    <!-- <div class="row py-3">
			<router-link class="col-md d-flex justify-content-center align-items-center gap-3" :to="{ name: 'home' }">
				        <img src="/imagens/isr-logo.png" alt="Logo" width="100">
        <img src="/imagens/isr-logo-texto.png" alt="Logo" class="d-none d-md-block me-2" width="450">
			</router-link>
		</div> -->
    <Menubar :model="itensMenu" :pt="{
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
    }">
      <template #start>
        <router-link :to="{ name: 'home' }">
          <img :src="isrLogo" alt="Logo" :width="isScrolled ? '60' : '80'" :class="{ 'logo-shrink': isScrolled }" />
        </router-link>
        <!-- <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg"
					class="h-8">
					<path d="..." fill="var(--p-primary-color)" />
					<path d="..." fill="var(--p-text-color)" />
				</svg> -->
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <component :is="item.to ? 'RouterLink' : 'span'"
          v-bind="item.to ? { ...props.action, to: item.to } : props.action" :class="{ 'cursor-pointer': !item.to }">
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
          <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
          <span v-if="item.shortcut"
            class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
          <i v-if="hasSubmenu" :class="[
            'pi pi-angle-down ml-auto',
            { 'pi-angle-down': root, 'pi-angle-right': !root },
          ]"></i>
        </component>
      </template>
    </Menubar>
  </div>
  <div class="sidebar-menu d-flex d-sm-flex d-md-none">
    <div class="">
      <Button icon="pi pi-bars" @click="visible = true" />
    </div>
  </div>
  <Drawer v-model:visible="visible" :block-scroll="true">
    <template #container="{ closeCallback }">
      <div class="d-flex flex-column h-100 p-2">
        <span class="d-flex justify-content-between pb-2 ">
          <router-link class="d-flex align-items-center gap-2 shrink-0" :to="{ name: 'home' }">
            <img :src="isrLogo" alt="Logo" width="50">
            <img :src="isrLogoTexto" alt="Logo" width="180" />
          </router-link>
          <span>
            <Button type="button" @click="closeCallback" icon="pi pi-times" rounded variant="outlined"
              size="small"></Button>
          </span>
        </span>
        <div class="overflow-y-auto">
          <ul class="list-none p-2 m-0">
            <li>
              <div v-ripple v-styleclass="{
                selector: '@next',
                enterFromClass: 'hidden',
                enterActiveClass: 'animate-slidedown',
                leaveToClass: 'hidden',
                leaveActiveClass: 'animate-slideup'
              }"
                class="p-2 d-flex align-items-center justify-content-between text-surface-500 dark:text-surface-400 cursor-pointer p-ripple">
                <span>INICIO</span>
                <i class="pi pi-chevron-down fs-6"></i>
              </div>
              <ul class="list-none p-0 m-0 overflow-hidden">
                <li>
                  <router-link class="text-decoration-none" :to="{ name: 'novidades' }" @click="visible = false">
                    <div
                      class="text-secondary d-flex align-items-center cursor-pointer p-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                      <i class="pi pi-bell mr-2"></i>
                      <span>Novidades</span>
                    </div>
                  </router-link>
                  <!-- <a v-ripple
                    class="text-decoration-none d-flex align-items-center cursor-pointer p-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                    <i class="pi pi-bell mr-2"></i>
                    <span>Novidades</span>
                  </a> -->
                </li>
                <li>
                  <router-link class="text-decoration-none" :to="{ name: 'transparencia' }" @click="visible = false">
                    <div
                      class="text-secondary d-flex align-items-center cursor-pointer p-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                      <i class="pi pi-chart-line mr-2"></i>
                      <span>Transparência</span>
                    </div>
                  </router-link>
                  <!-- <a v-ripple
                    class="text-decoration-none d-flex align-items-center cursor-pointer p-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                    <i class="pi pi-chart-line mr-2"></i>
                    <span>Transparência</span>
                  </a> -->
                </li>
                <li>
                  <router-link class="text-decoration-none" :to="{ name: 'contato' }" @click="visible = false">
                    <div
                      class="text-secondary d-flex align-items-center cursor-pointer p-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                      <i class="pi pi-envelope mr-2"></i>
                      <span>Contato</span>
                    </div>
                  </router-link>
                  <!-- <a v-ripple
                    class="text-decoration-none d-flex align-items-center cursor-pointer p-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                    <i class="pi pi-envelope mr-2"></i>
                    <span>Contato</span>
                  </a> -->
                </li>
              </ul>
            </li>
            <li>
              <div v-ripple v-styleclass="{
                selector: '@next',
                enterFromClass: 'hidden',
                enterActiveClass: 'animate-slidedown',
                leaveToClass: 'hidden',
                leaveActiveClass: 'animate-slideup'
              }"
                class="p-2 d-flex align-items-center justify-content-between text-surface-500 dark:text-surface-400 cursor-pointer p-ripple">
                <span>ATIVIDADES</span>
                <i class="pi pi-chevron-down"></i>
              </div>
              <ul class="list-none p-0 m-0 overflow-hidden">
                <li>
                  <router-link class="text-decoration-none" :to="{ name: 'equipe-atendimentos' }"
                    @click="visible = false">
                    <div
                      class="text-secondary d-flex align-items-center cursor-pointer p-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                      <i class="pi pi-users mr-2"></i>
                      <span>Equipe e Atendimentos</span>
                    </div>
                  </router-link>
                  <!-- <a v-ripple
                    class="text-decoration-none d-flex align-items-center cursor-pointer p-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                    <i class="pi pi-users mr-2"></i>
                    <span>Equipe e Atendimentos</span>
                  </a> -->
                </li>
                <li>
                  <router-link class="text-decoration-none" :to="{ name: 'atividades-grupos' }"
                    @click="visible = false">
                    <div
                      class="text-secondary d-flex align-items-center cursor-pointer p-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                      <i class="pi pi-users mr-2"></i>
                      <span>Atividades em Grupo</span>
                    </div>
                  </router-link>
                  <!-- <a v-ripple
                    class="text-decoration-none d-flex align-items-center cursor-pointer p-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                    <i class="pi pi-users mr-2"></i>
                    <span>Atividades em Grupo</span>
                  </a> -->
                </li>
              </ul>
            </li>
            <li>
              <div v-ripple v-styleclass="{
                selector: '@next',
                enterFromClass: 'hidden',
                enterActiveClass: 'animate-slidedown',
                leaveToClass: 'hidden',
                leaveActiveClass: 'animate-slideup'
              }"
                class="p-2 d-flex align-items-center justify-content-between text-surface-500 dark:text-surface-400 cursor-pointer p-ripple">
                <span>COMO AJUDAR</span>
                <i class="pi pi-chevron-down"></i>
              </div>
              <ul class="list-none p-0 m-0 overflow-hidden">
                <li>
                  <router-link class="text-decoration-none" :to="{ name: 'doe' }" @click="visible = false">
                    <div
                      class="text-secondary d-flex align-items-center cursor-pointer p-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                      <i class="pi pi-heart mr-2"></i>
                      <span>Doe</span>
                    </div>
                  </router-link>
                  <!-- <a v-ripple
                    class="text-decoration-none d-flex align-items-center cursor-pointer p-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                    <i class="pi pi-heart mr-2"></i>
                    <span>Doe</span>
                  </a> -->
                </li>
              </ul>
            </li>
            <li>
              <div v-ripple v-styleclass="{
                selector: '@next',
                enterFromClass: 'hidden',
                enterActiveClass: 'animate-slidedown',
                leaveToClass: 'hidden',
                leaveActiveClass: 'animate-slideup'
              }"
                class="p-2 flex items-center justify-between text-surface-500 dark:text-surface-400 cursor-pointer p-ripple">
                <span>SOBRE</span>
                <i class="pi pi-chevron-down"></i>
              </div>
              <ul class="list-none p-0 m-0 overflow-hidden">
                <li>
                  <router-link class="text-decoration-none" :to="{ name: 'nossa-historia' }" @click="visible = false">
                    <div
                      class="text-secondary d-flex align-items-center cursor-pointer p-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                      <i class="pi pi-book mr-2"></i>
                      <span>Nossa História</span>
                    </div>
                  </router-link>
                  <!-- <a v-ripple
                    class="text-decoration-none d-flex align-items-center cursor-pointer p-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                    <i class="pi pi-book mr-2"></i>
                    <span>Nossa História</span>
                  </a> -->
                </li>
                <li>
                  <router-link class="text-decoration-none" :to="{ name: 'missao' }" @click="visible = false">
                    <div
                      class="text-secondary d-flex align-items-center cursor-pointer p-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                      <i class="pi pi-bullseye mr-2"></i>
                      <span>Missão</span>
                    </div>
                  </router-link>
                  <!-- <a v-ripple
                    class="text-decoration-none d-flex align-items-center cursor-pointer p-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                    <i class="pi pi-bullseye mr-2"></i>
                    <span>Missão</span>
                  </a> -->
                </li>
                <li>
                  <router-link class="text-decoration-none" :to="{ name: 'visao' }" @click="visible = false">
                    <div
                      class="text-secondary d-flex align-items-center cursor-pointer p-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                      <i class="pi pi-eye mr-2"></i>
                      <span>Visão</span>
                    </div>
                  </router-link>
                  <!-- <a v-ripple
                    class="text-decoration-none d-flex align-items-center cursor-pointer p-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                    <i class="pi pi-eye mr-2"></i>
                    <span>Visão</span>
                  </a> -->
                </li>
                <li>
                  <router-link class="text-decoration-none" :to="{ name: 'valores' }" @click="visible = false">
                    <div
                      class="text-secondary d-flex align-items-center cursor-pointer p-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                      <i class="pi pi-heart mr-2"></i>
                      <span>Valores</span>
                    </div>
                  </router-link>
                  <!-- <a v-ripple
                    class="text-decoration-none d-flex align-items-center cursor-pointer p-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                    <i class="pi pi-heart mr-2"></i>
                    <span>Valores</span>
                  </a> -->
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </Drawer>
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

.sidebar-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 50px;
  height: 100%;
  background: $primary-color;
  justify-content: center;
  z-index: 8;
  padding: 5px 0px;
}
</style>
