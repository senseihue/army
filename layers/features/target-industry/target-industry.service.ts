import { getSelectItems } from "#layers/ui/lib/select-collection"
import { useTargetIndustryApi } from "~/layers/features/target-industry"

export const useTargetIndustryService = () => {
  const { $toast } = useNuxtApp()
  const targetIndustryApi = useTargetIndustryApi()

  const getTargetIndustryList = async (dto: Ref<[]>, loading?: Ref<boolean>) => {
    if (loading) loading.value = true

    targetIndustryApi
      .getTargetIndustryList({ page: 0, size: 100 })
      .then(({ content }) => {
        dto.value = getSelectItems(content)
      })
      .finally(() => {
        if (loading) loading.value = false
      })
  }

  return {
    getTargetIndustryList
  }
}
