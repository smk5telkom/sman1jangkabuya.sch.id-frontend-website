
<script setup lang="ts">
import { ref, computed } from 'vue'

useSeoMeta({
  title: "Prestasi Siswa - SMAN 1 Jangka Buya",
  description: "Prestasi siswa SMAN 1 Jangka Buya di tingkat kabupaten, provinsi, nasional, dan internasional — bangga dengan pencapaian generasi muda Pidie Jaya.",
})

const { data: achievements, pending, error } = await useFetch(
  '/api/achievements/',
  {
    key: 'achievements-list',
    default: () => [],
  }
)

const config = useRuntimeConfig()

function getImageUrl(path: string) {
  if (!path) return ''
  return `${config.public.backendUrl}${path}`
}

function getBadgeColor(level: string) {
  if (!level) return 'bg-secondary text-light'

  const lvl = level.toLowerCase()
  if (lvl.includes('internasional')) return 'bg-danger text-light'
  if (lvl.includes('nasional')) return 'bg-primary text-light'
  if (lvl.includes('provinsi')) return 'bg-success text-light'
  if (lvl.includes('kabupaten') || lvl.includes('kota')) return 'bg-warning text-dark'

  return 'bg-secondary text-light'
}

const currentPage = ref(1)
const itemsPerPage = 6

const totalPages = computed(() => {
  if (!achievements.value) return 0
  return Math.ceil(achievements.value.length / itemsPerPage)
})

const paginatedAchievements = computed(() => {
  if (!achievements.value) return []
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return achievements.value.slice(start, end)
})

function changePage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    window.scrollTo({ top: 300, behavior: 'smooth' })
  }
}
</script>

<template>
  <div role="main" class="main">
    <section class="page-header page-header-modern bg-color-light-scale-1 page-header-md">
      <div class="container">
        <div class="row">
          <div class="col-md-12 align-self-center p-static order-2 text-center">
            <h1 class="text-light font-weight-bold text-8">Prestasi Siswa</h1>
            <span class="sub-title text-light">Daftar Pencapaian Gemilang SMAN 1 Meurede</span>
          </div>
        </div>
      </div>
    </section>

    <div class="container py-5 mt-2">
      <div class="row">
        <div class="col">
          <p class="lead text-center mb-5">
            Kami bangga dengan pencapaian para siswa yang terus mengharumkan nama sekolah di berbagai bidang, baik akademik maupun non-akademik.
          </p>
        </div>
      </div>

      <div v-if="pending" class="text-center py-5">
        Loading data prestasi...
      </div>

      <div v-else-if="error" class="text-center py-5 text-danger">
        <p>Gagal mengambil data prestasi.</p>
        <pre>{{ error }}</pre>
      </div>

      <div v-else class="row portfolio-list">
        
        <div 
          v-for="achievement in paginatedAchievements" 
          :key="achievement.id" 
          class="col-md-6 col-lg-4 mb-4"
        >
          <div class="card border-0 box-shadow-1 hover-effect-1 h-100">
            <div class="card-img-top position-relative overlay overlay-show overlay-op-1" style="height: 250px; overflow: hidden;">
              <img 
                :src="getImageUrl(achievement.imageUrl)" 
                class="img-fluid rounded-top w-100 h-100" 
                style="object-fit: cover;"
                :alt="achievement.title" 
              />
            </div>
            
            <div class="card-body p-4 text-center d-flex flex-column">
              <div>
                <span :class="['badge badge-sm mb-2 text-uppercase', getBadgeColor(achievement.level)]">
                  Tingkat {{ achievement.level }}
                </span>
                <h4 class="font-weight-bold text-5 mb-2">{{ achievement.title }}</h4>
                <p class="text-color-primary font-weight-semibold text-2 mb-3">{{ achievement.subtitle }}</p>
              </div>
              
              <p class="card-text text-3 mt-auto mb-0">
                {{ achievement.description }}
              </p>
            </div>
          </div>
        </div>

        <div v-if="achievements.length === 0" class="col-12 text-center py-5">
          <p>Belum ada data prestasi yang ditambahkan.</p>
        </div>

      </div>

      <div class="row mt-4" v-if="totalPages > 1">
        <div class="col-12 d-flex justify-content-center">
          <ul class="pagination pagination-md">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">
                <i class="fas fa-angle-left"></i>
              </a>
            </li>
            
            <li 
              v-for="page in totalPages" 
              :key="page" 
              class="page-item" 
              :class="{ active: currentPage === page }"
            >
              <a class="page-link" href="#" @click.prevent="changePage(page)">
                {{ page }}
              </a>
            </li>
            
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
              <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">
                <i class="fas fa-angle-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
  </div>
</template>

<style scoped>
.hover-effect-1 {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-effect-1:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
}

.page-item.disabled .page-link {
  cursor: not-allowed;
  background-color: #f8f9fa;
}
</style>  