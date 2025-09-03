import type { AppealChat, Appeal } from "~/entities/appeal"
import type { IAppealReplyParams } from "~/entities/appeal/appeal.model"

export const useAppealApi = () => {
  const { $http } = useNuxtApp()
  const baseUrl = "/siw/appeal"
  const publicBaseUrl = "/siw/public"

  const getAppealList = (params: IStoreListParams): AsyncResponseContainer<IAppeal[]> => {
    return $http.$get(`${baseUrl}`, { params })
  }

  const getAppeal = (id: number): AsyncResponseContainer<IAppeal> => {
    return $http.$get(`${baseUrl}/${id}`)
  }

  const createAppeal = (data: Appeal): AsyncResponseContainer<IAppeal> => {
    return $http.$post(`${baseUrl}`, data)
  }

  const getAppealChatList = (params: IAppealReplyParams): AsyncResponseContainer<IAppealChat[]> => {
    return $http.$get(`${baseUrl}/response`, { params })
  }

  const sendMessage = (data: AppealChat) => {
    return $http.$post(`${baseUrl}/reply`, data)
  }

  const getAppealTypeList = (params: IStoreListParams): AsyncResponseContainer<IAppealType[]> => {
    return $http.$get(`${publicBaseUrl}/appeal-type`, { params })
  }

  const getAppealTopicList = (params: IStoreListParams): AsyncResponseContainer<IAppealTopic[]> => {
    return $http.$get(`${publicBaseUrl}/appeal-topic`, { params })
  }

  return {
    getAppealList,
    getAppeal,
    getAppealTypeList,
    getAppealTopicList,
    createAppeal,
    sendMessage,
    getAppealChatList
  }
}
