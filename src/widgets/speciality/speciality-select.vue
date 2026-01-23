<script setup lang="ts">
import UiSelect from "@vueform/multiselect"
import { useSpecialityApi } from "~/features/admission/speciality"

interface IProps {
  autoSelect?: boolean
  fetchOnOpen?: boolean
  schoolId?: number
  seasonId?: number
}

const props = defineProps<IProps>()
const model = defineModel<number | number[] | string | string[]>()

const schoolApi = useSpecialityApi()
const el = ref()

const params = ref<Record<string, any>>({
  keyword: "",
  page: 1,
  per_page: 20
})

const map = (value: ISpeciality[]): ISelect[] => value?.map(({ id, title }) => ({ value: id, label: title }))

const { loading, onOpen, onClose, onSearch, options, getOptions } = useSelect<ISpeciality>({
  el,
  map,
  model,
  params,
  autoSelect: props.autoSelect,
  fetchOnOpen: props.fetchOnOpen,
  api: schoolApi.getSpecialityList
})

watch(
  () => props.schoolId,
  () => {
    params.value.school_id = props.schoolId
    getOptions()
  }
)
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
