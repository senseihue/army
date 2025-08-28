<template>
  <div class="rounded-xl bg-blue-command p-4">
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
      <project-category-sector-select
        v-model="sectorModel"
        class="filter-select"
        :placeholder="$t('labels.all_sectors')"
      />

      <territory-select v-model="regionModel" class="filter-select" :placeholder="$t('labels.all_regions')" />

      <project-category-amount-select
        v-model="amountModel"
        class="filter-select"
        :placeholder="$t('labels.all_amount')"
      />

      <project-category-status-select
        v-model="statusModel"
        class="filter-select"
        :placeholder="$t('labels.all_status')"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TerritorySelect } from "~/features/territory"
import {
  ProjectCategoryAmountSelect,
  ProjectCategorySectorSelect,
  ProjectCategoryStatusSelect
} from "~/features/project/category"

const sectorModel = defineModel<string | number>("sector")
const regionModel = defineModel<string | number>("region")
const amountModel = defineModel<string | number>("amount")
const statusModel = defineModel<string | number>("status")
</script>

<style lang="scss">
.filter-select {
  @apply h-8 cursor-pointer border-blue-command bg-blue-command placeholder:text-white;
}

.filter-select .multiselect-single-label-text {
  @apply text-white;
}

.multiselect-placeholder {
  @apply text-white;
}
</style>
