<script setup lang="ts">
import { useServiceCategoryStore } from "~/entities/service/category"

interface IProps {}

defineProps<IProps>()

const route = useRoute()
const serviceCategoryStore = useServiceCategoryStore()
const { current } = storeToRefs(serviceCategoryStore)
const params = ref({
  server: true,
  query: {
    category_id: route.params.category_id,
    page: 0,
    size: 100
  }
})

const { data: services } = await useFetch<IResponse<IService[]>>("/gateway/siw/public/service", {
  ...params.value
})

watch(current, () => {
  params.value.query.category_id = current.value?.id || route.params.category_id
})
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <nuxt-link-locale
      v-for="service in services?.content"
      class="ui-button ui-button-solid ui-button-rounded ui-button-md ui-button-secondary flex !bg-gray-100 !font-medium !text-black"
      :key="service.id"
      :to="`/service/${service.id}`"
    >
      {{ service.title }}
    </nuxt-link-locale>
  </div>
</template>
