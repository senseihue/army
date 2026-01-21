export const useRelativeStore = defineStore("relative", () => {
  const list = createListState<IRelative>()
  const params = createListParams({})
  const current = ref<IRelative>()
  const active = ref(0)

  return { ...list, params, current, active }
})
