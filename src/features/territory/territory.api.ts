export const useTerritoryApi = () => {
  const BASE_URL = "/siw/public"
  const { $http } = useNuxtApp()

  const getTerritoryList = async (params: Record<string, any>): AsyncResponseContainer<ITerritory[]> => {
    return $http.$get(`${BASE_URL}/territory`, { params })
  }

  const getDistrictList = async (params: Record<string, any>): AsyncResponseContainer<ITerritory[]> => {
    return $http.$get(`${BASE_URL}/district`, { params })
  }

  const getTerritoryById = async (id: number): AsyncResponseContainer<ITerritory> => {
    return $http.$get(`${BASE_URL}/territory/${id}`)
  }

  return {
    getTerritoryList,
    getDistrictList,
    getTerritoryById
  }
}
