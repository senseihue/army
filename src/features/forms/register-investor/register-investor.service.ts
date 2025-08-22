import { useRegisterInvestorApi } from "~/features/forms/register-investor"
import { RegisterInvestor } from "~/entities/forms/register-investor"

export const useRegisterInvestorService = () => {
  const { $toast } = useNuxtApp()
  const { t } = useI18n()
  const { registerInvestor } = useRegisterInvestorApi()
  const localePath = useLocalePath()

  const register = (dto: Ref<RegisterInvestor>, loading: Ref<boolean>) => {
    loading.value = true

    registerInvestor(dto.value)
      .then(() => {
        $toast.success(
          t(dto.value.is_resident ? "messages.success.non_resident_registration" : "messages.success.registration")
        )
        dto.value = new RegisterInvestor()
        navigateTo(localePath("/"))
      })
      .finally(() => (loading.value = false))
  }

  return {
    register
  }
}
