import type { Appeal } from "~/entities/appeal"
import type { IAppealChat } from "~/entities/appeal/appeal.model"

export const useAppealApi = () => {
  const { $http } = useNuxtApp()
  const baseUrl = "/appeal"

  const getAppealList = (params: IStoreListParams): AsyncResponseContainer<IAppeal[]> => {
    return $http.$get(`${baseUrl}/list`, { params })
  }

  const getAppeal = (id: number): AsyncResponseContainer<IAppeal> => {
    return $http.$get(`${baseUrl}/${id}`)
  }

  const getAppealChatList = (id: number): AsyncResponseContainer<IAppealChat[]> => {
    return $http.$get(`${baseUrl}/chat/${id}`)
  }

  const createAppeal = (data: Appeal): AsyncResponseContainer<IAppeal> => {
    return $http.$post(`${baseUrl}`, data)
  }

  const sendMessage = (data: AppealChat) => {
    return $http.$post(`${baseUrl}/chat`, data)
  }

  const getAppealTypes = (params: IStoreListParams): AsyncResponseContainer<IAppealType[]> => {
    return $http.$get(`${baseUrl}-type`, { params })
  }

  const getAppealTopic = (params: IStoreListParams): AsyncResponseContainer<IAppealTopic[]> => {
    return $http.$get(`${baseUrl}-topic`, { params })
  }

  return {
    getAppealList,
    getAppeal,
    getAppealTypes,
    getAppealTopic,
    createAppeal,
    getAppealChatList
  }
}
