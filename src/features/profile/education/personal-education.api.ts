import type { PersonalEducation } from "~/entities/profile/personal-education"

export const usePersonalEducationApi = () => {
  const { $http } = useNuxtApp()
  const BASE_URL = "/api"

  const getPersonalEducationList = (params: Record<string, any>): AsyncResponseContainer<IPersonalEducation[]> => {
    return $http.$get(`${BASE_URL}/person/educations`, { params })
  }

  const getPersonalEducation = (id: number): AsyncResponseContainer<IPersonalEducation> => {
    return $http.$get(`${BASE_URL}/${id}`)
  }

  const getSchoolList = (params: Record<string, any>): AsyncResponseContainer<IPersonalEducation[]> => {
    return $http.$get(`${BASE_URL}/references/schools`, { params })
  }

  const createPersonalEducation = (data: PersonalEducation): AsyncResponseContainer<IPersonalEducation> => {
    return $http.$post(`${BASE_URL}/person/educations`, data)
  }

  const updatePersonalEducation = (data: PersonalEducation): AsyncResponseContainer<IPersonalEducation> => {
    return $http.$put(`${BASE_URL}/person/educations`, data)
  }


  return {
    getPersonalEducationList,
    getPersonalEducation,
    getSchoolList,
    createPersonalEducation,
    updatePersonalEducation
  }
}
