export const useAuthApi = () => {
  const BASE_URL = "/api"
  const { $http } = useNuxtApp()

  const getRedirectUrl = (origin?: string, role?: string): AsyncResponseContainer<string> => {
    return $http.$get(`${BASE_URL}/auth/one-id/redirect`, { params: { state: origin, role } })
  }
  const signIn = (code: string, role: string): AsyncResponseContainer<ISignInResponse> => {
    return $http.$post(`${BASE_URL}/auth/one-id/callback`, null, { params: { code, role } })
  }
  const signInNative = (data: { pin: string, password: string}): AsyncResponseContainer<ISignInResponse> => {
    return $http.$post(`${BASE_URL}/auth/login`, data)
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

  const getProfile = (): AsyncResponseContainer<ISignInResponse> => {
    return $http.$get(`${BASE_URL}/auth/user`)
  }

  const checkResetLink = (uuid: string): AsyncResponseContainer => {
    return $http.$post(`${BASE_URL}/auth/check-reset-link`, null, { params: { uuid } })
  }



  return {
    getRedirectUrl,
    signIn,
    signInNative,
    getProfile,
    sendNewPassword,
    resetPassword,
    signInNonResident,
    changePassword,
    checkResetLink
  }
}
