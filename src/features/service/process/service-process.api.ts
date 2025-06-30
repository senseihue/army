export const useServiceProcessApi = () => {
  const { $http } = useNuxtApp()
  const BASE_URL = "/siw/public/service-process"

  const getProcessList = (params: Record<string, any>): AsyncResponseContainer<IServiceProcess[]> => {
    return $http.$get(BASE_URL, { params })
  }

  const getProcess = (stepId: number): AsyncResponseContainer<IServiceProcess> => {
    return $http.$get(`${BASE_URL}/${stepId}`)
  }

  return {
    getProcessList,
    getProcess
  }
}
