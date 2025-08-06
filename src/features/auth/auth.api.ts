export const useAuthApi = () => {
  const BASE_URL = "/core"
  const { $http } = useNuxtApp()

  const getRedirectUrl = (origin?: string): AsyncResponseContainer<string> => {
    return $http.$get(`${BASE_URL}/auth`, { params: { state: origin } })
  }
  const signIn = (code: string): AsyncResponseContainer<ISignInResponse> => {
    return $http.$post(`${BASE_URL}/auth`, null, { params: { code } })
  }

  const signInNonResident = (data: Record<string, any>): AsyncResponseContainer<ISignInResponse> => {
    return $http.$post(`${BASE_URL}/auth`, data)
  }

  const getProfile = (): AsyncResponseContainer<ISessionProfile> => {
    return $http.$get(`${BASE_URL}/profile`)
  }

  return {
    getRedirectUrl,
    signIn,
    getProfile,
    signInNonResident
  }
}
