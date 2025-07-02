import { useAuthApi } from "~/features/auth/auth.api"

export const useAuthService = () => {
  const route = useRoute()
  const alert = useAlert()
  const authApi = useAuthApi()
  const localePath = useLocalePath()
  const { $session } = useNuxtApp()

  const getRedirectUrl = (origin?: string) =>
    authApi.getRedirectUrl(origin).then(({ content }) => {
      window.open(content, "_self")
    })
  // https://sso.egov.uz/sso/oauth/Authorization.do?response_type=one_code&client_id=academy_uz&redirect_uri=https%3A%2F%2Fmy.academy.uz%2Fsso&scope=academy_uz&state=https://portal.academy.uz/sso

  const signIn = () => {
    const code = <string>route.query?.code
    const state = <string>route.query?.state

    if (!code) return navigateTo(localePath("/"))

    $session.loading.value = true

    authApi
      .signIn(code)
      .then(({ content }) => {
        $session.token.value = content.token
        $session.profile.value = content.profile

        if (state) {
          try {
            const url = new URL(state)
            url.searchParams.append("token", content.token)
            console.log(content, "For role")
            location.replace(url)
            console.log(state)
          } catch (error) {
            console.error("Invalid URL in state parameter:", error)

            navigateTo(localePath("/"))
          }
        } else {
          console.log("Log")
          navigateTo(localePath("/"))
        }
      })
      .catch((error) => {
        console.error(error)

        alert
          .errorDialog({
            timer: 5000,
            text: "Siz fanlar akademiyasining ruxsat etilgan xodimlari royxatidan topilmadingiz"
          })
          .then(() => {
            navigateTo(localePath("/"))
          })
      })
      .finally(() => ($session.loading.value = false))
  }

  return { getRedirectUrl, signIn }
}
