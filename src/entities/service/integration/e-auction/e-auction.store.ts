import { createListParams } from "~/shared/stores/list.store"

export const useEAuctionStore = defineStore("e-auction", () => {
  const loading = ref<boolean>(false)
  const items = ref<IEAuction[]>([])
  const params = createListParams({ page: 0, size: 4 })

  return { items, loading, params }
})
