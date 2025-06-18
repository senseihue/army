import { useRegisterEventApi } from "#layers/landing/modules/forms/register-event"
import { RegisterEvent } from "#layers/landing/modules/forms/register-event"

export const useRegisterEventService = () => {
  const { $toast } = useNuxtApp()
  const registerEventApi = useRegisterEventApi()
  const uploadService = useUploadService()

  const createApplication = async (dto: Ref<RegisterEvent>, loading: Ref<boolean>) => {
    loading.value = true

    registerEventApi
      .createApplication(dto.value)
      .then(({ content }) => {
        $toast.success("Application submitted successfully")
        const formData = new FormData()
        formData.append("passport", dto.value.filePassport[0])
        formData.append("image", dto.value.filePhoto[0])

        formData.append("application_id", content.id.toString())
        uploadService.saveBusinessRegistrationDocument(formData)

        dto.value = new RegisterEvent()
      })
      .finally(() => {
        loading.value = false
      })
  }

  return {
    createApplication
  }
}
