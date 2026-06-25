<script setup>
import { ref, onMounted } from 'vue'
const { $api } = useNuxtApp()
// const { apiRequest } = useApi()
import { useApi } from '~/composables/useApi'

const { apiRequest } = useApi()

const router = useRouter()
const route = useRoute()
const username = ref('Loading...')
const posts = ref([])

onMounted(() => {
    getPosts()
    const token = localStorage.getItem('token')
    
    if (!token) {
        alert('Hayoo, login dulu ya!')
        router.push('/admin')
    } else {
        const data = dapatkanPayloadJWT(token);
        username.value = data.username;
    }
})

const potongTeks = (teks, batasMaksimal = 5) => {
  if (!teks) return ''
  
  if (teks.length > batasMaksimal) {
    return teks.substring(0, batasMaksimal) + '...'
  }
  
  return teks
}

async function deletePost(id) {
    try {
        const data = await apiRequest(`/posts/${id}`, {
            method: 'DELETE',
        })
        console.log(data)
        // await reloadNuxtApp()
        await getPosts()
    } catch (err) {
        console.log(err)
    }
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
}

const getPosts = async () => {
    try {
        posts.value =  await $api('/posts', {
            method: 'GET'
        })
    } catch(err) {
        console.log(err)
    }
}

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
    localStorage.removeItem('token')
    alert('Berhasil Logout!')
    
    router.push('/admin')
}
</script>

<template>
    <div class="d-flex min-vh-100 bg-light">
        <aside class="sidebar bg-white shadow-sm d-none d-md-flex flex-column">
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
                <h4 class="mb-4 fw-bold">Berita</h4>

                <div class="card border-0 shadow-sm rounded-4">
                    <div class="card-body p-4">
                        <h5>Daftar Berita</h5>
                        <NuxtLink to="/admin/dashboard/berita/add/" class="btn btn-primary mb-3">Tambah</NuxtLink>
                        <div class="table-responsive">
                            <table class="table table-hover align-middle">
                                <thead class="table-light">
                                    <tr>
                                        <th>ID</th>
                                        <th>Judul</th>
                                        <th>Slug</th>
                                        <th>Isi</th>
                                        <th>Gambar</th>
                                        <th>Tanggal</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="post in posts" :key="post.id">
                                        <td>{{ post.id }}</td>
                                        <td>{{ post.title }}</td>
                                        <td>{{ post.slug }}</td>
                                        <td>{{ potongTeks(post.content) }}</td>
                                        <td>{{ post.imageUrl }}</td>
                                        <td>{{ formatDate(post.createdAt) }}</td>
                                        <td>
                                            <button class="btn btn-sm btn-danger border me-1" @click="deletePost(post.id)">Delete</button>
                                            <NuxtLink :to="`/admin/dashboard/berita/edit/${post.id}`" class="btn btn-sm btn-light">Edit</NuxtLink>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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

@media (max-width: 768px) {
    .main-content {
        width: 100%;
    }
}
</style>