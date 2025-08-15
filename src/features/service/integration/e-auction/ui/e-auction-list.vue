<template>
  <div class="bg-gray-100">
    <div class="container-7xl">
      <div class="p-section">
        <div class="flex items-center justify-between gap-3 py-4">
          <h3 class="text-xl font-bold">{{ $t("labels.lots_on_sale") }}</h3>
          <ui-button size="sm" color="secondary" :label="$t('actions.back')" @click="goBack" />
        </div>

        <ui-table no-wrap :loading :cols :rows="items">
          <template #idx="{ idx, sequence }">
            {{ sequence(idx, params.page, params.size) }}
          </template>

          <template #actions="{ row }">
            <e-auction-menu :id="+row?.lot_number" />
          </template>
        </ui-table>

        <ui-table-footer
          v-model:page="params.page"
          v-model:per-page="params.size"
          class="!px-0"
          :total="params.total"
          @change="getEAuctionList"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEAuctionService } from "~/features/service/integration/e-auction"
import { useEAuctionStore } from "~/entities/service/integration/e-auction"
import EAuctionMenu from "~/features/service/integration/e-auction/ui/e-auction-menu.vue"

const { t } = useI18n()
const eAuctionStore = useEAuctionStore()
const { getEAuctionList } = useEAuctionService()
const { loading, items, params } = storeToRefs(eAuctionStore)
const router = useRouter()

const cols = computed<ITableCol<IEAuction>[]>(() => [
  {
    name: "idx",
    label: t("thead.sequence"),
    width: "40px",
    dataClass: "text-center"
  },
  {
    name: "lot_number",
    label: t("labels.lot_id")
  },
  {
    name: "property_name",
    label: t("labels.name")
  },
  {
    name: "region",
    label: t("labels.region")
  },
  {
    name: "auction_start_time",
    label: t("labels.start_date")
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

onMounted(() => getEAuctionList())
</script>

<style scoped></style>
