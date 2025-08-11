export const useTerritoryApi = () => {
  const BASE_URL = "/siw/public"
  const INTEGRATION_URL = "/integration/public"
  const { $http } = useNuxtApp()

  const getTerritoryList = async (params: Record<string, any>): AsyncResponseContainer<ITerritory[]> => {
    return $http.$get(`${BASE_URL}/territory`, { params })
  }

  const getTerritoryPublicList = async (params: Record<string, any>): AsyncResponseContainer<IRegion[]> => {
    return $http.$get(`${INTEGRATION_URL}/territorial-entity/regions`, { params })
  }

  const getDistrictList = async (params: Record<string, any>): AsyncResponseContainer<ITerritory[]> => {
    return $http.$get(`${INTEGRATION_URL}/territorial-entity/districts`, { params })
  }

  const getTerritoryById = async (id: number): AsyncResponseContainer<ITerritory> => {
    return $http.$get(`${BASE_URL}/territory/${id}`)
  }

  return {
    getTerritoryList,
    getDistrictList,
    getTerritoryById,
    getTerritoryPublicList
  }
}
