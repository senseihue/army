import { useProjectCategoryApi } from "~/features/project/category/project-category.api"

export const useProjectCategoryService = () => {
  const projectCategoryApi = useProjectCategoryApi()

  const getProjectCategoryList = async (
    params: Record<string, any>,
    list: Ref<IProjectCategory[]>,
    loading: Ref<boolean>
  ): AsyncResponseContainer<IProjectCategory[]> => {
    loading.value = true
    return projectCategoryApi
      .getProjectCategoryList(params)
      .then((response) => {
        list.value = response.content
        return response
      })
      .finally(() => (loading.value = false))
  }

  const getProjectCategoryById = async (
    id: number,
    category: Ref<IProjectCategoryById | undefined>,
    loading: Ref<boolean>
  ): AsyncResponseContainer<IProjectCategory> => {
    loading.value = true

    return projectCategoryApi
      .getProjectCategoryById(id)
      .then((response) => {
        category.value = response.content
        return response
      })
      .finally(() => (loading.value = false))
  }

  return {
    getProjectCategoryList,
    getProjectCategoryById
  }
}
