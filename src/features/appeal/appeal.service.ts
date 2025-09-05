import { useAppealApi } from "~/features/appeal"
import { Appeal, AppealReply, AppealResolve, useAppealReplyStore, useAppealStore } from "~/entities/appeal"

export const useAppealService = () => {
  const appealApi = useAppealApi()
  const appealStore = useAppealStore()
  const appealReplyStore = useAppealReplyStore()
  const { sentinel } = storeToRefs(appealReplyStore)
  const { t } = useI18n()
  const { $toast, $session } = useNuxtApp()
  const modal = useModal()
  const route = useRoute()
  const { loggedIn } = $session || {}

  const getAppealList = async () => {
    appealStore.loading = true
    appealApi
      .getAppealList(cleanParams(appealStore.params))
      .then(({ content, pageable }) => {
        appealStore.items = content
        appealStore.params.total = pageable?.total || 0
        if (route.params.id) {
          modal.show("appeal-reply", Number(route.params.id))
        }
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

  const getAppealReplyList = () => {
    appealReplyStore.loading = true
    appealApi
      .getAppealReplyList(cleanParams(appealReplyStore.params))
      .then(async ({ content, pageable }) => {
        appealReplyStore.items = content as IAppealReply[]
        appealReplyStore.params.total = pageable?.total || 0
        await nextTick()
        observe()
      })
      .finally(() => ( appealReplyStore.loading = false))
  }

  const getInfiniteAppealReplyList = async () => {
    if (appealReplyStore.params.total < appealReplyStore.params.size) {
      disconnect()
      return
    }
    appealReplyStore.params.page++
    appealApi
      .getAppealReplyList(cleanParams(appealReplyStore.params))
      .then(({ content }) => {
        if (!content.length) return disconnect()
        appealReplyStore.items = appealReplyStore.items.concat(content)
      })
  }

  const { observe, disconnect } = useInfinite(sentinel, getInfiniteAppealReplyList)

  const createAppeal = async (dto: Ref<Appeal>, loading: Ref<boolean>) => {
    loading.value = true
    const action = loggedIn.value ? appealApi.createAppeal : appealApi.createPublicAppeal
    return action(dto.value)
      .then(() => {
        dto.value = new Appeal()
        $toast.success(t("messages.success.appeal_created"))
        if (loggedIn.value) {
          getAppealList()
        }
        modal.hide("appeal")
      })
      .finally(() => (loading.value = false))
  }

  const sendAppealReply = async (dto: Ref<AppealReply>, loading: Ref<boolean>) => {
    loading.value = true
    dto.value.appeal_id = appealReplyStore.params.appeal_id
    return appealApi
      .sendReply(dto.value)
      .then(({ content }) => {
        appealReplyStore.items.unshift(content)
        dto.value = new AppealReply()
      })
      .finally(() => (loading.value = false))
  }

  const resolveAppeal = async (id: number, loading: Ref<boolean>) => {
    loading.value = true
    const data = new AppealResolve(true)
    data.appeal_id = id

    return appealApi
      .resolveAppeal(data)
      .then(() => {
        $toast.success(t("messages.success.saved"))
        getAppealList()
      })
      .finally(() => (loading.value = false))
  }

  const rejectAppeal = async (dto: Ref<AppealResolve>, loading: Ref<boolean>) => {
    loading.value = true
    return appealApi
      .resolveAppeal(dto.value)
      .then(() => {
        $toast.success(t("messages.success.saved"))
        dto.value = new AppealResolve()
        getAppealList()
        modal.hide("appeal-reject")
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
    resolveAppeal,
    rejectAppeal,
    disconnect
  }
}
