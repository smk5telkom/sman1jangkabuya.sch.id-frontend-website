<script setup>
import { onMounted, nextTick, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isProfilActive = computed(() => {
  const profilPages = ['/profil-sekolah', '/sambutan-kepala-sekolah', '/sejarah-sekolah', '/visi-misi']
  return profilPages.includes(route.path)
})

const isInformasiActive = computed(() => {
  return route.path.startsWith('/berita') || route.path === '/pengumuman'
})

onMounted(async () => {
  await nextTick()

  if (window.$) {
    document.fonts.ready.then(() => {
      setTimeout(() => {
        // Inisialisasi script tema Porto
        window.$(document).trigger('theme.init')
      }, 300)
    })
  }
})
</script>

<template>
  <header
    id="header"
    class="header-effect-shrink"
    data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyChangeLogo': true, 'stickyStartAt': 30, 'stickyHeaderContainerHeight': 70}"
  >
    <div class="header-body border-color-primary border-bottom-0">
      <!-- <div class="header-top header-top-simple-border-bottom bg-primary-subtle">
        <div class="container">
          <div class="header-row py-2">
            <div class="header-column justify-content-end">
              <div class="header-row">
                <nav class="header-nav-top">
                  <ul class="nav nav-pills">
                    <li class="nav-item">
                      <a href="mailto:mail@domain.com">
                        <i class="far fa-envelope text-4 text-color-primary" style="top: 1px"></i>
                        mail@domain.com
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="tel:123-456-7890">
                        <i class="fab fa-whatsapp text-4 text-color-primary" style="top: 0"></i>
                        123-456-7890
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="header-container container">
        <div class="header-row">
          <div class="header-column">
            <div class="header-row">
              <div class="header-logo">
                <NuxtLink to="/">
                  <img
                    alt="Logo SMAN 1 Jangka Buya"
                    src="/img/sekolah/logo.png" 
                    class="logo-sekolah"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="header-column justify-content-end">
            <div class="header-row">
              <div class="header-nav header-nav-line header-nav-bottom-line">
                <div
                  class="header-nav-main header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-effect-2 header-nav-main-sub-effect-1"
                >
                  <nav class="collapse">
                    <ul class="nav nav-pills" id="mainNav">
                      <li class="nav-item">
                        <NuxtLink class="nav-link" active-class="active" to="/"> Beranda </NuxtLink>
                      </li>
                      <li class="dropdown">
                        <a class="dropdown-item dropdown-toggle" :class="{ 'active': isProfilActive }" href="#">
                          Profil
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <NuxtLink class="dropdown-item" active-class="active" to="/profil-sekolah">Profil Sekolah</NuxtLink>
                          </li>
                          <li>
                            <NuxtLink class="dropdown-item" active-class="active" to="/sambutan-kepala-sekolah">Sambutan Kepala Sekolah</NuxtLink>
                          </li>
                          <li>
                            <NuxtLink class="dropdown-item" active-class="active" to="/sejarah-sekolah">Sejarah Sekolah</NuxtLink>
                          </li>
                          <li>
                            <NuxtLink class="dropdown-item" active-class="active" to="/visi-misi">Visi & Misi</NuxtLink>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <NuxtLink class="nav-link" active-class="active" to="/prestasi"> Prestasi </NuxtLink>
                      </li>
                      <li class="dropdown">
                        <a class="dropdown-item dropdown-toggle" :class="{ 'active': isInformasiActive }" href="#">
                          Informasi
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <NuxtLink class="dropdown-item" active-class="active" to="/pengumuman">Pengumuman</NuxtLink>
                          </li>
                          <li>
                            <NuxtLink class="dropdown-item" active-class="active" to="/berita">Berita</NuxtLink>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <NuxtLink class="nav-link" active-class="active" to="/pendaftaran-alumni">
                          Pendaftaran Alumni
                        </NuxtLink>
                      </li>
                      <li class="nav-item">
                        <NuxtLink class="nav-link" active-class="active" to="/hubungi-kami">
                          Hubungi Kami
                        </NuxtLink>
                      </li>
                    </ul>
                  </nav>
                </div>
                <button
                  class="btn header-btn-collapse-nav"
                  data-bs-toggle="collapse"
                  data-bs-target=".header-nav-main nav"
                >
                  <i class="fas fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* CSS Tambahan untuk Logo Sekolah */
.logo-sekolah {
  /* Atur tinggi maksimum logo agar pas di header */
  max-height: 60px; 
  /* Biarkan lebar menyesuaikan otomatis agar rasio tetap terjaga (tidak gepeng) */
  width: auto; 
  /* Opsional: tambah sedikit padding jika perlu */
  padding: 5px 0; 
  transition: ease all 0.3s;
}

/* Mengatur ukuran logo saat header dalam posisi sticky (mengecil) */
#header.header-effect-shrink .header-body.sticky-header .logo-sekolah {
  max-height: 50px;
}
</style>