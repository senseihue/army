import { useEventApi } from "#layers/landing/modules/event/event.api"

export const useEventService = () => {
  const eventApi = useEventApi()

  const getEventsList = async (params: Record<string, any>, loading: Ref<boolean>) => {
    loading.value = true

    return eventApi.getEventsList(params).finally(() => (loading.value = false))
  }

  const getEventById = async (id: number, loading: Ref<boolean>) => {
    loading.value = true

    return eventApi.getEventById(id).finally(() => (loading.value = false))
  }

  return {
    getEventsList,
    getEventById
  }
}
