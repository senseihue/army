import { ServiceProcessParams } from "~/entities/service/process"

export const useServiceProcessStore = defineStore("service-process", () => {
  const list = createListState<IServiceProcess>()
  const params = createListParams<ServiceProcessParams>(new ServiceProcessParams())

  const current = ref<IServiceProcess>()
  const active = ref(0)

  return { ...list, params, current, active }
})
