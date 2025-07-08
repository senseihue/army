<script setup lang="ts">
import { ServiceInfoCard } from "~/features/profile/service"
import { usePersonalServiceStore } from "~/entities/profile/personal-service"

const modal = useModal()
const personalServiceStore = usePersonalServiceStore()
const { items, loading } = storeToRefs(personalServiceStore)
const showServiceDetails = (service: IPersonalService) => {
  modal.show("service-detail-modal", service)
}
</script>

<template>
  <div class="grid grid-cols-1 gap-x-7 gap-y-3 sm:grid-cols-2">
    <service-info-card
      v-for="service in items"
      :key="service.id"
      :title="service.title"
      @show:details="showServiceDetails(service)"
    />
  </div>
</template>

<style scoped></style>
