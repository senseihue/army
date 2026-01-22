export const useDistrictApi = () => {
    const { $http } = useNuxtApp()
    const BASE_URL = "/api"

    const getDistrict = (id: number): AsyncResponseContainer<IDistrict> => {
        return $http.$get(`${BASE_URL}/${id}`)
    }

    const getDistrictList = (params: Record<string, any>): AsyncResponseContainer<IDistrict[]> => {
        return $http.$get(`${BASE_URL}/references/districts`, { params })
    }

    return {
        getDistrictList,
        getDistrict,
    }
}
