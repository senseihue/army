import { ServiceCategoryParams } from "~/entities/service/category"

export const useServiceCategoryStore = defineStore("serviceCategory", () => {
  const list = createListState<IServiceCategory>()
  const params = createListParams<ServiceCategoryParams>(new ServiceCategoryParams())

  const current = ref<IServiceCategory>()
  const active = ref(0)

  return { ...list, params, current, active }
})
