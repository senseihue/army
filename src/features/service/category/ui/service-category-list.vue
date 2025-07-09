<script setup lang="ts">
import { useRefHistory } from "@vueuse/core"
import { useServiceCategoryStore } from "~/entities/service/category"

interface IProps {}

defineProps<IProps>()

const route = useRoute()
const { t } = useI18n({
  useScope: "local"
})
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

const { data: categories } = await useFetch<IResponse<IServiceCategory[]>>("/gateway/siw/public/service/category", {
  ...params.value
})

const changeCategory = async (category: IServiceCategory) => {
  current.value = category
  redo()
  params.value.query.parent_id = current.value?.id || route.params.category_id
}

const onBack = () => {
  if (canUndo.value) {
    undo()
    params.value.query.parent_id = current.value?.id || route.params.category_id
  }
}
</script>

<template>
  <div v-show="canUndo" class="flex cursor-pointer items-center text-blue-midnight" @click="onBack">
    <div class="inline-flex items-center justify-center rounded-full border border-blue-midnight p-1">
      <icon name="ph:arrow-u-up-left" />
    </div>
    <span class="ml-2">
      {{ t('go_to_previous_category') }}
    </span>
  </div>
  <div class="flex flex-wrap gap-4">
    <ui-button
      v-for="category in categories?.content"
      class="ui-button ui-button-solid ui-button-rounded ui-button-md ui-button-secondary flex !bg-gray-100 !font-medium !text-black"
      :key="category.id"
      @click="changeCategory(category)"
    >
      {{ category.title }}
    </ui-button>
  </div>
</template>

<i18n>
{
  "en": {
    "go_to_previous_category": "Go to previous category"
  },
  "ru": {
    "go_to_previous_category": "Вернуться к предыдущей категории"
  },
  "uz": {
    "go_to_previous_category": "Oldingi toifaga o'tish"
  }
}
</i18n>
