export const useEventApi = () => {
  const BASE_URL = "/siw/public"
  const { $http } = useNuxtApp()

  const getEventsList = async (params: Record<string, any>): AsyncResponseContainer<IEventType[]> => {
    return $http.$get(`${BASE_URL}/event`, { params })
  }

  const getEventById = async (id: number): AsyncResponseContainer<IEventType> => {
    return $http.$get(`${BASE_URL}/event/${id}`)
  }

  return {
    getEventsList,
    getEventById
  }
}
