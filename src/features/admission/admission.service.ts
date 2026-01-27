import { useAdmissionApi } from "~/features/admission"
import { useAdmissionSchoolStore, useAdmissionStore } from "~/entities/admission"

export const useAdmissionService = () => {
  const modal = useModal()
  const {$toast} = useNuxtApp()
  const route = useRoute()
  const { t } = useI18n()
  const AdmissionApi = useAdmissionApi()
  const admissionStore = useAdmissionStore()
  const admissionSchoolStore = useAdmissionSchoolStore()

  const getAdmissionList = async () => {
    admissionStore.loading = true

    return AdmissionApi
      .getAdmissionList(cleanParams(admissionStore.params))
      .then(({ content, pagination }) => {
        admissionStore.items = content
        admissionStore.params.total = pagination?.total || 0
        return Promise.resolve(content)
      })
      .finally(() => (admissionStore.loading = false))
  }

  const getAdmissionSchoolList = async () => {
    const season_id = route.params.season_id
    const social_status_id = route.query.social_status_id

    if (!season_id || !social_status_id) return
    return AdmissionApi.getAdmissionSchoolList({ season_id, social_status_id })
      .then(({ content, pagination }) => {
        admissionSchoolStore.items = content
        admissionSchoolStore.params.total = pagination?.total || 0
        return Promise.resolve(content)
      })
  }

  const saveAdmission = async (dto: Ref<IAdmission>, loading: Ref<boolean>) => {

    loading.value = true
    return AdmissionApi.createAdmission(dto.value)
      .then(() => {
        $toast.success(t("messages.success.saved"))
        modal.hide("admission")
        getAdmissionList()
      })
      .finally(() => (loading.value = false))
  }

  return {
    getAdmissionSchoolList,
    getAdmissionList,
    saveAdmission
  }
}
