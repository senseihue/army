export const useProjectApi = () => {
  const BASE_URL = "/siw/public"
  const { $http } = useNuxtApp()

  const getProjectList = async (params: Record<string, any>): AsyncResponseContainer<IProject[]> => {
    return $http.$get(`${BASE_URL}/project`, { params })
  }
  const getProjectById = async (id: number): AsyncResponseContainer<IProjectById> => {
    return $http.$get(`${BASE_URL}/project/${id}`)
  }

  const getPublicServiceSector = async (params: Record<string, any>): AsyncResponseContainer<IProjectSector[]> => {
    return $http.$get(`${BASE_URL}/service-sector`, { params })
  }

  const getPublicAmount = async (params: Record<string, any>): AsyncResponseContainer => {
    return $http.$get(`${BASE_URL}/public/project-amount`, { params })
  }

  const getPublicRegions = async (params: Record<string, any>): AsyncResponseContainer => {
    return $http.$get(`${BASE_URL}/public/ter`, { params })
  }

  return {
    getProjectList,
    getProjectById,
    getPublicAmount,
    getPublicRegions,
    getPublicServiceSector
  }
}
