import { usePersonalServiceApi } from "~/features/profile/service"
import { usePersonalServiceStore } from "~/entities/profile/personal-service"
import { useServiceStore } from "~/entities/service"
import type { AxiosRequestConfig } from "axios"

export const usePersonalServiceService = () => {
  const personalServiceApi = usePersonalServiceApi()
  const serviceStore = useServiceStore()
  const personalServiceStore = usePersonalServiceStore()
  const { $toast } = useNuxtApp()

  const getPersonalServiceList = async () => {
    personalServiceStore.params.category_id = 14
    return personalServiceApi
      .getPersonalServiceList(cleanParams(personalServiceStore.params))
      .then(({ content, pageable }) => {
        personalServiceStore.items = content
        personalServiceStore.params.total = pageable?.total || 0
        return Promise.resolve(content)
      })
  }

  const getPersonalServiceDetail = async (endpoint: string, config: AxiosRequestConfig = {}) => {
    return personalServiceApi.getPersonalServiceDetail(endpoint, config).then(({ content, pageable }) => {
      personalServiceStore.current = content
      return Promise.resolve(content)
    })
  }

  return {
    getPersonalServiceList,
    getPersonalServiceDetail
  }
}
