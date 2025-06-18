import { getSelectItems } from "~/shared/lib/select-collection"
import { useTerritoryApi } from "~/features/territory/index"

export const useTerritoryService = () => {
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
