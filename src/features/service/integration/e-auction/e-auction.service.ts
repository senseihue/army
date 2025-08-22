import { useEAuctionApi } from "~/features/service/integration/e-auction/e-auction.api"
import { useEAuctionStore } from "~/entities/service/integration/e-auction"

export const useEAuctionService = () => {
  const eAuctionApi = useEAuctionApi()
  const eAuctionStore = useEAuctionStore()
  const { loading, items, params } = storeToRefs(eAuctionStore)

  const getEAuctionList = () => {
    loading.value = true

    eAuctionApi
      .getEAuctionList(cleanParams({ size: 4 }))
      .then(({ content, pageable }) => {
        items.value = content
        params.value.total = pageable?.total ?? 0
      })
      .finally(() => (loading.value = false))
  }

  const getEAuctionById = async (id: number, lot: Ref<IEAuctionDetails | undefined>, loading: Ref<boolean>) => {
    loading.value = true
    eAuctionApi
      .getEAuctionById(id)
      .then(({ content }) => (lot.value = content))
      .finally(() => (loading.value = false))
  }

  return {
    getEAuctionList,
    getEAuctionById
  }
}
