import { ServiceParams } from "~/entities/service"

export const useServiceStore = defineStore("service", () => {
  const list = createListState<IService>()
  const params = createListParams<ServiceParams>(new ServiceParams())

  const current = ref<IService>()

  return { ...list, params, current }
})
