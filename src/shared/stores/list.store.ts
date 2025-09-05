export const createListParams = <T = IStoreListParams>(params: T) => {
  return ref({
    page: 0,
    size: 10,
    total: 0,
    keyword: "",
    ...params
  })
}

export const createListState = <T> () => {
  const loading = ref(false)

  const items = ref<T[]>([])
  const filteredItems = ref<T[]>([])

  const isEmpty = computed(() => !items.value?.length)
  const isLoading = computed(() => loading.value && !isEmpty.value)

  return { loading, items, filteredItems, isEmpty, isLoading }
}

export const createListStore = <T>(entity: string) => {
  return defineStore(entity, () => {
    const state = createListState<T>()
    const params = createListParams({})

    return { ...state, params }
  })
}
