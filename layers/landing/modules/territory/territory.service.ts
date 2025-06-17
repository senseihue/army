import { getSelectItems } from "#layers/ui/lib/select-collection"
import { useTerritoryApi } from "#layers/landing/modules/territory"

export const useRegisterInvestorService = () => {
  const { $toast } = useNuxtApp()
  const territoryApi = useTerritoryApi()

  const getTerritoryList = async (dto: Ref<[]>, loading?: Ref<boolean>) => {
    if (loading) loading.value = true

    territoryApi
      .getTerritoryList({ page: 0, size: 100 })
      .then(({ content }) => {
        dto.value = getSelectItems(content, undefined, "region.region")
      })
      .finally(() => {
        if (loading) loading.value = false
      })
  }

  return {
    getTerritoryList
  }
}
