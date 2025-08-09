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

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
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
