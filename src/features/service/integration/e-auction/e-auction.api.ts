export const useEAuctionApi = () => {
  const BASE_URL = "/integration/public/integration"
  const { $http } = useNuxtApp()

  const getEAuctionList = async (params: Record<string, any>): AsyncResponseContainer<IEAuction[]> => {
    return $http.$get(`${BASE_URL}/eauksion/lot`, { params })
  }

  const getEAuctionById = async (lot_id: number): AsyncResponseContainer => {
    return $http.$get(`${BASE_URL}/iskm/lot/${lot_id}`)
  }

  return {
    getEAuctionList,
    getEAuctionById
  }
}
