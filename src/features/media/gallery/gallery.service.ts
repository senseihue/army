import { useGalleryApi } from "~/features/media/gallery/index"

export const useGalleryService = () => {
  const galleryApi = useGalleryApi()

  const getGalleryList = async (
    params: Record<string, any>,
    loading: Ref<boolean>
  ): AsyncResponseContainer<IGallery[]> => {
    loading.value = true

    return galleryApi.getGalleryList(params).finally(() => (loading.value = false))
  }

  const getGalleryById = async (id: number, loading: Ref<boolean>): AsyncResponseContainer<IGallery> => {
    loading.value = true

    return galleryApi.getGalleryById(id).finally(() => (loading.value = false))
  }

  return {
    getGalleryList,
    getGalleryById,
  }
}
