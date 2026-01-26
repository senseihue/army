import { useAuthApi, useAuthService } from "~/features/auth"


const useAuthCallback = async (cb: any, fb: any, timeout = 1000 ) => {
  const {$session} = useNuxtApp()
  const { loggedIn } = $session || {}

  const { getProfile, signInNative } = useAuthApi()
  const getRedirectUrl = () => {
    return signInNative({
        pin: "20000000000000",
        password: "20000000000000"
      })
      .then(({ content }) => {
        const token = useCookie("token")
        token.value = content.token
        $session.profile.value = content.user
      })
      .finally(() => ($session.loading.value = false))
  }
  if (!loggedIn.value) {
    await getRedirectUrl()
    const intervalId = setInterval(async () => {
      try {
        const { content } = await getProfile()
        if (content.user) {
          clearInterval(intervalId)
          return cb()
        }
      } catch (error: any) {
        clearInterval(intervalId)
        fb(error)
        // Continue polling on error
      }
    }, timeout)
  } else {
    cb()
  }
}
export default useAuthCallback