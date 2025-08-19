export const useUzExApi = () => {
  const BASE_URL = "/integration/public/integration"
  const { $http } = useNuxtApp()

  const getUzExList = async (params: Record<string, any>): AsyncResponseContainer<IUzEx[]> => {
    return $http.$get(`${BASE_URL}/iskm/sell-products`, { params })
  }

  const getUzExById = async (id: number): AsyncResponseContainer => {
    return $http.$get(`${BASE_URL}/uz-ex/${id}`)
  }

  return {
    getUzExList,
    getUzExById
  }
}
