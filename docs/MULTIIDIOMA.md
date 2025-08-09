# 🌍 Sistema Multiidioma por Subdomínio

O Instituto Severa Romana agora suporta **português brasileiro** e **português de Portugal** através de subdomínios específicos.

## 🎯 **Como Funciona**

### URLs de Produção

```
https://br.isr.org.br  → Português do Brasil
https://pt.isr.org.br  → Português de Portugal
```

### URLs de Desenvolvimento

```
http://br.localhost:8000  → Português do Brasil
http://pt.localhost:8000  → Português de Portugal
```

## 🛠️ **Configuração para Desenvolvimento**

### 1. Configurar Hosts Local

Adicione no seu arquivo hosts:

**Windows:** `C:\Windows\System32\drivers\etc\hosts`
**Linux/Mac:** `/etc/hosts`

```
127.0.0.1    br.localhost
127.0.0.1    pt.localhost
```

### 2. Executar o Servidor

```bash
npm run dev:subdomain
```

### 3. Acessar as URLs

- 🇧🇷 **Brasil:** http://br.localhost:8000
- 🇵🇹 **Portugal:** http://pt.localhost:8000

## ⚡ **Detecção Automática**

O sistema detecta automaticamente o idioma baseado no subdomínio:

```typescript
// Função de detecção
const detectarIdiomaUrl = (): IdiomaDisponivel => {
  const hostname = window.location.hostname

  if (hostname.startsWith('pt.')) {
    return 'pt-PT' // Portugal
  } else if (hostname.startsWith('br.')) {
    return 'pt-BR' // Brasil
  }

  return 'pt-BR' // Padrão
}
```

## 🔄 **Principais Diferenças Linguísticas**

| **Brasil**   | **Portugal**    |
| ------------ | --------------- |
| Atividades   | **Actividades** |
| Contato      | **Contacto**    |
| Utilizar     | **Utilizar**    |
| Escaneie     | **Digitalize**  |
| Nos siga     | **Siga-nos**    |
| Conosco      | **Connosco**    |
| Salvar       | **Guardar**     |
| Baixar       | **Descarregar** |
| Compartilhar | **Partilhar**   |

## 📁 **Estrutura de Arquivos**

```
src/
├── locales/
│   ├── pt-BR.ts     # Português do Brasil
│   ├── pt-PT.ts     # Português de Portugal
│   └── index.ts     # Configuração dos idiomas
├── composables/
│   └── useI18n.ts   # Hook de internacionalização
└── router/
    └── index.ts     # Router com títulos localizados
```

## 🧩 **Como Usar nos Componentes**

```vue
<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <h1>{{ t('home.titulo') }}</h1>
  <p>{{ t('home.descricao') }}</p>
</template>
```

## 🌐 **Redirecionamento Automático**

Caso seja necessário redirecionar programaticamente:

```typescript
import { useI18n } from '@/composables/useI18n'

const { definirIdioma } = useI18n()

// Redireciona para Portugal
definirIdioma('pt-PT') // → pt.localhost:8000

// Redireciona para Brasil
definirIdioma('pt-BR') // → br.localhost:8000
```

## 📋 **Vantagens desta Abordagem**

✅ **SEO Otimizado** - Cada idioma tem uma URL única  
✅ **Sem JavaScript** - Detecção funciona mesmo com JS desabilitado  
✅ **Cache Eficiente** - CDNs podem cachear por subdomínio  
✅ **Bookmarks** - Usuários podem salvar a versão preferida  
✅ **Analytics** - Fácil separação de métricas por idioma  
✅ **Profissional** - Padrão usado por grandes sites

## 🚀 **Expansão Futura**

Para adicionar novos idiomas:

1. **Criar arquivo de tradução** (ex: `en-US.ts`)
2. **Atualizar `IDIOMAS_DISPONIVEIS`** em `src/locales/index.ts`
3. **Adicionar detecção** em `detectarIdiomaUrl()`
4. **Configurar subdomínio** (`en.isr.org.br`)

## 🔧 **Troubleshooting**

### Problema: Subdomínio não funciona

**Solução:** Verifique se adicionou as entradas no arquivo hosts

### Problema: Páginas em branco

**Solução:** Execute `npm run dev:subdomain` em vez de `npm run dev`

### Problema: Textos não traduzem

**Solução:** Verifique se a chave existe em ambos os arquivos pt-BR.ts e pt-PT.ts

---

**Criado com 💚 para o Instituto Severa Romana**
