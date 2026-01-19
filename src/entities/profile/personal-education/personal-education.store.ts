export const usePersonalEducationStore = defineStore("personal-service", () => {
  const list = createListState<IPersonalEducation>()
  const params = createListParams({})
  const current = ref<IPersonalEducation>()
  const active = ref(0)

  return { ...list, params, current, active }
})
