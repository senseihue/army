export const useProjectCategoryApi = () => {
  const BASE_URL = "/siw/public"
  const { $http } = useNuxtApp()

  const getProjectCategoryList = async (params: Record<string, any>): AsyncResponseContainer<IProjectCategory[]> => {
    return $http.$get(`${BASE_URL}/project-category`, { params })
  }
  const getProjectCategoryById = async (id: number): AsyncResponseContainer<IProjectCategoryById> => {
    return $http.$get(`${BASE_URL}/project-category/${id}`)
  }

  const getServiceSector = async (params: Record<string, any>): AsyncResponseContainer<IProjectCategorySector[]> => {
    return $http.$get(`${BASE_URL}/service-sector`, { params })
  }

  const getProjectAmount = async (params: Record<string, any>): AsyncResponseContainer<IProjectCategoryAmount[]> => {
    return $http.$get(`${BASE_URL}/project-amount`, { params })
  }

  return {
    getProjectCategoryList,
    getProjectCategoryById,
    getServiceSector,
    getProjectAmount
  }
}
