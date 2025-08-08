import { VueReCaptcha } from 'vue-recaptcha-v3'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueReCaptcha, {
    siteKey: <string>nuxtApp.$config.public?.recaptchaKey,
    loaderOptions: { autoHideBadge: true },
  })
})
