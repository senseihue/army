import { usePersonalEducationApi } from "~/features/profile/education"
import { usePersonalEducationStore } from "~/entities/profile/personal-education"

export const usePersonalEducationService = () => {
  const modal = useModal()
  const {$toast, $session } = useNuxtApp()
  const { t } = useI18n()
  const { profile } = $session || { profile: {}}
  const PersonalEducationApi = usePersonalEducationApi()
  const PersonalEducationStore = usePersonalEducationStore()

  const getPersonalEducationList = async () => {
    PersonalEducationStore.loading = true

    return PersonalEducationApi
      .getPersonalEducationList(cleanParams(PersonalEducationStore.params))
      .then(({ content, pagination }) => {
        PersonalEducationStore.items = content
        PersonalEducationStore.params.total = pagination?.total || 0
        return Promise.resolve(content)
      })
      .finally(() => (PersonalEducationStore.loading = false))
  }

  const saveEducation = async (dto: Ref<IPersonalEducation>, loading: Ref<boolean>) => {

    const action = dto.value.id ? PersonalEducationApi.updatePersonalEducation : PersonalEducationApi.createPersonalEducation
    loading.value = true
    return action(dto.value)
      .then(() => {
        $toast.success(t("messages.success.education_created"))
        modal.hide("personal-education")
        getPersonalEducationList()
      })
      .finally(() => (loading.value = false))
  }

  return {
    getPersonalEducationList,
    saveEducation
  }
}
