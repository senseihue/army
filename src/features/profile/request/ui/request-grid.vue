<script setup lang="ts">
import { RequestCard } from "~/features/profile/request"
import { useRequestStore } from "~/entities/profile/request"

const { t } = useI18n({ useScope: "local" })
const modal = useModal()
const personalRequestStore = useRequestStore()
const { items, loading } = storeToRefs(personalRequestStore)
const showEditModal = (request: IRequest) => {
  modal.show("request", request)
}
</script>

<template>
  <div class="grid grid-cols-1 gap-x-7 gap-y-3 lg:grid-cols-1">
    <template v-if="items.length === 0">
      <request-card v-for="item in 5" :key="item" :request-data="item" @edit="showEditModal(item)" />
    </template>
    <template v-else>
      <div class="col-span-full py-12 text-center">
        <p class="font-semibold text-blue-midnight">
          {{ t("empty_request_data") }}
        </p>
      </div>
    </template>
  </div>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "empty_request_data": "Requestal information unavailable"
  },
  "ru": {
    "empty_request_data": "Образовательная информация недоступна"
  },
  "uz": {
    "empty_request_data": "Ta'lim ma'lumotlari mavjud emas"
  }
}
</i18n>
