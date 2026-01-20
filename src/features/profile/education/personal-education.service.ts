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
      .then(({ content, pageable }) => {
        PersonalEducationStore.items = content
        PersonalEducationStore.params.total = pageable?.total || 0
        return Promise.resolve(content)
      })
      .finally(() => (PersonalEducationStore.loading = false))
  }

  const saveEducation = async (dto: Ref<IPersonalEducation>, loading: Ref<boolean>) => {

    const action = dto.value.id ? PersonalEducationApi.updatePersonalEducation : PersonalEducationApi.createPersonalEducation
    loading.value = true
    dto.value.person_id = profile?.value?.person.id
    dto.value.school_type_id = 6
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
