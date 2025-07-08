export const usePersonalServiceCategoryApi = () => {
  const { $http } = useNuxtApp()
  const BASE_URL = "/siw/personal/service/category"

  const getPersonalServiceCategoryList = (params: Record<string, any>): AsyncResponseContainer<IPersonalServiceCategory[]> => {
    return $http.$get(BASE_URL, { params })
  }

  const getPersonalServiceCategory = (id: number): AsyncResponseContainer<IPersonalServiceCategory> => {
    return $http.$get(`${BASE_URL}/${id}`)
  }

  return {
    getPersonalServiceCategoryList,
    getPersonalServiceCategory
  }
}
