import svgLoader from "vite-svg-loader"

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  debug: false,
  telemetry: false,
  dev: !!parseInt(process.env.APP_DEV!),
  devtools: { enabled: true },

  devServer: {
    port: parseInt(process.env.APP_PORT || "8000", 10),
    host: process.env.APP_HOST || "0.0.0.0"
  },

  runtimeConfig: {
    public: {
      isDev: !!parseInt(process.env.APP_DEV!),
      apiUrl: process.env.APP_API_URL,
      cdnUrl: process.env.APP_CDN_URL,
      recaptchaKey: process.env.APP_RECAPTCHA_KEY
    }
  },

  app: {
    pageTransition: { name: "fade", mode: "out-in" },
    layoutTransition: { name: "fade", mode: "out-in" },
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: process.env.APP_FAVICON }]
    }
  },

  css: ["floating-vue/dist/style.css", "vue3-carousel/carousel.css"],

  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vueuse/nuxt"
  ],

  fonts: {
    families: [{ name: "Inter", provider: "google", weights: ["300", "400", "500", "600", "700", "800", "900"] }]
  },

  i18n: {
    lazy: true,
    strategy: "prefix",
    defaultLocale: "en",
    locales: [
      {
        code: "uz",
        file: "uz.json",
        name: "O'zbekcha"
      },
      {
        code: "ru",
        file: "ru.json",
        name: "Русский"
      },
      {
        code: "en",
        file: "en.json",
        name: "English"
      }
    ]
  },

  vite: {
    plugins: [svgLoader({ defaultImport: "component" })]
  }
})
