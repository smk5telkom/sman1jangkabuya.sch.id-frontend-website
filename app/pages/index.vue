<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const words = ["Cerdas", "Berakhlak", "Inovatif", "Berprestasi"]
const currentIndex = ref(0)

let interval = null

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % words.length
  }, 2000) 
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div role="main" class="main">
    <section class="hero-section section border-0 m-0 position-relative" style="background-image: url('/img/sekolah/lapangan.png');">
      <div class="hero-overlay"></div>
      <div class="container h-100 position-relative z-index-2">
        <div class="row align-items-center h-100">
          <div class="col">
            <div class="d-flex flex-column align-items-center justify-content-center text-center h-100 px-3">
              <span class="text-color-light text-3 text-sm-5 line-height-5 font-weight-medium uppercase mb-2 tracking-wide">
                Selamat Datang di Website Resmi
              </span>
              <h1 class="hero-title text-color-light font-weight-extra-bold mb-2">
                SMAN 1 Jangka Buya
              </h1>
              <h2 class="hero-subtitle text-color-light font-weight-bold mb-0">
                Pidie Jaya
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container py-5 my-2 my-md-4">
      <div class="row text-center py-2">
        <div class="col-md-10 mx-md-auto px-4">
          <h2 class="font-weight-bold text-6 text-sm-8 mb-4 line-height-3">
            <span class="d-block d-sm-inline mb-2 mb-sm-0">Mewujudkan Generasi yang </span>
            <span class="badge-animated bg-primary text-white px-3 py-1 rounded">
              <Transition name="fade" mode="out-in">
                <span :key="words[currentIndex]" class="d-inline-block font-weight-bold">
                  {{ words[currentIndex] }}
                </span>
              </Transition>
            </span>
          </h2>
          <p class="lead text-3 text-sm-4 px-md-5 text-secondary">
            Selamat datang di portal informasi resmi SMAN 1 Jangka Buya, Pidie Jaya. Kami berkomitmen untuk memberikan layanan pendidikan terbaik dan membentuk karakter unggul bagi masa depan bangsa.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Hero Section Responsive */
.hero-section {
  background-size: cover;
  background-position: center;
  height: 450px; /* Tinggi ideal untuk mobile */
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.45); /* Lapisan gelap agar teks mudah dibaca */
  z-index: 1;
}

.z-index-2 {
  z-index: 2;
}

/* Tipografi Hero yang adaptif menggunakan CSS modern clamps / em */
.hero-title {
  font-size: calc(1.8rem + 1.5vw);
  line-height: 1.2;
}

.hero-subtitle {
  font-size: calc(1.3rem + 1vw);
  opacity: 0.9;
}

.tracking-wide {
  letter-spacing: 1px;
}

/* Animasi Badge Text Visi */
.badge-animated {
  display: inline-block;
  min-width: 140px; /* Mencegah layout melompat/patah saat teks berganti */
  text-align: center;
}

/* Transisi Fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Media Query Desktop (768px ke atas) */
@media (min-width: 768px) {
  .hero-section {
    height: 600px; /* Kembali ke ukuran penuh di desktop */
  }
  .badge-animated {
    min-width: 200px;
  }
}
</style>