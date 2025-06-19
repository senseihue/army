import { ContactUs } from "~/entities/forms/contact-us"

export const useContactUsApi = () => {
  const BASE_URL = "/siw/public"
  const { $http } = useNuxtApp()

  const createContact = async (data: ContactUs) => {
    return $http.$post(`${BASE_URL}/contact-us`, data)
  }

  return {
    createContact
  }
}
