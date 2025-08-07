<template>
  <div class="bg-gray-100">
    <div class="container-7xl">
      <div class="p-section">
        <div class="flex flex-col items-center justify-between gap-3 py-2 md:flex-row">
          <h3 class="w-full text-xl font-bold">{{$t('labels.products_on_sale')}}</h3>
          <div class="flex w-full items-center justify-end gap-3">
            <territory-select class="!h-8 md:max-w-xs" placeholder="Region" />
            <ui-icon-button icon-name="ph:arrow-left" size="sm" color="secondary" />
          </div>
        </div>

        <ui-table no-wrap :cols :rows>
          <template #idx="{ idx, sequence }">
            {{ sequence(idx, params.page, params.size) }}
          </template>

          <template #actions="{ row }">
            <service-integration-e-auction-menu :id="row?.id" :name="row?.name" />
          </template>
        </ui-table>

        <ui-table-footer v-model:page="params.page" v-model:per-page="params.size" :total="params.total" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useServiceIntegration } from "~/entities/service/integration"
import ServiceIntegrationEAuctionMenu from "~/features/service/integration/ui/service-integration-e-auction-menu.vue"
import { TerritorySelect } from "~/features/territory"

const { t } = useI18n()
const serviceIntegrationStore = useServiceIntegration()
const { params } = storeToRefs(serviceIntegrationStore)

const rows = computed(() => [
  {
    id: 1,
    name: "Арматура СТ 12-35 ГС немерной длины",
    quantity: 12,
    unit: "ton",
    category: "none",
    region: "Tashkent"
  }
])

const cols = computed<ITableCol<IServiceIntegrationEAuction>[]>(() => [
  {
    name: "idx",
    label: t("thead.sequence"),
    width: "40px",
    dataClass: "text-center"
  },
  {
    name: "name",
    label: t("labels.name")
  },
  {
    name: "quantity",
    label: t("labels.quantity")
  },
  {
    name: "unit",
    label: t("labels.unit")
  },
  {
    name: "category",
    label: t("labels.category")
  },
  {
    name: "region",
    label: t("labels.region")
  },
  {
    name: "actions",
    label: t("thead.actions"),
    labelClass: "justify-end"
  }
])
</script>

<style scoped></style>
