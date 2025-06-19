export const useLeadershipApi = () => {
  const BASE_URL = "/siw/public"
  const { $http } = useNuxtApp()

  const getLeadershipList = async (params: Record<string, any>): AsyncResponseContainer<ILeadership[]> => {
    return $http.$get(`${BASE_URL}/leadership`, { params })
  }

  const getLeadershipById = async (id: number): AsyncResponseContainer<ILeadership> => {
    return $http.$get(`${BASE_URL}/leadership/${id}`)
  }

  return {
    getLeadershipList,
    getLeadershipById
  }
}
