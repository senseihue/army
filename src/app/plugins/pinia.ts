import { cloneDeep } from "lodash-es"
import type { PiniaPluginContext } from "pinia"

const resetStorePlugin = ({ store }: PiniaPluginContext) => {
  const initialState = cloneDeep(store.$state)
  store.$reset = () => store.$patch(cloneDeep(initialState))
}

export default defineNuxtPlugin(() => {
  const { $pinia } = useNuxtApp()
  $pinia.use(resetStorePlugin)
})
