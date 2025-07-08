import type { AxiosRequestConfig } from "axios"

export const usePersonalServiceApi = () => {
  const { $http } = useNuxtApp()
  const BASE_URL = "/siw/personal/service"
  const INTEGRATION_URL = ""

  const getPersonalServiceList = (params: Record<string, any>): AsyncResponseContainer<IPersonalService[]> => {
    return $http.$get(BASE_URL, { params })
  }

  const getPersonalService = (id: number): AsyncResponseContainer<IPersonalService> => {
    return $http.$get(`${BASE_URL}/${id}`)
  }

  const getPersonalServiceDetail = (
    endpoint: string,
    config: AxiosRequestConfig = {}
  ): AsyncResponseContainer<IPersonalServiceDetail> => {
    return $http.$request({
      url: `${INTEGRATION_URL}${endpoint}`,
      ...config
    })
  }

  return {
    getPersonalServiceList,
    getPersonalService,
    getPersonalServiceDetail
  }
}
