<template>
  <div role="main" class="main">
    <section class="page-header page-header-modern bg-color-light-scale-1 page-header-md">
      <div class="container">
        <div class="row">
          <div class="col-md-12 align-self-center p-static order-2 text-center">
            <h1 class="text-light font-weight-bold text-8">Hubungi Kami</h1>
          </div>
          <!-- <div class="col-md-12 align-self-center order-1">
            <ul class="breadcrumb d-block text-center">
              <li><NuxtLink to="/">Beranda</NuxtLink></li>
              <li class="active">Hubungi Kami</li>
            </ul>
          </div> -->
        </div>
      </div>
    </section>

    <div class="container py-5 my-4">
      <div class="row">
        
        <div class="col-2 col-md-1 text-center pe-0">
          <div class="d-flex flex-column align-items-center gap-3 mt-2">
            <a href="#" class="social-icon-btn bg-success text-white">
              <i class="fas fa-share-alt"></i>
            </a>
            <a href="#" class="social-icon-btn text-white" style="background-color: #1877f2;">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-icon-btn text-white" style="background-color: #1da1f2;">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-icon-btn bg-success text-white">
              <i class="fab fa-whatsapp text-5"></i>
            </a>
            <a href="#" class="social-icon-btn text-white" style="background-color: #0088cc;">
              <i class="fab fa-telegram-plane text-5"></i>
            </a>
          </div>
        </div>

        <div class="col-10 col-md-11 ps-4 ps-md-5">
          <h1 class="text-color-dark font-weight-bold text-8 mb-4">Hubungi Kami</h1>

          <h4 class="font-weight-bold text-4 mb-2 text-dark">Tentang Kami</h4>
          <p class="text-3 line-height-6 mb-4">
            SMAN 1 Meurede merupakan wadah pendidikan unggulan yang bernaung di bawah Dinas Pendidikan Provinsi Aceh. SMAN 1 Meurede beralamat di Jl. Pendidikan No. 1, Meurede, Kabupaten Pidie Jaya, Aceh.
          </p>

          <h4 class="font-weight-bold text-4 mb-2 text-dark">Jam Buka</h4>
          <p class="text-3 line-height-6 mb-4">
            Hari: Senin-Sabtu<br>
            Pukul: 07.30 – 15.00 WIB.
          </p>

          <h4 class="font-weight-bold text-4 mb-2 text-dark">Hubungi Kami</h4>
          <p class="text-3 line-height-6 mb-4">
            Telepon: 0812-3456-7890 (Tata Usaha SMAN 1 Meurede)<br>
            Email: info@sman1meurede.sch.id<br>
            Instagram: @sman1meurede_official
          </p>

          <div class="mt-4" style="max-width: 450px;">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.11545089354!2d96.2443!3d5.2443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMTQnMzkuNSJOIDk2wrAxNCwzOS41IkU!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid" 
              width="100%" 
              height="250" 
              style="border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.05);" 
              allowfullscreen="true" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom CSS untuk membuat tombol bulat ikon sosial media seperti di gambar */
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

/* Jarak antar ikon */
.gap-3 {
  gap: 1rem !important;
}
</style>