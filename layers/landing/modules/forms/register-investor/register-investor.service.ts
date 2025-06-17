import { useRegisterInvestorApi } from "#layers/landing/modules/forms/register-investor/register-investor.api"
import { RegisterInvestor } from "#layers/landing/modules/forms/register-investor"

export const useRegisterInvestorService = () => {
  const { $toast } = useNuxtApp()
  const { t } = useI18n()
  const { registerInvestor } = useRegisterInvestorApi()

  const register = async (dto: Ref<RegisterInvestor>, loading: Ref<boolean>) => {
    loading.value = true

    registerInvestor(dto.value)
      .then(() => {
        dto.value = new RegisterInvestor()
        $toast.success(t("messages.success.registration"))
      })
      .finally(() => {
        loading.value = false
      })
  }

  return {
    register
  }
}
