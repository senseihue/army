export const useUzExApi = () => {
  const BASE_URL = "/integration/public/integration"
  const { $http } = useNuxtApp()

  const getUzExList = (params: Record<string, any>): AsyncResponseContainer<IUzExResponse[]> => {
    return $http.$get(`${BASE_URL}/uzex-lots`, { params })
  }

  const getUzExById = (id: number): AsyncResponseContainer<IUzExResponse> => {
    return $http.$get(`${BASE_URL}/uzex-lots/${id}`)
  }

  return {
    getUzExList,
    getUzExById
  }
}
