<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
  nome: '',
  email: '',
  cidade: '',
  assunto: '',
  mensagem: '',
})

const handleSubmit = () => {
  console.log('Formulário enviado:', formData.value)
}
</script>

<template>
  <div id="contato" class="container-sm-fluid container-md-fluid container-lg my-5 page-container">
    <!-- Header da Página -->
    <section v-motion :initial="{ opacity: 0, y: 0 }" :visible="{ opacity: 1, y: 0 }" :duration="1000"
      class="row my-4 py-5 px-4 bg-custom-primary text-white rounded shadow-lg">
      <div class="col-12 text-center">
        <i class="pi pi-envelope display-1 mb-3" style="font-size: 3rem !important"></i>
        <h1 class="display-4 font-weight-bold mb-4">Entre em Contato</h1>
        <p class="lead text-center mx-auto" style="max-width: 800px">
          Estamos aqui para ajudar! Entre em contato conosco e responderemos o mais rápido possível.
        </p>
      </div>
    </section>

    <!-- Informações de Contato e Mapa -->
    <section v-motion :initial="{ opacity: 0, y: 0 }" :visible="{ opacity: 1, y: 0 }" :duration="1000" :delay="200"
      class="row my-5">
      <!-- Informações de Contato -->
      <div class="col-lg-6 mb-4">
        <div class="card border-0 shadow-lg h-100 contact-info-card">
          <div class="card-body p-5">
            <h2 class="card-title h4 font-weight-bold mb-4 text-center">Nossas Informações</h2>

            <!-- Endereço -->
            <div class="contact-item mb-4">
              <div class="contact-icon">
                <i class="pi pi-map-marker"></i>
              </div>
              <div class="contact-details">
                <h5 class="font-weight-bold mb-2">Endereço</h5>
                <p class="mb-1">Rua Tôrres Sobrinho, 32 - Méier</p>
                <p class="mb-1">Rio de Janeiro - RJ</p>
                <p class="mb-0">CEP 20780-050 - Brasil</p>
              </div>
            </div>

            <!-- Telefone -->
            <div class="contact-item mb-4">
              <div class="contact-icon">
                <i class="pi pi-phone"></i>
              </div>
              <div class="contact-details">
                <h5 class="font-weight-bold mb-2">Telefone</h5>
                <p class="mb-0">+55 (21) 2241-7413</p>
              </div>
            </div>

            <!-- WhatsApp -->
            <div class="contact-item mb-4">
              <div class="contact-icon">
                <i class="pi pi-whatsapp"></i>
              </div>
              <div class="contact-details">
                <h5 class="font-weight-bold mb-2">WhatsApp</h5>
                <p class="mb-0">
                  <a href="https://wa.me/5521992206577" target="_blank" class="contact-link">
                    +55 (21) 99220-6577
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mapa -->
      <div class="col-lg-6 mb-4">
        <div class="card border-0 shadow-lg h-100">
          <div class="card-body p-0">
            <div class="map-container">
              <div class="map-placeholder">
                <div class="map-content">
                  <i class="pi pi-map-marker display-4 text-primary mb-3"></i>
                  <h4 class="font-weight-bold mb-2">Nossa Localização</h4>
                  <p class="text-muted mb-3">Rua Tôrres Sobrinho, 32 - Méier</p>
                  <a href="https://maps.google.com/?q=Rua+Tôrres+Sobrinho,+32+-+Méier+-+Rio+de+Janeiro+-+RJ"
                    target="_blank" class="btn btn-primary btn-sm">
                    <i class="pi pi-external-link text-white me-2"></i>Ver no Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

// #contato {
//   padding-top: $app-padding-top;
// }

.bg-custom-primary {
  background: $heading-section-color;
}

.contact-info-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 16px;
  // transition: all 0.3s ease;

  // &:hover {
  //   transform: translateY(-5px);
  //   box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
  // }
}

.contact-item {
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  // &:hover {
  //   transform: translateY(-3px);
  //   box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  // }

  .contact-icon {
    // width: 30px;
    // height: 30px;
    background: linear-gradient(-20deg, $nav-font-color, $nav-font-color-light);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    flex-shrink: 0;
    padding: 8px;

    i {
      font-size: 1rem;
      color: white;
    }
  }

  .contact-details {
    flex-grow: 1;

    h5 {
      color: $nav-font-color;
      margin-bottom: 0.5rem;
    }

    p {
      color: #6c757d;
      margin-bottom: 0.25rem;
    }
  }
}

.contact-link {
  color: $nav-font-color;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: $nav-font-color-light;
    text-decoration: underline;
  }
}

.map-container {
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.map-placeholder {
  height: 100%;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  transition: all 0.3s ease;

  // &:hover {
  //   background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
  // }

  .map-content {
    i {
      color: $nav-font-color;
    }

    h4 {
      color: $nav-font-color;
    }

    .btn {
      border-radius: 8px;
      font-weight: 600;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      }
    }
  }
}

.contact-sidebar {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  padding: 2rem;
  height: 100%;

  .contact-method {
    display: flex;
    align-items: flex-start;
    padding: 1rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    .method-icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(318deg, $nav-font-color, $nav-font-color-light);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1rem;
      flex-shrink: 0;

      i {
        font-size: 1rem;
        color: white;
      }
    }

    .method-details {
      flex-grow: 1;

      h6 {
        color: $nav-font-color;
        margin-bottom: 0.25rem;
      }

      p {
        color: #6c757d;
        margin-bottom: 0;
        font-size: 0.9rem;
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

@media (max-width: 768px) {
  .contact-item {
    flex-direction: column;
    text-align: center;

    .contact-icon {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }

  .contact-sidebar {
    margin-top: 2rem;
  }

  .map-container iframe {
    height: 300px;
  }
}
</style>
