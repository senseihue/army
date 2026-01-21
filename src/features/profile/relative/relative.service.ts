import { useRelativeApi } from "~/features/profile/relative"
import { useRelativeStore } from "~/entities/profile/relative"

export const useRelativeService = () => {
  const modal = useModal()
  const {$toast, $session } = useNuxtApp()
  const { t } = useI18n()
  const { profile } = $session || { profile: {}}
  const RelativeApi = useRelativeApi()
  const RelativeStore = useRelativeStore()

  const getRelativeList = async () => {
    RelativeStore.loading = true

    return RelativeApi
      .getRelativeList(cleanParams(RelativeStore.params))
      .then(({ content, pagination }) => {
        RelativeStore.items = content
        RelativeStore.params.total = pagination?.total || 0
        return Promise.resolve(content)
      })
      .finally(() => (RelativeStore.loading = false))
  }

  const saveRelative = async (dto: Ref<IRelative>, loading: Ref<boolean>) => {

    const action = dto.value.id ? RelativeApi.updateRelative : RelativeApi.createRelative
    loading.value = true
    return action(dto.value)
      .then(() => {
        $toast.success(t("messages.success.relative_created"))
        modal.hide("relative")
        getRelativeList()
      })
      .finally(() => (loading.value = false))
  }

  return {
    getRelativeList,
    saveRelative
  }
}
