export const useSchoolApi = () => {
    const { $http } = useNuxtApp()
    const BASE_URL = "/api"

    const getSchool = (id: number): AsyncResponseContainer<ISchool> => {
        return $http.$get(`${BASE_URL}/${id}`)
    }

    const getSchoolList = (params: Record<string, any>): AsyncResponseContainer<ISchool[]> => {
        return $http.$get(`${BASE_URL}/references/schools`, { params })
    }

    const getSchoolTypeList = (): AsyncResponseContainer<ISchoolType[]> => {
        return $http.$get(`${BASE_URL}/references/schools/types`)
    }

    return {
        getSchoolList,
        getSchoolTypeList,
        getSchool,
    }
}
