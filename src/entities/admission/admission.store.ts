
export const useAdmissionStore = defineStore("admission", () => {
  const list = createListState<IAdmission>()
  const params = createListParams({})
  const current = ref<IAdmission>()
  const active = ref(0)

  return { ...list, params, current, active }
})


export const useAdmissionSchoolStore = defineStore("admission-school", () => {
  const list = createListState<ISchool>()
  const params = createListParams({})
  const active = ref(0)

  return { ...list, params, active }
})


