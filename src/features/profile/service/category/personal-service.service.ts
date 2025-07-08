import { usePersonalServiceCategoryApi } from "~/features/profile/service/category"
import { usePersonalServiceCategoryStore } from "~/entities/profile/personal-service-category"

export const usePersonalServiceCategoryService = () => {
  const personalServiceCategoryApi = usePersonalServiceCategoryApi()
  const personalServiceCategoryStore = usePersonalServiceCategoryStore()

  const getPersonalServiceCategoryList = async () => {
    return personalServiceCategoryApi
      .getPersonalServiceCategoryList(cleanParams(personalServiceCategoryStore.params))
      .then(({ content, pageable }) => {
        personalServiceCategoryStore.items = content
        personalServiceCategoryStore.current = content[0]
        personalServiceCategoryStore.params.total = pageable?.total || 0
        return Promise.resolve(content)
      })
  }

  const getPersonalServiceCategory = async () => {
    if (personalServiceCategoryStore.current) {
      return personalServiceCategoryApi
        .getPersonalServiceCategory(personalServiceCategoryStore.current.id)
        .then(({ content, pageable }) => {
          personalServiceCategoryStore.current = content
          personalServiceCategoryStore.params.total = pageable?.total || 0
          return Promise.resolve(content)
        })
    }
  }

  return {
    getPersonalServiceCategoryList,
    getPersonalServiceCategory
  }
}
