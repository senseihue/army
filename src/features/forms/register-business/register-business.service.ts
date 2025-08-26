import { RegisterBusiness } from "~/entities/forms/register-business"
import { useRegisterBusinessApi } from "~/features/forms/register-business"
import { useUploadService } from "~/features/upload/upload.service"

export const useRegisterBusinessService = () => {
  const registerBusinessApi = useRegisterBusinessApi()
  const localePath = useLocalePath()
  const createRegistration = async (dto: Ref<RegisterBusiness>, loading: Ref<boolean>) => {
    loading.value = true

    registerBusinessApi
      .registerBusiness(dto.value)
      .then(() => {
        // $toast.success(t(dto.value.is_resident ? "messages.success.non_resident_registration" :"messages.success.registration"))
        dto.value = new RegisterBusiness()

        navigateTo(localePath("/success-registration"))
      })
      .finally(() => (loading.value = false))
  }

  return {
    createRegistration
  }
}
