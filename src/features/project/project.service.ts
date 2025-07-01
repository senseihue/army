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
      .then(({ content }) => (list.value = content))
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
      .then(({ content }) => (project.value = content))
      .finally(() => (loading.value = false))
  }

  return {
    getProjectList,
    getProjectById
  }
}
