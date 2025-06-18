import { RegisterInvestor } from "~/entities/forms/register-investor"

export const useRegisterInvestorApi = () => {
  const BASE_URL = "/siw/public"
  const { $http } = useNuxtApp()

  const registerInvestor = async (data: RegisterInvestor): AsyncResponseContainer<IRegistrationInvestor> => {
    return $http.$post(`${BASE_URL}/investor-registration`, data)
  }

  return {
    registerInvestor
  }
}
