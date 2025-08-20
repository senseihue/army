export const useNotificationStore = defineStore("notification", () => {
  const list = createListState<INotification>()
  const params = createListParams({})
  const count = ref<number>(0)
  return { ...list, params, count }
})
