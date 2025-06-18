export const useMediaApi = () => {
  const BASE_URL = "/siw/public"
  const { $http } = useNuxtApp()

  const getMediaList = async (params: Record<string, any>): AsyncResponseContainer<IMedia[]> => {
    return $http.$get(`${BASE_URL}/post`, { params })
  }

  const getMediaById = async (id: number): AsyncResponseContainer<IMedia> => {
    return $http.$get(`${BASE_URL}/post/${id}`)
  }

  const getGalleryList = async (params: Record<string, any>): AsyncResponseContainer<IMedia[]> => {
    return $http.$get(`${BASE_URL}/gallery`, { params })
  }
  const getGalleryById = async (id: number): AsyncResponseContainer<IMedia> => {
    return $http.$get(`${BASE_URL}/gallery/${id}`)
  }

  return {
    getMediaList,
    getMediaById,
    getGalleryList,
    getGalleryById
  }
}
