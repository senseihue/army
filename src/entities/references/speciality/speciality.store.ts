export const useSpecialityStore = defineStore("speciality", () => {
  const list = createListState<ISpeciality>()
  const params = createListParams({})
  const current = ref<ISpeciality>()
  const active = ref(0)

  return { ...list, params, current, active }
})
