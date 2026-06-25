export const useApi = () => {
  const { $api } = useNuxtApp()

  const apiRequest = async (url: string, options: any = {}) => {
    try {
      return await $api(url, options)
    } catch (err: any) {
      if (err?.status === 401) {
        const refresh = await $fetch('/auth/refresh', {
          baseURL: 'http://localhost:3000',
          method: 'GET',
          credentials: 'include'
        })

        localStorage.setItem(
          'token',
          refresh.access_token
        )

        return await $api(url, options)
      }

      throw err
    }
  }

  return {
    apiRequest
  }
}