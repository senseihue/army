import { RegisterInvestor } from "~/entities/forms/register-investor"

export const useTargetIndustryApi = () => {
  const BASE_URL = "/siw/public"
  const { $http } = useNuxtApp()

  const getTargetIndustryList = async (params: Record<string, any>) => {
    return $http.$get(`${BASE_URL}/target-industry`, { params })
  }

  const getTargetIndustryById = async (id: number) => {
    return $http.$get(`${BASE_URL}/target-industry/${id}`)
  }

  return {
    getTargetIndustryList,
    getTargetIndustryById
  }
}
