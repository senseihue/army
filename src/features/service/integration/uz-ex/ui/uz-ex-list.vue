<template>
  <div class="bg-gray-100">
    <div class="container-7xl">
      <div class="p-section">
        <div class="flex items-center justify-between gap-3 py-2">
          <h3 class="w-full text-xl font-bold">{{ $t("labels.products_on_sale") }}</h3>
          <ui-icon-button
            icon-name="ph:arrow-left"
            size="sm"
            color="secondary"
            :label="$t('actions.back')"
            @click="goBack"
          />
        </div>

        <ui-table no-wrap :cols :rows>
          <template #idx="{ idx, sequence }">
            {{ sequence(idx, params.page, params.size) }}
          </template>

          <template #actions="{ row }">
            <uz-ex-menu :id="row?.id" />
          </template>
        </ui-table>

        <ui-table-footer v-model:page="params.page" v-model:per-page="params.size" :total="params.total" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUzExStore } from "~/entities/service/integration/uz-ex"
import UzExMenu from "~/features/service/integration/uz-ex/ui/uz-ex-menu.vue"

const { t } = useI18n()
const uzExStore = useUzExStore()
const { params } = storeToRefs(uzExStore)

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

const cols = computed<ITableCol<IUzEx>[]>(() => [
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

const goBack = () => {
  router.back()
}
</script>

<style scoped></style>
