import { useServiceProcessApi } from "~/features/service/process"
import { useServiceProcessStore } from "~/entities/service/process"
import { useServiceStore } from "~/entities/service"

export const useServiceProcessService = () => {
  const serviceProcessApi = useServiceProcessApi()
  const serviceStore = useServiceStore()
  const serviceProcessStore = useServiceProcessStore()
  const { $toast } = useNuxtApp()

  const getProcessList = async () => {
    serviceProcessStore.params.service_id = serviceStore.current?.id
    return serviceProcessApi.getProcessList(cleanParams(serviceProcessStore.params)).then(({ content, pageable }) => {
      serviceProcessStore.items = content
      serviceProcessStore.current = content[0]
      serviceProcessStore.params.total = pageable?.total || 0
      return Promise.resolve(content)
    })
  }

  const getProcess = async () => {
    if (serviceProcessStore.current) {
      return serviceProcessApi.getProcess(serviceProcessStore.current.id).then(({ content, pageable }) => {
        serviceProcessStore.current = content
        serviceProcessStore.params.total = pageable?.total || 0
        return Promise.resolve(content)
      })
    }
  }

  return {
    getProcessList,
    getProcess
  }
}
