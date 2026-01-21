import type { Relative } from "~/entities/profile/relative"

export const useRelativeApi = () => {
  const { $http } = useNuxtApp()
  const BASE_URL = "/api"

  const getRelativeList = (params: Record<string, any>): AsyncResponseContainer<IRelative[]> => {
    return $http.$get(`${BASE_URL}/person/relatives`, { params })
  }

  const getRelative = (id: number): AsyncResponseContainer<IRelative> => {
    return $http.$get(`${BASE_URL}/${id}`)
  }


  const createRelative = (data: IRelative): AsyncResponseContainer<IRelative> => {
    return $http.$post(`${BASE_URL}/person/relatives`, data)
  }

  const updateRelative = (data: IRelative): AsyncResponseContainer<IRelative> => {
    return $http.$put(`${BASE_URL}/person/relatives`, data)
  }


  return {
    getRelativeList,
    getRelative,
    createRelative,
    updateRelative
  }
}
