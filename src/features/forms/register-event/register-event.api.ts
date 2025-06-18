export const useRegisterEventApi = () => {
  const BASE_URL = "/siw/public"
  const { $http } = useNuxtApp()

  const createApplication = (payload: Record<string, any>): AsyncResponseContainer<IRegisterEvent> => {
    return $http.$post(`${BASE_URL}/event-application`, payload)
  }

  return {
    createApplication
  }
}
