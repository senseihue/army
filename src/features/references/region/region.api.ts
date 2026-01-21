export const useRegionApi = () => {
    const { $http } = useNuxtApp()
    const BASE_URL = "/api"

    const getRegion = (id: number): AsyncResponseContainer<IRegion> => {
        return $http.$get(`${BASE_URL}/${id}`)
    }

    const getRegionList = (params: Record<string, any>): AsyncResponseContainer<IRegion[]> => {
        return $http.$get(`${BASE_URL}/references/regions`, { params })
    }

    return {
        getRegionList,
        getRegion,
    }
}
