export const useApi = () => {
  const config = useRuntimeConfig()
  const api = config.public.backendUrl
  const { $api } = useNuxtApp()

  const apiRequest = async (url: string, options: any = {}) => {
    try {
      return await $api(url, options)
    } catch (err: any) {
      if (err?.status === 401) {
        const refresh = await $fetch('/auth/refresh', {
          baseURL: api,
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