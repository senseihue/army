import { useContactUsApi, ContactUs } from "#layers/landing/modules/forms/contact-us"

export const useContactUsService = () => {
  const { $toast } = useNuxtApp()
  const { t } = useI18n()
  const contactUsApi = useContactUsApi()

  const createRegistration = async (dto: Ref<ContactUs>, loading: Ref<boolean>) => {
    loading.value = true

    contactUsApi
      .createContact(dto.value)
      .then(() => {
        dto.value = new ContactUs()
        $toast.success(t("messages.success.contact_us"))
      })
      .finally(() => (loading.value = false))
  }

  return {
    createRegistration
  }
}
