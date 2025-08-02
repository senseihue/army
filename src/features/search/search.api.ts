export const useSearchApi = () => {
  const BASE_URL = "/siw/public"
  const { $http } = useNuxtApp()

  const getSearchList = async (params: Record<string, any>): AsyncResponseContainer<ISearch[]> => {
    return $http.$get(`${BASE_URL}/search`, { params })
  }

  return {
    getSearchList
  }
}
