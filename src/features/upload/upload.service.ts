import { useUploadApi } from "~/features/upload/upload.api"

export const useUploadService = () => {
  const { $toast } = useNuxtApp()
  const uploadApi = useUploadApi()
  const saveBusinessRegistrationDocument = async (dto: FormData, loading?: Ref<boolean>) => {
    if (loading) loading.value = true

    uploadApi
      .createBusinessRegistrationDocument(dto)
      .then(({ content }) => {})
      .finally(() => {
        if (loading) loading.value = false
      })
  }
  const saveEventRegistrationDocument = async (dto: FormData, loading?: Ref<boolean>) => {
    if (loading) loading.value = true

    uploadApi
      .createEventRegistrationDocument(dto)
      .then(({ content }) => {})
      .finally(() => {
        if (loading) loading.value = false
      })
  }

  return {
    saveBusinessRegistrationDocument,
    saveEventRegistrationDocument
  }
}
