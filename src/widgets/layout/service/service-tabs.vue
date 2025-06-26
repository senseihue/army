<script setup lang="ts">
import { ServiceTabs, ServiceList } from "~/features/service"
import { useServiceProcessStore } from "~/entities/service/process"
import { useServiceStore } from "~/entities/service"

const route = useRoute()
const router = useRouter()
const serviceStore = useServiceStore()
const { current } = storeToRefs(serviceStore)
const serviceProcessStore = useServiceProcessStore()
const localePath = useLocalePath()
const params = {
  server: true
}
await callOnce(
  async () => {
    const service = await $fetch<IResponse<IService>>(`/gateway/siw/public/service/${route.params.service_id}`)
    current.value = service.content
  },
  {
    mode: "navigation"
  }
)

const { data: serviceProcess } = await useFetch<IResponse<IServiceProcess[]>>("/gateway/siw/public/service-process", {
  server: true,
  query: {
    page: 0,
    size: 100,
    service_id: route.params.service_id
  }
})

serviceProcessStore.current = serviceProcess.value?.content[0]

const changeRoute = (category: IServiceCategory) => {
  router.push(localePath(`/service/category/${category.id}`))
}
</script>

<template>
  <section>
    <div class="container-7xl">
      <div class="pb-4 pt-8">
        <service-tabs :steps="serviceProcess?.content" @update="changeRoute" />
      </div>
    </div>
  </section>
</template>
