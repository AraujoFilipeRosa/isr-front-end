/**
 * Configuração do Vite para desenvolvimento com subdomínios
 *
 * Para usar os subdomínios em desenvolvimento:
 * 1. Adicione ao seu arquivo hosts (/etc/hosts no Linux/Mac ou C:\Windows\System32\drivers\etc\hosts no Windows):
 *    127.0.0.1    pt.localhost
 *    127.0.0.1    br.localhost
 *
 * 2. Execute o comando: npm run dev:subdomain
 *
 * 3. Acesse:
 *    - http://br.localhost:8000 (Português do Brasil)
 *    - http://pt.localhost:8000 (Português de Portugal)
 */

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    Components({
      resolvers: [PrimeVueResolver()],
    }),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 8000,
    host: '0.0.0.0', // Permite acesso externo
    strictPort: true,
    cors: true,
  },
})
