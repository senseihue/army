export const useAuthApi = () => {
  const BASE_URL = "/siw/auth/one-id"
  const { $http } = useNuxtApp()

  const getRedirectUrl = (origin?: string): AsyncResponseContainer<string> => {
    return $http.$get(BASE_URL, { params: { state: origin } })
  }
  const signIn = (code: string): AsyncResponseContainer<ISignInResponse> => {
    return $http.$post(BASE_URL, null, { params: { code } })
  }

  const getProfile = (): AsyncResponseContainer<ISessionProfile> => {
    return $http.$get("/profile")
  }

  return {
    getRedirectUrl,
    signIn,
    getProfile
  }
}
