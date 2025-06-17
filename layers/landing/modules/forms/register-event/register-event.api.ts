export const useRegisterEventApi = () => {
  const { $http } = useNuxtApp()

  const createApplication = (payload: Record<string, any>): AsyncResponseContainer<IRegisterEvent> => {
    return $http.$post("/api/landing/event-application", payload)
  }

  return {
    createApplication
  }
}
