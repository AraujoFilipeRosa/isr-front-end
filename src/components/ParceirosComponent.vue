<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

// Importar imagens que estão em src/assets
import capemisaSocial from '@/assets/imagens/parceiros/capemisa-social.png'
import cmas from '@/assets/imagens/parceiros/cmas.png'
import cmdcaRio from '@/assets/imagens/parceiros/cmdca-rio.png'
import efeletroForma from '@/assets/imagens/parceiros/efeletro-forma.png'
import febiexRj from '@/assets/imagens/parceiros/febiex-rj.png'
import pizzaCash from '@/assets/imagens/parceiros/pizza-cash.png'
import estacio from '@/assets/imagens/parceiros/estacio.png'
import fab from '@/assets/imagens/parceiros/fab.png'
import fia from '@/assets/imagens/parceiros/fia.png'
import institutoFederalRio from '@/assets/imagens/parceiros/instituto-federal-rio.jpg'
import justicaFederal from '@/assets/imagens/parceiros/justica-federal.png'
import lightRecicla from '@/assets/imagens/parceiros/light-recicla.png'
import pmerj from '@/assets/imagens/parceiros/pmerj.png'
import pucRio from '@/assets/imagens/parceiros/puc-rio.png'
import rioPrefeitura from '@/assets/imagens/parceiros/rio-prefeitura.png'
import suas from '@/assets/imagens/parceiros/suas.png'
import ufrj from '@/assets/imagens/parceiros/ufrj.png'

const { t } = useI18n()

// Lista de parceiros com suas imagens
const parceiros = [
  {
    nome: 'Capemisa Social',
    imagem: capemisaSocial,
    alt: 'Logo Capemisa Social',
  },
  {
    nome: 'CMAS',
    imagem: cmas,
    alt: 'Logo CMAS',
  },
  {
    nome: 'CMDCA Rio',
    imagem: cmdcaRio,
    alt: 'Logo CMDCA Rio',
  },
  {
    nome: 'Efeletro Forma',
    imagem: efeletroForma,
    alt: 'Logo Efeletro Forma',
  },
  {
    nome: 'Febiex RJ',
    imagem: febiexRj,
    alt: 'Logo Febiex RJ',
  },
  {
    nome: 'Pizza Cash',
    imagem: pizzaCash,
    alt: 'Logo Pizza Cash',
  },
  {
    nome: 'Estácio',
    imagem: estacio,
    alt: 'Logo Estácio',
  },
  {
    nome: 'FAB',
    imagem: fab,
    alt: 'Logo FAB',
  },
  {
    nome: 'FIA',
    imagem: fia,
    alt: 'Logo FIA',
  },
  {
    nome: 'Instituto Federal Rio',
    imagem: institutoFederalRio,
    alt: 'Logo Instituto Federal Rio',
  },
  {
    nome: 'Justiça Federal',
    imagem: justicaFederal,
    alt: 'Logo Justiça Federal',
  },
  {
    nome: 'Light Recicla',
    imagem: lightRecicla,
    alt: 'Logo Light Recicla',
  },
  {
    nome: 'PMERJ',
    imagem: pmerj,
    alt: 'Logo PMERJ',
  },
  {
    nome: 'PUC Rio',
    imagem: pucRio,
    alt: 'Logo PUC Rio',
  },
  {
    nome: 'Prefeitura do Rio',
    imagem: rioPrefeitura,
    alt: 'Logo Prefeitura do Rio',
  },
  {
    nome: 'SUAS',
    imagem: suas,
    alt: 'Logo SUAS',
  },
  {
    nome: 'UFRJ',
    imagem: ufrj,
    alt: 'Logo UFRJ',
  },
]
</script>

<template>
  <section class="parceiros-section">
    <ComponenteSecaoTitulo :titulo="t('parceiros.titulo')">
      <template #descricao>
        <div class="text-center mb-4">
          <p class="parceiros-descricao">
            {{ t('parceiros.descricao') }}
          </p>
          <p class="parceiros-subtitulo">
            {{ t('parceiros.subtitulo') }}
          </p>
        </div>
      </template>
    </ComponenteSecaoTitulo>

    <div class="parceiros-grid">
      <div v-for="(parceiro, index) in parceiros" :key="index" class="parceiro-item">
        <div class="parceiro-card">
          <div class="parceiro-logo-wrapper">
            <img :src="parceiro.imagem" :alt="parceiro.alt" class="parceiro-logo" loading="lazy" />
          </div>
          <div class="parceiro-nome">{{ parceiro.nome }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

.parceiros-section {
  padding: 3rem 0;
  background: linear-gradient(135deg, #fafbfc 0%, #f5f7fa 100%);
  border-radius: 20px;
  margin: 2rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg,
        transparent 0%,
        rgba(0, 123, 255, 0.1) 50%,
        transparent 100%);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg,
        transparent 0%,
        rgba(0, 123, 255, 0.1) 50%,
        transparent 100%);
  }
}

.parceiros-descricao {
  font-size: 1.1rem;
  color: #6c757d;
  margin-bottom: 0.5rem;
  font-weight: 400;
  line-height: 1.6;
}

.parceiros-subtitulo {
  font-size: 0.9rem;
  color: #adb5bd;
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
}

.parceiros-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.parceiro-item {
  display: flex;
  justify-content: center;
}

.parceiro-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem 1rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.05),
    0 2px 4px -1px rgba(0, 0, 0, 0.03),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 160px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #007bff, #6610f2, #007bff);
    background-size: 200% 100%;
    animation: shimmer 3s ease-in-out infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.08),
      0 10px 10px -5px rgba(0, 0, 0, 0.04),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    border-color: rgba(0, 123, 255, 0.2);
    background: rgba(255, 255, 255, 0.95);

    &::before {
      opacity: 1;
    }

    .parceiro-logo-wrapper {
      transform: scale(1.05);
      box-shadow: 0 8px 25px rgba(0, 123, 255, 0.15);
    }

    .parceiro-logo {
      filter: grayscale(0%) brightness(1.1);
    }

    .parceiro-nome {
      color: #007bff;
      transform: translateY(-2px);
    }
  }
}

.parceiro-logo-wrapper {
  width: 70px;
  height: 70px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 4px 15px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: rotate(45deg);
    transition: transform 0.6s ease;
  }

  &:hover::after {
    transform: rotate(45deg) translate(50%, 50%);
  }
}

.parceiro-logo {
  width: 80%;
  height: 80%;
  object-fit: contain;
  filter: grayscale(40%) brightness(0.9);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
  position: relative;
}

.parceiro-nome {
  font-size: 0.8rem;
  color: #6c757d;
  font-weight: 500;
  margin: 0;
  transition: all 0.3s ease;
  line-height: 1.3;
  letter-spacing: 0.3px;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }

  100% {
    background-position: 200% 0;
  }
}

// Responsividade
@media (max-width: 768px) {
  .parceiros-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
  }

  .parceiro-card {
    padding: 1rem 0.75rem;
    max-width: 140px;
  }

  .parceiro-logo-wrapper {
    width: 60px;
    height: 60px;
  }

  .parceiro-nome {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .parceiros-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 0.75rem;
  }

  .parceiro-card {
    padding: 0.75rem 0.5rem;
    max-width: 120px;
  }

  .parceiro-logo-wrapper {
    width: 50px;
    height: 50px;
  }

  .parceiro-nome {
    font-size: 0.7rem;
  }
}
</style>
