export const useServiceIntegrationApi = () => {
  const BASE_URL = "/integration"
  const { $http } = useNuxtApp()

  const getEAuctionList = async (params: Record<string, any>): AsyncResponseContainer<any[]> => {
    return $http.$get(`${BASE_URL}/iskm/eauksion/lots`, { params })
  }

  const getEAuctionById = async (lot_id: number): AsyncResponseContainer => {
    return $http.$get(`${BASE_URL}/iskm/eauksion/lot-info`, { params: { lot_id } })
  }

  const getUzExList = async (params: Record<string, any>): AsyncResponseContainer<any[]> => {
    return $http.$get(`${BASE_URL}/uz-ex`, { params })
  }

  const getUzExById = async (id: number): AsyncResponseContainer => {
    return $http.$get(`${BASE_URL}/uz-ex/${id}`)
  }

  return {
    getEAuctionList,
    getEAuctionById,
    getUzExList,
    getUzExById
  }
}
