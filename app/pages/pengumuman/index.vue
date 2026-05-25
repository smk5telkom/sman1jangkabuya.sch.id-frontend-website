<script setup lang="ts">
const currentPage = ref(1)
const perPage = 3

const {
  data: announcements,
  pending,
  error,
  refresh,
} = await useFetch<any[]>('/api/announcements', {
  default: () => [],
  // server: false,
  // key: 'announcements-list',
})

onMounted(() => {
  refresh()
})

const totalPages = computed(() => {
  return Math.ceil(announcements.value.length / perPage)
})

const paginatedAnnouncements = computed(() => {
  const start = (currentPage.value - 1) * perPage
  const end = start + perPage
  return announcements.value.slice(start, end)
})

function changePage(page: number) {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
}

function formatDay(date: string) {
  return new Date(date).getDate().toString().padStart(2, '0')
}

function formatMonth(date: string) {
  return new Date(date).toLocaleDateString('id-ID', {
    month: 'short',
    year: 'numeric',
  }).toUpperCase()
}

function truncate(text: string, length = 50) {
  return text.length > length
    ? text.substring(0, length) + '...'
    : text
}
</script>

<template>
  <div role="main" class="main">
    <section class="page-header page-header-modern bg-color-light-scale-1 page-header-md">
      <div class="container">
        <div class="row">
          <div class="col-md-12 align-self-center p-static order-2 text-center">
            <h1 class="text-light font-weight-bold text-8">Pengumuman Sekolah</h1>
            <span class="sub-title text-light">Informasi Resmi dan Edaran Terbaru SMAN 1 Meurede</span>
          </div>
          <!-- <div class="col-md-12 align-self-center order-1">
            <ul class="breadcrumb d-block text-center">
              <li><NuxtLink to="/">Beranda</NuxtLink></li>
              <li><a href="#">Informasi</a></li>
              <li class="active">Pengumuman</li>
            </ul>
          </div> -->
        </div>
      </div>
    </section>

    <div class="container py-5 mt-3">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div v-if="pending">Loading pengumuman...</div>

          <div v-else-if="error">
            <p>Gagal mengambil data pengumuman.</p>
            <pre>{{ error }}</pre>
          </div>

          <article
            v-else
            v-for="item in paginatedAnnouncements"
            :key="item.id"
            class="post post-large border-bottom pb-4 mb-4 announcement-card"
          >
            <div class="row align-items-center text-center text-md-start">
              <div class="col-12 col-md-auto text-center pe-md-0 mb-3 mb-md-0">
                <div class="date-box bg-primary text-color-light rounded p-3 box-shadow-2">
                  <span class="day d-block text-6 font-weight-bold line-height-1">
                    {{ formatDay(item.createdAt) }}
                  </span>
                  <span class="month d-block text-2 text-uppercase">
                    {{ formatMonth(item.createdAt) }}
                  </span>
                </div>
              </div>

              <div class="col-12 col-md">
                <h2 class="font-weight-bold text-5 line-height-3 mb-2">
                  <NuxtLink to="#" class="text-dark text-decoration-none">
                    {{ item.title }}
                  </NuxtLink>
                </h2>

                <p class="mb-3 text-3">
                  {{ truncate(item.content) }}
                </p>

                <!-- <a
                  v-if="item.type === 'Button'"
                  :href="item.typeContent"
                  target="_blank"
                  class="btn btn-modern btn-primary btn-sm rounded font-weight-bold"
                >
                  <i class="fas fa-file ms-1 me-2"></i>
                  <span>{{ item.typeTitle || 'Download' }}</span>
                </a> -->
                <!-- <NuxtLink v-if="item.type === 'Link'" to="{{ item.typeContent }}" class="read-more text-color-primary font-weight-bold text-2">
                  {{  item.typeTitle }} <i class="fas fa-chevron-right text-1 ms-1"></i>
                </NuxtLink> -->
                <NuxtLink :to="`/pengumuman/${item.slug}`" class="read-more text-color-primary font-weight-bold text-2">
                Baca Selengkap Nya<i class="fas fa-chevron-right text-1 ms-1"></i>
                </NuxtLink>
              </div>
            </div>
          </article>

          <div class="row mt-5" v-if="totalPages > 1">
            <div class="col">
              <ul class="pagination float-end">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                  <button class="page-link" @click="changePage(currentPage - 1)">
                    <i class="fas fa-angle-left"></i>
                  </button>
                </li>

                <li
                  v-for="page in totalPages"
                  :key="page"
                  class="page-item"
                  :class="{ active: currentPage === page }"
                >
                  <button class="page-link" @click="changePage(page)">
                    {{ page }}
                  </button>
                </li>

                <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                  <button class="page-link" @click="changePage(currentPage + 1)">
                    <i class="fas fa-angle-right"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.date-box {
  min-width: 80px;
  text-align: center;
}

.date-box .day {
  letter-spacing: -1px;
}

.announcement-content {
  display: -webkit-box;
  -webkit-line-clamp: 1; 
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.truncate-text {
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  -webkit-line-clamp: 3 !important;
}

.announcement-card {
  width: 100%;
}

@media (max-width: 767px) {
  .announcement-card {
    max-width: 280px;
    margin-left: auto;
    margin-right: auto;
  }

  .announcement-card .row {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>