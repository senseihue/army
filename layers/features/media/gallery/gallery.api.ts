export const useGalleryApi = () => {
  const BASE_URL = "/siw/public"
  const { $http } = useNuxtApp()

  const getGalleryList = async (params: Record<string, any>): AsyncResponseContainer<IGallery[]> => {
    return $http.$get(`${BASE_URL}/gallery`, { params })
  }
  const getGalleryById = async (id: number): AsyncResponseContainer<IGallery> => {
    return $http.$get(`${BASE_URL}/gallery/${id}`)
  }

  return {
    getGalleryList,
    getGalleryById
  }
}
