import { useAppealApi } from "~/features/appeal"
import { Appeal, AppealChat, useAppealStore } from "~/entities/appeal"

export const useAppealService = () => {
  const appealApi = useAppealApi()
  const appealStore = useAppealStore()
  const { t } = useI18n()
  const { $toast } = useNuxtApp()
  const modal = useModal()

  const getAppealList = async () => {
    appealStore.loading = true
    appealApi
      .getAppealList(appealStore.params)
      .then(({ content, pageable }) => {
        appealStore.items = content
        appealStore.params.total = pageable?.total || 0
      })
      .finally(() => (appealStore.loading = false))
  }

  const getAppeal = async (id: number, loading: Ref<boolean>) => {
    loading.value = true
    appealApi
      .getAppeal(id)
      .then(({ content }) => {
        appealStore.current = content
      })
      .finally(() => (loading.value = false))
  }

  const createAppeal = async (dto: Ref<Appeal>, loading: Ref<boolean>) => {
    loading.value = true
    return appealApi
      .createAppeal(dto.value)
      .then(() => {
        dto.value = new Appeal()
        $toast.success(t("messages.success.appeal_created"))
        modal.hide("appeal")
      })
      .finally(() => (loading.value = false))
  }

  const sendMessage = async (dto: Ref<AppealChat>) => {
    return appealApi.sendMessage(dto.value).then(() => {
      dto.value = new AppealChat()
    })
  }

  return {
    getAppealList,
    getAppeal,
    createAppeal,
    sendMessage
  }
}
