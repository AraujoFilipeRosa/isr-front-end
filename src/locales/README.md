# Sistema de Localização (i18n)

Este diretório contém o sistema de internacionalização da aplicação ISR. Mesmo sendo atualmente apenas em português, esta estrutura facilita a manutenção dos textos e permite futura expansão para outros idiomas.

## Estrutura de Arquivos

```
src/locales/
├── index.ts          # Ponto de entrada e configuração
├── pt-BR.ts          # Traduções em Português Brasileiro
└── README.md         # Este arquivo de documentação
```

## Como Usar

### 1. Em Componentes Vue (Composition API)

```vue
<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const { t, getSection } = useI18n()
</script>

<template>
  <div>
    <!-- Texto simples -->
    <h1>{{ t('home.titulo') }}</h1>

    <!-- Texto com parâmetros -->
    <p>{{ t('mensagem.boas-vindas', { nome: 'João' }) }}</p>

    <!-- Usando seção completa -->
    <nav>
      <router-link v-for="item in getSection('navegacao')" :key="item" :to="item.rota">
        {{ item.titulo }}
      </router-link>
    </nav>
  </div>
</template>
```

### 2. No Router

```typescript
import { i18n } from '@/composables/useI18n'

const routes = [
  {
    path: '/sobre',
    name: 'sobre',
    meta: {
      title: () => i18n.t('navegacao.sobre.titulo'),
    },
  },
]
```

### 3. Em Scripts (fora de componentes)

```typescript
import { i18n } from '@/composables/useI18n'

const titulo = i18n.t('home.titulo')
```

## Organização das Traduções

O arquivo `pt-BR.ts` está organizado em seções lógicas:

### Navegação e Menus

```typescript
navegacao: {
  inicio: 'Início',
  sobre: {
    titulo: 'Sobre',
    missao: 'Missão',
    // ...
  }
}
```

### Conteúdo das Páginas

```typescript
home: {
  titulo: 'Instituto Severa Romana',
  secoes: {
    reciclagem: {
      titulo: 'Reciclagem',
      descricao: '...'
    }
  }
}
```

### Componentes Reutilizáveis

```typescript
componentes: {
  callToAction: {
    botoes: {
      comoAjudar: 'Como Ajudar',
      entrarContato: 'Entre em Contato'
    }
  }
}
```

### Labels e Ações Comuns

```typescript
acoes: {
  salvar: 'Salvar',
  cancelar: 'Cancelar',
  // ...
}

labels: {
  nome: 'Nome',
  email: 'E-mail',
  // ...
}
```

## Funções Disponíveis

### `t(chave, parametros?)`

Obtém uma tradução específica:

```typescript
t('home.titulo') // "Instituto Severa Romana"
t('mensagem.ola', { nome: 'Maria' }) // "Olá, Maria!"
```

### `getSection(secao)`

Obtém uma seção completa de traduções:

```typescript
getSection('navegacao.sobre') // { titulo: 'Sobre', missao: 'Missão', ... }
```

### `existeTraducao(chave)`

Verifica se uma tradução existe:

```typescript
existeTraducao('home.titulo') // true
existeTraducao('inexistente') // false
```

## Adicionando Novos Textos

1. **Adicione a tradução em `pt-BR.ts`:**

```typescript
export default {
  // ... outras seções
  novaSecao: {
    novoTexto: 'Meu novo texto aqui',
  },
}
```

2. **Use no componente:**

```vue
<template>
  <p>{{ t('novaSecao.novoTexto') }}</p>
</template>
```

## Preparação para Múltiplos Idiomas

Quando necessário adicionar outros idiomas:

1. **Crie novos arquivos de tradução:**

```
src/locales/
├── en-US.ts    # Inglês
├── es-ES.ts    # Espanhol
```

2. **Atualize `index.ts`:**

```typescript
import enUS from './en-US'
import esES from './es-ES'

export const TRADUCOES = {
  'pt-BR': ptBR,
  'en-US': enUS,
  'es-ES': esES,
}
```

3. **Use a função de mudança de idioma:**

```typescript
const { definirIdioma } = useI18n()
definirIdioma('en-US')
```

## Boas Práticas

1. **Nomenclatura de chaves:** Use camelCase ou kebab-case consistentemente
2. **Organização:** Agrupe traduções por funcionalidade/página
3. **Parâmetros:** Para textos dinâmicos, use `{parametro}` nas strings
4. **Fallback:** O sistema retorna a própria chave se a tradução não for encontrada
5. **Validação:** Use `existeTraducao()` quando necessário verificar se uma chave existe

## Benefícios

- ✅ **Centralização:** Todos os textos em um local
- ✅ **Manutenção:** Fácil atualização de conteúdo
- ✅ **Consistência:** Evita duplicação de textos
- ✅ **Escalabilidade:** Preparado para múltiplos idiomas
- ✅ **Performance:** Traduções reativas
- ✅ **TypeScript:** Suporte completo a tipos
