import { ServiceStepParams } from "~/entities/service/step"

export const useServiceStepStore = defineStore("service-step", () => {
  const list = createListState<IServiceStep>()
  const params = createListParams<ServiceStepParams>(new ServiceStepParams())

  const current = ref<IServiceStep>()
  const loadingCurrent = ref(false)

  return { ...list, params, current, loadingCurrent }
})
