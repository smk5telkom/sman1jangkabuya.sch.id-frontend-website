<script setup>
import { watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

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
    <!--    <NuxtRouteAnnouncer />-->
    <!-- <NuxtWelcome /> -->
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>
