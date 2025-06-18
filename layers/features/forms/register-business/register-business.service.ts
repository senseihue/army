import { useRegisterBusinessApi, RegisterBusiness } from "~/layers/features/forms/register-business/index"
import { useUploadService } from "~/layers/features/upload/upload.service"

export const useRegisterBusinessService = () => {
  const { $toast } = useNuxtApp()
  const { t } = useI18n()
  const registerBusinessApi = useRegisterBusinessApi()
  const uploadService = useUploadService()

  const createRegistration = async (dto: Ref<RegisterBusiness>, loading: Ref<boolean>) => {
    loading.value = true

    registerBusinessApi
      .registerBusiness(dto.value)
      .then(({ content }) => {
        $toast.success(t("messages.success.registration"))
        const formData = new FormData()
        formData.append("files", dto.value.file[0])
        formData.append("registration_id", content.id.toString())
        uploadService.saveBusinessRegistrationDocument(formData)

        dto.value = new RegisterBusiness()
      })
      .finally(() => (loading.value = false))
  }

  return {
    createRegistration
  }
}
