<script setup>
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
