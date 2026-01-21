export const usePersonalServiceCategoryStore = defineStore("personal-service-category", () => {
  const list = createListState<IPersonalServiceCategory>()
  const params = createListParams({})

  const current = ref<IPersonalServiceCategory>()
  const active = ref(0)

  return { ...list, params, current, active }
})
