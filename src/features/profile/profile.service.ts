import { useProfileApi } from "~/features/profile"
import { ChangePassword } from "~/entities/profile"

import { useReCaptcha } from "vue-recaptcha-v3"

export const useProfileService = () => {
  const alert = useAlert()
  const { t } = useI18n()
  const authApi = useProfileApi()
  const { $toast } = useNuxtApp()

  const reCAPTCHA = useReCaptcha()

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
    changePasswordNonResident
  }
}
