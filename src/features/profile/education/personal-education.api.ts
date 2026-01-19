export const usePersonalEducationApi = () => {
  const { $http } = useNuxtApp()
  const BASE_URL = "/api"

  const getPersonalEducationList = (params: Record<string, any>): AsyncResponseContainer<IPersonalEducation[]> => {
    return $http.$get(BASE_URL, { params })
  }

  const getPersonalEducation = (id: number): AsyncResponseContainer<IPersonalEducation> => {
    return $http.$get(`${BASE_URL}/${id}`)
  }


  return {
    getPersonalEducationList,
    getPersonalEducation
  }
}
