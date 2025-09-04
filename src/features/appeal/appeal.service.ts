import { useAppealApi } from "~/features/appeal"
import { Appeal, AppealReply, useAppealReplyStore, useAppealStore } from "~/entities/appeal"

export const useAppealService = () => {
  const appealApi = useAppealApi()
  const appealStore = useAppealStore()
  const appealReplyStore = useAppealReplyStore()
  const { t } = useI18n()
  const { $toast, $session } = useNuxtApp()
  const modal = useModal()

  const { loggedIn } = $session || {}

  const getAppealList = async () => {
    appealStore.loading = true
    appealApi
      .getAppealList(cleanParams(appealStore.params))
      .then(({ content, pageable }) => {
        appealStore.items = content
        appealStore.params.total = pageable?.total || 0
      })
      .finally(() => (appealStore.loading = false))
  }

  const getAppeal = async (id: number, dto: Ref<Appeal>, loading: Ref<boolean>) => {
    loading.value = true
    appealApi
      .getAppeal(id)
      .then(({ content }) => {
        dto.value = content
      })
      .finally(() => (loading.value = false))
  }

  const getAppealReplyList = (loading: Ref<boolean>) => {
    loading.value = true
    appealApi
      .getAppealReplyList(cleanParams(appealReplyStore.params))
      .then(({ content, pageable }) => {
        appealReplyStore.items = content as IAppealReply[]
        appealReplyStore.params.total = pageable?.total || 0
      })
      .finally(() => (loading.value = false))
  }
  const getInfiniteNotificationList = async () => {
    if (appealReplyStore.params.total % appealReplyStore.params.size === 0) {
      disconnect()
      return
    }
    appealReplyStore.loading = true
    appealApi
      .getAppealReplyList(cleanParams(appealReplyStore.params))
      .then(({ content, pageable }) => {
        appealReplyStore.items = content as IAppealReply[]
        appealReplyStore.params.total = pageable?.total || 0
        if (!content.length) return disconnect()
        appealReplyStore.items = appealReplyStore.items.concat(content)
        appealReplyStore.params.page++
      })
      .finally(() => (appealReplyStore.loading = false))
  }

  const { observe, disconnect } = useInfinite(appealReplyStore.sentinel, getInfiniteNotificationList)

  const createAppeal = async (dto: Ref<Appeal>, loading: Ref<boolean>) => {
    loading.value = true
    const action = loggedIn.value ? appealApi.createAppeal : appealApi.createPublicAppeal
    return action(dto.value)
      .then(() => {
        dto.value = new Appeal()
        $toast.success(t("messages.success.appeal_created"))
        modal.hide("appeal")
        getAppealList()
      })
      .finally(() => (loading.value = false))
  }

  const sendAppealReply = async (dto: Ref<AppealReply>, loading: Ref<boolean>) => {
    loading.value = true
    dto.value.appeal_id = appealReplyStore.params.appeal_id
    return appealApi
      .sendReply(dto.value)
      .then(({content}) => {
        appealReplyStore.items.unshift(content)
        dto.value = new AppealReply()
      })
      .finally(() => (loading.value = false))
  }

  return {
    getAppealList,
    getAppeal,
    createAppeal,
    sendAppealReply,
    getAppealReplyList,
    observe,
    disconnect
  }
}
