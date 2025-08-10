<template>
  <div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100 card-custom card-hover-strong donation-card">
      <div class="card-body text-center p-4 d-flex flex-column">
        <div class="icon-circle mb-3 flex-shrink-0">
          <i :class="iconClass"></i>
        </div>
        <h3 class="card-title h5 font-weight-bold mb-3">
          {{ title }}
        </h3>
        <p class="card-text text-muted flex-grow-1 mb-4">
          {{ description }}
        </p>

        <!-- Conteúdo padrão com benefícios (apenas para produtos) -->
        <div v-if="!showBankInfo && !showVolunteerStats" class="volunteer-benefits">
          <div
            v-for="(benefit, index) in benefits"
            :key="index"
            class="benefit-item mb-3 p-2 bg-light rounded"
          >
            <i
              :class="benefit.icon"
              :style="{ color: benefit.color }"
              class="mb-2 d-block"
              style="font-size: 1.5rem"
            ></i>
            <h6 class="font-weight-bold mb-0">
              {{ benefit.title }}
            </h6>
          </div>
        </div>

        <!-- Conteúdo para informações bancárias -->
        <div v-if="showBankInfo" class="donation-details">
          <div class="bank-info p-3 bg-light rounded mb-3">
            <h6 class="font-weight-bold mb-2">
              {{ bankInfo?.name }}
            </h6>
            <p class="mb-1">
              <strong>{{ bankInfo?.agency }}:</strong>
              {{ bankInfo?.agencyNumber }}
            </p>
            <p class="mb-1">
              <strong>{{ bankInfo?.account }}:</strong>
              {{ bankInfo?.accountNumber }}
            </p>
            <p class="mb-0">
              <strong>{{ bankInfo?.pix }}:</strong>
              {{ bankInfo?.cnpj }}
            </p>
          </div>
          <div v-if="qrCodeImage" class="qr-code-container">
            <div class="qr-code-wrapper">
              <img :src="qrCodeImage" :alt="qrCodeAlt" class="qr-code-image" loading="lazy" />
              <div class="qr-code-overlay">
                <i class="pi pi-qrcode"></i>
                <span>{{ qrCodeAlt }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Conteúdo para voluntariado com estatísticas -->
        <div v-if="showVolunteerStats" class="volunteer-benefits">
          <div
            v-for="(benefit, index) in benefits"
            :key="index"
            class="benefit-item mb-3 p-2 bg-light rounded"
          >
            <i
              :class="benefit.icon"
              :style="{ color: benefit.color }"
              class="mb-2 d-block"
              style="font-size: 1.5rem"
            ></i>
            <h6 class="font-weight-bold mb-0">
              {{ benefit.title }}
            </h6>
          </div>
          <div v-if="volunteerStats" class="volunteer-stats-card bg-primary text-white p-3 rounded">
            <div class="row text-center">
              <div class="col-6">
                <div class="stat-item">
                  <i class="pi pi-heart d-block mb-1" style="font-size: 1.2rem"></i>
                  <strong class="d-block">{{ volunteerStats.totalVolunteers }}</strong>
                  <small>{{ volunteerStats.volunteersLabel }}</small>
                </div>
              </div>
              <div class="col-6">
                <div class="stat-item">
                  <i class="pi pi-clock d-block mb-1" style="font-size: 1.2rem"></i>
                  <strong class="d-block">{{ volunteerStats.totalHours }}</strong>
                  <small>{{ volunteerStats.hoursLabel }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Benefit {
  icon: string
  title: string
  color: string
}

interface BankInfo {
  name: string
  agency: string
  agencyNumber: string
  account: string
  accountNumber: string
  pix: string
  cnpj: string
}

interface VolunteerStats {
  totalVolunteers: string
  volunteersLabel: string
  totalHours: string
  hoursLabel: string
}

interface Props {
  iconClass: string
  title: string
  description: string
  benefits?: Benefit[]
  showBankInfo?: boolean
  bankInfo?: BankInfo
  qrCodeImage?: string
  qrCodeAlt?: string
  showVolunteerStats?: boolean
  volunteerStats?: VolunteerStats
}

defineProps<Props>()
</script>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

/* Mantendo os estilos existentes */
.card-custom {
  border: none;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  transition: all 0.3s ease;
  border-radius: 16px;
}

.card-hover-strong:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15) !important;
}

.donation-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  transition: all 0.3s ease;
  border-radius: 16px;
}

.icon-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, $nav-font-color, $nav-font-color-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: white;
  font-size: 2rem;
}

.benefit-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.benefit-item:hover {
  transform: scale(1.05);
}

/* Estilos para informações bancárias */
.bank-info {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%) !important;
  border-left: 4px solid $nav-font-color;
}

/* Estilos para QR Code */
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
}

.qr-code-wrapper:hover {
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
}

.qr-code-overlay i {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.qr-code-overlay span {
  font-size: 0.8rem;
  font-weight: 600;
}

.qr-code-wrapper:hover .qr-code-overlay {
  opacity: 1;
}

/* Estilos para estatísticas de voluntariado */
.volunteer-stats-card {
  transition: all 0.3s ease;
}

.volunteer-stats-card .stat-item {
  transition: all 0.3s ease;
}

.volunteer-stats-card .stat-item:hover {
  transform: scale(1.05);
}
</style>
