# Guia de Cores do Projeto ISR

Este documento explica como usar as cores organizadas no projeto ISR.

## Estrutura das Cores

As cores estão organizadas no arquivo `src/assets/base.scss` e são divididas em categorias:

### 1. Cores Principais

- `$primary-color`: #d9e6fc - Cor principal do projeto
- `$bg-color`: #eaefef - Cor de fundo principal

### 2. Cores de Navegação

- `$nav-font-color`: #2c6dad - Cor principal do texto de navegação
- `$nav-font-color-light`: #5c9fe2 - Cor mais clara para hover
- `$nav-font-color-hover`: #112e66 - Cor para hover
- `$subnav-color`: #c2d8ff - Cor do submenu

### 3. Cores do Footer

- `$footer-font-color`: #2c6dad - Cor do texto do footer
- `$footer-color`: #d9e6fc - Cor de fundo do footer

### 4. Paleta de Cinzas

- `$gray-very-light`: #f8f9fa - Cinza muito claro
- `$gray-light`: #e9ecef - Cinza claro
- `$gray-medium`: #dee2e6 - Cinza médio
- `$gray-dark`: #6c757d - Cinza escuro
- `$gray-very-dark`: #333 - Cinza muito escuro

### 5. Cores de Destaque

- `$accent-blue-dark`: #112e66 - Azul escuro para destaque

### 6. Gradientes

- `$gradient-light`: Gradiente claro para fundos
- `$gradient-medium`: Gradiente médio para fundos
- `$gradient-primary`: Gradiente principal com cores de navegação

### 7. Cores Semânticas

- `$text-primary`: Cor principal para textos
- `$text-secondary`: Cor secundária para textos
- `$text-muted`: Cor para textos com menor destaque
- `$bg-primary`: Cor de fundo primária
- `$bg-secondary`: Cor de fundo secundária
- `$bg-light`: Cor de fundo clara

### 8. Cores para Bordas e Sombras

- `$border-light`: Borda com opacidade baixa
- `$border-medium`: Borda com opacidade média
- `$shadow-light`: Sombra clara
- `$shadow-medium`: Sombra média
- `$shadow-dark`: Sombra escura

## Como Usar

### 1. Importar as variáveis

```scss
@use '@/assets/base.scss' as *;
```

### 2. Usar as cores

```scss
.minha-classe {
  background: $bg-primary;
  color: $text-primary;
  border: 1px solid $border-light;
  box-shadow: 0 4px 15px $shadow-medium;
}
```

### 3. Usar gradientes

```scss
.minha-classe {
  background: $gradient-light;
}
```

## Exemplos de Uso

### Cards

```scss
.card {
  background: $bg-secondary;
  border-radius: 12px;
  box-shadow: 0 4px 15px $shadow-light;

  &:hover {
    box-shadow: 0 8px 25px $shadow-medium;
  }
}
```

### Botões

```scss
.btn-primary {
  background: $nav-font-color;
  color: white;

  &:hover {
    background: $nav-font-color-hover;
  }
}
```

### Textos

```scss
.texto-principal {
  color: $text-primary;
}

.texto-secundario {
  color: $text-secondary;
}

.texto-muted {
  color: $text-muted;
}
```

## Boas Práticas

1. **Sempre use as variáveis**: Não use cores hardcoded, sempre use as variáveis definidas
2. **Use cores semânticas**: Prefira `$text-primary` em vez de `$nav-font-color` para textos
3. **Mantenha consistência**: Use as mesmas cores para elementos similares
4. **Teste o contraste**: Certifique-se de que o contraste entre texto e fundo seja adequado

## Atualizações

Para adicionar novas cores:

1. Adicione a variável no `base.scss`
2. Documente aqui no `CORES.md`
3. Use a nova cor nos componentes

---

# Sistema de Botões Padronizado

O projeto utiliza um sistema padronizado de botões definido em `src/assets/buttons.scss`.

## Variantes de Botões

### Botões Principais

- **`.btn-primary`**: Botão principal com cor azul do projeto
- **`.btn-secondary`**: Botão outline com borda azul
- **`.btn-light`**: Botão claro com fundo branco
- **`.btn-outline-light`**: Botão outline branco para fundos escuros

### Botões de Status

- **`.btn-success`**: Botão verde para ações positivas
- **`.btn-danger`**: Botão vermelho para ações destrutivas
- **`.btn-warning`**: Botão amarelo para avisos
- **`.btn-info`**: Botão azul claro para informações

### Botões Especiais

- **`.btn-gradient`**: Botão com gradiente azul
- **`.btn-icon`**: Botão circular apenas com ícone
- **`.btn-floating`**: Botão flutuante fixo

## Tamanhos de Botões

- **`.btn-sm`**: Botão pequeno
- **`.btn`**: Botão padrão (sem classe adicional)
- **`.btn-lg`**: Botão grande
- **`.btn-xl`**: Botão extra grande

## Estados dos Botões

### Estados Interativos

```html
<!-- Botão normal -->
<button class="btn btn-primary">Ação</button>

<!-- Botão com loading -->
<button class="btn btn-primary loading">Carregando...</button>

<!-- Botão desabilitado -->
<button class="btn btn-primary" disabled>Desabilitado</button>
```

### Botões com Ícones

```html
<!-- Botão com ícone -->
<button class="btn btn-primary">
  <i class="pi pi-heart"></i>
  Doar
</button>

<!-- Botão apenas com ícone -->
<button class="btn btn-primary btn-icon">
  <i class="pi pi-plus"></i>
</button>
```

## Grupos de Botões

```html
<div class="btn-group">
  <button class="btn btn-primary">Anterior</button>
  <button class="btn btn-primary">Atual</button>
  <button class="btn btn-primary">Próximo</button>
</div>
```

## Utilitários

- **`.btn-block`**: Botão que ocupa toda a largura
- **`.btn-rounded`**: Botão com bordas arredondadas
- **`.btn-square`**: Botão com bordas quadradas
- **`.btn-no-shadow`**: Botão sem sombra

## Exemplos de Uso

### Call to Action

```html
<div class="d-flex gap-3">
  <button class="btn btn-primary btn-lg">
    <i class="pi pi-heart me-2"></i>
    Doar Agora
  </button>
  <button class="btn btn-outline-light btn-lg">
    <i class="pi pi-envelope me-2"></i>
    Contato
  </button>
</div>
```

### Formulário

```html
<form>
  <div class="mb-3">
    <input type="email" class="form-control" placeholder="Email" />
  </div>
  <div class="d-flex gap-2">
    <button type="submit" class="btn btn-primary">Enviar</button>
    <button type="reset" class="btn btn-secondary">Limpar</button>
  </div>
</form>
```

### Botão Flutuante

```html
<button class="btn btn-primary btn-floating">
  <i class="pi pi-plus"></i>
</button>
```

## Responsividade

Os botões se adaptam automaticamente em dispositivos móveis:

- Em telas pequenas, botões grandes se tornam médios
- Padding e font-size são reduzidos
- Mantém a legibilidade e usabilidade

## Boas Práticas para Botões

1. **Use a variante correta**: Escolha a variante que melhor representa a ação
2. **Mantenha consistência**: Use os mesmos estilos para ações similares
3. **Inclua ícones**: Use ícones para melhorar a compreensão
4. **Teste a acessibilidade**: Certifique-se de que os botões são acessíveis
5. **Use estados apropriados**: Implemente loading e disabled quando necessário
