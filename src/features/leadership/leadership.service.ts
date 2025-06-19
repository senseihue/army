import { useLeadershipApi } from "~/features/leadership"

export const useLeadershipService = () => {
  const { $toast } = useNuxtApp()
  const leadershipApi = useLeadershipApi()

  const getLeadershipList = async (dto: Ref<[]>, loading?: Ref<boolean>) => {
    if (loading) loading.value = true

    leadershipApi
      .getLeadershipList({ page: 0, size: 100 })
      .then(({ content }) => {
        dto.value = content
      })
      .finally(() => {
        if (loading) loading.value = false
      })
  }

  return {
    getLeadershipList
  }
}
