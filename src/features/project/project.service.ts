import { useProjectApi } from "~/features/project/project.api"

export const useProjectService = () => {
  const projectApi = useProjectApi()

  const getProjectList = async (
    params: Record<string, any>,
    list: Ref<IProject[]>,
    loading: Ref<boolean>
  ): AsyncResponseContainer<IProject[]> => {
    loading.value = true

    return projectApi
      .getProjectList(params)
      .then((response) => {
        list.value = response.content
        return response
      })
      .finally(() => (loading.value = false))
  }

  const getProjectById = async (
    id: number,
    project: Ref<IProjectById>,
    loading: Ref<boolean>
  ): AsyncResponseContainer<IProject> => {
    loading.value = true

    return projectApi
      .getProjectById(id)
      .then((response) => {
        project.value = response.content
        return response
      })
      .finally(() => (loading.value = false))
  }

  const getSectorList = async (params: Record<string, any>, loading: Ref<boolean>): AsyncResponseContainer<IPress[]> => {
    loading.value = true

    return projectApi.getPublicServiceSector(params).finally(() => (loading.value = false))
  }

  // const getPressList = async (params: Record<string, any>, loading: Ref<boolean>): AsyncResponseContainer<IPress[]> => {
  //   loading.value = true
  //
  //   return mediaApi.getPressList(params).finally(() => (loading.value = false))
  // }
  //
  // const getPressList = async (params: Record<string, any>, loading: Ref<boolean>): AsyncResponseContainer<IPress[]> => {
  //   loading.value = true
  //
  //   return mediaApi.getPressList(params).finally(() => (loading.value = false))
  // }

  return {
    getProjectList,
    getProjectById,
    getSectorList
  }
}
