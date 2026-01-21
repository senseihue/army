import { useAdmissionApi } from "~/features/admission"
import { useAdmissionStore } from "~/entities/admission"

export const useAdmissionService = () => {
  const modal = useModal()
  const {$toast } = useNuxtApp()
  const { t } = useI18n()
  const AdmissionApi = useAdmissionApi()
  const AdmissionStore = useAdmissionStore()

  const getAdmissionList = async () => {
    AdmissionStore.loading = true

    return AdmissionApi
      .getAdmissionList(cleanParams(AdmissionStore.params))
      .then(({ content, pagination }) => {
        AdmissionStore.items = content
        AdmissionStore.params.total = pagination?.total || 0
        return Promise.resolve(content)
      })
      .finally(() => (AdmissionStore.loading = false))
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
    getAdmissionList,
    saveAdmission
  }
}
