<template>
  <div class="bg-gray-100">
    <div class="container-7xl">
      <div class="p-section">
        <div>
          <h3 class="py-2 text-xl font-bold">Савдодаги ЛОТлар</h3>
        </div>

        <ui-table no-wrap :cols :rows>
          <template #idx="{ idx, sequence }">
            {{ sequence(idx, params.page, params.size) }}
          </template>

          <template #actions="{ row }">
            <service-integration-menu :id="row?.id" :name="row?.name" />
          </template>
        </ui-table>

        <ui-table-footer
          v-model:page="params.page"
          v-model:per-page="params.size"
          :total="params.total"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useServiceIntegration } from "~/entities/service/integration"
import ServiceIntegrationMenu from "~/features/service/integration/ui/service-integration-menu.vue"

const { t } = useI18n()
const serviceIntegrationStore = useServiceIntegration()
const { params } = storeToRefs(serviceIntegrationStore)

const rows = computed(() => [
  {
    id: 1,
    lot_id: 6170077,
    name: "Цех биноси",
    date_from: "12.12.2022",
    date_to: "01.12.2025"
  },
  {
    id: 2,
    lot_id: 1232934,
    name: "Цех биноси",
    date_from: "12.12.2022",
    date_to: "01.12.2025"
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
    name: "lot_id",
    label: t("labels.lot_id")
  },
  {
    name: "name",
    label: t("labels.name")
  },
  {
    name: "date_from",
    label: t("labels.date_from"),
    formatter: (value: string) => value && formatDate(value, "DD.MM.YYYY")
  },
  {
    name: "date_to",
    label: t("labels.date_to"),
    formatter: (value: string) => value && formatDate(value, "DD.MM.YYYY")
  },
  {
    name: "actions",
    label: t("thead.actions"),
    labelClass: "justify-end"
  }
])
</script>

<style scoped></style>
