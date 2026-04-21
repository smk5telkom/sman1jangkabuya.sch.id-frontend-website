<template>
  <div role="main" class="main">
    <section class="page-header page-header-modern bg-color-light-scale-1 page-header-md">
      <div class="container">
        <div class="row">
          <div class="col-md-12 align-self-center p-static order-2 text-center">
            <h1 class="text-light font-weight-bold text-8">Sejarah Sekolah</h1>
            <span class="sub-title text-light">Jejak Langkah dan Perkembangan SMAN 1 Meurede</span>
          </div>
          <!-- <div class="col-md-12 align-self-center order-1">
            <ul class="breadcrumb d-block text-center">
              <li><NuxtLink to="/">Beranda</NuxtLink></li>
              <li><NuxtLink to="/profil-sekolah">Profil</NuxtLink></li>
              <li class="active">Sejarah Sekolah</li>
            </ul>
          </div> -->
        </div>
      </div>
    </section>

    <div class="container py-5 mt-3">
      <div class="row">
        <div class="col-lg-7 mb-5 mb-lg-0">
          <h2 class="text-color-dark font-weight-normal text-5 mb-3">
            Awal Mula Berdirinya <strong class="font-weight-extra-bold">SMAN 1 Meurede</strong>
          </h2>
          <p class="lead text-4">
            SMAN 1 Meurede didirikan pada tahun [Tahun Berdiri] sebagai respon atas kebutuhan masyarakat Pidie Jaya akan fasilitas pendidikan tingkat menengah atas yang berkualitas. 
          </p>
          <p>
            Pada masa-masa awal berdirinya, proses kegiatan belajar mengajar masih menumpang di gedung sekolah lain dengan fasilitas yang sangat terbatas. Namun, berkat semangat pantang menyerah dari para perintis, tokoh masyarakat, dan dukungan pemerintah daerah, SMAN 1 Meurede perlahan mulai membangun gedung utamanya sendiri.
          </p>
          <p>
            Seiring berjalannya waktu, sekolah ini terus mengalami transformasi yang signifikan. Dari awalnya hanya memiliki beberapa ruang kelas, kini SMAN 1 Meurede telah bertransformasi menjadi salah satu sekolah rujukan di Kabupaten Pidie Jaya yang dilengkapi dengan laboratorium modern, perpustakaan yang memadai, dan fasilitas olahraga yang lengkap.
          </p>
          <p>
            Dedikasi para pendidik dari generasi ke generasi telah membuahkan hasil manis, terbukti dengan banyaknya alumni yang sukses berkiprah di berbagai bidang, baik di tingkat nasional maupun internasional.
          </p>
        </div>

        <div class="col-lg-5">
          <div class="border-radius mb-4">
            <img src="/img/tes.jpeg" class="img-fluid rounded box-shadow-2" alt="Sejarah SMAN 1 Meurede" />
          </div>
          
          <!-- <div class="bg-color-primary text-color-light p-4 rounded mt-4">
            <h4 class="text-color-light font-weight-bold mb-2">Tahukah Anda?</h4>
            <p class="mb-0">
              Kepala Sekolah pertama SMAN 1 Meurede adalah Bapak [Nama Kepsek Pertama], yang menjabat dari tahun [Tahun Awal] hingga [Tahun Akhir] dan meletakkan fondasi kedisiplinan yang masih dijaga hingga saat ini.
            </p>
          </div> -->
        </div>
      </div>

      <hr class="solid my-5">

      <div class="row">
        <div class="col">
          <h2 class="text-color-dark font-weight-normal text-5 mb-4 text-center">
            Tonggak Sejarah <strong class="font-weight-extra-bold">Perjalanan Kami</strong>
          </h2>
          
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="process process-vertical">
                <div class="process-step">
                  <div class="process-step-circle">
                    <strong class="process-step-circle-content text-color-primary">1</strong>
                  </div>
                  <div class="process-step-content">
                    <h4 class="mb-1 text-4 font-weight-bold">Tahun [Tahun] - Pendirian Sekolah</h4>
                    <p class="mb-0">Surat Keputusan (SK) pendirian sekolah resmi ditandatangani, dan penerimaan siswa angkatan pertama dimulai.</p>
                  </div>
                </div>
                <div class="process-step">
                  <div class="process-step-circle">
                    <strong class="process-step-circle-content text-color-primary">2</strong>
                  </div>
                  <div class="process-step-content">
                    <h4 class="mb-1 text-4 font-weight-bold">Tahun [Tahun] - Pembangunan Gedung Baru</h4>
                    <p class="mb-0">Sekolah resmi menempati gedung baru di lokasi yang sekarang dengan fasilitas 6 ruang kelas dan 1 ruang guru.</p>
                  </div>
                </div>
                <div class="process-step">
                  <div class="process-step-circle">
                    <strong class="process-step-circle-content text-color-primary">3</strong>
                  </div>
                  <div class="process-step-content">
                    <h4 class="mb-1 text-4 font-weight-bold">Tahun [Tahun] - Akreditasi A</h4>
                    <p class="mb-0">SMAN 1 Meurede berhasil meraih akreditasi A untuk pertama kalinya sebagai wujud pengakuan kualitas pendidikan.</p>
                  </div>
                </div>
                <div class="process-step">
                  <div class="process-step-circle">
                    <strong class="process-step-circle-content text-color-primary">4</strong>
                  </div>
                  <div class="process-step-content">
                    <h4 class="mb-1 text-4 font-weight-bold">Tahun [Tahun] - Implementasi Kurikulum Modern</h4>
                    <p class="mb-0">Mulai menerapkan kurikulum berbasis digital dan melengkapi sekolah dengan fasilitas laboratorium komputer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Styling khusus untuk membuat vertical timeline yang bersih menggunakan fitur bawaan Porto */
.process.process-vertical .process-step {
  display: flex;
  margin-bottom: 2rem;
  align-items: flex-start;
}
.process.process-vertical .process-step-circle {
  width: 50px;
  height: 50px;
  background-color: #f4f4f4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  flex-shrink: 0;
  border: 2px solid #0088cc; /* Warna primary */
}
.process.process-vertical .process-step-circle-content {
  font-size: 1.2rem;
}
</style>