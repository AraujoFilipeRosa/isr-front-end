<script setup lang="ts">
import { MotionDirective as motion } from '@vueuse/motion'
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
  <section
    v-motion
    :initial="{ opacity: 0, y: 0 }"
    :visible="{ opacity: 1, y: 0 }"
    :duration="800"
    :delay="50"
    class="my-4"
  >
    <TitleSectionComponent :titulo="t('parceiros.titulo')">
      <template #descricao>
        <div class="text-center mb-3">
          <p class="text-muted mb-1">
            {{ t('parceiros.descricao') }}
          </p>
          <p class="text-muted small">
            {{ t('parceiros.subtitulo') }}
          </p>
        </div>
      </template>
    </TitleSectionComponent>

    <div class="row justify-content-center">
      <div
        v-for="(parceiro, index) in parceiros"
        :key="index"
        class="col-lg-2 col-md-3 col-sm-4 col-6 mb-3"
      >
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible="{ opacity: 1, scale: 1 }"
          :duration="500"
          :delay="50 + index * 30"
          class="card h-100 card-custom card-hover-subtle text-center"
        >
          <div class="card-body p-2 d-flex align-items-center justify-content-center">
            <div class="parceiro-logo-container">
              <img
                :src="parceiro.imagem"
                :alt="parceiro.alt"
                class="img-fluid parceiro-logo"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

.card-custom {
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  transition: all 0.2s ease;
  background: white;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
}

.card-hover-subtle:hover {
  transform: translateY(-2px) scale(1.01);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

.parceiro-logo-container {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--bs-primary);
    transform: scale(1.03);
  }
}

.parceiro-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 6px;
  filter: grayscale(100%);
  transition: filter 0.2s ease;

  &:hover {
    filter: grayscale(0%);
  }
}
</style>
