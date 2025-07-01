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
      .then(({ content }) => (list.value = content))
      .finally(() => (loading.value = false))
  }

  const getProjectCategoryById = async (
    id: number,
    category: Ref<IProjectCategoryById>,
    loading: Ref<boolean>
  ): AsyncResponseContainer<IProjectCategory> => {
    loading.value = true

    return projectCategoryApi
      .getProjectCategoryById(id)
      .then(({ content }) => (category.value = content))
      .finally(() => (loading.value = false))
  }

  return {
    getProjectCategoryList,
    getProjectCategoryById
  }
}
