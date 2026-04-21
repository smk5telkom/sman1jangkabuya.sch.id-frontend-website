<script setup>
import { watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Fungsi ini akan terus memantau setiap kali kamu pindah halaman
watch(() => route.path, async () => {
  await nextTick()
  
  if (window.$) {
    // Beri sedikit jeda agar Vue selesai menampilkan HTML-nya
    setTimeout(() => {
      // 1. Jalankan ulang semua script bawaan Porto
      window.$(document).trigger('theme.init')
      
      // 2. Pancing browser dengan event 'scroll' dan 'resize' buatan
      // Ini akan memaksa animasi (appear-animation) langsung berjalan 
      // tanpa harus menunggu user nge-scroll mouse secara manual
      // window.dispatchEvent(new Event('scroll'))
      // window.dispatchEvent(new Event('resize'))
    }, 300)
  }
})
</script>

<template>
  <div>
    <!--    <NuxtRouteAnnouncer />-->
    <!-- <NuxtWelcome /> -->
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>
