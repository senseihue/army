import svgLoader from "vite-svg-loader"

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  debug: false,
  telemetry: false,
  dev: !!parseInt(process.env.APP_DEV!),
  devtools: { enabled: true },
  srcDir: "src/",
  experimental: {
    renderJsonPayloads: true,
    inlineRouteRules: true
  },

  devServer: {
    port: parseInt(process.env.APP_PORT || "8000", 10),
    host: process.env.APP_HOST || "0.0.0.0"
  },

  runtimeConfig: {
    public: {
      isDev: !!parseInt(process.env.APP_DEV!),
      apiUrl: process.env.APP_API_URL,
      cdnUrl: process.env.APP_CDN_URL,
      recaptchaKey: process.env.APP_RECAPTCHA_KEY,
      swPath: process.env.APP_SW_PATH,
      firebase: {
        apiKey: process.env.FIREBASE_API_KEY,
        vapidKey: process.env.FIREBASE_VAPID_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID,
        databaseURL: process.env.FIREBASE_DATABASE_URL
      }
    }
  },
  icon: {
    clientBundle: {
      sizeLimitKb: 1000
    },
    customCollections: [
      { prefix: "vuesax-archive", dir: "./src/shared/modules/vuesax-icons/archive" },
      { prefix: "vuesax-arrow", dir: "./src/shared/modules/vuesax-icons/arrow" },
      { prefix: "vuesax-astrology", dir: "./src/shared/modules/vuesax-icons/astrology" },
      { prefix: "vuesax-building", dir: "./src/shared/modules/vuesax-icons/building" },
      { prefix: "vuesax-business", dir: "./src/shared/modules/vuesax-icons/business" },
      { prefix: "vuesax-call", dir: "./src/shared/modules/vuesax-icons/call" },
      { prefix: "vuesax-car", dir: "./src/shared/modules/vuesax-icons/car" },
      { prefix: "vuesax-computers", dir: "./src/shared/modules/vuesax-icons/computers" },
      { prefix: "vuesax-content", dir: "./src/shared/modules/vuesax-icons/content" },
      { prefix: "vuesax-crypto", dir: "./src/shared/modules/vuesax-icons/crypto" },
      { prefix: "vuesax-crypto-currency", dir: "./src/shared/modules/vuesax-icons/crypto-currency" },
      { prefix: "vuesax-delivery", dir: "./src/shared/modules/vuesax-icons/delivery" },
      { prefix: "vuesax-design", dir: "./src/shared/modules/vuesax-icons/design" },
      { prefix: "vuesax-email", dir: "./src/shared/modules/vuesax-icons/email" },
      { prefix: "vuesax-essetional", dir: "./src/shared/modules/vuesax-icons/essetional" },
      { prefix: "vuesax-files", dir: "./src/shared/modules/vuesax-icons/files" },
      { prefix: "vuesax-grid", dir: "./src/shared/modules/vuesax-icons/grid" },
      { prefix: "vuesax-location", dir: "./src/shared/modules/vuesax-icons/location" },
      { prefix: "vuesax-media", dir: "./src/shared/modules/vuesax-icons/media" },
      { prefix: "vuesax-money", dir: "./src/shared/modules/vuesax-icons/money" },
      { prefix: "vuesax-money-2", dir: "./src/shared/modules/vuesax-icons/money-2" },
      { prefix: "vuesax-notification", dir: "./src/shared/modules/vuesax-icons/notification" },
      { prefix: "vuesax-programing", dir: "./src/shared/modules/vuesax-icons/programing" },
      { prefix: "vuesax-school", dir: "./src/shared/modules/vuesax-icons/school" },
      { prefix: "vuesax-search", dir: "./src/shared/modules/vuesax-icons/search" },
      { prefix: "vuesax-security", dir: "./src/shared/modules/vuesax-icons/security" },
      { prefix: "vuesax-settings", dir: "./src/shared/modules/vuesax-icons/settings" },
      { prefix: "vuesax-shop", dir: "./src/shared/modules/vuesax-icons/shop" },
      { prefix: "vuesax-support", dir: "./src/shared/modules/vuesax-icons/support" },
      { prefix: "vuesax-time", dir: "./src/shared/modules/vuesax-icons/time" },
      { prefix: "vuesax-type", dir: "./src/shared/modules/vuesax-icons/type" },
      { prefix: "vuesax-users", dir: "./src/shared/modules/vuesax-icons/users" },
      { prefix: "vuesax-weather", dir: "./src/shared/modules/vuesax-icons/weather" }
    ]
  },
  dir: {
    layouts: "./app/layouts",
    plugins: "./app/plugins",
    middleware: "./app/middleware",
    public: "../public"
  },
  components: [{ path: "./shared/components", pathPrefix: false }],
  imports: {
    dirs: ["./shared/composables/**", "./shared/lib", "./shared/constants", "./shared/stores"]
  },
  app: {
    pageTransition: { name: "fade", mode: "out-in" },
    layoutTransition: { name: "fade", mode: "out-in" },
    head: {
      script: [{ src: "/js/leader-line.min.js", defer: true }],
      link: [{ rel: "icon", type: "image/x-icon", href: process.env.APP_FAVICON }]
    }
  },

  css: [
    "floating-vue/dist/style.css",
    "vue3-carousel/carousel.css",
    "@vuepic/vue-datepicker/dist/main.css",
    "~/shared/assets/css/index.css"
  ],

  routeRules: {
    "/gateway/**": { proxy: process.env.APP_API_URL }
  },

  modules: [
    // "@nuxt/fonts",
    "@nuxtjs/google-fonts",
    "nuxt-swiper",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "nuxt-aos",
    "nuxt-rellax",
    "vue-sonner/nuxt"
  ],
  // fonts: {
  //   families: [{ name: "Inter", provider: "google", weights: ["300", "400", "500", "600", "700", "800", "900"] }]
  // }
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 800, 900]
    }
  },

  i18n: {
    lazy: true,
    strategy: "prefix",
    defaultLocale: "en",

    compilation: {
      strictMessage: false,
      escapeHtml: false
    },
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

  aos: { once: true, disable: "mobile" },

  vite: {
    plugins: [svgLoader({ defaultImport: "component" })]
  }
})
