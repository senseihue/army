export const useAuthApi = () => {
  const BASE_URL = "/core"
  const { $http } = useNuxtApp()

  const getRedirectUrl = (origin?: string, role?: string): AsyncResponseContainer<string> => {
    return $http.$get(`${BASE_URL}/auth`, { params: { state: origin, role } })
  }
  const signIn = (code: string, role: string): AsyncResponseContainer<ISignInResponse> => {
    return $http.$post(`${BASE_URL}/auth`, null, { params: { code, role } })
  }

  const signInNonResident = (data: Record<string, any>): AsyncResponseContainer<ISignInResponse> => {
    return $http.$post(`${BASE_URL}/auth/login`, data)
  }

  const sendNewPassword = (data: Record<string, any>): AsyncResponseContainer<ISignInResponse> => {
    return $http.$post(`${BASE_URL}/auth/forgot-password`, data)
  }

  const resetPassword = (data: Record<string, any>): AsyncResponseContainer<ISignInResponse> => {
    return $http.$post(`${BASE_URL}/auth/reset-password`, data)
  }

  const changePassword = (data: Record<string, any>): AsyncResponseContainer<ISignInResponse> => {
    return $http.$post(`${BASE_URL}/profile/change-password`, data)
  }

  const getProfile = (): AsyncResponseContainer<ISessionProfile> => {
    return $http.$get(`${BASE_URL}/profile`)
  }

  return {
    getRedirectUrl,
    signIn,
    getProfile,
    sendNewPassword,
    resetPassword,
    signInNonResident,
    changePassword
  }
}
