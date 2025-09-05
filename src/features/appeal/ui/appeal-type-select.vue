<script setup lang="ts">
import UiSelect from "@vueform/multiselect"
import { useAppealApi } from "~/features/appeal"

interface IProps {
  autoSelect?: boolean
  fetchOnOpen?: boolean
  parentId?: number
}

const props = defineProps<IProps>()
const model = defineModel<number | number[] | string | string[]>()

const appealApi = useAppealApi()
const el = ref()

const params = ref<Record<string, any>>({
  name: "",
  page: 1,
  size: 100,
  parent_id: props.parentId
})

watch(() => props.parentId, (v) => {
  params.value.parent_id = v
})

const map = (value: IAppealType[]): ISelect[] => value?.map(({ id, content }) => ({ value: id, label: content }))

const { loading, onOpen, onClose, onSearch, options } = useSelect<IAppealType>({
  el,
  map,
  model,
  params,
  autoSelect: props.autoSelect,
  fetchOnOpen: props.fetchOnOpen,
  api: appealApi.getAppealTypeList
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
