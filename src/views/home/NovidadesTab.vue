<script setup lang="ts">
import ComponenteCard from '@/components/ComponenteCard.vue';
import ComponenteSecaoCabecalho from '@/components/ComponenteSecaoCabecalho.vue';
</script>

<template>
  <div id="novidades" class="container-sm-fluid container-md-fluid container-lg my-5 page-container">
    <!-- Header da Página -->
    <ComponenteSecaoCabecalho icone="pi-eye" :titulo="'Novidades do ISR'"
      :descricao="'Fique por dentro das últimas notícias, eventos e conquistas do Instituto Severa Romana. Acompanhe nossa jornada de transformação social e inclusão.'"
      :duracao="1000" />

    <!-- Seção Principal de Novidades -->
    <section v-motion :initial="{ opacity: 0, y: 0 }" :visible="{ opacity: 1, y: 0 }" :duration="1000" :delay="200"
      class="row my-5">
      <div class="col-12">
        <div class="card border-0 shadow-lg news-highlight-card">
          <div class="card-body p-5 text-center">
            <div class="news-highlight-icon mb-4">
              <i class="pi pi-star"></i>
            </div>
            <h2 class="card-title h3 font-weight-bold mb-3">Mantenha-se Atualizado</h2>
            <p class="card-text text-muted lead mb-4">
              As novidades mais importantes sobre nossos programas, eventos e conquistas são
              compartilhadas em nossas redes sociais. Siga-nos para não perder nenhuma atualização!
            </p>
            <div class="highlight-stats">
              <div class="row">
                <div class="col-sm-6 col-md-6 text-center mb-3">
                  <div class="stat-item">
                    <div class="stat-number">+1000</div>
                    <div class="stat-label">Seguidores</div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-6 text-center mb-3">
                  <div class="stat-item">
                    <div class="stat-number">5</div>
                    <div class="stat-label">Plataformas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Redes Sociais Section -->
    <section v-motion :initial="{ opacity: 0, y: 0 }" :visible="{ opacity: 1, y: 0 }" :duration="1000" :delay="400"
      class="row my-5">
      <div class="col-12 text-center mb-5">
        <h2 class="title font-weight-bold">Nos Acompanhe nas Redes Sociais</h2>
        <p class="text-muted">Escolha sua plataforma favorita e fique conectado conosco!</p>
      </div>

      <!-- WhatsApp -->
      <div class="col-sm-6 col-lg-4 col-md-6 mb-4">
        <ComponenteCard variante="social">
          <div class="social-icon-large mb-3 flex-shrink-0 whatsapp">
            <i class="pi pi-whatsapp"></i>
          </div>
          <h3 class="card-title h5 font-weight-bold mb-3">WhatsApp</h3>
          <p class="card-text text-muted flex-grow-1">
            Entre em contato direto conosco. Tire suas dúvidas e receba informações importantes.
          </p>
          <a href="https://wa.me/5521992206577" class="btn btn-success btn-block mt-auto" target="_blank"
            rel="noopener noreferrer">
            <i class="pi pi-whatsapp me-2"></i>Conversar
          </a>
        </ComponenteCard>
      </div>

      <!-- Instagram -->
      <div class="col-sm-6 col-lg-4 col-md-6 mb-4">
        <ComponenteCard variante="social">
          <div class="social-icon-large mb-3 flex-shrink-0 instagram">
            <i class="pi pi-instagram"></i>
          </div>
          <h3 class="card-title h5 font-weight-bold mb-3">Instagram</h3>
          <p class="card-text text-muted flex-grow-1">
            Fotos e vídeos do nosso dia a dia, eventos especiais e momentos únicos dos nossos
            usuários.
          </p>
          <a href="https://www.instagram.com/instituto.severa.romana/?hl=pt-br"
            class="btn btn-instagram btn-block mt-auto" target="_blank" rel="noopener noreferrer">
            <i class="pi pi-instagram me-2"></i>Seguir
          </a>
        </ComponenteCard>
      </div>

      <!-- Facebook -->
      <div class="col-sm-6 col-lg-4 col-md-6 mb-4">
        <ComponenteCard variante="social">
          <div class="social-icon-large mb-3 flex-shrink-0 facebook">
            <i class="pi pi-facebook"></i>
          </div>
          <h3 class="card-title h5 font-weight-bold mb-3">Facebook</h3>
          <p class="card-text text-muted flex-grow-1">
            Notícias detalhadas, eventos e informações sobre nossos programas e atividades.
          </p>
          <a href="https://www.facebook.com/instseveraromana" class="btn btn-facebook btn-block mt-auto" target="_blank"
            rel="noopener noreferrer">
            <i class="pi pi-facebook me-2"></i>Curtir
          </a>
        </ComponenteCard>
      </div>

      <!-- YouTube -->
      <div class="col-sm-6 col-lg-6 col-md-6 mb-4">
        <ComponenteCard variante="social">
          <div class="social-icon-large mb-3 flex-shrink-0 youtube">
            <i class="pi pi-youtube"></i>
          </div>
          <h3 class="card-title h5 font-weight-bold mb-3">YouTube</h3>
          <p class="card-text text-muted flex-grow-1">
            Vídeos dos nossos eventos, depoimentos e documentários sobre o trabalho do ISR.
          </p>
          <a href="https://www.youtube.com/@institutoseveraromana650" class="btn btn-youtube btn-block mt-auto"
            target="_blank" rel="noopener noreferrer">
            <i class="pi pi-youtube me-2"></i>Inscrever-se
          </a>
        </ComponenteCard>
      </div>

      <!-- TikTok -->
      <div class="col-sm-6 col-lg-6 col-md-6 mb-4">
        <ComponenteCard variante="social">
          <div class="social-icon-large mb-3 flex-shrink-0 tiktok">
            <i class="pi pi-tiktok"></i>
          </div>
          <h3 class="card-title h5 font-weight-bold mb-3">TikTok</h3>
          <p class="card-text text-muted flex-grow-1">
            Conteúdo divertido e educativo sobre inclusão social e nossas atividades.
          </p>
          <a href="https://www.tiktok.com/@institutoseveraromana" class="btn btn-tiktok btn-block mt-auto"
            target="_blank" rel="noopener noreferrer">
            <i class="pi pi-tiktok me-2"></i>Seguir
          </a>
        </ComponenteCard>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base.scss' as *;

// #novidades {
//   padding-top: $app-padding-top;
// }

.bg-custom-primary {
  background: $heading-section-color;
}

.news-highlight-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
  }

  .news-highlight-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(318deg, $nav-font-color, $nav-font-color-light);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    i {
      font-size: 2.5rem;
      color: white;
    }
  }

  .highlight-stats {
    .stat-item {
      padding: 1rem;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
      }

      .stat-number {
        font-size: 1.8rem;
        font-weight: bold;
        color: $nav-font-color;
        margin-bottom: 0.5rem;
      }

      .stat-label {
        font-size: 0.9rem;
        color: #6c757d;
        font-weight: 500;
      }
    }
  }
}

.social-card {
  transition: all 0.3s ease;
  border-radius: 16px;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15) !important;
  }

  .social-icon-large {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    i {
      font-size: 2rem;
      color: white;
    }

    &.whatsapp {
      background: linear-gradient(135deg, #25d366, #128c7e);
    }

    &.instagram {
      background: linear-gradient(45deg,
          #f09433 0%,
          #e6683c 25%,
          #dc2743 50%,
          #cc2366 75%,
          #bc1888 100%);
    }

    &.facebook {
      background: linear-gradient(135deg, #1877f2, #166fe5);
    }

    &.youtube {
      background: linear-gradient(135deg, #ff0000, #cc0000);
    }

    &.tiktok {
      background: linear-gradient(135deg, #000000, #1a1a1a);
    }
  }

  .card-title {
    color: #2c3e50;
    font-weight: 600;
  }

  .btn {
    border-radius: 25px;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    &.btn-instagram {
      background: linear-gradient(45deg,
          #f09433 0%,
          #e6683c 25%,
          #dc2743 50%,
          #cc2366 75%,
          #bc1888 100%);
      border: none;
      color: white;
    }

    &.btn-facebook {
      background-color: #1877f2;
      border-color: #1877f2;
      color: white;
    }

    &.btn-youtube {
      background-color: #ff0000;
      border-color: #ff0000;
      color: white;
    }

    &.btn-tiktok {
      background-color: #000000;
      border-color: #000000;
      color: white;
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
  .social-card {
    margin-bottom: 2rem;
  }

  .news-highlight-card .card-body {
    padding: 2rem !important;
  }

  .highlight-stats .stat-item {
    margin-bottom: 1rem;
  }
}
</style>
