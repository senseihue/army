export const useSpecialityApi = () => {
    const { $http } = useNuxtApp()
    const BASE_URL = "/api"

    const getSpeciality = (id: number): AsyncResponseContainer<ISpeciality> => {
        return $http.$get(`${BASE_URL}/${id}`)
    }

    const getSpecialityList = (params: Record<string, any>): AsyncResponseContainer<ISpeciality[]> => {
        return $http.$get(`${BASE_URL}/requests/seasons/specialities`, { params })
    }

    return {
        getSpecialityList,
        getSpeciality,
    }
}
