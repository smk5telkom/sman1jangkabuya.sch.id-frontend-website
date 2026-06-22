// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   ssr: true,
  devServer: {
    port: 3001
  },
  nitro: {
    routeRules: {
      '/api/announcements/**': {
        proxy: 'http://localhost:3000/announcements/**',
      },
      '/api/announcements/slug': {
        proxy: 'http://localhost:3000/announcements/slug'
      },
      '/api/posts/**': {
        proxy: 'http://localhost:3000/posts/**',
      },
      '/api/posts/slug': {
        proxy: 'http://localhost:3000/posts/slug'
      },
      '/api/achievements/': {
        proxy: 'http://localhost:3000/achievement/'
      }
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  plugins: [
    // { src: "~/plugins/theme.client.ts", mode: "client" },
  ],
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "keywords", content: "WebSite Template" },
        {
          name: "description",
          content: "Porto - Multipurpose Website Template",
        },
        { name: "author", content: "zilfa.me" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no",
        },
      ],
      link: [
        { rel: "shortcut icon", href: "img/favicon.ico", type: "image/x-icon" },
        { rel: "apple-touch-icon", href: "img/apple-touch-icon.png" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800%7CShadows+Into+Light&display=swap",
        },
        { rel: "stylesheet", href: "/css/theme.css" },
        { rel: "stylesheet", href: "/css/theme-elements.css" },
        { rel: "stylesheet", href: "/css/skins/default.css" },
        { rel: "stylesheet", href: "/css/custom.css" },
        { rel: "stylesheet", href: "/css/theme-blog.css" },
        { rel: "stylesheet", href: "/vendor/bootstrap/css/bootstrap.min.css" },
        { rel: "stylesheet", href: "/vendor/fontawesome-free/css/all.min.css" },
        { rel: "stylesheet", href: "/vendor/animate/animate.compat.css" },
        {
          rel: "stylesheet",
          href: "/vendor/simple-line-icons/css/simple-line-icons.min.css",
        },
        {
          rel: "stylesheet",
          href: "/vendor/owl.carousel/assets/owl.carousel.min.css",
        },
        {
          rel: "stylesheet",
          href: "/vendor/owl.carousel/assets/owl.theme.default.min.css",
        },
        {
          rel: "stylesheet",
          href: "/vendor/magnific-popup/magnific-popup.min.css",
        },
        { rel: "stylesheet", href: "/css/theme-shop.css" },
      ],
      script: [
        { src: "/vendor/plugins/js/plugins.min.js", tagPosition: 'bodyClose' },
        { src: "/js/theme.js", tagPosition: 'bodyClose' },
        { src: "/js/custom.js", tagPosition: 'bodyClose' },
        { src: "/js/theme.init.js", tagPosition: 'bodyClose' },
      ],
    },
  },
});
