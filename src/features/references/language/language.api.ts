export const useLanguageApi = () => {
    const { $http } = useNuxtApp()
    const BASE_URL = "/api"

    const getLanguage = (id: number): AsyncResponseContainer<ILanguage> => {
        return $http.$get(`${BASE_URL}/${id}`)
    }

    const getLanguageList = (params: Record<string, any>): AsyncResponseContainer<ILanguage[]> => {
        return $http.$get(`${BASE_URL}/references/test-languages`, { params })
    }

    return {
        getLanguageList,
        getLanguage,
    }
}
