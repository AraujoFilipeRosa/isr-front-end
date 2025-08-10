<script setup lang="ts">
import { MotionDirective as motion } from '@vueuse/motion'
import { ref, onMounted } from 'vue'
import { useI18n } from '@/composables/useI18n'
import HeaderSectionComponent from '@/components/HeaderSectionComponent.vue'
import DonationCardComponent from '@/components/DonationCardComponent.vue'
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
            <h2 class="card-title h3 font-weight-bold mb-3">
              {{ t('doacoes.nossoImpacto.titulo') }}
            </h2>

            <!-- Contadores -->
            <div class="row mb-4">
              <div class="col-md-6 text-center mb-3">
                <div class="counter-item">
                  <div class="counter-number">{{ atendimentosMensais }}</div>
                  <div class="counter-label">{{ t('doacoes.impacto.atendimentosMensais') }}</div>
                </div>
              </div>
              <div class="col-md-6 text-center mb-3">
                <div class="counter-item">
                  <div class="counter-number">{{ familiasBeneficiadas }}+</div>
                  <div class="counter-label">{{ t('doacoes.impacto.familiasBeneficiadas') }}</div>
                </div>
              </div>
            </div>

            <p class="card-text text-muted lead">
              {{ t('doacoes.nossoImpacto.descricao') }}
              <strong class="text-primary">{{ t('doacoes.nossoImpacto.agradecimento') }}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Opções de Doação -->
    <TitleSectionComponent
      :titulo="t('doacoes.comoAjudar.titulo')"
      :descricao="t('doacoes.comoAjudar.descricao')"
    />

    <section
      v-motion
      :initial="{ opacity: 0, y: 0 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="1000"
      :delay="50"
      class="row my-5"
    >
      <!-- Doação Financeira -->
      <DonationCardComponent
        :icon-class="'pi pi-credit-card'"
        :title="t('doacoes.formas.financeira.titulo')"
        :description="t('doacoes.formas.financeira.descricao')"
        :show-bank-info="true"
        :bank-info="{
          name: t('doacoes.formas.financeira.banco.nome'),
          agency: t('doacoes.formas.financeira.banco.agencia'),
          agencyNumber: t('doacoes.formas.financeira.banco.agenciaNumero'),
          account: t('doacoes.formas.financeira.banco.conta'),
          accountNumber: t('doacoes.formas.financeira.banco.contaNumero'),
          pix: t('doacoes.formas.financeira.banco.pix'),
          cnpj: t('doacoes.formas.financeira.banco.cnpj'),
        }"
        :qr-code-image="doeQrCode"
        :qr-code-alt="t('doacoes.formas.financeira.qrCode')"
      />

      <!-- Doação de Produtos -->
      <DonationCardComponent
        :icon-class="'pi pi-shopping-bag'"
        :title="t('doacoes.formas.produtos.titulo')"
        :description="t('doacoes.formas.produtos.descricao')"
        :benefits="[
          {
            icon: 'pi pi-apple',
            title: t('doacoes.formas.produtos.categorias.alimentos'),
            color: '#28a745',
          },
          {
            icon: 'pi pi-home',
            title: t('doacoes.formas.produtos.categorias.limpeza'),
            color: '#007bff',
          },
          {
            icon: 'pi pi-heart',
            title: t('doacoes.formas.produtos.categorias.higiene'),
            color: '#ffc107',
          },
        ]"
      />

      <!-- Voluntariado -->
      <DonationCardComponent
        :icon-class="'pi pi-users'"
        :title="t('doacoes.formas.voluntario.titulo')"
        :description="t('doacoes.formas.voluntario.descricao')"
        :show-volunteer-stats="true"
        :benefits="[
          {
            icon: 'pi pi-heart',
            title: t('doacoes.formas.voluntario.beneficios.experiencia'),
            color: '#dc3545',
          },
          {
            icon: 'pi pi-star',
            title: t('doacoes.formas.voluntario.beneficios.desenvolvimento'),
            color: '#ffc107',
          },
          {
            icon: 'pi pi-briefcase',
            title: t('doacoes.formas.voluntario.beneficios.curriculo'),
            color: '#17a2b8',
          },
        ]"
        :volunteer-stats="{
          totalVolunteers: t('doacoes.formas.voluntario.estatisticas.totalVoluntarios'),
          volunteersLabel: t('doacoes.formas.voluntario.estatisticas.voluntarios'),
          totalHours: t('doacoes.formas.voluntario.estatisticas.totalHoras'),
          hoursLabel: t('doacoes.formas.voluntario.estatisticas.horasDoadas'),
        }"
      />
    </section>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

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
