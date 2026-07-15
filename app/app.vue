<script setup>
useSeoMeta({
  title: "Sman 1 Jangka Buya",
  description: "Sman 1 Jangka Buya - Sekolah Menengah Atas",
  themeColor: "#0b1220",
  author: "Sman 1 Jangka Buya",
  ogType: "website",
  ogUrl: "https://sman1jangkabuya.smkn5telkom.sch.id/",
  ogTitle: "Sman 1 Jangka Buya",
  ogDescription: "Sman 1 Jangka Buya - Sekolah Menengah Atas",
  ogImage: "https://sman1jangkabuya.smkn5telkom.sch.id/img/sekolah/logo.png",
  ogImageWidth: 192,
  ogImageHeight: 192,
  ogImageAlt: "Sman 1 Jangka Buya Logo",
  ogSiteName: "Sman 1 Jangka Buya",
  ogLocale: "id_ID",
  twitterCard: "summary_large_image",
  twitterTitle: "Sman 1 Jangka Buya",
  twitterDescription: "Sman 1 Jangka Buya - Sekolah Menengah Atas",
  twitterImage: "https://sman1jangkabuya.smkn5telkom.sch.id/img/sekolah/logo.png",
})
import { watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isAdminPage = computed(() =>
  route.path.startsWith('/admin')
)

watch(() => route.path, async () => {
  await nextTick()
  
  if (window.$) {
    setTimeout(() => {
      window.$(document).trigger('theme.init')
      // window.dispatchEvent(new Event('scroll'))
      // window.dispatchEvent(new Event('resize'))
    }, 300)
  }
})
</script>

<template>
  <div>
    <Header v-if="!isAdminPage" />
    <NuxtPage />
    <Footer v-if="!isAdminPage" />
  </div>
</template>
