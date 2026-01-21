<script setup lang="ts">
import UiSelect from "@vueform/multiselect"
import { useSchoolApi } from "~/features/references/school"

interface IProps {
  autoSelect?: boolean
  fetchOnOpen?: boolean
  type_id?: ISchoolType['id']
}

const props = defineProps<IProps>()
const model = defineModel<number | number[] | string | string[]>()

const schoolApi = useSchoolApi()
const el = ref()

const params = computed<Record<string, any>>(() => ({
  keyword: "",
  page: 1,
  per_page: 100,
  school_type_id: props.type_id
}))

const map = (value: ISchool[]): ISelect[] => value?.map(({ id, title }) => ({ value: id, label: title }))

const { loading, onOpen, onClose, onSearch, options, getOptions } = useSelect<ISchool>({
  el,
  map,
  model,
  params,
  autoSelect: props.autoSelect,
  fetchOnOpen: props.fetchOnOpen,
  api: schoolApi.getSchoolList
})

watch(() => props.type_id, () => {
  params.value.school_type_id = props.type_id
  getOptions()
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
