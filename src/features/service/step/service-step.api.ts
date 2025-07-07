export const useServiceStepApi = () => {
  const { $http } = useNuxtApp()
  const BASE_URL = "/siw/public/service/step"
  const getStepsList = (params: Record<string, any>): AsyncResponseContainer<IServiceStep[]> => {
    return $http.$get(BASE_URL, { params })
  }

  const getStep = (stepId: number): AsyncResponseContainer<IServiceStep> => {
    return $http.$get(`${BASE_URL}/${stepId}`)
  }

  return {
    getStepsList,
    getStep
  }
}
