<template>
  <div class="bg-gray-100">
    <div class="container-6xl">
      <div class="py-8">

        <div class="flex flex-col items-start gap-3 mb-4">
          <ui-button
            size="sm"
            icon-name="lucide:arrow-left"
            variant="flat"
            color="secondary"
            :label="$t('actions.back')"
            @click="goBack"
          />
          <h3 class="text-blue-midnight font-semibold text-xl">{{ $t("labels.e_auction") }}</h3>
        </div>

        <div class="mb-5 grid gap-5">
          <div v-if="loading" class="w-auto mx-auto">
            <ui-spinner size="size-20" />
          </div>
          <template v-else>
            <e-auction-card v-for="(lot, idx) in items" v-bind="{ lot }" :key="idx" />
          </template>
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
const { items, params, loading } = storeToRefs(eAuctionStore)
const router = useRouter()

const goBack = () => router.back()

onMounted(() => getEAuctionList())
</script>

<style scoped></style>
