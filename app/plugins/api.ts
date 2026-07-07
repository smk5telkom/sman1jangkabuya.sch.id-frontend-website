export default defineNuxtPlugin(() => {
  const api = $fetch.create({
    // baseURL: 'http://localhost:3000',
    baseURL: process.env.BACKEND_URL || 'http://localhost:3000',

    credentials: 'include', // penting agar cookie refresh ikut dikirim

    async onRequest({ options }) {
      const token = localStorage.getItem('token')

      if (token) {
        options.headers = { 
          ...options.headers,
          Authorization: `Bearer ${token}`
        }
      }
    },

    /*async onResponseError({ response, request, options }) {
      // Access token expired
      if (response.status === 401) {
        try {
          const refreshResult = await $fetch('/auth/refresh', {
            baseURL: 'http://localhost:3000',
            method: 'GET',
            credentials: 'include'
          })

          localStorage.setItem(
            'token',
            refreshResult.access_token
          )

          // ulang request lama
          return await $fetch(request, {
            ...options,
            headers: {
              ...options.headers,
              Authorization: `Bearer ${refreshResult.access_token}`
            }
          })
        } catch (error) {
          localStorage.removeItem('token')

          return navigateTo('/admin')
        }
      }
    }*/
  })

  return {
    provide: {
      api
    }
  }
})