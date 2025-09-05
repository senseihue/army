import { useUzExApi } from "~/features/service/integration/uz-ex"
import { useUzExStore } from "~/entities/service/integration/uz-ex"

export const useUzExService = () => {
  const uzExApi = useUzExApi()
  const uzExStore = useUzExStore()

  const getUzExList = () => {
    uzExStore.loading = true

    uzExApi
      .getUzExList(cleanParams(uzExStore.params))
      .then(({ content, pageable }) => {
        uzExStore.items = content
        uzExStore.params.total = pageable?.total ?? 0
      })
      .finally(() => (uzExStore.loading = false))
  }

  return { getUzExList }
}
