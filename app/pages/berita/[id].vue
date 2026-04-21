<template>
  <div role="main" class="main">
    <section class="page-header page-header-modern bg-color-light-scale-1 page-header-md">
      <div class="container">
        <div class="row">
          <div class="col-md-12 align-self-center p-static order-2 text-center">
            <h1 class="text-light font-weight-bold text-8">Detail Berita</h1>
          </div>
          <!-- <div class="col-md-12 align-self-center order-1">
            <ul class="breadcrumb d-block text-center">
              <li><NuxtLink to="/">Beranda</NuxtLink></li>
              <li><NuxtLink to="/berita">Berita</NuxtLink></li>
              <li class="active">Membaca Berita</li>
            </ul>
          </div> -->
        </div>
      </div>
    </section>

    <div class="container py-4">
      <div class="row">
        
        <div class="col-lg-8 mb-5 mb-lg-0">
          <article class="post post-large border-0 pb-0">
            <div class="post-image">
              <img src="/img/tes.jpeg" class="img-fluid img-thumbnail img-thumbnail-no-borders rounded box-shadow-2" alt="Gambar Berita" />
            </div>

            <div class="post-content mt-4">
              <div class="post-meta mb-3 d-flex align-items-center bg-color-light-scale-1 p-2 rounded">
                <span class="pe-3"><i class="far fa-calendar-alt text-color-primary"></i> 08 Maret 2026</span>
                <span class="pe-3"><i class="far fa-user text-color-primary"></i> Admin SMAN 1</span>
                <span><i class="far fa-folder text-color-primary"></i> <a href="#" class="text-color-dark">Berita Utama</a></span>
              </div>

              <h2 class="font-weight-semibold text-6 line-height-4 mb-3">
                Ini Adalah Judul Berita Dinamis untuk ID: {{ route.params.id }}
              </h2>

              <p class="text-4 line-height-7">
                Ini adalah paragraf pembuka (lead) dari berita. Di sini Anda bisa menjelaskan poin utama dari kejadian atau pengumuman yang ingin disampaikan kepada pembaca. Karena Anda sedang melihat rute dinamis, URL saat ini menunjukkan bahwa Anda sedang membuka berita dengan ID <strong>{{ route.params.id }}</strong>.
              </p>
              
              <p class="text-4 line-height-7">
                Nantinya, bagian teks ini akan digantikan dengan data asli yang ditarik dari <i>database</i> atau API <i>backend</i> (misalnya Laravel) menggunakan <code>useFetch()</code> atau <code>useAsyncData()</code> bawaan Nuxt. Dengan begitu, setiap kali pengunjung mengklik berita yang berbeda, judul, gambar, dan teksnya akan berubah secara otomatis sesuai ID-nya.
              </p>

              <p class="text-4 line-height-7">
                SMAN 1 Meurede terus berkomitmen untuk memberikan layanan informasi yang cepat dan transparan. Kegiatan-kegiatan unggulan, pencapaian siswa, hingga informasi akademik harian akan terus diperbarui melalui portal berita ini.
              </p>

              <div class="post-block mt-5 post-share">
                <h4 class="mb-3">Kategori Terkait</h4>
                <NuxtLink to="/berita" class="badge bg-primary badge-sm text-uppercase px-3 py-2 me-2">Pendidikan</NuxtLink>
                <NuxtLink to="/berita" class="badge bg-dark badge-sm text-uppercase px-3 py-2 me-2">Prestasi</NuxtLink>
                <NuxtLink to="/berita" class="badge bg-secondary badge-sm text-uppercase px-3 py-2">Sekolah</NuxtLink>
              </div>
            </div>
          </article>
        </div>

        <div class="col-lg-4">
          <aside class="sidebar" data-plugin-sticky data-plugin-options="{'minWidth': 991, 'containerSelector': '.container', 'padding': {'top': 110}}">
            
            <h5 class="font-weight-bold pt-4 mb-2">Cari Berita</h5>
            <div class="mb-4">
              <div class="input-group">
                <input class="form-control text-1" placeholder="Masukkan kata kunci..." name="s" id="s" type="text">
                <button type="submit" class="btn btn-dark text-1 p-2"><i class="fas fa-search m-2"></i></button>
              </div>
            </div>

            <hr class="solid my-4">

            <h5 class="font-weight-bold mb-3">Berita Terbaru</h5>
            <div class="pb-2">
              <div class="mb-3 d-flex align-items-center">
                <div class="recent-posts-image me-3">
                  <NuxtLink to="/berita/2">
                    <img src="/img/tes.jpeg" alt="Thumbnail" class="img-fluid rounded" style="width: 60px; height: 60px; object-fit: cover;">
                  </NuxtLink>
                </div>
                <div class="recent-posts-content">
                  <h6 class="font-weight-bold text-3 mb-1">
                    <NuxtLink to="/berita/2" class="text-dark">Semarak PORSENI 2026</NuxtLink>
                  </h6>
                  <span class="text-1 text-muted">02 Maret 2026</span>
                </div>
              </div>

              <div class="mb-3 d-flex align-items-center">
                <div class="recent-posts-image me-3">
                  <NuxtLink to="/berita/3">
                    <img src="/img/tes.jpeg" alt="Thumbnail" class="img-fluid rounded" style="width: 60px; height: 60px; object-fit: cover;">
                  </NuxtLink>
                </div>
                <div class="recent-posts-content">
                  <h6 class="font-weight-bold text-3 mb-1">
                    <NuxtLink to="/berita/3" class="text-dark">Aksi Tanam Seribu Pohon</NuxtLink>
                  </h6>
                  <span class="text-1 text-muted">25 Februari 2026</span>
                </div>
              </div>
            </div>

            <hr class="solid my-4">

            <h5 class="font-weight-bold mb-3">Kategori</h5>
            <ul class="list list-icons list-icons-sm mb-4">
              <li><i class="fas fa-angle-right text-color-primary"></i> <a href="#" class="text-dark">Akademik <span class="float-end text-muted">(12)</span></a></li>
              <li><i class="fas fa-angle-right text-color-primary"></i> <a href="#" class="text-dark">Kesiswaan <span class="float-end text-muted">(8)</span></a></li>
              <li><i class="fas fa-angle-right text-color-primary"></i> <a href="#" class="text-dark">Ekstrakurikuler <span class="float-end text-muted">(15)</span></a></li>
              <li><i class="fas fa-angle-right text-color-primary"></i> <a href="#" class="text-dark">Pengumuman <span class="float-end text-muted">(5)</span></a></li>
            </ul>

          </aside>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

// Memanggil useRoute untuk menangkap parameter ID dari URL
const route = useRoute()

// Saat nanti dihubungkan ke API, kamu bisa menarik data berdasarkan route.params.id di sini
// Contoh: const { data: artikel } = await useFetch(`https://api.sman1meurede.sch.id/berita/${route.params.id}`)
</script>

<style scoped>
/* Agar font di paragraf berita lebih enak dibaca dan tidak terlalu rapat */
.post-content p {
  margin-bottom: 1.5rem;
}
</style>