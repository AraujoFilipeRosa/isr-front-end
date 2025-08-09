# 🏛️ Instituto Severa Romana - Frontend

> Site institucional do Instituto Severa Romana, uma organização sem fins lucrativos dedicada ao atendimento psicossocial de crianças, adolescentes e jovens com deficiência, transtornos de comportamento e/ou aprendizagem em situação de vulnerabilidade social no Rio de Janeiro.

## 📋 Sobre o Projeto

O **ISR Front-end** é uma aplicação web moderna desenvolvida em Vue.js 3 que apresenta os serviços, atividades e informações do Instituto Severa Romana. Fundado em 1969, o instituto promove inclusão e apoio psicossocial a crianças, adolescentes e jovens em situação de vulnerabilidade. O site oferece uma experiência rica e responsiva, com suporte a múltiplos idiomas e foco na acessibilidade.

### 🎯 Principais Funcionalidades

- **🌍 Sistema Multiidioma**: Suporte a Português do Brasil e Portugal via subdomínios
- **📱 Design Responsivo**: Interface adaptada para todos os dispositivos
- **♿ Acessibilidade**: Seguindo as melhores práticas de acessibilidade web
- **🎨 Interface Moderna**: Design limpo e profissional usando Bootstrap e PrimeVue
- **📄 Visualização de PDFs**: Sistema integrado para exibir documentos e certificações
- **🖼️ Galeria de Atividades**: Apresentação das atividades terapêuticas e pedagógicas
- **👥 Equipe Multidisciplinar**: Apresentação dos profissionais e serviços oferecidos
- **📊 Transparência**: Seção dedicada à prestação de contas e documentos oficiais
- **💚 Formas de Ajudar**: Seções para doações, voluntariado e apoio à causa

## 💝 Motivação do Projeto

Este site foi desenvolvido como uma homenagem e forma de gratidão ao Instituto Severa Romana, onde fui atendido como paciente e que fez parte da minha jornada pessoal. É uma maneira de retribuir e demonstrar o impacto transformador que o ISR tem na vida das crianças, adolescentes e jovens que atende.

Este projeto é também uma homenagem especial à **Rosangela Nunes**, psicóloga que me atendeu com muito carinho e dedicação durante meu tempo no instituto. Sua memória e o cuidado que demonstrava por todos os pacientes são parte da inspiração por trás deste trabalho.

Quando uma instituição e pessoas especiais marcam positivamente sua vida, nada mais justo do que usar suas habilidades para apoiar sua missão e ajudar outras pessoas a conhecerem esse trabalho incrível.

## 🚀 Tecnologias Utilizadas

### Core Framework

- **Vue.js 3** - Framework JavaScript progressivo
- **TypeScript** - Superset tipado do JavaScript
- **Vite** - Build tool rápido e moderno

### UI/UX e Styling

- **Bootstrap 5** - Framework CSS para layouts responsivos
- **PrimeVue 4** - Biblioteca de componentes UI para Vue
- **TailwindCSS 4** - Framework CSS utilitário
- **Sass** - Pré-processador CSS
- **VueUse Motion** - Biblioteca de animações

### Navegação e Estado

- **Vue Router 4** - Roteamento oficial do Vue
- **Pinia** - Gerenciamento de estado para Vue

### Ferramentas de Desenvolvimento

- **Vue DevTools** - Ferramentas de desenvolvimento
- **Prettier** - Formatação de código
- **TypeScript Compiler** - Verificação de tipos

## 📁 Estrutura do Projeto

```
src/
├── assets/                 # Recursos estáticos (imagens, estilos)
│   ├── base.scss          # Estilos base e variáveis [[memory:5655817]]
│   ├── main.scss          # Arquivo principal de estilos
│   ├── buttons.scss       # Estilos dos botões
│   └── imagens/           # Banco de imagens do instituto
├── components/            # Componentes reutilizáveis
│   ├── NavComponent.vue   # Navegação principal
│   ├── FooterComponent.vue# Rodapé do site
│   ├── CardComponent.vue  # Componente de cartões
│   └── icons/             # Ícones customizados
├── composables/           # Funções compostas reutilizáveis
│   ├── useI18n.ts        # Hook de internacionalização
│   ├── useNavigation.ts  # Hook de navegação
│   └── useRouteMeta.ts   # Hook de metadados de rota
├── locales/              # Sistema de tradução
│   ├── index.ts          # Configuração de idiomas
│   ├── pt-BR.ts         # Traduções para português brasileiro
│   └── pt-PT.ts         # Traduções para português de Portugal
├── router/               # Configuração de rotas
│   └── index.ts         # Rotas da aplicação
├── stores/               # Gerenciamento de estado (Pinia)
│   └── counter.ts       # Store exemplo
├── views/                # Páginas da aplicação
│   ├── home/            # Páginas principais
│   │   ├── sobre/       # Seções sobre o instituto
│   │   ├── atividades/  # Atividades e serviços
│   │   └── como-ajudar/ # Formas de contribuição
│   └── erro/            # Páginas de erro
└── main.ts              # Ponto de entrada da aplicação
```

## ⚙️ Configuração e Instalação

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**

### 1. Instalação das Dependências

```bash
# Usando npm
npm install

# Ou usando yarn
yarn install
```

### 2. Configuração para Desenvolvimento Local

#### Opção A: Desenvolvimento Padrão

```bash
npm run dev
```

Acesse: `http://localhost:8000`

#### Opção B: Desenvolvimento com Subdomínios (Recomendado)

1. **Configure o arquivo hosts:**

   **Windows:** `C:\Windows\System32\drivers\etc\hosts`

   ```
   127.0.0.1    br.localhost
   127.0.0.1    pt.localhost
   ```

   **Linux/Mac:** `/etc/hosts`

   ```
   127.0.0.1    br.localhost
   127.0.0.1    pt.localhost
   ```

2. **Execute o servidor com suporte a subdomínios:**

   ```bash
   npm run dev:subdomain
   ```

3. **Acesse as URLs:**
   - 🇧🇷 Brasil: `http://br.localhost:8000`
   - 🇵🇹 Portugal: `http://pt.localhost:8000`

## 🛠️ Scripts Disponíveis

| Comando                 | Descrição                                   |
| ----------------------- | ------------------------------------------- |
| `npm run dev`           | Inicia o servidor de desenvolvimento        |
| `npm run dev:subdomain` | Inicia o servidor com suporte a subdomínios |
| `npm run build`         | Faz build de produção                       |
| `npm run preview`       | Visualiza o build de produção               |
| `npm run type-check`    | Verifica tipos TypeScript                   |
| `npm run format`        | Formata o código com Prettier               |

## 🌍 Sistema Multiidioma

O projeto utiliza um sistema de internacionalização baseado em subdomínios:

### URLs de Produção

- `https://br.isr.org.br` → Português do Brasil
- `https://pt.isr.org.br` → Português de Portugal

### Características do Sistema

- **Detecção Automática**: O idioma é detectado pelo subdomínio
- **SEO Otimizado**: URLs únicas para cada idioma
- **Cache Eficiente**: CDNs podem cachear por subdomínio

### Uso nos Componentes

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

## 🎨 Padrões de Design

O projeto segue padrões consistentes de design e desenvolvimento [[memory:5655803]]:

### Cores e Temas

- **Arquivo principal**: `src/assets/base.scss`
- **Esquema de cores**: Contraste adequado para acessibilidade
- **Bootstrap**: Utilização preferencial para layouts responsivos

### Nomenclatura

- **Código**: Utiliza nomes em português
- **Exemplos**: 'correto' e 'incorreto' em vez de 'right' e 'wrong'

## 📦 Build e Deploy

### Build de Produção

```bash
npm run build
```

### Verificação de Tipos

```bash
npm run type-check
```

### Preview Local

```bash
npm run preview
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📚 Documentação Adicional

- [Sistema Multiidioma](docs/MULTIIDIOMA.md) - Detalhes sobre internacionalização
- [Cores do Projeto](CORES.md) - Paleta de cores e diretrizes visuais

## 📄 Licença

Este projeto foi desenvolvido de forma independente como uma homenagem ao Instituto Severa Romana. É um trabalho voluntário criado com o objetivo de dar visibilidade ao trabalho do instituto e facilitar o acesso às informações sobre seus serviços.

---

**Desenvolvido com 💚 e gratidão por um ex-paciente do Instituto Severa Romana**
