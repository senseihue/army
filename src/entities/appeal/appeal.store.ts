export const useAppealStore = defineStore("appeal", () => {
  const list = createListState<IAppeal>()
  const params = createListParams({})

  const current = ref<IAppeal | null>(null)

  return { ...list, params, current }
})
