<script setup lang="ts">
import { EventCards, EventHero, useEventApi, useEventService } from "#layers/landing/modules/event"
import RegisterEventForm from "#layers/landing/modules/forms/register-event/ui/register-event-form.vue"

const { getEventsList } = useEventApi()

const params = ref({
  page: 0,
  limit: 10
})
const loading = ref(false)

const { data } = await useAsyncData(
  "events-list",
  () => {
    return getEventsList(params.value)
  },
  {
    server: true
  }
)
</script>

<template>
  <div>
    <event-hero />
    <event-cards :data="data" />
  </div>
</template>

<style scoped></style>
