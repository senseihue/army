export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",

  css: ["#layers/ui/assets/css/index.css"],

  components: [
    {
      path: "./components",
      pathPrefix: false
    }
  ],
  imports: {
    dirs: ["./composables"]
  }
})
