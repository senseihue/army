
export const useAdmissionApi = () => {
  const { $http } = useNuxtApp()
  const BASE_URL = "/api"

  const getAdmissionList = (params: Record<string, any>): AsyncResponseContainer<IAdmission[]> => {
    return $http.$get(`${BASE_URL}/requests/season-types`, { params })
  }
  const getAdmissionSocialStatusList = (params: Record<string, any>): AsyncResponseContainer<IAdmission[]> => {
    return $http.$get(`${BASE_URL}/requests/seasons/social-statuses`, { params })
  }
  const getAdmission = (id: number): AsyncResponseContainer<IAdmission> => {
    return $http.$get(`${BASE_URL}/${id}`)
  }

  const getAdmissionSchoolList = (params: IAdmissionSchoolParams): AsyncResponseContainer<ISchool[]> => {
    return $http.$get(`${BASE_URL}/requests/seasons/schools`, { params })
  }


  const createAdmission = (data: IAdmission): AsyncResponseContainer<IAdmission> => {
    return $http.$post(`${BASE_URL}/requests/store`, data)
  }



  return {
    getAdmissionList,
    getAdmission,
    getAdmissionSchoolList,
    getAdmissionSocialStatusList,
    createAdmission
  }
}
