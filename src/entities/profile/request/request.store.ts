export const useRequestStore = defineStore("request", () => {
  const list = createListState<IRequest>()
  const params = createListParams({})
  const current = ref<IRequest>()
  const active = ref(0)

  return { ...list, params, current, active }
})
