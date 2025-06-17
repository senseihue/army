export const useInvestmentApi = () => {
  const BASE_URL = "/siw/public"
  const { $http } = useNuxtApp()

  const getInvestmentTypeList = async (params: Record<string, any>): AsyncResponseContainer<IInvestmentType[]> => {
    return $http.$get(`${BASE_URL}/investment-type`, { params })
  }

  const getInvestmentTypeById = async (id: number): AsyncResponseContainer<IInvestmentType> => {
    return $http.$get(`${BASE_URL}/investment-type/${id}`)
  }

  const getInvestmentAmountList = async (params: Record<string, any>): AsyncResponseContainer<IInvestmentAmount[]> => {
    return $http.$get(`${BASE_URL}/investment-amount`, { params })
  }

  const getInvestmentAmountById = async (id: number): AsyncResponseContainer<IInvestmentAmount> => {
    return $http.$get(`${BASE_URL}/investment-amount/${id}`)
  }

  return {
    getInvestmentTypeList,
    getInvestmentTypeById,
    getInvestmentAmountList,
    getInvestmentAmountById
  }
}
