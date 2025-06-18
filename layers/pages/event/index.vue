<script setup lang="ts">
import { EventCards, EventHero, useEventApi, useEventService } from "~/layers/features/event"
import RegisterEventForm from "~/layers/features/forms/register-event/ui/register-event-form.vue"

const { getEventsList } = useEventService()

const params = ref({
  page: 0,
  limit: 10
})
const loading = ref(false)

// const data = ref<IEventType[]>([])
//
const { data, error } = await useAsyncData("events-list", () => {
  return getEventsList(params.value, loading)
})

</script>

<template>
  <div>
    <event-hero />
    <template v-if="data?.content">
      <event-cards :data="data.content" />
    </template>
  </div>
</template>

<style scoped></style>
