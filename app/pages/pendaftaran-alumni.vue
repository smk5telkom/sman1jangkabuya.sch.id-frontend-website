<script setup>
useSeoMeta({
  title: "Pendaftaran Alumni - Sman 1 Jangka Buya",
  description: "Pendaftaran Alumni - Sman 1 Jangka Buya",
})
</script>

<template>
  <div role="main" class="main">
    <section class="page-header page-header-modern bg-color-light-scale-1 page-header-md">
      <div class="container">
        <div class="row">
          <div class="col-md-12 align-self-center p-static order-2 text-center">
            <h1 class="text-white font-weight-bold text-8">Pendaftaran Alumni</h1>
            <span class="sub-title text-white">Mari Jalin Silaturahmi dan Bangun Relasi Lintas Generasi</span>
          </div>
          <!-- <div class="col-md-12 align-self-center order-1">
            <ul class="breadcrumb d-block text-center">
              <li><NuxtLink to="/">Beranda</NuxtLink></li>
              <li class="active">Pendaftaran Alumni</li>
            </ul>
          </div> -->
        </div>
      </div>
    </section>

    <div class="container py-5 mt-3">
      <div class="row">
        
        <div class="col-lg-8 mb-5 mb-lg-0">
          <h2 class="font-weight-bold text-6 mb-3">Formulir Data Alumni</h2>
          <p class="mb-4">Mohon isi data diri Anda melalui formulir di bawah ini. Data ini akan disimpan dengan aman dan digunakan khusus untuk keperluan pendataan alumni SMAN 1 Jangka Buya</p>

          <div class="google-form-wrapper box-shadow-2 rounded border border-color-light">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSe_CONTOH_LINK_FORM_KAMU/viewform?embedded=true" 
              width="100%" 
              height="800" 
              frameborder="0" 
              marginheight="0" 
              marginwidth="0">
              Memuat formulir...
            </iframe>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="bg-color-light-scale-1 p-5 rounded box-shadow-2 sticky-top" style="top: 100px;">
            <h4 class="font-weight-bold text-5 mb-3">Kenapa Harus Bergabung?</h4>
            <ul class="list list-icons list-primary mb-0">
              <li class="mb-3">
                <i class="fas fa-check"></i> 
                <strong>Jejaring Profesional:</strong> Terhubung dengan kakak dan adik tingkat dari berbagai profesi
              </li>
              <li class="mb-3">
                <i class="fas fa-check"></i> 
                <strong>Info Lowongan Kerja:</strong> Mendapatkan informasi peluang karir khusus untuk jejaring alumni
              </li>
              <li class="mb-3">
                <i class="fas fa-check"></i> 
                <strong>Agenda Reuni:</strong> Menjadi orang pertama yang diundang dalam acara reuni akbar maupun kegiatan sekolah
              </li>
              <li>
                <i class="fas fa-check"></i> 
                <strong>Sumbangsih Almamater:</strong> Membantu sekolah dalam tracer study untuk akreditasi SMAN 1 Jangka Buya
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.google-form-wrapper {
  overflow: hidden;
  background-color: #f9f9f9;
  min-height: 800px; 
}
</style>