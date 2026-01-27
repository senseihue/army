
export const useRequestApi = () => {
  const { $http } = useNuxtApp()
  const BASE_URL = "/api"

  const getRequestList = (params: Record<string, any>): AsyncResponseContainer<IRequest[]> => {
    return $http.$get(`${BASE_URL}/person/requests`, { params })
  }

  const getRequest = (id: number): AsyncResponseContainer<IRequest> => {
    return $http.$get(`${BASE_URL}/${id}`)
  }


  return {
    getRequestList,
    getRequest
  }
}
