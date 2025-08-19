<script setup lang="ts">
import UiSelect from "@vueform/multiselect"
import { useProjectCategoryApi } from "~/features/project/category"

interface IProps {
  autoSelect?: boolean
  fetchOnOpen?: boolean
}

const props = defineProps<IProps>()
const model = defineModel<number | number[] | string | string[]>()

const projectCategoryApi = useProjectCategoryApi()
const el = ref()

const params = ref<Record<string, any>>({
  name: "",
  page: 1,
  size: 100
})

const map = (value: IProjectCategoryAmount[]): ISelect[] =>
  value?.map(({ id, content }) => ({ value: id, label: content }))

const { loading, onOpen, onClose, onSearch, options } = useSelect<IProjectCategoryAmount>({
  el,
  map,
  model,
  params,
  autoSelect: props.autoSelect,
  fetchOnOpen: props.fetchOnOpen,
  api: projectCategoryApi.getProjectAmount
})
</script>

<template>
  <ui-select
    v-model="model"
    v-bind="$attrs"
    autocomplete="off"
    searchable
    :can-deselect="false"
    :options="options"
    :loading="loading"
    :filter-results="false"
    @open="onOpen"
    @close="onClose"
    @search-change="onSearch"
  >
    <template #afterlist>
      <span ref="el"></span>
    </template>
  </ui-select>
</template>
