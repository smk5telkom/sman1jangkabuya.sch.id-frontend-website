<script setup>
useSeoMeta({
  title: "Hubungi Kami - SMAN 1 Jangka Buya",
  description: "Kontak resmi SMAN 1 Jangka Buya — alamat, telepon, email, dan media sosial. Jl. Jangka Buya–Samalanga, Keude Jangka Buya, Pidie Jaya, Aceh.",
})
</script>

<template>
  <div role="main" class="main">
    <section class="page-header page-header-modern bg-color-light-scale-1 page-header-md">
      <div class="container">
        <div class="row">
          <div class="col-md-12 align-self-center p-static text-center">
            <h1 class="text-light font-weight-bold text-8">Hubungi Kami</h1>
          </div>
        </div>
      </div>
    </section>

    <div class="container py-5 my-4">
      <div class="row flex-column flex-md-row-reverse">
        
        <div class="col-12 col-md-11 ps-3 ps-md-5 order-2 order-md-1">
          <h1 class="text-color-dark font-weight-bold text-8 mb-4 d-none d-md-block">Hubungi Kami</h1>

          <h4 class="font-weight-bold text-4 mb-2 text-dark">Tentang Kami</h4>
          <p class="text-3 line-height-6 mb-4">
            SMAN 1 Jangka Buya merupakan wadah pendidikan unggulan yang bernaung di bawah Dinas Pendidikan Provinsi Aceh
            <br>SMAN 1 Jangka Buya beralamat di Keude Jangka Buya, Kec. Jangka Buya, Kabupaten Pidie Jaya, Aceh
          </p>

          <h4 class="font-weight-bold text-4 mb-2 text-dark">Jam Buka</h4>
          <p class="text-3 line-height-6 mb-4">
            Hari: Senin - Sabtu<br>
            Pukul: 07.30 – 15.00 WIB.
          </p>

          <h4 class="font-weight-bold text-4 mb-2 text-dark">Hubungi Kami</h4>
          <p class="text-3 line-height-6 mb-4">
            Telepon: 0852-1497-5095<br>
            Email: sman1jangkabuya2008@gmail.com<br>
            Instagram: @sman1jangkabuya_official
          </p>

          <h4 class="font-weight-bold text-4 mb-2 text-dark mt-4">Lokasi Sekolah</h4>
          <div class="map-responsive mb-4">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.25763421562!2d96.31870577480566!3d5.222164736916747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040b11f1cb00735%3A0x487d947890b54048!2sSMAN%201%20JANGKA%20BUYA!5e0!3m2!1sid!2sid!4v1779509800416!5m2!1sid!2sid" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        <div class="col-12 col-md-1 text-center pe-md-0 mb-4 mb-md-0 order-1 order-md-2">
          <div class="social-container">
            <a href="https://www.instagram.com/sman1_jangkabuya/" target="_blank" class="social-icon-btn text-white" style="background: linear-gradient(45deg, #fccc63, #fbad50, #e1306c, #bc2a8d, #8a3ab9);">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@sman1_jangkabuya" target="_blank" class="social-icon-btn text-white" style="background-color: #000000;">
              <i class="fab fa-tiktok"></i>
            </a>
            <a href="https://wa.me/6285214975095" target="_blank" class="social-icon-btn bg-success text-white">
              <i class="fab fa-whatsapp text-5"></i>
            </a>
            <a href="https://www.youtube.com/@Sman1jangkabuya" target="_blank" class="social-icon-btn text-white" style="background-color: red;">
              <i class="fab fa-youtube text-5"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.social-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  text-decoration: none;
  font-size: 1.1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.social-icon-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  color: white !important;
}

/* Container Media Sosial yang Adaptif */
.social-container {
  display: flex;
  flex-direction: row; /* Horizontal di mobile */
  justify-content: center;
  gap: 1rem;
  margin-top: 0.5rem;
}

/* Wrapper Khusus Google Maps Supaya Responsif */
.map-responsive {
  overflow: hidden;
  padding-bottom: 56.25%; /* Aspek rasio 16:9 */
  position: relative;
  height: 0;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.map-responsive iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}

/* Media Query untuk Desktop (MD ke atas) */
@media (min-width: 768px) {
  .social-container {
    flex-direction: column; /* Kembali vertikal di desktop */
    align-items: center;
  }
  .map-responsive {
    max-width: 600px;
    padding-bottom: 400px; /* Ukuran fixed yang pas di desktop */
  }
}
</style>