<script setup lang="ts">
import UiSelect from "@vueform/multiselect"
import { useTerritoryApi } from "~/features/territory"

interface IProps {
  autoSelect?: boolean
  fetchOnOpen?: boolean
  regionCode: number
}

const props = defineProps<IProps>()
const model = defineModel<number | number[] | string | string[]>()

const territoryApi = useTerritoryApi()
const el = ref()

const params = computed<Record<string, any>>(() => ({
  keyword: "",
  page: 1,
  size: 100,
  region_code: props.regionCode
}))

const map = (value: IDistrict[]): ISelect[] => value?.map((item) => ({ value: item.mhobt, label: item.name }))

const { loading, onOpen, onClose, onSearch, options } = useSelect<IDistrict>({
  el,
  map,
  model,
  params,
  autoSelect: props.autoSelect,
  fetchOnOpen: props.fetchOnOpen,
  api: territoryApi.getDistrictList
})
</script>

<template>
  <ui-select
    v-model="model"
    append-to-body
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
