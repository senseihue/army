import { useAuthApi } from "~/features/auth"
import type { ForgotPassword, ResetPassword, SignIn } from "~/entities/auth"
import { useReCaptcha } from "vue-recaptcha-v3"

export const useAuthService = () => {
  const route = useRoute()
  const { t } = useI18n()
  const authApi = useAuthApi()
  const localePath = useLocalePath()
  const { $session, $toast } = useNuxtApp()
  const modal = useModal()

  const reCAPTCHA = useReCaptcha()
  const getRedirectUrl = (origin?: string, role?: string) =>
    authApi.getRedirectUrl(origin).then(({ content }) => {
      window.open(content, "_self")
    })
  // https://sso.egov.uz/sso/oauth/Authorization.do?response_type=one_code&client_id=academy_uz&redirect_uri=https%3A%2F%2Fmy.academy.uz%2Fsso&scope=academy_uz&state=https://portal.academy.uz/sso

  const signIn = () => {
    const code = <string>route.query?.code
    const state = <string>route.query?.state

    if (code) return navigateTo(localePath("/"))

    $session.loading.value = true

    authApi
      .signInNative({
        pin: "20000000000000",
        password: "20000000000000"
      })
      .then(({ content }) => {
        if (!content) {
          navigateTo(localePath("/"))
          return
        }
        const token = useCookie("token")
        token.value = content.token
        $session.profile.value = content.user

        if (state) {
          try {
            const url = new URL(state)
            url.searchParams.append("token", content.token)
            location.replace(url)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
          } catch (error: any) {
            navigateTo(localePath("/"))
          }
        } else {
          navigateTo(localePath("/"))
        }
      })
      .catch(() => {
        modal.show("auth-error-modal")
      })
      .finally(() => ($session.loading.value = false))
  }

  const sendNewPasswordNonResident = async (dto: Ref<ForgotPassword>, loading: Ref<boolean>) => {
    try {
      loading.value = true
      await reCAPTCHA?.recaptchaLoaded()
      dto.value.hash = await reCAPTCHA?.executeRecaptcha("sendnewpassword")
      await authApi.sendNewPassword(dto.value)
      $toast.success(t("messages.success.password_reset"))
      navigateTo(localePath({ path: "/auth/sign-in", query: { role: dto.value.role } }))
    } finally {
      loading.value = false
    }
  }

  const resetPasswordNonResident = async (dto: Ref<ResetPassword>, loading: Ref<boolean>) => {
    loading.value = true

    await reCAPTCHA?.recaptchaLoaded()
    dto.value.hash = await reCAPTCHA?.executeRecaptcha("resetpassword")

    return authApi
      .resetPassword(dto.value)
      .then(() => {
        $toast.success(t("messages.success.saved"))
        navigateTo(localePath({ path: "/auth/sign-in", query: { role: dto.value.role } }))
      })
      .catch(() => {
        modal.show("auth-error-modal")
      })
      .finally(() => (loading.value = false))
  }

  const checkResetLink = (code: string) => authApi.checkResetLink(code)

  return {
    getRedirectUrl,
    signIn,
    sendNewPasswordNonResident,
    resetPasswordNonResident,
    checkResetLink
  }
}
