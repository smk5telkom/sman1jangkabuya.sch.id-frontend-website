<script setup>
import { ref } from 'vue'
// import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const isLoading = ref(false)
const router = useRouter()

const handleLogin = async () => {
    isLoading.value = true

    try {
        const data = await $fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            credentials: 'include',
            body: {
                email: email.value,
                password: password.value
            }
        })

        console.log('Login berhasil:', data)
        alert('Login Sukses!')
        
        localStorage.setItem('token', data.access_token)
        
        router.push('/admin/dashboard')

    } catch (error) {
        console.log(error)
        console.log(error.data)
        console.log(error.response)

        alert(error.data?.message || 'Email atau password salah!')
    } finally {
        isLoading.value = false
    }
}
</script>

<template>
    <div class="login-wrapper">
        <div class="container">
            <div class="row min-vh-100 justify-content-center align-items-center py-4">
                <div class="col-11 col-sm-8 col-md-6 col-lg-5 col-xl-4">

                    <div class="card login-card">
                        <div class="card-body p-3 p-md-4">

                            <div class="text-center mb-4">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
                                    alt="Logo Sekolah"
                                    class="school-logo mb-3"
                                >

                                <h3 class="fw-bold mb-1">
                                    Login Admin
                                </h3>

                                <p class="text-muted mb-0">
                                    Sistem Informasi Sekolah
                                </p>
                            </div>

                            <form @submit.prevent="handleLogin">
                                <div class="mb-3">
                                    <label class="form-label">
                                        Email
                                    </label>

                                    <input
                                        v-model="email"
                                        type="email"
                                        class="form-control"
                                        placeholder="admin@sekolah.sch.id"
                                        required
                                    >
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">
                                        Password
                                    </label>

                                    <input
                                        v-model="password"
                                        type="password"
                                        class="form-control"
                                        placeholder="Masukkan password"
                                        required
                                    >
                                </div>

                                <div class="d-grid mt-4">
                                    <button
                                        type="submit"
                                        class="btn btn-primary btn-lg"
                                        :disabled="isLoading"
                                    >
                                        {{ isLoading ? 'Memproses...' : 'Login' }}
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>

                    <p class="text-center text-white mt-4 mb-0">
                        © 2026 Sistem Informasi Sekolah
                    </p>

                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
    /* CSS tambahan untuk memastikan tampilan tetap rapi */
    .login-wrapper {
        /* Memberikan background gradient opsional agar text-white di bawah terlihat jelas */
        /* background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); */
        min-height: 100vh;
    }

    .login-card {
        max-width: 420px;
        width: 100%;
        border: none;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,.15);
        /* Menghindari card menempel pada layar HP berukuran sangat kecil */
        margin: 0 auto; 
    }

    .school-logo {
        width: 80px;
        height: 80px;
        object-fit: contain;
    }

    /* Penyesuaian font untuk layar kecil (Mobile) */
    @media (max-width: 576px) {
        .login-card h3 {
            font-size: 1.5rem;
        }
        .school-logo {
            width: 65px;
            height: 65px;
        }
    }
</style>
