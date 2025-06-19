import { usePressApi } from "~/features/media/press"

export const usePressService = () => {
  const mediaApi = usePressApi()

  const getPressList = async (params: Record<string, any>, loading: Ref<boolean>): AsyncResponseContainer<IPress[]> => {
    loading.value = true

    return mediaApi.getPressList(params).finally(() => (loading.value = false))
  }

  const getPressById = async (id: number, loading: Ref<boolean>): AsyncResponseContainer<IPress> => {
    loading.value = true

    return mediaApi.getPressById(id).finally(() => (loading.value = false))
  }


  return {
    getPressList,
    getPressById,
  }
}
