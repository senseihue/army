<script setup lang="ts">
import UiSelect from "@vueform/multiselect"
import { useProjectApi } from "~/features/project"

interface IProps {
  autoSelect?: boolean
  fetchOnOpen?: boolean
}

const props = defineProps<IProps>()
const model = defineModel<number | number[] | string | string[]>()

const projectApi = useProjectApi()
const el = ref()

const params = ref<Record<string, any>>({
  keyword: "",
  page: 1,
  size: 100
})

const map = (value: IProjectSector[]): ISelect[] => value?.map(({ id, content }) => ({ value: id, label: content }))

const { loading, onOpen, onClose, onSearch, options } = useSelect<IProjectSector>({
  el,
  map,
  model,
  params,
  autoSelect: props.autoSelect,
  fetchOnOpen: props.fetchOnOpen,
  api: projectApi.getPublicServiceSector
})
</script>

<template>
  <ui-select
    v-model="model"
    v-bind="$attrs"
    autocomplete="off"
    searchable
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
