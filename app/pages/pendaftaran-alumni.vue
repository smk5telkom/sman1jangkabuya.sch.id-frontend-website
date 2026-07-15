<script setup>
import { ref } from 'vue'

useSeoMeta({
  title: "Pendaftaran Alumni - Sman 1 Jangka Buya",
  description: "Pendaftaran Alumni - Sman 1 Jangka Buya",
})

const form = ref({
  nis: '',
  namaLengkap: '',
  jenisKelamin: '',
  tanggalLahir: '',
  tahunLulus: '',
  riwayatPendidikanPekerjaan: '',
  alamat: '',
  email: '',
  noHp: '',
})

const fotoFile = ref(null)
const isLoading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const handleFotoUpload = (event) => {
  const target = event.target
  if (target.files?.length) {
    fotoFile.value = target.files[0]
  }
}

const submitForm = async () => {
  isLoading.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    const formData = new FormData()
    formData.append('nis', form.value.nis)
    formData.append('namaLengkap', form.value.namaLengkap)
    formData.append('jenisKelamin', form.value.jenisKelamin)
    formData.append('tanggalLahir', form.value.tanggalLahir)
    formData.append('tahunLulus', Number(form.value.tahunLulus))
    formData.append('riwayatPendidikanPekerjaan', form.value.riwayatPendidikanPekerjaan)
    formData.append('alamat', form.value.alamat)
    formData.append('email', form.value.email)
    formData.append('noHp', form.value.noHp)

    if (fotoFile.value) {
      formData.append('foto', fotoFile.value)
    }

    await $fetch('/api/alumni', {
      method: 'POST',
      body: formData,
    })

    successMessage.value = 'Pendaftaran berhasil! Terima kasih telah mendaftar.'
    form.value = {
      nis: '', namaLengkap: '', jenisKelamin: '', tanggalLahir: '',
      tahunLulus: '', riwayatPendidikanPekerjaan: '', alamat: '',
      email: '', noHp: '',
    }
    fotoFile.value = null
  } catch (err) {
    errorMessage.value = err?.data?.message?.[0] || err?.data?.message || 'Gagal mendaftar. Silakan coba lagi.'
  } finally {
    isLoading.value = false
  }
}
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
        </div>
      </div>
    </section>

    <div class="container py-5 mt-3">
      <div class="row">

        <div class="col-lg-8 mb-5 mb-lg-0">
          <h2 class="font-weight-bold text-6 mb-3">Formulir Data Alumni</h2>
          <p class="mb-4">Mohon isi data diri Anda melalui formulir di bawah ini. Data ini akan disimpan dengan aman dan digunakan khusus untuk keperluan pendataan alumni SMAN 1 Jangka Buya</p>

          <div v-if="successMessage" class="alert alert-success" role="alert">
            {{ successMessage }}
          </div>
          <div v-if="errorMessage" class="alert alert-danger" role="alert">
            {{ errorMessage }}
          </div>

          <form @submit.prevent="submitForm" class="box-shadow-2 rounded border border-color-light p-4">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="form-label">NIS <span class="text-danger">*</span></label>
                <input v-model="form.nis" type="text" class="form-control" required>
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">Nama Lengkap <span class="text-danger">*</span></label>
                <input v-model="form.namaLengkap" type="text" class="form-control" required>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="form-label">Jenis Kelamin <span class="text-danger">*</span></label>
                <select v-model="form.jenisKelamin" class="form-select" required>
                  <option value="" disabled>Pilih Jenis Kelamin</option>
                  <option value="LakiLaki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">Tanggal Lahir <span class="text-danger">*</span></label>
                <input v-model="form.tanggalLahir" type="date" class="form-control" required>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="form-label">Tahun Lulus <span class="text-danger">*</span></label>
                <input v-model="form.tahunLulus" type="number" min="1960" :max="new Date().getFullYear()" class="form-control" required>
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">Email <span class="text-danger">*</span></label>
                <input v-model="form.email" type="email" class="form-control" required>
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label">No. HP <span class="text-danger">*</span></label>
              <input v-model="form.noHp" type="text" class="form-control" required>
            </div>

            <div class="mb-3">
              <label class="form-label">Alamat <span class="text-danger">*</span></label>
              <textarea v-model="form.alamat" class="form-control" rows="3" required></textarea>
            </div>

            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="form-label">Riwayat Pendidikan/Pekerjaan</label>
                <textarea v-model="form.riwayatPendidikanPekerjaan" class="form-control" rows="3" placeholder="Contoh: S1 Universitas ABC, Bekerja di PT XYZ"></textarea>
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">Foto (opsional)</label>
                <input type="file" class="form-control" accept="image/jpeg,image/jpg,image/png,image/webp" @change="handleFotoUpload">
                <small class="text-muted">Format: jpg/jpeg/png/webp, maks 2MB</small>
              </div>
            </div>

            <div class="text-center mt-4">
              <button type="submit" class="btn btn-primary btn-lg px-5" :disabled="isLoading">
                <span v-if="isLoading">
                  <span class="spinner-border spinner-border-sm me-2" role="status"></span>
                  Mendaftarkan...
                </span>
                <span v-else>Daftar Sekarang</span>
              </button>
            </div>
          </form>
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