export const useKinshipApi = () => {
    const { $http } = useNuxtApp()
    const BASE_URL = "/api"

    const getKinship = (id: number): AsyncResponseContainer<IKinship> => {
        return $http.$get(`${BASE_URL}/${id}`)
    }

    const getKinshipList = (params: Record<string, any>): AsyncResponseContainer<IKinship[]> => {
        return $http.$get(`${BASE_URL}/references/kinship`, { params })
    }

    return {
        getKinshipList,
        getKinship,
    }
}
