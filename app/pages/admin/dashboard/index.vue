<script setup>
import { ref, onMounted } from 'vue'
const { $api } = useNuxtApp()
// const { apiRequest } = useApi()
import { useApi } from '~/composables/useApi'

const { apiRequest } = useApi()

const router = useRouter()
const route = useRoute()
const username = ref('Loading...')
// const posts = ref([])
// let posts = null;
const posts = ref(0)
const announcements = ref(0)
const achievement = ref(0)
// const sidebarOpen = ref(false)

const totalPosts = async () => {
    try {
        const data = await apiRequest('/posts', {
            method: 'GET'
        })
        posts.value = data.length
    } catch(err) {
        console.log(err)
    }
}

const totalAnnouncements = async () => {
    try {
        const data = await apiRequest('/announcements', {
            method: 'GET'
        })
        announcements.value = data.length
    } catch(err) {
        console.log(err)
    }
}

const totalAchievements = async () => {
    try {
        const data = await apiRequest('/achievement', {
            method: 'GET'
        })
        achievement.value = data.length
    } catch(err) {
        console.log(err)
    }
}

onMounted(async () => {
    const token = localStorage.getItem('token')
    
    if (!token) {
        alert('Hayoo, login dulu ya!')
        router.push('/admin')
    } else {
        const data = dapatkanPayloadJWT(token);
        username.value = data.username;
    }

    await totalPosts();
    await totalAnnouncements();
    await totalAchievements();
})

function dapatkanPayloadJWT(token) {
    try {
        const payloadBase64 = token.split('.')[1]; 
        
        const base64 = payloadBase64.replace(/-/g, '+').replace(/_/g, '/');
        
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        );

        return JSON.parse(jsonPayload);
    } catch (error) {
        console.error("Token tidak valid atau rusak:", error);
        return null;
    }
}
const isActive = (path) => {
  return route.path === path
}

const handleLogout = () => {
    const userToken = useCookie('refresh_token')
    userToken.value = null;
    localStorage.removeItem('token')
    alert('Berhasil Logout!')
    
    router.push('/admin')
}
</script>

<template>
    <div class="d-flex min-vh-100 bg-light">
        <!-- <nav class="navbar navbar-light bg-white d-md-none shadow-sm">
            <div class="container-fluid">
                <button
                class="btn btn-outline-primary"
                @click="sidebarOpen = !sidebarOpen"
                >
                ☰
                </button>

                <span class="fw-bold">SISekolah</span>
            </div>
        </nav> -->
        <aside class="sidebar bg-white shadow-sm d-none d-md-flex flex-column">
        <!-- <aside class="sidebar-mobile bg-white shadow" :class="{ show: sidebarOpen }"> -->
            <div class="p-4 text-center border-bottom">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png" alt="Logo" width="40" class="mb-2">
                <h5 class="fw-bold text-primary mb-0">SISekolah</h5>
            </div>
            
            <div class="p-3 flex-grow-1">
                <ul class="nav flex-column">
                    <li class="nav-item mb-2">
                        <NuxtLink
                        to="/admin/dashboard"
                        class="nav-link rounded"
                        :class="isActive('/admin/dashboard')
                            ? 'bg-primary text-white'
                            : 'text-secondary hover-bg'"
                        >
                        Dashboard
                        </NuxtLink>
                    </li>
                    <li class="nav-item mb-2">
                        <NuxtLink
                        to="/admin/dashboard/berita"
                        class="nav-link rounded"
                        :class="isActive('/admin/dashboard/berita')
                            ? 'bg-primary text-white'
                            : 'text-secondary hover-bg'"
                        >
                        Berita
                        </NuxtLink>
                    </li>
                    <li class="nav-item mb-2">
                        <NuxtLink
                        to="/admin/dashboard/pengumuman"
                        class="nav-link rounded"
                        :class="isActive('/admin/dashboard/pengumuman')
                            ? 'bg-primary text-white'
                            : 'text-secondary hover-bg'"
                        >
                        Pengumuman
                        </NuxtLink>
                    </li>
                    <li class="nav-item mb-2">
                        <NuxtLink
                        to="/admin/dashboard/prestasi"
                        class="nav-link rounded"
                        :class="isActive('/admin/dashboard/prestasi')
                            ? 'bg-primary text-white'
                            : 'text-secondary hover-bg'"
                        >
                        Prestasi
                        </NuxtLink>
                    </li>
                    <li class="nav-item mb-2">
                        <NuxtLink
                        to="/admin/dashboard/alumni"
                        class="nav-link rounded"
                        :class="isActive('/admin/dashboard/alumni')
                            ? 'bg-primary text-white'
                            : 'text-secondary hover-bg'"
                        >
                        Alumni
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </aside>

        <main class="flex-grow-1 main-content">
            
            <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm px-4 py-3 border-bottom">
                <div class="container-fluid p-0">
                    <span class="navbar-brand mb-0 h1 d-md-none fw-bold text-primary">SISekolah</span>
                    
                    <div class="ms-auto d-flex align-items-center">
                        <span class="me-3 d-none d-sm-inline text-muted">
                            Halo, <strong class="text-dark">{{ username }}</strong>
                        </span>
                        <button @click="handleLogout" class="btn btn-outline-danger btn-sm px-3 fw-bold">
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
            <div class="container-fluid p-4">
                <h4 class="mb-4 fw-bold">Overview</h4>
                <div class="row g-3 mb-4">
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="card border-0 shadow-sm rounded-4 h-100">
                            <div class="card-body">
                                <h6 class="text-muted mb-2">Total Berita</h6>
                                <h2 class="mb-0 fw-bold">{{ posts }}</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="card border-0 shadow-sm rounded-4 h-100">
                            <div class="card-body">
                                <h6 class="text-muted mb-2">Total Pengumuman</h6>
                                <h2 class="mb-0 fw-bold">{{ announcements }}</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="card border-0 shadow-sm rounded-4 h-100">
                            <div class="card-body">
                                <h6 class="text-muted mb-2">Total Prestasi</h6>
                                <h2 class="mb-0 fw-bold">{{ achievement }}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
/* Lebar tetap untuk sidebar di layar desktop */
.sidebar {
    width: 260px;
    z-index: 100;
}

.hover-bg:hover {
    background-color: #f8f9fa;
    transition: background-color 0.2s ease-in-out;
}

.main-content {
    width: calc(100% - 260px);
}

.sidebar-mobile {
  position: fixed;
  top: 0;
  left: -280px;
  width: 280px;
  height: 100vh;
  z-index: 1050;
  transition: 0.3s;
}

.sidebar-mobile.show {
  left: 0;
}

@media (min-width: 768px) {
  .sidebar-mobile {
    position: static;
    left: 0;
    width: 260px;
  }
}

@media (max-width: 768px) {
    .main-content {
        width: 100%;
    }
}
</style>