import { type AppealReply, type Appeal, AppealResolve } from "~/entities/appeal"

export const useAppealApi = () => {
  const { $http } = useNuxtApp()
  const baseUrl = "/siw/appeal"
  const publicBaseUrl = "/siw/public"

  const getAppealList = (params: Partial<IStoreListParams>): AsyncResponseContainer<IAppeal[]> => {
    return $http.$get(`${baseUrl}`, { params })
  }

  const getAppeal = (id: number): AsyncResponseContainer<IAppeal> => {
    return $http.$get(`${baseUrl}/${id}`)
  }

  const createAppeal = (data: Appeal): AsyncResponseContainer<IAppeal> => {
    return $http.$post(`${baseUrl}`, data)
  }
  const createPublicAppeal = (data: Appeal): AsyncResponseContainer<IAppeal> => {
    return $http.$post(`${publicBaseUrl}/appeal`, data)
  }

  const getAppealReplyList = (params:  Partial<IAppealReplyParams>): AsyncResponseContainer<IAppealReply[]> => {
    return $http.$get(`${baseUrl}/response`, { params })
  }

  const sendReply = (data: AppealReply) => {
    return $http.$post(`${baseUrl}/reply`, data)
  }

  const getAppealTypeList = (params: IStoreListParams): AsyncResponseContainer<IAppealType[]> => {
    return $http.$get(`${publicBaseUrl}/appeal-type`, { params })
  }

  const getAppealTopicList = (params: IStoreListParams): AsyncResponseContainer<IAppealTopic[]> => {
    return $http.$get(`${publicBaseUrl}/appeal-topic`, { params })
  }

  const resolveAppeal = (data: AppealResolve): AsyncResponseContainer<any> => {
    return $http.$post(`${baseUrl}/resolved`, data)
  }

  return {
    getAppealList,
    getAppeal,
    getAppealTypeList,
    getAppealTopicList,
    createAppeal,
    createPublicAppeal,
    sendReply,
    resolveAppeal,
    getAppealReplyList
  }
}
