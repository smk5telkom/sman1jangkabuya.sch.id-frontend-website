<script setup lang="ts">
const route = useRoute()

const slug = computed(() => route.params.slug as string)

const { data: post, pending, error } = await useFetch(
  () => `/api/posts/slug/${slug.value}`,
  {
    key: () => `post-${slug.value}`,
    watch: [slug],
    default: () => null,
  }
)

useSeoMeta({
  title: () =>
    post.value?.title
      ? `${post.value.title} - SMAN 1 Jangka Buya`
      : "Berita Sekolah - SMAN 1 Jangka Buya",

  description: () =>
    post.value?.content
      ? post.value.content.substring(0, 160)
      : "Berita Sekolah - SMAN 1 Jangka Buya",
})

function formatDay(date: string) {
  if (!date) return ''
  return new Date(date).getDate().toString().padStart(2, '0')
}

function formatMonth(date: string) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('id-ID', {
    month: 'short',
    year: 'numeric',
  }).toUpperCase()
}

function getImageUrl(path: string) {
  if (!path) return ''
  return `http://localhost:3000${path}`
}
</script>

<template>
  <div role="main" class="main">
    <section class="page-header page-header-modern bg-color-light-scale-1 page-header-md">
      <div class="container">
        <div class="row">
          <div class="col-md-12 align-self-center p-static order-2 text-center">
            <h1 class="text-light font-weight-bold text-8">{{ post?.title }}</h1>
            <span v-if="post?.createdAt" class="sub-title text-light">
              <i class="far fa-user me-1"></i> {{ post.postBy?.name }} &nbsp;|&nbsp; 
              <i class="far fa-calendar-alt me-1"></i> {{ formatDay(post.createdAt) }} {{ formatMonth(post.createdAt) }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <div class="container py-5 mt-3">
        <div v-if="pending">
          Loading...
        </div>

        <div v-else-if="error">
            <p>Gagal mengambil detail berita.</p>
            <pre>{{ error }}</pre>
        </div>

        <article v-else-if="post">
            <div class="post-image mb-4 text-center" v-if="post.imageUrl">
              <img 
                :src="getImageUrl(post.imageUrl)" 
                class="img-fluid rounded shadow-sm" 
                :alt="post.title"
                style="width: 100%; max-height: 500px; object-fit: cover;" 
              />
            </div>

            <div class="post-content">
              <p class="mb-3 text-4" style="white-space: pre-line;">
                  {{ post.content }}
              </p>
            </div>
        </article>
    </div>
  </div>
</template>