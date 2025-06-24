<script setup lang="ts">
import { ServiceTabs } from "~/features/service"

const { data: parentCategory } = await useFetch<IResponse<IServiceCategory[]>>("/api/service/category", {
  server: true
})

const parentCategories = ref(parentCategory.value?.content || [])
const firstCategory = parentCategory.value?.content[0]
const categories = ref<IServiceCategory[]>([])
const services = ref<IService[]>([])
if (!firstCategory) {
  const [_categories, _services] = await Promise.allSettled([
    useFetch<IResponse<IServiceCategory[]>>(`/api/service/category`, {
      query: {
        parent_id: 4,
        page: 1,
        size: 100
      },
      server: true
    }),
    useFetch<IResponse<IService[]>>(`/api/service`, {
      query: {
        parent_id: 4,
        page: 1,
        size: 100
      },
      server: true
    })
  ])
  categories.value = _categories.value?.data.value?.content || []
  services.value = _services.value?.data.value?.content || []
}

const steps = [
  {
    title: "Process",
    icon: "ph:pencil-duotone"
  },
  {
    title: "Process",
    icon: "ph:pencil-duotone"
  },
  {
    title: "Process",
    icon: "ph:pencil-duotone"
  }
]
</script>

<template>
  <section>
    <div class="container-7xl">
      <div class="p-section">
        <service-tabs :steps="parentCategories" :info-page />
        <service-tabs :steps="parentCategories" :info-page />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
