import { RegisterBusiness } from "#layers/landing/modules/forms/register-business"

export const useRegisterBusinessApi = () => {
  const BASE_URL = "/siw/public"
  const { $http } = useNuxtApp()

  const registerBusiness = async (data: RegisterBusiness) => {
    return $http.$post(`${BASE_URL}/business-registration`, data)
  }



  return {
    registerBusiness
  }
}
