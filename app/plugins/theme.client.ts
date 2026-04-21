export default defineNuxtPlugin((nuxtApp) => {

  const initTheme = () => {
    if (window.theme && window.theme.init) {
      window.theme.init()
    }
  }

  nuxtApp.hook("page:finish", () => {
    setTimeout(() => {
      initTheme()
    }, 100)
  })

})