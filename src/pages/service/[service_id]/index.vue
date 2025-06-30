<script setup lang="ts">
// import ServiceTabs from "../../../features/service/ui/service-tabs.vue"
// import ServiceCategoryGrid from "~/features/service/category/ui/service-category-grid.vue"
import { useServiceStore } from "~/entities/service"
import { ServiceGrid } from "~/widgets/service"

// const route = useRoute()
// const serviceStore = useServiceStore()
// const { data: service } = await useAsyncData<IResponse<IService>>(`service_${route.params.service_id}`, () => {
//   return $fetch()
// })
//
// serviceStore.current = service.value?.content
</script>

<template>
  <div>
    <service-grid />
  </div>
</template>
