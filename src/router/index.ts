import { createRouter, createWebHistory } from 'vue-router'
import { TRADUCOES, type IdiomaDisponivel } from '@/locales'

const detectarIdiomaUrl = (): IdiomaDisponivel => {
  const hostname = window.location.hostname

  if (hostname.startsWith('pt.')) {
    return 'pt-PT'
  } else if (hostname.startsWith('br.')) {
    return 'pt-BR'
  }

  return 'pt-BR'
}

const idiomaAtual = detectarIdiomaUrl()
const traducoes = TRADUCOES[idiomaAtual]

const MAIN_ROUTE = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/home/MainView.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('../views/home/HomeTab.vue'),
          meta: {
            title: traducoes.navegacao.inicio,
            icon: 'pi pi-home',
            showInMenu: true,
            order: 1,
          },
        },
        {
          path: '/sobre',
          name: 'sobre',
          component: () => import('../views/home/sobre/SobreView.vue'),
          redirect: '/sobre/nossa-historia',
          meta: {
            title: traducoes.navegacao.sobre.titulo,
            icon: 'pi pi-info-circle',
            showInMenu: true,
            order: 2,
          },
          children: [
            {
              path: 'nossa-historia',
              name: 'nossa-historia',
              component: () => import('../views/home/sobre/NossaHistoriaTab.vue'),
              meta: {
                title: traducoes.navegacao.sobre.nossaHistoria,
                icon: 'pi pi-book',
                showInMenu: true,
                parent: 'sobre',
              },
            },
            {
              path: 'missao',
              name: 'missao',
              component: () => import('../views/home/sobre/MissaoTab.vue'),
              meta: {
                title: traducoes.navegacao.sobre.missao,
                icon: 'pi pi-bullseye',
                showInMenu: true,
                parent: 'sobre',
              },
            },
            {
              path: 'visao',
              name: 'visao',
              component: () => import('../views/home/sobre/VisaoTab.vue'),
              meta: {
                title: traducoes.navegacao.sobre.visao,
                icon: 'pi pi-eye',
                showInMenu: true,
                parent: 'sobre',
              },
            },
            {
              path: 'valores',
              name: 'valores',
              component: () => import('../views/home/sobre/ValoresTab.vue'),
              meta: {
                title: traducoes.navegacao.sobre.valores,
                icon: 'pi pi-heart',
                showInMenu: true,
                parent: 'sobre',
              },
            },
          ],
        },
        {
          path: '/atividades',
          name: 'atividades',
          component: () => import('../views/home/atividades/AtividadesView.vue'),
          redirect: '/atividades/equipe-atendimentos',
          meta: {
            title: traducoes.navegacao.atividades.titulo,
            icon: 'pi pi-calendar',
            showInMenu: true,
            order: 3,
          },
          children: [
            {
              path: 'equipe-atendimentos',
              name: 'equipe-atendimentos',
              component: () => import('../views/home/atividades/EquipeAtendimentosTab.vue'),
              meta: {
                title: traducoes.navegacao.atividades.equipeAtendimentos,
                icon: 'pi pi-users',
                showInMenu: true,
                parent: 'atividades',
              },
            },
            {
              path: 'atividades-grupos',
              name: 'atividades-grupos',
              component: () => import('../views/home/atividades/AtividadesGruposTab.vue'),
              meta: {
                title: traducoes.navegacao.atividades.atividadesGrupos,
                icon: 'pi pi-users',
                showInMenu: true,
                parent: 'atividades',
              },
            },
          ],
        },
        {
          path: '/como-ajudar',
          name: 'como-ajudar',
          component: () => import('../views/home/como-ajudar/ComoAjudarView.vue'),
          redirect: '/como-ajudar/doe',
          meta: {
            title: traducoes.navegacao.comoAjudar.titulo,
            icon: 'pi pi-heart',
            showInMenu: true,
            order: 4,
          },
          children: [
            {
              path: 'doe',
              name: 'doe',
              component: () => import('../views/home/como-ajudar/DoeTab.vue'),
              meta: {
                title: traducoes.navegacao.comoAjudar.doe,
                icon: 'pi pi-heart-fill',
                showInMenu: true,
                parent: 'como-ajudar',
              },
            },
          ],
        },
        {
          path: '/transparencia',
          name: 'transparencia',
          component: () => import('../views/home/TransparenciaTab.vue'),
          meta: {
            title: traducoes.navegacao.transparencia,
            icon: 'pi pi-chart-line',
            showInMenu: true,
            order: 5,
          },
        },
        {
          path: '/novidades',
          name: 'novidades',
          component: () => import('../views/home/NovidadesTab.vue'),
          meta: {
            title: traducoes.navegacao.novidades,
            icon: 'pi pi-bell',
            showInMenu: true,
            order: 6,
          },
        },
        {
          path: '/contato',
          name: 'contato',
          component: () => import('../views/home/ContatoTab.vue'),
          meta: {
            title: traducoes.navegacao.contato,
            icon: 'pi pi-envelope',
            showInMenu: true,
            order: 7,
          },
        },
      ],
    },
    {
      path: '/404',
      name: 'nao-encontrado',
      component: () => import('../views/erro/NaoEncontradoView.vue'),
      meta: {
        title: traducoes.erros.paginaNaoEncontrada,
        showInMenu: false,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

export default MAIN_ROUTE
