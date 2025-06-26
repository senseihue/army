<script setup lang="ts">
import { useRefHistory } from "@vueuse/core"
import { useServiceCategoryStore } from "~/entities/service/category"

interface IProps {}

defineProps<IProps>()

const route = useRoute()
const serviceCategoryStore = useServiceCategoryStore()

const { current } = storeToRefs(serviceCategoryStore)

const params = ref({
  server: true,
  query: {
    page: 0,
    size: 100,
    parent_id: route.params.category_id
  }
})

const { history, canRedo, canUndo, redo, undo } = useRefHistory(current)
const categories = ref<IServiceCategory[]>([])

const { data } = await useFetch<IResponse<IServiceCategory[]>>("/gateway/siw/public/service/category", {
  ...params.value
})

if (data.value?.content) {
  categories.value = data.value.content
}

const getCategories = async () => {
  params.value.query.parent_id = current.value?.id || route.params.category_id

  const data = await $fetch<IResponse<IServiceCategory[]>>("/gateway/siw/public/service/category", {
    ...params.value
  })

  categories.value = data.content || []
}

const changeCategory = async (category: IServiceCategory) => {
  current.value = category
  redo()
  params.value.query.parent_id = current.value?.id || route.params.category_id
}

const onBack = () => {
  if (canUndo.value) {
    undo()
    getCategories()
  }
}
</script>

<template>
  <div>
    <ui-button v-show="canUndo" class="text-black" @click="onBack">go back</ui-button>
  </div>
  <div class="flex flex-wrap gap-4">
    <ui-button
      v-for="category in categories"
      class="ui-button ui-button-solid ui-button-rounded ui-button-md ui-button-secondary flex !bg-gray-100 !font-medium !text-black"
      :key="category.id"
      @click="changeCategory(category)"
    >
      {{ category.title }}
    </ui-button>
  </div>
</template>
