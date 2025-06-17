export const useCountryApi = () => {
  const BASE_URL = "/siw/public"
  const { $http } = useNuxtApp()

  const getCountryList = async (params: Record<string, any>): AsyncResponseContainer<ICountry[]> => {
    return $http.$get(`${BASE_URL}/country`, { params })
  }

  const getCountryById = async (id: number): AsyncResponseContainer<ICountry> => {
    return $http.$get(`${BASE_URL}/country/${id}`)
  }

  return {
    getCountryList,
    getCountryById
  }
}
