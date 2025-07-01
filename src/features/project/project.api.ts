export const useProjectApi = () => {
  const BASE_URL = "/siw/public"
  const { $http } = useNuxtApp()

  const getProjectList = async (params: Record<string, any>): AsyncResponseContainer<IProject[]> => {
    return $http.$get(`${BASE_URL}/project`, { params })
  }
  const getProjectById = async (id: number): AsyncResponseContainer<IProjectById> => {
    return $http.$get(`${BASE_URL}/project/${id}`)
  }

  return {
    getProjectList,
    getProjectById
  }
}
