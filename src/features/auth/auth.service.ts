import { useAuthApi } from "~/features/auth"
import { ChangePassword, type ForgotPassword, type ResetPassword, type SignIn } from "~/entities/auth"

import { useReCaptcha } from "vue-recaptcha-v3"

export const useAuthService = () => {
  const route = useRoute()
  const alert = useAlert()
  const { t } = useI18n()
  const authApi = useAuthApi()
  const localePath = useLocalePath()
  const { $session, $toast } = useNuxtApp()

  const reCAPTCHA = useReCaptcha()
  const getRedirectUrl = (origin?: string, role?: string) =>
    authApi.getRedirectUrl(origin, role).then(({ content }) => {
      console.log(content, "redirectUrl")
      window.open(content, "_self")
    })
  // https://sso.egov.uz/sso/oauth/Authorization.do?response_type=one_code&client_id=academy_uz&redirect_uri=https%3A%2F%2Fmy.academy.uz%2Fsso&scope=academy_uz&state=https://portal.academy.uz/sso

  const signIn = () => {
    const code = <string>route.query?.code
    const state = <string>route.query?.state
    const role = <string>route.query?.role
    console.log(route.query, 'route.query?.state')

    if (!code) return navigateTo(localePath("/"))

    $session.loading.value = true

    authApi
      .signIn(code, role)
      .then(({ content }) => {
        const token = useCookie("token")
        token.value = content.token
        $session.profile.value = content.profile

        if (state) {
          try {
            const url = new URL(state)
            url.searchParams.append("token", content.token)
            console.log(content, "For role")
            // location.replace(url)
            console.log(state)
          } catch (error) {
            console.error("Invalid URL in state parameter:", error)

            // navigateTo(localePath("/"))
          }
        } else {
          // navigateTo(localePath("/"))
        }
      })
      .catch(() => {
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

  const signInNonResident = async (dto: Ref<SignIn>, loading: Ref<boolean>) => {
    loading.value = true

    await reCAPTCHA?.recaptchaLoaded()
    dto.value.hash = await reCAPTCHA?.executeRecaptcha("signin")
    return authApi
      .signInNonResident(dto.value)
      .then(({ content }) => {
        const token = useCookie("token")
        token.value = content.token
        $session.profile.value = content.profile

        navigateTo(localePath("/profile"))
      })
      .catch((error) => {
        alert.errorDialog(error?.response?.data?.message || "Login failed")
      })
      .finally(() => (loading.value = false))
  }
  const sendNewPasswordNonResident = async (dto: Ref<ForgotPassword>, loading: Ref<boolean>) => {
    loading.value = true
    dto.value.role = route.query?.role as string

    await reCAPTCHA?.recaptchaLoaded()
    dto.value.hash = await reCAPTCHA?.executeRecaptcha("sendnewpassword")
    return authApi
      .sendNewPassword(dto.value)
      .then(({ content }) => {
        const token = useCookie("token")
        token.value = content.token
        $session.profile.value = content.profile
        $toast.success(t("messages.success.password_reset"))
        navigateTo(localePath("/auth/sign-in"))
      })
      .catch((error) => {
        alert.errorDialog(error?.response?.data?.message || "Login failed")
      })
      .finally(() => (loading.value = false))
  }

  const resetPasswordNonResident = async (dto: Ref<ResetPassword>, loading: Ref<boolean>) => {
    loading.value = true

    await reCAPTCHA?.recaptchaLoaded()
    dto.value.hash = await reCAPTCHA?.executeRecaptcha("resetpassword")
    return authApi
      .resetPassword(dto.value)
      .then(({ content }) => {
        const token = useCookie("token")
        token.value = content.token
        $session.profile.value = content.profile
        navigateTo(localePath("/auth/sign-in"))
      })
      .catch((error) => {
        alert.errorDialog(error?.response?.data?.message || "Login failed")
      })
      .finally(() => (loading.value = false))
  }
  const changePasswordNonResident = async (dto: Ref<ChangePassword>, loading: Ref<boolean>) => {
    loading.value = true

    await reCAPTCHA?.recaptchaLoaded()
    dto.value.hash = await reCAPTCHA?.executeRecaptcha("changepassword")
    return authApi
      .changePassword(dto.value)
      .then(() => {
        $toast.success(t("messages.success.saved"))
        dto.value = new ChangePassword()
      })
      .catch((error) => {
        alert.errorDialog(error?.response?.data?.message || "Login failed")
      })
      .finally(() => (loading.value = false))
  }

  return {
    getRedirectUrl,
    signIn,
    signInNonResident,
    sendNewPasswordNonResident,
    resetPasswordNonResident,
    changePasswordNonResident
  }
}
