import { vTooltip } from "floating-vue"
import { vFocus, vDrag } from "~/layers/ui/directives"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("drag", vDrag)
  nuxtApp.vueApp.directive("focus", vFocus)
  nuxtApp.vueApp.directive("tooltip", vTooltip)
})
