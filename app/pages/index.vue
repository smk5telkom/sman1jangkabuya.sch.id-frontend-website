<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const words = ["Cerdas", "Berakhlak", "Inovatif", "Berprestasi"]
const currentIndex = ref(0)

let interval = null

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % words.length
  }, 2000) 
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
    <div role="main" class="main">
        <section class="section border-0 m-0" style="background-image: url(/img/tes.jpeg); background-size: cover; background-position: center; height: 600px;">
            <div class="container h-100">
                <div class="row align-items-center h-100">
                    <div class="col">
                        <div class="d-flex flex-column align-items-center justify-content-center h-100">
                            <h1 class="text-color-light text-6 line-height-5 font-weight-bold px-4 mb-2">Selamat Datang di Website Resmi</h1>
                            <h1 class="text-color-light font-weight-extra-bold text-12 mb-3">SMAN 1 Meurede</h1>
                            <h1 class="text-color-light font-weight-extra-bold text-12 mb-3">Pidie Jaya</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="container py-5 my-4">
            <div class="row text-center py-3">
                <div class="col-md-10 mx-md-auto">
                    <h1 class="font-weight-bold text-8 mb-3">
                        <span>Mewujudkan Generasi yang </span>
                        <span class="bg-primary text-white px-2">
                            <Transition name="fade" mode="out-in">
                                <b :key="words[currentIndex]">{{ words[currentIndex] }}</b>
                            </Transition>
                        </span>
                    </h1>
                    <p class="lead mb-0">
                        Selamat datang di portal informasi resmi SMAN 1 Meurede, Pidie Jaya. Kami berkomitmen untuk memberikan layanan pendidikan terbaik dan membentuk karakter unggul bagi masa depan bangsa.
                    </p>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row pt-4 mt-2">
                <div class="col">
                    <h2 class="font-weight-normal text-6 mb-4"><strong class="font-weight-extra-bold">Berita</strong> Terbaru</h2>
                </div>
            </div>
            <div class="row recent-posts pb-5 mb-4">
                <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
                    <article>
                        <div class="row">
                            <div class="col-auto pe-0">
                                <div class="date">
                                    <span class="day text-color-dark font-weight-extra-bold">15</span>
                                    <span class="month text-1">JAN</span>
                                </div>
                            </div>
                            <div class="col ps-1">
                                <h4 class="line-height-3 text-4"><NuxtLink to="/berita/1" class="text-dark">Siswa Raih Medali di LKSN Tingkat Nasional</NuxtLink></h4>
                                <p class="line-height-5 pe-4 mb-1">Perwakilan sekolah berhasil membawa pulang Medallion for Excellence...</p>
                                <NuxtLink to="/berita/1" class="read-more text-color-dark font-weight-bold text-2">baca selengkapnya <i class="fas fa-chevron-right text-1 ms-1"></i></NuxtLink>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
                    <article>
                        <div class="row">
                            <div class="col-auto pe-0">
                                <div class="date">
                                    <span class="day text-color-dark font-weight-extra-bold">12</span>
                                    <span class="month text-1">JAN</span>
                                </div>
                            </div>
                            <div class="col ps-1">
                                <h4 class="line-height-3 text-4"><NuxtLink to="/berita/2" class="text-dark">Jadwal Penilaian Tengah Semester Genap</NuxtLink></h4>
                                <p class="line-height-5 pe-4 mb-1">Diberitahukan kepada seluruh siswa kelas X, XI, dan XII bahwa PTS...</p>
                                <NuxtLink to="/berita/2" class="read-more text-color-dark font-weight-bold text-2">baca selengkapnya <i class="fas fa-chevron-right text-1 ms-1"></i></NuxtLink>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
                    <article>
                        <div class="row">
                            <div class="col-auto pe-0">
                                <div class="date">
                                    <span class="day text-color-dark font-weight-extra-bold">10</span>
                                    <span class="month text-1">JAN</span>
                                </div>
                            </div>
                            <div class="col ps-1">
                                <h4 class="line-height-3 text-4"><NuxtLink to="/berita/3" class="text-dark">Peringatan Hari Besar Nasional</NuxtLink></h4>
                                <p class="line-height-5 pe-4 mb-1">Dalam rangka memperingati hari besar, sekolah akan mengadakan upacara...</p>
                                <NuxtLink to="/berita/3" class="read-more text-color-dark font-weight-bold text-2">baca selengkapnya <i class="fas fa-chevron-right text-1 ms-1"></i></NuxtLink>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>