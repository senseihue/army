export const useServiceApi = () => {
  const BASE_URL = "/siw/public"
  const { $http } = useNuxtApp()

  const getServices = async (params: Record<string, any> = {}) => {
    return $http.$get(`${BASE_URL}/service`, { params })
  }

  return { getServices }
}
