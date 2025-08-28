export const useProjectCategoryStore = defineStore("project-category", () => {
  const category = ref<IProjectCategoryById>()
  const loading = ref<boolean>(false)

  return { category, loading }
})
