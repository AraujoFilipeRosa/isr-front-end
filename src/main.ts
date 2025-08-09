import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/tailwind.css'
import './assets/main.scss'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { MotionPlugin } from '@vueuse/motion'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

import App from './App.vue'
import MAIN_ROUTE from './router'

// import AnimateOnScroll from 'primevue/animateonscroll'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    // preset: definePreset(Aura, {
    //   semantic: {
    //     primary: {
    //       50: '{teal.50}',
    //       100: '{teal.100}',
    //       200: '{teal.200}',
    //       300: '{teal.300}',
    //       400: '{teal.400}',
    //       500: '{teal.500}',
    //       600: '{teal.600}',
    //       700: '{teal.700}',
    //       800: '{teal.800}',
    //       900: '{teal.900}',
    //       950: '{teal.950}',
    //     },
    //   },
    // }),
    options: {
      darkModeSelector: 'none',
    },
  },
})

// app.directive('animateonscroll', AnimateOnScroll)

app.use(createPinia())
app.use(MAIN_ROUTE)
app.use(MotionPlugin)

app.mount('#app')
