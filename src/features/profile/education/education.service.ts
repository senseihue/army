import { useEducationApi } from "~/features/profile/education"
import { useEducationStore } from "~/entities/profile/education"

export const useEducationService = () => {
  const modal = useModal()
  const {$toast, $session } = useNuxtApp()
  const { t } = useI18n()
  const { profile } = $session || { profile: {}}
  const EducationApi = useEducationApi()
  const EducationStore = useEducationStore()

  const getEducationList = async () => {
    EducationStore.loading = true

    return EducationApi
      .getEducationList(cleanParams(EducationStore.params))
      .then(({ content, pagination }) => {
        EducationStore.items = content
        EducationStore.params.total = pagination?.total || 0
        return Promise.resolve(content)
      })
      .finally(() => (EducationStore.loading = false))
  }

  const saveEducation = async (dto: Ref<IEducation>, loading: Ref<boolean>) => {

    const action = dto.value.id ? EducationApi.updateEducation : EducationApi.createEducation
    loading.value = true
    return action(dto.value)
      .then(() => {
        $toast.success(t("messages.success.education_created"))
        modal.hide("education")
        getEducationList()
      })
      .finally(() => (loading.value = false))
  }

  return {
    getEducationList,
    saveEducation
  }
}
