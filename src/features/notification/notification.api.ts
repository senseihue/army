export const useNotificationApi = () => {
  const BASE_URL = "/siw/notification"
  const { $http } = useNuxtApp()

  const getNotificationList = (): AsyncResponseContainer<INotification[]> => {
    return $http.$get(`${BASE_URL}`)
  }

  const read = (id: number): AsyncResponseContainer => {
    return $http.$post(`${BASE_URL}`, null, { params: { id } })
  }

  const readAll = (): AsyncResponseContainer => {
    return $http.$post(`${BASE_URL}/read-all`)
  }

  return { getNotificationList, read, readAll }
}
