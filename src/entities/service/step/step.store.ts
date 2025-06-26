import { ServiceStepParams } from "~/entities/service/step"

export const useServiceStepStore = defineStore("service-step", () => {
  const list = createListState<IServiceStep>()
  const params = createListParams<ServiceStepParams>(new ServiceStepParams())

  const current = ref<IServiceStep>()

  return { ...list, params, current }
})
