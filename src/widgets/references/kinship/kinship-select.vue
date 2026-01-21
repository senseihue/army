<script setup lang="ts">
import UiSelect from "@vueform/multiselect"
import { useKinshipApi } from "~/features/references/kinship"

interface IProps {
  autoSelect?: boolean
  fetchOnOpen?: boolean
}

const props = defineProps<IProps>()
const model = defineModel<number | number[] | string | string[]>()

const schoolApi = useKinshipApi()
const el = ref()

const params = computed<Record<string, any>>(() => ({
  keyword: "",
  page: 1,
  per_page: 20
}))

const map = (value: IKinship[]): ISelect[] => value?.map(({ id, title }) => ({ value: id, label: title }))

const { loading, onOpen, onClose, onSearch, options, getOptions } = useSelect<IKinship>({
  el,
  map,
  model,
  params,
  autoSelect: props.autoSelect,
  fetchOnOpen: props.fetchOnOpen,
  api: schoolApi.getKinshipList
})

</script>

<template>
  <ui-select
    v-model="model"
    v-bind="$attrs"
    autocomplete="off"
    searchable
    append-to-body
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
