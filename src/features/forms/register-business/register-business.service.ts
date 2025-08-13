import { RegisterBusiness } from "~/entities/forms/register-business"
import { useRegisterBusinessApi } from "~/features/forms/register-business"
import { useUploadService } from "~/features/upload/upload.service"

export const useRegisterBusinessService = () => {
  const { $toast } = useNuxtApp()
  const { t } = useI18n()
  const registerBusinessApi = useRegisterBusinessApi()
  const uploadService = useUploadService()
  const localePath = useLocalePath()
  const createRegistration = async (dto: Ref<RegisterBusiness>, loading: Ref<boolean>) => {
    loading.value = true

    registerBusinessApi
      .registerBusiness(dto.value)
      .then(({ content }) => {
        $toast.success(t(dto.value.is_resident ? "messages.success.non_resident_registration" :"messages.success.registration"))
        const formData = new FormData()
        formData.append("files", dto.value.file[0])
        formData.append("registration_id", content.id.toString())
        uploadService.saveBusinessRegistrationDocument(formData)

        dto.value = new RegisterBusiness()

        navigateTo(localePath('/'))
      })
      .finally(() => (loading.value = false))
  }

  return {
    createRegistration
  }
}
