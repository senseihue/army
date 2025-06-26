import { ServiceProcessParams } from "~/entities/service/process"

export const useServiceProcessStore = defineStore("service-prrocess", () => {
  const list = createListState<IServiceProcess>()
  const params = createListParams<ServiceProcessParams>(new ServiceProcessParams())

  const current = ref<IServiceProcess>()

  return { ...list, params, current }
})
