
export const useAppealStore = defineStore("appeal", () => {
  const list = createListState<IAppeal>()
  const params = createListParams({})

  const appealReplies = ref<IAppealReply[]>([])
  const current = ref<IAppeal | null>(null)

  return { ...list, params, current, appealReplies }
})

export const useAppealReplyStore = defineStore("appeal-reply", () => {
  const list = createListState<IAppealReply>()
  const params = createListParams<IAppealReplyParams>({})
  const sentinel = ref()
  return { ...list, params, sentinel }
})
