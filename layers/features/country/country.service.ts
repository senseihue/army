import { getSelectItems } from "#layers/ui/lib/select-collection"
import { useCountryApi } from "~/layers/features/country/index"

export const useCountryService = () => {
  const { $toast } = useNuxtApp()
  const countryApi = useCountryApi()

  const getCountryList = async (dto: Ref<[]>, loading?: Ref<boolean>) => {
    if (loading) loading.value = true

    countryApi
      .getCountryList({ page: 0, size: 100 })
      .then(({ content }) => {
        dto.value = getSelectItems(content, undefined, "region.region")
      })
      .finally(() => {
        if (loading) loading.value = false
      })
  }

  return {
    getCountryList
  }
}
