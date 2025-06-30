import { useServiceStepApi } from "~/features/service/step/service-step.api"
import { useServiceStepStore } from "~/entities/service/step"
import { useServiceProcessStore } from "~/entities/service/process"

export const useServiceStepService = () => {
  const serviceStepApi = useServiceStepApi()
  const serviceStepStore = useServiceStepStore()
  const serviceProcessStore = useServiceProcessStore()
  const { $toast } = useNuxtApp()

  const getStepList = async () => {
    serviceStepStore.params.process_id = serviceProcessStore.current?.id
    return serviceStepApi.getStepsList(cleanParams(serviceStepStore.params)).then(({ content, pageable }) => {
      serviceStepStore.items = content
      serviceStepStore.current = content[0]
      serviceStepStore.params.total = pageable?.total || 0
      return Promise.resolve(content)
    })
  }

  const getStep = async () => {
    if (serviceStepStore.current) {
      return serviceStepApi.getStep(serviceStepStore.current.id).then(({ content, pageable }) => {
        serviceStepStore.current = content
        serviceStepStore.params.total = pageable?.total || 0
        return Promise.resolve(content)
      })
    }
  }

  return {
    getStepList,
    getStep
  }
}
