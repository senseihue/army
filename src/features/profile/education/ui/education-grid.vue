<script setup lang="ts">
import { ServiceInfoCard } from "~/features/profile/service"
import { usePersonalServiceStore } from "~/entities/profile/personal-service"

const { t } = useI18n({ useScope: "local" })
const modal = useModal()
const emits = defineEmits<{
  (e: "show:details", service: IPersonalService): void
}>()
const personalServiceStore = usePersonalServiceStore()
const { items, loading } = storeToRefs(personalServiceStore)
const showServiceDetails = (service: IPersonalService) => {
  emits("show:details", service)
}
</script>

<template>
  <div class="grid grid-cols-1 gap-x-7 gap-y-3 sm:grid-cols-2">
    <template v-if="items.length > 0">
      <service-info-card
        v-for="service in items"
        :key="service.id"
        :title="service.title"
        @show:details="showServiceDetails(service)"
      />
    </template>
    <template v-else>
      <div class="py-12 text-center col-span-full">
        <p class="font-semibold text-blue-midnight">
          {{ t("empty_service") }}
        </p>
      </div>
    </template>
  </div>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "empty_service": "No services available"
  },
  "ru": {
    "empty_service": "Нет доступных услуг"
  },
  "uz": {
    "empty_service": "Xizmatlar mavjud emas"
  }
}
</i18n>
