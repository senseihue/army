export const useAdmissionApi = () => {
  const { $http } = useNuxtApp()
  const BASE_URL = "/api"

  const getAdmissionList = (params: Record<string, any>): AsyncResponseContainer<IAdmission[]> => {
    return $http.$get(`${BASE_URL}/requests/season-types`, { params })
  }

  const getAdmission = (id: number): AsyncResponseContainer<IAdmission> => {
    return $http.$get(`${BASE_URL}/${id}`)
  }


  const createAdmission = (data: IAdmission): AsyncResponseContainer<IAdmission> => {
    return $http.$post(`${BASE_URL}/requests/admissions`, data)
  }

  const updateAdmission = (data: IAdmission): AsyncResponseContainer<IAdmission> => {
    return $http.$put(`${BASE_URL}/requests/admissions`, data)
  }


  return {
    getAdmissionList,
    getAdmission,
    createAdmission,
    updateAdmission
  }
}
