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
import { definePreset } from '@primeuix/themes'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    // preset: Aura,
    preset: definePreset(Aura, {
      semantic: {
        primary: {
          50: '{sky.50}',
          100: '{sky.100}',
          200: '{sky.200}',
          300: '{sky.300}',
          400: '{sky.400}',
          500: '{sky.500}',
          600: '{sky.600}',
          700: '{sky.700}',
          800: '{sky.800}',
          900: '{sky.900}',
          950: '{sky.950}',
        },
      },
    }),
    options: {
      darkModeSelector: 'none',
    },
  },
})
app.use(createPinia())
app.use(MAIN_ROUTE)
app.use(MotionPlugin)

app.mount('#app')
