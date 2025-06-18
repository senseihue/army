export const useUploadApi = () => {
  const BASE_URL = "/document/public"
  const { $http } = useNuxtApp()

  const createBusinessRegistrationDocument = (
    data: FormData
  ): AsyncResponseContainer<IBusinessRegistrationDocument> => {
    return $http.$post(`${BASE_URL}/business-registration`, data)
  }
  const createEventRegistrationDocument = (
    data: FormData
  ): AsyncResponseContainer<IBusinessRegistrationDocument> => {
    return $http.$post(`${BASE_URL}/business-registration`, data)
  }

  return {
    createBusinessRegistrationDocument,
    createEventRegistrationDocument
  }
}
