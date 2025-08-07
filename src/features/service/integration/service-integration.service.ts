import { useServiceIntegrationApi } from "~/features/service/integration/service-integration.api"

export const useIntegrationService = () => {
  const serviceIntegrationApi = useServiceIntegrationApi()

  const getEAuctionList = async (
    params: Record<string, any>,
    list: Ref<IProject[]>,
    loading: Ref<boolean>
  ): AsyncResponseContainer<IProject[]> => {
    loading.value = true

    return serviceIntegrationApi
      .getEAuctionList(params)
      .then((response) => {
        list.value = response.content
        return response
      })
      .finally(() => (loading.value = false))
  }

  const getEAuctionById = async (
    id: number,
    project: Ref<IProjectById>,
    loading: Ref<boolean>
  ): AsyncResponseContainer<IProject> => {
    loading.value = true

    return serviceIntegrationApi
      .getEAuctionById(id)
      .then((response) => {
        project.value = response.content
        return response
      })
      .finally(() => (loading.value = false))
  }

  const getUzExList = async (
    params: Record<string, any>,
    list: Ref<IProject[]>,
    loading: Ref<boolean>
  ): AsyncResponseContainer<IProject[]> => {
    loading.value = true

    return serviceIntegrationApi
      .getUzExList(params)
      .then((response) => {
        list.value = response.content
        return response
      })
      .finally(() => (loading.value = false))
  }

  const getUzExById = async (
    id: number,
    project: Ref<IProjectById>,
    loading: Ref<boolean>
  ): AsyncResponseContainer<IProject> => {
    loading.value = true

    return serviceIntegrationApi
      .getUzExById(id)
      .then((response) => {
        project.value = response.content
        return response
      })
      .finally(() => (loading.value = false))
  }

  return {
    getEAuctionList,
    getEAuctionById,
    getUzExList,
    getUzExById
  }
}
