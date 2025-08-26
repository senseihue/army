<script setup lang="ts">
import UiSelect from "@vueform/multiselect"
import { useTerritoryApi } from "~/features/territory"

interface IProps {
  autoSelect?: boolean
  fetchOnOpen?: boolean
}

const props = defineProps<IProps>()
const model = defineModel<number | number[] | string | string[]>()

const territoryApi = useTerritoryApi()
const el = ref()

const params = ref<Record<string, any>>({
  keyword: "",
  page: 1,
  size: 100
})

const map = (value: ICountry[]): ISelect[] =>
  value?.map(({ id, country }) => ({
    value: id,
    label: country
  }))

const { loading, onOpen, onClose, onSearch, options } = useSelect<ICountry>({
  el,
  map,
  model,
  params,
  autoSelect: props.autoSelect,
  fetchOnOpen: props.fetchOnOpen,
  api: territoryApi.getCountryPublicList
})
</script>

<template>
  <ui-select
    v-model="model"
    v-bind="$attrs"
    autocomplete="off"
    append-to-body
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
