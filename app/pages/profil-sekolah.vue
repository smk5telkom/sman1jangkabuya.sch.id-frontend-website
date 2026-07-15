<script setup>
useSeoMeta({
  title: "Profil Sekolah - SMAN 1 Jangka Buya",
  description: "Profil lengkap SMAN 1 Jangka Buya, sekolah menengah atas unggulan di Kabupaten Pidie Jaya, Aceh. Informasi sejarah, visi misi, fasilitas, dan tenaga pendidik.",
})
</script>

<template>
  <div role="main" class="main">
    <section class="page-header page-header-modern bg-color-light-scale-1 page-header-md">
      <div class="container">
        <div class="row">
          <div class="col-md-12 align-self-center p-static order-2 text-center">
            <h1 class="text-light font-weight-bold text-8">Profil Sekolah</h1>
            <span class="sub-title text-light">Mengenal Lebih Dekat SMAN 1 Jangka Buya</span>
          </div>
        </div>
      </div>
    </section>

    <div class="container py-5">
      <div class="row pt-4">
        <div class="col-lg-7 mb-4 mb-lg-0">
          <h2 class="text-color-dark font-weight-normal text-5 mb-2">Tentang <strong class="font-weight-extra-bold">SMAN 1 Jangka Buya</strong></h2>
          <p class="lead">SMAN 1 Jangka Buya adalah sekolah menengah atas unggulan di Kabupaten Pidie Jaya yang berdedikasi untuk mencetak generasi muda yang cerdas, berakhlak mulia, dan siap menghadapi tantangan global.</p>
          <p>Berdiri sejak tahun 2008, sekolah kami terus mengalami perkembangan pesat baik dari segi infrastruktur, kualitas pendidik, maupun prestasi siswa. Kami berkomitmen menyediakan lingkungan belajar yang asri dan fasilitas modern untuk mendukung minat serta bakat setiap peserta didik.</p>
          <!-- <h3 class="text-color-dark font-weight-normal text-4 mt-4 mb-2">Identitas <strong class="font-weight-extra-bold">Sekolah</strong></h3>
          <ul class="list list-icons list-primary">
            <li><i class="fas fa-check"></i> <strong>NPSN:</strong> 10101234</li>
            <li><i class="fas fa-check"></i> <strong>Akreditasi:</strong> A</li>
            <li><i class="fas fa-check"></i> <strong>Alamat:</strong> Jl. Pendidikan No. 1, Meurede, Pidie Jaya, Aceh</li>
            <li><i class="fas fa-check"></i> <strong>Kepala Sekolah:</strong> Drs. H. Fulan, M.Pd.</li>
          </ul> -->
        </div>
        
        <div class="col-lg-5">
          <img src="/img/sekolah/lapangan.png" class="img-fluid rounded box-shadow-2" alt="Gedung SMAN 1 Meurede" />
          
          <div class="mt-4">
            <NuxtLink to="/visi-misi" class="btn btn-primary btn-modern btn-lg text-2 w-100 font-weight-bold">
              Lihat Visi & Misi Kami <i class="fas fa-arrow-right ms-2"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- <section class="section bg-color-primary border-0 m-0">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6 text-center mb-4 mb-md-0">
            <i class="icons icon-user-following text-color-light text-8 mb-2"></i>
            <h2 class="text-color-light font-weight-bold text-7 mb-0">45+</h2>
            <p class="text-color-light mb-0">Tenaga Pendidik</p>
          </div>
          <div class="col-md-3 col-sm-6 text-center mb-4 mb-md-0">
            <i class="icons icon-graduation text-color-light text-8 mb-2"></i>
            <h2 class="text-color-light font-weight-bold text-7 mb-0">800+</h2>
            <p class="text-color-light mb-0">Siswa Aktif</p>
          </div>
          <div class="col-md-3 col-sm-6 text-center mb-4 mb-sm-0">
            <i class="icons icon-trophy text-color-light text-8 mb-2"></i>
            <h2 class="text-color-light font-weight-bold text-7 mb-0">120+</h2>
            <p class="text-color-light mb-0">Prestasi</p>
          </div>
          <div class="col-md-3 col-sm-6 text-center">
            <i class="icons icon-book-open text-color-light text-8 mb-2"></i>
            <h2 class="text-color-light font-weight-bold text-7 mb-0">20+</h2>
            <p class="text-color-light mb-0">Ekstrakurikuler</p>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>