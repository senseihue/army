<script setup lang="ts">
import { AppealCard, useAppealService } from "~/features/appeal"
import { useAppealStore } from "~/entities/appeal"

const { getAppealList } = useAppealService()
const personalAppealStore = useAppealStore()
const { items, params, loading } = storeToRefs(personalAppealStore)
const { t } = useI18n({ useScope: "local" })

onMounted(() => {
  getAppealList()
})
</script>

<template>
  <div class="grid grid-cols-1 gap-x-[18px] gap-y-[15px] xl:grid-cols-3 md:grid-cols-3">
    <template v-if="loading">
      <div class="col-span-full grid min-h-96 place-items-center">
        <ui-spinner size="size-32" />
      </div>
    </template>
    <template v-if="items.length > 0 && !loading">
      <appeal-card v-for="(appeal, index) in items" :appeal :key="index" />
      <div class="col-span-full mt-8">
        <ui-pagination v-model="params.page" :total="params.total" @update:model-value="getAppealList" />
      </div>
    </template>
    <template v-else>
      <div class="col-span-full py-12 text-center">
        <p class="font-semibold text-blue-midnight">
          {{ t("empty_appeals") }}
        </p>
      </div>
    </template>
  </div>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "empty_appeals": "You haven't left any complaints or suggestions yet."
  },
  "ru": {
    "empty_appeals": "Вы еще не оставили никаких жалоб или предложений."
  },
  "uz": {
    "empty_appeals": "Siz hali hech qanday shikoyat yoki taklif qoldirmadingiz."
  }
}
</i18n>
