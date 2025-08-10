<script setup lang="ts">
import { MotionDirective as motion } from '@vueuse/motion'
import { ref, onMounted } from 'vue'
import { useI18n } from '@/composables/useI18n'
import HeaderSectionComponent from '@/components/HeaderSectionComponent.vue'
import doeQrCode from '@/assets/imagens/doe-qrcode.jpg'

const { t } = useI18n()

const atendimentosMensais = ref(0)
const familiasBeneficiadas = ref(0)

onMounted(() => {
  // Animação dos números
  const animateNumber = (target: number, ref: any) => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        ref.value = target
        clearInterval(timer)
      } else {
        ref.value = Math.floor(current)
      }
    }, duration / steps)
  }

  setTimeout(() => {
    animateNumber(1200, atendimentosMensais)
    animateNumber(5000, familiasBeneficiadas)
  }, 500)
})
</script>

<template>
  <div id="doe" class="container my-5 page-container">
    <!-- Header da Página -->
    <HeaderSectionComponent
      icon="pi-heart"
      :title="t('doacoes.titulo')"
      :description="t('doacoes.descricao')"
      :duration="1000"
    />

    <!-- Informações de Impacto -->
    <section
      v-motion
      :initial="{ opacity: 0, y: 0 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="1000"
      :delay="50"
      class="row my-5"
    >
      <div class="col-12">
        <div class="card-custom impact-card">
          <div class="card-body p-5 text-center">
            <div class="icon-circle icon-lg mb-4">
              <i class="pi pi-users"></i>
            </div>
            <h2 class="card-title h3 font-weight-bold mb-3">Nosso Impacto</h2>

            <!-- Contadores -->
            <div class="row mb-4">
              <div class="col-md-6 text-center mb-3">
                <div class="counter-item">
                  <div class="counter-number">{{ atendimentosMensais }}</div>
                  <div class="counter-label">Atendimentos Mensais</div>
                </div>
              </div>
              <div class="col-md-6 text-center mb-3">
                <div class="counter-item">
                  <div class="counter-number">{{ familiasBeneficiadas }}+</div>
                  <div class="counter-label">Famílias Beneficiadas</div>
                </div>
              </div>
            </div>

            <p class="card-text text-muted lead">
              Considerando a média de 1200 atendimentos por mês, até o presente momento já
              beneficiamos milhares de famílias da Zona Norte do Município do Rio de Janeiro. Sua
              participação, por meio de doações financeiras e de alimentos, tem impactado
              positivamente muitas famílias.
              <strong class="text-primary">Muito obrigado!</strong>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Opções de Doação -->
    <section
      v-motion
      :initial="{ opacity: 0, y: 0 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="1000"
      :delay="50"
      class="row my-5"
    >
      <div class="col-12 text-center mb-5">
        <h2 class="title font-weight-bold">Como Você Pode Ajudar</h2>
        <p class="text-muted">Escolha a forma que melhor se adequa ao seu desejo de contribuir</p>
      </div>

      <!-- Doação Financeira -->
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100 card-custom card-hover-strong donation-card">
          <div class="card-body text-center p-4 d-flex flex-column">
            <div class="icon-circle mb-3 flex-shrink-0">
              <i class="pi pi-credit-card"></i>
            </div>
            <h3 class="card-title h5 font-weight-bold mb-3">Doação Financeira</h3>
            <p class="card-text text-muted flex-grow-1 mb-4">
              Sua doação financeira é fundamental para a manutenção dos nossos programas e serviços.
            </p>
            <div class="donation-details">
              <div class="bank-info p-3 bg-light rounded mb-3">
                <h6 class="font-weight-bold mb-2">CAIXA ECONÔMICA FEDERAL</h6>
                <p class="mb-1"><strong>Agência:</strong> 4147</p>
                <p class="mb-1"><strong>Conta:</strong> 003 2380-4</p>
                <p class="mb-0"><strong>PIX:</strong> CNPJ 27003680000153</p>
              </div>
              <div class="qr-code-container">
                <div class="qr-code-wrapper">
                  <img
                    :src="doeQrCode"
                    alt="QR Code para Doação"
                    class="qr-code-image"
                    loading="lazy"
                  />
                  <div class="qr-code-overlay">
                    <i class="pi pi-qrcode"></i>
                    <span>Escaneie para doar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Doação de Produtos -->
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100 card-custom card-hover-strong donation-card">
          <div class="card-body text-center p-4 d-flex flex-column">
            <div class="icon-circle mb-3 flex-shrink-0">
              <i class="pi pi-shopping-bag"></i>
            </div>
            <h3 class="card-title h5 font-weight-bold mb-3">Doação de Produtos</h3>
            <p class="card-text text-muted flex-grow-1 mb-4">
              Aceitamos doações de alimentos e materiais de limpeza e higiene para nossas famílias.
            </p>
            <div class="volunteer-benefits">
              <div class="benefit-item mb-3 p-2 bg-light rounded">
                <i class="pi pi-apple text-success mb-2 d-block" style="font-size: 1.5rem"></i>
                <h6 class="font-weight-bold mb-0">Alimentos</h6>
              </div>
              <div class="benefit-item mb-3 p-2 bg-light rounded">
                <i class="pi pi-home text-primary mb-2 d-block" style="font-size: 1.5rem"></i>
                <h6 class="font-weight-bold mb-0">Limpeza</h6>
              </div>
              <div class="benefit-item mb-3 p-2 bg-light rounded">
                <i class="pi pi-heart text-warning mb-2 d-block" style="font-size: 1.5rem"></i>
                <h6 class="font-weight-bold mb-0">Higiene</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Voluntariado -->
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100 card-custom card-hover-strong donation-card">
          <div class="card-body text-center p-4 d-flex flex-column">
            <div class="icon-circle mb-3 flex-shrink-0">
              <i class="pi pi-users"></i>
            </div>
            <h3 class="card-title h5 font-weight-bold mb-3">Seja Voluntário</h3>
            <p class="card-text text-muted flex-grow-1 mb-4">
              Com projetos bem estruturados, seu tempo investido aqui vale muito para nossas
              famílias e para o seu currículo.
            </p>
            <div class="volunteer-benefits">
              <div class="benefit-item mb-3 p-2 bg-light rounded">
                <i class="pi pi-heart text-danger me-2"></i>
                <span class="font-weight-bold">Experiência gratificante</span>
              </div>
              <div class="benefit-item mb-3 p-2 bg-light rounded">
                <i class="pi pi-star text-warning me-2"></i>
                <span class="font-weight-bold">Desenvolvimento pessoal</span>
              </div>
              <div class="benefit-item mb-3 p-2 bg-light rounded">
                <i class="pi pi-briefcase text-info me-2"></i>
                <span class="font-weight-bold">Valorização do currículo</span>
              </div>
              <div class="volunteer-stats-card bg-primary text-white p-3 rounded">
                <div class="row text-center">
                  <div class="col-6">
                    <div class="stat-item">
                      <i class="pi pi-heart d-block mb-1" style="font-size: 1.2rem"></i>
                      <strong class="d-block">+50</strong>
                      <small>Voluntários</small>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="stat-item">
                      <i class="pi pi-clock d-block mb-1" style="font-size: 1.2rem"></i>
                      <strong class="d-block">1000h+</strong>
                      <small>Horas Doadas</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section
      v-motion
      :initial="{ opacity: 0, y: 0 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="1000"
      :delay="600"
      class="row my-5"
    >
      <div class="col-12 text-center">
        <div class="bg-primary-custom text-white p-5 rounded-custom shadow-custom-strong">
          <h2 class="font-weight-bold mb-3">Cada Doação Faz a Diferença</h2>
          <p class="lead mb-4">
            Junte-se a nós na transformação de vidas e na construção de um futuro melhor para todas
            as crianças, adolescentes e jovens do Rio de Janeiro.
          </p>
          <div class="d-flex justify-content-center gap-3 flex-wrap">
            <router-link :to="{ name: 'contato' }" class="btn btn-light btn-lg">
              <i class="pi pi-envelope me-2"></i>Entre em Contato
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

// Estilos globais agora estão em utilities.scss

.impact-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
  }

  .impact-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, $nav-font-color, $nav-font-color-light);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    i {
      font-size: 2rem;
      color: white;
    }
  }

  .counter-item {
    padding: 1.5rem;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 249, 250, 0.9) 100%);
    border-radius: 12px;
    border: 2px solid rgba($nav-font-color, 0.1);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
      border-color: rgba($nav-font-color, 0.3);
    }

    .counter-number {
      font-size: 2.5rem;
      font-weight: bold;
      color: $nav-font-color;
      margin-bottom: 0.5rem;
    }

    .counter-label {
      font-size: 0.9rem;
      color: #6c757d;
      font-weight: 500;
    }
  }
}

.donation-card {
  transition: all 0.3s ease;
  border-radius: 16px;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15) !important;
  }

  .donation-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, $nav-font-color, $nav-font-color-light);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    i {
      font-size: 1.8rem;
      color: white;
    }
  }

  .bank-info {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%) !important;
    border-left: 4px solid $nav-font-color;
  }

  .item-card {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%) !important;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    i {
      font-size: 1.5rem;
      display: block;
    }
  }

  .benefit-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 8px;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    i {
      font-size: 1.2rem;
    }
  }

  // QR Code Container
  .qr-code-container {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  .qr-code-wrapper {
    position: relative;
    display: inline-block;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }

    .qr-code-image {
      //   max-width: 150px;
      min-width: 150px;
      height: auto;
      display: block;
    }

    .qr-code-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        135deg,
        rgba($nav-font-color, 0.9) 0%,
        rgba($nav-font-color-light, 0.9) 100%
      );
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      opacity: 0;
      transition: all 0.3s ease;

      i {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }

      span {
        font-size: 0.8rem;
        font-weight: 600;
      }
    }

    &:hover .qr-code-overlay {
      opacity: 1;
    }
  }

  // Products Showcase
  .products-showcase {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 12px;
    padding: 1.5rem;
    text-align: center;
    border: 2px solid rgba($nav-font-color, 0.1);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
      border-color: rgba($nav-font-color, 0.3);
    }

    .product-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, $nav-font-color, $nav-font-color-light);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;

      i {
        font-size: 1.5rem;
        color: white;
      }
    }

    .product-items {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 0.5rem;

      .product-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.5rem;
        background: white;
        border-radius: 8px;
        min-width: 80px;
        transition: all 0.3s ease;

        &:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        i {
          font-size: 1.2rem;
          margin-bottom: 0.25rem;
          color: $nav-font-color;
        }

        span {
          font-size: 0.8rem;
          font-weight: 600;
          color: #6c757d;
        }
      }
    }
  }

  // Volunteer Showcase
  .volunteer-showcase {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 12px;
    padding: 1.5rem;
    text-align: center;
    border: 2px solid rgba($nav-font-color, 0.1);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
      border-color: rgba($nav-font-color, 0.3);
    }

    .volunteer-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, $nav-font-color, $nav-font-color-light);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;

      i {
        font-size: 1.5rem;
        color: white;
      }
    }

    .volunteer-stats {
      display: flex;
      justify-content: space-around;
      gap: 1rem;

      .stat-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.75rem;
        background: white;
        border-radius: 8px;
        min-width: 80px;
        transition: all 0.3s ease;

        &:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        i {
          font-size: 1.2rem;
          margin-bottom: 0.25rem;
          color: $nav-font-color;
        }

        span {
          font-size: 1rem;
          font-weight: bold;
          color: $nav-font-color;
          margin-bottom: 0.25rem;
        }

        small {
          font-size: 0.7rem;
          color: #6c757d;
          font-weight: 500;
        }
      }
    }
  }
}

.card {
  border-radius: 16px;
}

.rounded {
  border-radius: 16px !important;
}

// Estilos de botões padronizados importados do buttons.scss

// Responsividade
@media (max-width: 768px) {
  .donation-card {
    margin-bottom: 2rem;
  }

  .qr-code-wrapper .qr-code-image {
    max-width: 120px;
  }

  .products-showcase,
  .volunteer-showcase {
    padding: 1rem;
  }

  .product-items,
  .volunteer-stats {
    flex-direction: column;
    gap: 0.5rem;
  }

  .product-item,
  .stat-item {
    min-width: auto;
    width: 100%;
  }

  .impact-card .card-body {
    padding: 2rem !important;
  }
}
</style>
