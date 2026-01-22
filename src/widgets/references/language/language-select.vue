<script setup lang="ts">
import UiSelect from "@vueform/multiselect"
import { useLanguageApi } from "~/features/references/language"

interface IProps {
  autoSelect?: boolean
  fetchOnOpen?: boolean
}

const props = defineProps<IProps>()
const model = defineModel<number | number[] | string | string[]>()

const schoolApi = useLanguageApi()
const el = ref()

const params = computed<Record<string, any>>(() => ({
  keyword: "",
  page: 1,
  per_page: 20
}))

const map = (value: ILanguage[]): ISelect[] => value?.map(({ id, title }) => ({ value: id, label: title }))

const { loading, onOpen, onClose, onSearch, options, getOptions } = useSelect<ILanguage>({
  el,
  map,
  model,
  params,
  autoSelect: props.autoSelect,
  fetchOnOpen: props.fetchOnOpen,
  api: schoolApi.getLanguageList
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
