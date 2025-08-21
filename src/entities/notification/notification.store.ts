export const useNotificationStore = defineStore("notification", () => {
  const list = createListState<INotification>()
  const params = createListParams({})
  const count = ref<number>(0)
  const sentinel = ref()
  return { ...list, params, count, sentinel }
})
