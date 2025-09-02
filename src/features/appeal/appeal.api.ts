export const useAppealApi = () => {
  const { $http } = useNuxtApp()
  const baseUrl = "/appeal"

  const getAppealList = (params: IStoreListParams): AsyncResponseContainer<IAppeal[]> => {
    return $http.$get(`${baseUrl}/list`, { params })
  }

  const getAppeal = (id: number): AsyncResponseContainer<IAppeal> => {
    return $http.$get(`${baseUrl}/${id}`)
  }

  const getAppealTypes = (params: IStoreListParams): AsyncResponseContainer<IAppealType[]> => {
    return $http.$get(`${baseUrl}/type`, { params })
  }

  const getAppealTopic = (params: IStoreListParams): AsyncResponseContainer<IAppealTopic[]> => {
    return $http.$get(`${baseUrl}/topic`, { params })
  }

  return {
    getAppealList,
    getAppeal,
    getAppealTypes,
    getAppealTopic
  }
}
