import process from "node:process";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      backendUrl: process.env.BACKEND_URL || 'http://localhost:3000',
    },
  },
  ssr: true,
  devServer: {
    port: Number(process.env.PORT) || 3001,
  },
  nitro: {
    routeRules: {
      '/api/announcements/**': {
        proxy: `${process.env.BACKEND_URL}/announcements/**`,
      },
      '/api/announcements/slug': {
        proxy: `${process.env.BACKEND_URL}/announcements/slug`
      },
      '/api/posts/**': {
        proxy: `${process.env.BACKEND_URL}/posts/**`,
      },
      '/api/posts/slug': {
        proxy: `${process.env.BACKEND_URL}/posts/slug`
      },
      '/api/achievements/': {
        proxy: `${process.env.BACKEND_URL}/achievement/`
      },
      '/api/alumni/**': {
        proxy: `${process.env.BACKEND_URL}/alumni/**`
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
        { name: "keywords", content: "Sman 1 Jangka Buya" },
        {
          name: "description",
          content: "Sman 1 Jangka Buya",
        },
        { name: "author", content: "smkn5telkom.sch.id" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no",
        },
      ],
      link: [
        { rel: "shortcut icon", href: "img/sekolah/logo.png", type: "image/x-icon" },
        { rel: "apple-touch-icon", href: "img/sekolah/logo.png" },
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
