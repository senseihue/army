import { getSelectItems } from "#layers/ui/lib/select-collection"
import { useTargetIndustryApi } from "#layers/landing/modules/target-industry/target-industry.api"
import { useInvestmentApi } from "#layers/landing/modules/investment/investment.api"

export const useInvestmentService = () => {
  const { $toast } = useNuxtApp()
  const investmentApi = useInvestmentApi()

  const getInvestmentTypeList = async (dto: Ref<[]>, loading?: Ref<boolean>) => {
    if (loading) loading.value = true

    investmentApi
      .getInvestmentTypeList({ page: 0, size: 100 })
      .then(({ content }) => {
        dto.value = getSelectItems(content)
      })
      .finally(() => {
        if (loading) loading.value = false
      })
  }
  const getInvestmentAmountList = async (dto: Ref<[]>, loading?: Ref<boolean>) => {
    if (loading) loading.value = true

    investmentApi
      .getInvestmentAmountList({ page: 0, size: 100 })
      .then(({ content }) => {
        dto.value = getSelectItems(content)
      })
      .finally(() => {
        if (loading) loading.value = false
      })
  }

  return {
    getInvestmentTypeList,
    getInvestmentAmountList
  }
}
