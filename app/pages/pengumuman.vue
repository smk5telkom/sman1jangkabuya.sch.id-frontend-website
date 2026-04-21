<template>
  <div role="main" class="main">
    <section class="page-header page-header-modern bg-color-light-scale-1 page-header-md">
      <div class="container">
        <div class="row">
          <div class="col-md-12 align-self-center p-static order-2 text-center">
            <h1 class="text-light font-weight-bold text-8">Pengumuman Sekolah</h1>
            <span class="sub-title text-light">Informasi Resmi dan Edaran Terbaru SMAN 1 Meurede</span>
          </div>
          <!-- <div class="col-md-12 align-self-center order-1">
            <ul class="breadcrumb d-block text-center">
              <li><NuxtLink to="/">Beranda</NuxtLink></li>
              <li><a href="#">Informasi</a></li>
              <li class="active">Pengumuman</li>
            </ul>
          </div> -->
        </div>
      </div>
    </section>

    <div class="container py-5 mt-3">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          
          <article class="post post-large border-bottom pb-4 mb-4">
            <div class="row align-items-center">
              <div class="col-auto text-center pe-0 mb-3 mb-md-0">
                <div class="date-box bg-primary text-color-light rounded p-3 box-shadow-2">
                  <span class="day d-block text-6 font-weight-bold line-height-1">08</span>
                  <span class="month d-block text-2 text-uppercase">MAR 2026</span>
                </div>
              </div>
              <div class="col">
                <h2 class="font-weight-bold text-5 line-height-3 mb-2">
                  <NuxtLink to="#" class="text-dark text-decoration-none">Edaran Libur Menyambut Bulan Suci Ramadhan 1447 H</NuxtLink>
                </h2>
                <p class="mb-3 text-3">
                  Diberitahukan kepada seluruh siswa, guru, dan staf tata usaha bahwa kegiatan belajar mengajar akan diliburkan sementara dalam rangka menyambut awal bulan suci Ramadhan. Untuk detail jadwal libur dan masuk kembali, silakan unduh surat edaran resminya.
                </p>
                <a href="#" class="btn btn-modern btn-primary btn-sm rounded font-weight-bold">
                  <i class="fas fa-file-pdf ms-1 me-2"></i> Download Surat Edaran
                </a>
              </div>
            </div>
          </article>

          <article class="post post-large border-bottom pb-4 mb-4">
            <div class="row align-items-center">
              <div class="col-auto text-center pe-0 mb-3 mb-md-0">
                <div class="date-box bg-dark text-color-light rounded p-3 box-shadow-2">
                  <span class="day d-block text-6 font-weight-bold line-height-1">25</span>
                  <span class="month d-block text-2 text-uppercase">FEB 2026</span>
                </div>
              </div>
              <div class="col">
                <h2 class="font-weight-bold text-5 line-height-3 mb-2">
                  <NuxtLink to="#" class="text-dark text-decoration-none">Jadwal Pelaksanaan Ujian Sekolah (US) Kelas XII</NuxtLink>
                </h2>
                <p class="mb-3 text-3">
                  Ujian Sekolah (US) untuk kelas XII tahun ajaran 2025/2026 akan dilaksanakan secara tatap muka berbasis komputer. Siswa diwajibkan hadir 30 menit sebelum ujian dimulai dengan membawa kartu tanda peserta ujian.
                </p>
                <a href="#" class="btn btn-modern btn-primary btn-sm rounded font-weight-bold">
                  <i class="fas fa-file-pdf ms-1 me-2"></i> Download Jadwal & Tata Tertib
                </a>
              </div>
            </div>
          </article>

          <article class="post post-large border-bottom pb-4 mb-4">
            <div class="row align-items-center">
              <div class="col-auto text-center pe-0 mb-3 mb-md-0">
                <div class="date-box bg-dark text-color-light rounded p-3 box-shadow-2">
                  <span class="day d-block text-6 font-weight-bold line-height-1">10</span>
                  <span class="month d-block text-2 text-uppercase">FEB 2026</span>
                </div>
              </div>
              <div class="col">
                <h2 class="font-weight-bold text-5 line-height-3 mb-2">
                  <NuxtLink to="#" class="text-dark text-decoration-none">Panggilan Pengambilan Ijazah Alumni Angkatan 2025</NuxtLink>
                </h2>
                <p class="mb-3 text-3">
                  Diimbau kepada seluruh alumni SMAN 1 Meurede lulusan tahun 2025 yang belum mengambil ijazah aslinya agar segera melakukan pengambilan di ruang Tata Usaha (TU) pada jam kerja dengan membawa bukti bebas pustaka dan cap tiga jari.
                </p>
                <NuxtLink to="/hubungi-kami" class="read-more text-color-primary font-weight-bold text-2">
                  Hubungi Tata Usaha <i class="fas fa-chevron-right text-1 ms-1"></i>
                </NuxtLink>
              </div>
            </div>
          </article>

          <div class="row mt-5">
            <div class="col">
              <ul class="pagination float-end">
                <li class="page-item"><a class="page-link" href="#"><i class="fas fa-angle-left"></i></a></li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#"><i class="fas fa-angle-right"></i></a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Styling khusus untuk kotak tanggal pengumuman agar terlihat menonjol */
.date-box {
  min-width: 80px;
  text-align: center;
}
/* Memastikan elemen teks dalam date-box tidak berantakan */
.date-box .day {
  letter-spacing: -1px;
}
</style>