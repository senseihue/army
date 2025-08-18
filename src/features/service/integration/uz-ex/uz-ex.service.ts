import { useUzExApi } from "~/features/service/integration/uz-ex/uz-ex.api"

export const useUzExService = () => {
  const uzExApi = useUzExApi()

  const getUzExList = async (
    params: Record<string, any>,
    list: Ref<IProject[]>,
    loading: Ref<boolean>
  ): AsyncResponseContainer<IUzEx[]> => {
    loading.value = true

    return uzExApi
      .getUzExList(params)
      .then((response) => {
        list.value = response.content
        return response
      })
      .finally(() => (loading.value = false))
  }

  const getUzExById = async (
    id: number,
    project: Ref<IProjectById>,
    loading: Ref<boolean>
  ): AsyncResponseContainer<IUzEx> => {
    loading.value = true

    return uzExApi
      .getUzExById(id)
      .then((response) => {
        project.value = response.content
        return response
      })
      .finally(() => (loading.value = false))
  }

  return {
    getUzExList,
    getUzExById
  }
}
