export const usePressApi = () => {
  const BASE_URL = "/siw/public"
  const { $http } = useNuxtApp()

  const getPressList = async (params: Record<string, any>): AsyncResponseContainer<IPress[]> => {
    return $http.$get(`${BASE_URL}/post`, { params })
  }

  const getPressById = async (id: number): AsyncResponseContainer<IPress> => {
    return $http.$get(`${BASE_URL}/post/${id}`)
  }

  return {
    getPressList,
    getPressById
  }
}
