export const useCountryApi = () => {
  const BASE_URL = "/integration/public"
  const { $http } = useNuxtApp()

  const getCountryList = async (params: Record<string, any>): AsyncResponseContainer<ICountry[]> => {
    return $http.$get(`${BASE_URL}/territorial-entity/countries`, { params })
  }

  const getCountryById = async (id: number): AsyncResponseContainer<ICountry> => {
    return $http.$get(`${BASE_URL}//territorial-entity/countries/${id}`)
  }

  return {
    getCountryList,
    getCountryById
  }
}
