import { useSearchStore } from "~/entities/search"
import { useSearchApi } from "~/features/search"
import { debounce } from "lodash-es"

export const useSearchService = () => {
  const searchStore = useSearchStore()
  const searchApi = useSearchApi()

  const getSearchList = () => {
    searchStore.loading = true

    searchApi
      .getSearchList(cleanParams(searchStore.params))
      .then(({ content, pageable }) => {
        searchStore.items = content
        searchStore.params.total = pageable?.total ?? 0
      })
      .finally(() => (searchStore.loading = false))
  }

  const filterSearchList = () => {
    searchStore.params.page = 0
    getSearchList()
  }

  const debouncedFilterSearchList = debounce(filterSearchList, 600)
  return {
    getSearchList,
    debouncedFilterSearchList
  }
}
