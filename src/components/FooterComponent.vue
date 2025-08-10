<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
</script>
<template>
  <footer class="custom-footer p-3 text-center">
    <div class="container-fluid px-3 px-md-4">
      <div class="row align-items-center g-0">
        <!-- Logo - Centralizado em mobile, à esquerda em desktop -->
        <div
          class="col-12 col-md-2 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0"
        >
          <router-link :to="{ name: 'home' }">
            <img
              class="img-fluid footer-logo"
              src="/imagens/isr-logo.png"
              alt="Logo"
              width="95"
              loading="lazy"
            />
          </router-link>
        </div>

        <!-- Copyright e Créditos - Centralizado em mobile, centro em desktop -->
        <div class="col-12 col-md-6 text-center mb-3 mb-md-0">
          <p class="mb-1 copyright-text">
            {{ t('componentes.footer.copyright') }}
            <router-link to="/home" class="link">isr.org.br</router-link>
          </p>
          <p class="mb-0 credits-text">
            {{ t('componentes.footer.creditos.titulo') }}:
            <span class="developer-name">{{ t('componentes.footer.creditos.desenvolvedor') }}</span>
          </p>
        </div>

        <!-- Redes Sociais - Centralizado em mobile, à direita em desktop -->
        <div class="col-12 col-md-4">
          <h6 class="text-center text-md-start mb-2 mb-md-3">
            {{ t('componentes.footer.nosSegue') }}
          </h6>
          <ul class="list-unstyled social-links">
            <li class="social-item">
              <a href="https://wa.me/5521992206577" class="link social-link">
                <i class="pi pi-whatsapp"></i>
                <span class="social-text">{{ t('componentes.footer.redesSociais.whatsapp') }}</span>
              </a>
            </li>
            <li class="social-item">
              <a
                href="https://www.instagram.com/instituto.severa.romana/?hl=pt-br"
                class="link social-link"
              >
                <i class="pi pi-instagram"></i>
                <span class="social-text">{{
                  t('componentes.footer.redesSociais.instagram')
                }}</span>
              </a>
            </li>
            <li class="social-item">
              <a href="https://www.facebook.com/instseveraromana" class="link social-link">
                <i class="pi pi-facebook"></i>
                <span class="social-text">{{ t('componentes.footer.redesSociais.facebook') }}</span>
              </a>
            </li>
            <li class="social-item">
              <a href="https://www.youtube.com/@institutoseveraromana650" class="link social-link">
                <i class="pi pi-youtube"></i>
                <span class="social-text">{{ t('componentes.footer.redesSociais.youtube') }}</span>
              </a>
            </li>
            <li class="social-item">
              <a href="https://www.tiktok.com/@institutoseveraromana" class="link social-link">
                <i class="pi pi-tiktok"></i>
                <span class="social-text">{{ t('componentes.footer.redesSociais.tiktok') }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped lang="scss">
@use '@/assets/base.scss' as *;

.custom-footer {
  background: $footer-color;
  color: $footer-font-color;
  overflow-x: hidden;
  width: 100%;

  .footer-logo {
    max-width: 95px;
    height: auto;
  }

  .copyright-text {
    font-size: 0.9rem;

    @media (max-width: 767px) {
      font-size: 0.85rem;
    }
  }

  .credits-text {
    font-size: 0.8rem;
    opacity: 0.8;

    @media (max-width: 767px) {
      font-size: 0.75rem;
    }

    .developer-name {
      font-weight: 500;
    }
  }

  .social-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
    width: 100%;

    @media (min-width: 768px) {
      justify-content: flex-start;
      gap: 0.75rem;
    }
  }

  .social-item {
    margin: 0;
  }

  .social-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    transition: all 0.3s ease;
    text-decoration: none;
    font-size: 0.85rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 767px) {
      font-size: 0.8rem;
      padding: 0.4rem 0.6rem;
      max-width: 100%;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-1px);
    }

    i {
      font-size: 1.1rem;

      @media (max-width: 767px) {
        font-size: 1rem;
      }
    }

    .social-text {
      @media (max-width: 575px) {
        display: none;
      }
    }
  }

  // Ajustes específicos para mobile
  @media (max-width: 767px) {
    padding: 1.5rem 1rem !important;

    h6 {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  }

  // Ajustes para telas muito pequenas
  @media (max-width: 575px) {
    padding: 1rem 0.5rem !important;

    .social-links {
      gap: 0.25rem;
    }

    .social-link {
      padding: 0.5rem;
      min-width: 44px;
      justify-content: center;
    }
  }
}
</style>
