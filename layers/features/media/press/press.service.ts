import { useMediaApi } from "#layers/landing/modules/media"

export const useMediaService = () => {
  const mediaApi = useMediaApi()

  const getMediaList = async (params: Record<string, any>, loading: Ref<boolean>): AsyncResponseContainer<IMedia[]> => {
    loading.value = true

    return mediaApi.getMediaList(params).finally(() => (loading.value = false))
  }

  const getMediaById = async (id: number, loading: Ref<boolean>): AsyncResponseContainer<IMedia> => {
    loading.value = true

    return mediaApi.getMediaById(id).finally(() => (loading.value = false))
  }

  const getGalleryList = async (
    params: Record<string, any>,
    loading: Ref<boolean>
  ): AsyncResponseContainer<IMedia[]> => {
    loading.value = true

    return mediaApi.getGalleryList(params).finally(() => (loading.value = false))
  }

  const getGalleryById = async (id: number, loading: Ref<boolean>): AsyncResponseContainer<IMedia> => {
    loading.value = true

    return mediaApi.getGalleryById(id).finally(() => (loading.value = false))
  }

  return {
    getMediaList,
    getMediaById,
    getGalleryList,
    getGalleryById
  }
}
