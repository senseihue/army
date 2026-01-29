export const useAuthCheck = () => {
  const { $session } = useNuxtApp()
  const { loggedIn, profile } = $session || {}
  const localePath = useLocalePath()

  const checkAuth = () => {
    if (!loggedIn.value) {

    }
  }

  return {
    checkAuth
  }


}