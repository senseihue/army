import { useRequestApi } from "~/features/profile/request"
import { useRequestStore } from "~/entities/profile/request"

export const useRequestService = () => {
  const requestApi = useRequestApi()
  const requestStore = useRequestStore()

  const getRequestList = async () => {
    requestStore.loading = true

    return requestApi
      .getRequestList(cleanParams(requestStore.params))
      .then(({ content, pagination }) => {
        requestStore.items = content
        requestStore.params.total = pagination?.total || 0
        return Promise.resolve(content)
      })
      .finally(() => (requestStore.loading = false))
  }

  return {
    getRequestList
  }
}
