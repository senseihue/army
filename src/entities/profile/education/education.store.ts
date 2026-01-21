export const useEducationStore = defineStore("education", () => {
  const list = createListState<IEducation>()
  const params = createListParams({})
  const current = ref<IEducation>()
  const active = ref(0)

  return { ...list, params, current, active }
})
