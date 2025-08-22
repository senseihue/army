<template>
  <div class="bg-gray-100">
    <div class="container-6xl">
      <div class="p-section">
        <div class="flex items-center justify-between gap-3 py-4">
          <h3 class="text-xl font-bold">{{ $t("labels.lots_on_sale") }}</h3>
          <ui-button
            size="sm"
            icon-name="lucide:arrow-left"
            variant="flat"
            color="secondary"
            :label="$t('actions.back')"
            @click="goBack"
          />
        </div>

        <div class="mb-5 grid gap-5">
          <e-auction-card
            v-for="(lot, idx) in items"
            :title="lot?.property_name"
            :start-price="lot?.start_price"
            :auction-start-time="lot?.auction_start_time"
            :order-end-time="lot?.order_end_time"
            :deposit="lot?.zakalad_amount"
            :percent="lot?.zakalad_percent"
            :lot-number="lot?.lot_number"
            :address="lot?.address"
            :image="lot?.image_link"
            :key="idx"
          />
        </div>

        <ui-pagination
          v-model="params.page"
          :total="params.total"
          :per-page="params.size"
          @update:model-value="getEAuctionList"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEAuctionService } from "~/features/service/integration/e-auction"
import { useEAuctionStore } from "~/entities/service/integration/e-auction"
import EAuctionCard from "~/features/service/integration/e-auction/ui/e-auction-card.vue"

const eAuctionStore = useEAuctionStore()
const { getEAuctionList } = useEAuctionService()
const { items, params } = storeToRefs(eAuctionStore)
const router = useRouter()

const goBack = () => router.back()

onMounted(() => getEAuctionList())
</script>

<style scoped></style>
