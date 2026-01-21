import type { Education } from "~/entities/profile/education"

export const useEducationApi = () => {
  const { $http } = useNuxtApp()
  const BASE_URL = "/api"

  const getEducationList = (params: Record<string, any>): AsyncResponseContainer<IEducation[]> => {
    return $http.$get(`${BASE_URL}/person/educations`, { params })
  }

  const getEducation = (id: number): AsyncResponseContainer<IEducation> => {
    return $http.$get(`${BASE_URL}/${id}`)
  }


  const createEducation = (data: Education): AsyncResponseContainer<IEducation> => {
    return $http.$post(`${BASE_URL}/person/educations`, data)
  }

  const updateEducation = (data: Education): AsyncResponseContainer<IEducation> => {
    return $http.$put(`${BASE_URL}/person/educations`, data)
  }


  return {
    getEducationList,
    getEducation,
    createEducation,
    updateEducation
  }
}
