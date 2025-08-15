export const useProfileApi = () => {
  const BASE_URL = "/core"
  const { $http } = useNuxtApp()

  const changePassword = (data: Record<string, any>): AsyncResponseContainer<ISignInResponse> => {
    return $http.$patch(`${BASE_URL}/profile/change-password`, data)
  }

  const getProfile = (): AsyncResponseContainer<ISessionProfile> => {
    return $http.$get(`${BASE_URL}/profile`)
  }

  return {
    getProfile,
    changePassword
  }
}
