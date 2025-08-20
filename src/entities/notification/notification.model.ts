export const useNotificationStore = defineStore("notification", () => {
  const loading = ref<boolean>(false)
  const record = ref<INotificationResponse>()

  return { loading, record }
})
