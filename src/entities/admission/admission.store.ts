export const useAdmissionStore = defineStore("admission", () => {
  const list = createListState<IAdmission>()
  const params = createListParams({})
  const current = ref<IAdmission>()
  const active = ref(0)

  return { ...list, params, current, active }
})
