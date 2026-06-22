<script setup lang="ts">
const route = useRoute()

const slug = computed(() => route.params.slug as string)

const { data: announcement, pending, error } = await useFetch(
  () => `/api/announcements/slug/${slug.value}`,
  {
    key: () => `announcement-${slug.value}`,
    watch: [slug],
    default: () => null,
  }
)

function formatDay(date: string) {
  return new Date(date).getDate().toString().padStart(2, '0')
}

function formatMonth(date: string) {
  return new Date(date).toLocaleDateString('id-ID', {
    month: 'short',
    year: 'numeric',
  }).toUpperCase()
}
</script>

<template>
  <div role="main" class="main">
    <section class="page-header page-header-modern bg-color-light-scale-1 page-header-md">
      <div class="container">
        <div class="row">
          <div class="col-md-12 align-self-center p-static order-2 text-center">
            <h1 class="text-light font-weight-bold text-8">{{ announcement.title }}</h1>
            <span v-if="announcement?.createdAt" class="sub-title text-light">
              <i class="far fa-user me-1"></i> {{ announcement.postBy?.name }} &nbsp;|&nbsp; 
              <i class="far fa-calendar-alt me-1"></i> {{ formatDay(announcement.createdAt) }} {{ formatMonth(announcement.createdAt) }}
            </span>
            <!-- <span class="sub-title text-light">{{ formatDay(announcement.createdAt) + ' ' + formatMonth(announcement.createdAt)}}</span> -->
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
        <div v-if="pending">
        Loading...
        </div>

        <div v-else-if="error">
            <p>Gagal mengambil detail pengumuman.</p>
            <pre>{{ error }}</pre>
        </div>

        <article v-else-if="announcement">
            <!-- <h1 class="font-weight-bold text-5 line-height-3 mb-2">{{ announcement.title }}</h1> -->

            <p class="mb-3 text-4">
                {{ announcement.content }}
            </p>

            <a
                v-if="announcement.type === 'Button'"
                :href="announcement.typeContent"
                target="_blank"
                class="btn btn-primary"
            >
                {{ announcement.typeTitle || 'Download' }}
            </a>

            <NuxtLink
            v-if="announcement.type === 'Link'"
            :to="announcement.typeContent"
            class="read-more text-color-primary font-weight-bold text-2"
            >
                {{ announcement.typeTitle || 'Selengkap nya' }}
                <i class="fas fa-chevron-right text-1 ms-1"></i>
            </NuxtLink>
        </article>
    </div>
  </div>
</template>