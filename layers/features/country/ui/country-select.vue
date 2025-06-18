<script setup lang="ts">
import UiSelect from "@vueform/multiselect"
import { useCountryApi } from "~/layers/features/country"

interface IProps {
  autoSelect?: boolean
  fetchOnOpen?: boolean
}

const props = defineProps<IProps>()
const model = defineModel<number | number[] | string | string[]>()

const countryApi = useCountryApi()
const el = ref()

const params = ref<Record<string, any>>({
  name: "",
  page: 1,
  size: 100
})

const map = (value: ICountry[]): ISelect[] => value?.map(({ id, country }) => ({ value: id, label: country }))

const { loading, onOpen, onClose, onSearch, options } = useSelect<ICountry>({
  el,
  map,
  model,
  params,
  autoSelect: props.autoSelect,
  fetchOnOpen: props.fetchOnOpen,
  api: countryApi.getCountryList
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
