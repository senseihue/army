import { ServiceCategoryParams } from "~/entities/service/category"

export const useServiceCategoryStore = defineStore("serviceCategory", () => {
  const list = createListState<IServiceCategory>()
  const params = createListParams<ServiceCategoryParams>(new ServiceCategoryParams())

  const current = ref<IServiceCategory>()

  return { ...list, params, current }
})
