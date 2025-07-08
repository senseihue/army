import { PersonalServiceCategoryParams } from "~/entities/profile/personal-service-category"

export const usePersonalServiceCategoryStore = defineStore("personal-service-category", () => {
  const list = createListState<IPersonalServiceCategory>()
  const params = createListParams(new PersonalServiceCategoryParams())

  const current = ref<IPersonalServiceCategory>()
  const active = ref(0)

  return { ...list, params, current, active }
})
