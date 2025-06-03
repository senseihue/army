export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  future: { compatibilityVersion: 4 },

  css: ["#layers/landing/assets/css/index.css"],

  app: {
    pageTransition: { name: "fade", mode: "out-in" },
    layoutTransition: { name: "fade", mode: "out-in" }
  },

  components: [
    {
      path: "./components",
      pathPrefix: false
    }
  ],

  dir: {
    modules: "./nuxt/modules"
  }
})
