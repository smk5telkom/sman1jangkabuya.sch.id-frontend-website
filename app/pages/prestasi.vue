<template>
  <div role="main" class="main">
    <section class="page-header page-header-modern bg-color-light-scale-1 page-header-md">
      <div class="container">
        <div class="row">
          <div class="col-md-12 align-self-center p-static order-2 text-center">
            <h1 class="text-light font-weight-bold text-8">Prestasi Siswa</h1>
            <span class="sub-title text-light">Daftar Pencapaian Gemilang SMAN 1 Meurede</span>
          </div>
          <!-- <div class="col-md-12 align-self-center order-1">
            <ul class="breadcrumb d-block text-center">
              <li><NuxtLink to="/">Beranda</NuxtLink></li>
              <li class="active">Prestasi</li>
            </ul>
          </div> -->
        </div>
      </div>
    </section>

    <div class="container py-5 mt-2">
      <div class="row">
        <div class="col">
          <p class="lead text-center mb-5">
            Kami bangga dengan pencapaian para siswa yang terus mengharumkan nama sekolah di berbagai bidang, baik akademik maupun non-akademik.
          </p>
        </div>
      </div>

      <div class="row portfolio-list">
        
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card border-0 box-shadow-1 hover-effect-1">
            <div class="card-img-top position-relative overlay overlay-show overlay-op-1">
              <img src="/img/tes.jpeg" class="img-fluid rounded-top" alt="Juara LKSN" />
            </div>
            <div class="card-body p-4 text-center">
              <span class="badge bg-primary badge-sm mb-2 text-uppercase">Tingkat Nasional</span>
              <h4 class="font-weight-bold text-5 mb-2">Medallion for Excellence - Web Technologies</h4>
              <p class="text-color-primary font-weight-semibold text-2 mb-3">LKSN 2025</p>
              <p class="card-text text-3">Pencapaian luar biasa di bidang teknologi web tingkat nasional, membuktikan daya saing siswa dalam menguasai HTML, CSS, JavaScript, dan framework modern.</p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card border-0 box-shadow-1 hover-effect-1">
            <div class="card-img-top position-relative overlay overlay-show overlay-op-1">
              <img src="/img/tes.jpeg" class="img-fluid rounded-top" alt="Juara OSN" />
            </div>
            <div class="card-body p-4 text-center">
              <span class="badge bg-success badge-sm mb-2 text-uppercase">Tingkat Provinsi</span>
              <h4 class="font-weight-bold text-5 mb-2">Juara 1 Olimpiade Sains Nasional (Matematika)</h4>
              <p class="text-color-primary font-weight-semibold text-2 mb-3">OSN Tingkat Provinsi 2026</p>
              <p class="card-text text-3">Siswa kami berhasil meraih medali emas setelah menyisihkan ratusan peserta dari berbagai sekolah menengah atas se-provinsi.</p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card border-0 box-shadow-1 hover-effect-1">
            <div class="card-img-top position-relative overlay overlay-show overlay-op-1">
              <img src="/img/tes.jpeg" class="img-fluid rounded-top" alt="Juara FLS2N" />
            </div>
            <div class="card-body p-4 text-center">
              <span class="badge bg-warning text-dark badge-sm mb-2 text-uppercase">Tingkat Kabupaten</span>
              <h4 class="font-weight-bold text-5 mb-2">Juara Umum Festival Lomba Seni Siswa (FLS2N)</h4>
              <p class="text-color-primary font-weight-semibold text-2 mb-3">FLS2N Pidie Jaya 2025</p>
              <p class="card-text text-3">Menjuarai berbagai cabang seni mulai dari vokal solo, desain poster, hingga tari kreasi tradisional tingkat kabupaten.</p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card border-0 box-shadow-1 hover-effect-1">
            <div class="card-img-top position-relative overlay overlay-show overlay-op-1">
              <img src="/img/tes.jpeg" class="img-fluid rounded-top" alt="Juara IT Network" />
            </div>
            <div class="card-body p-4 text-center">
              <span class="badge bg-primary badge-sm mb-2 text-uppercase">Tingkat Nasional</span>
              <h4 class="font-weight-bold text-5 mb-2">Finalis IT Network System Administration</h4>
              <p class="text-color-primary font-weight-semibold text-2 mb-3">LKSN 2026</p>
              <p class="card-text text-3">Pencapaian bergengsi dalam keahlian administrasi infrastruktur jaringan dan konfigurasi sistem berskala enterprise.</p>
            </div>
          </div>
        </div>

        </div>
    </div>
  </div>
</template>

<style scoped>
.hover-effect-1 {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-effect-1:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
}
</style>