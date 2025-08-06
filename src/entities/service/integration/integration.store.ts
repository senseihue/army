import { IServiceIntegrationParams } from "~/entities/service/integration/integration.model"

export const useServiceIntegration = defineStore("serviceIntegration", () => {
  const list = createListState<IServiceIntegrationEAuction>()
  const params = createListParams<IServiceIntegrationParams>(new IServiceIntegrationParams())
  const current = ref<IServiceIntegrationEAuction>()
  const active = ref(0)

  return { ...list, params, current, active }
})
