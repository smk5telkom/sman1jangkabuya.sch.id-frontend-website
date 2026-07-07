<script setup lang="ts">
import { computed, ref } from 'vue'

// interface Post {
//   id: number
//   title: string
//   slug: string
//   content: string
//   imageUrl: string | null
//   createdAt: string
//   postById: number
// }
useSeoMeta({
  title: "Berita Sekolah - Sman 1 Jangka Buya",
  description: "Berita Sekolah - Sman 1 Jangka Buya",
})

const currentPage = ref(1)
const perPage = 6

const { 
  data: posts, 
  pending, 
  error, 
  refresh 
} = await useFetch<Post[]>(
  '/api/posts',
  {
    default: () => [],
  }
)

onMounted(() => {
  refresh()
})

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

function shortContent(text: string, max = 120) {
  if (text.length <= max) return text
  return text.slice(0, max) + '...'
}

function imagePost(image: string | null) {
  if (!image) return '/img/tes.jpeg'

  return `http://localhost:3000${image}`
}


const totalPages = computed(() => {
  if (!posts.value) return 0

  return Math.ceil(posts.value.length / perPage)
})

const paginatedPosts = computed(() => {
  if (!posts.value) return []

  const start = (currentPage.value - 1) * perPage
  const end = start + perPage

  return posts.value.slice(start, end)
})

function changePage(page: number) {
  if (page < 1 || page > totalPages.value) return

  currentPage.value = page

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div role="main" class="main">
    <section class="page-header page-header-modern bg-color-light-scale-1 page-header-md">
      <div class="container">
        <div class="row">
          <div class="col-md-12 align-self-center p-static order-2 text-center">
            <h1 class="text-light font-weight-bold text-8">Berita Sekolah</h1>
            <span class="sub-title text-light">
              Kabar, Kegiatan, dan Informasi Terbaru SMAN 1 Meurede
            </span>
          </div>
        </div>
      </div>
    </section>

    <div class="container py-4 mt-3">

      <div v-if="pending" class="text-center py-5">
        <h4>Memuat berita...</h4>
      </div>

      <!-- <div v-else-if="error" class="alert alert-danger">
        Gagal mengambil data berita
      </div> -->

      <div v-else-if="error">
        <p>Gagal mengambil data berits.</p>
        <pre>{{ error }}</pre>
      </div>

      <div v-else class="row">

        <div
          v-for="post in paginatedPosts"
          :key="post.id"
          class="col-md-6 col-lg-4 mb-5"
        >
          <article class="post post-medium border-0 pb-0">

            <div class="post-image">
              <NuxtLink :to="`/berita/${post.slug}`">
                <img
                  :src="imagePost(post.imageUrl)"
                  class="img-fluid rounded box-shadow-2 hover-effect-2"
                  :alt="post.title"
                />
              </NuxtLink>
            </div>

            <div class="post-content mt-3">

              <div class="post-meta mb-2">
                <span class="pe-2">
                  <i class="far fa-calendar-alt"></i>
                  {{ formatDate(post.createdAt) }}
                </span>
              </div>

              <h2 class="font-weight-semibold text-5 line-height-6 mb-2">
                <NuxtLink
                  :to="`/berita/${post.slug}`"
                  class="text-dark"
                >
                  {{ post.title }}
                </NuxtLink>
              </h2>

              <p class="mb-3 text-3">
                {{ shortContent(post.content) }}
              </p>

              <NuxtLink
                :to="`/berita/${post.slug}`"
                class="read-more text-color-primary font-weight-bold text-2"
              >
                BACA SELENGKAPNYA
                <i class="fas fa-chevron-right text-1 ms-1"></i>
              </NuxtLink>

            </div>
          </article>
        </div>

      </div>

      <div
        v-if="totalPages > 1"
        class="row mt-4"
      >
        <div class="col">
          <ul class="pagination float-end">
            <li
              class="page-item"
              :class="{ disabled: currentPage === 1 }"
            >
              <button
                class="page-link"
                @click="changePage(currentPage - 1)"
              >
                <i class="fas fa-angle-left"></i>
              </button>
            </li>

            <li
              v-for="page in totalPages"
              :key="page"
              class="page-item"
              :class="{ active: currentPage === page }"
            >
              <button
                class="page-link"
                @click="changePage(page)"
              >
                {{ page }}
              </button>
            </li>

            <li
              class="page-item"
              :class="{ disabled: currentPage === totalPages }"
            >
              <button
                class="page-link"
                @click="changePage(currentPage + 1)"
              >
                <i class="fas fa-angle-right"></i>
              </button>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hover-effect-2 {
  transition: transform 0.4s ease;
}

.hover-effect-2:hover {
  transform: scale(1.03);
}

.post-image img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

</style>