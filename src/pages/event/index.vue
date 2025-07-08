<script setup lang="ts">
import { EventCards, EventHero, useEventApi, useEventService } from "~/features/event"
import RegisterEventForm from "~/features/forms/register-event/ui/register-event-form.vue"

const { getEventsList } = useEventService()

const params = ref({
  page: 0,
  total: 0,
  size: 10
})
const loading = ref(false)
const events = ref<IEventType[]>([])

const paginateEvents = () => {
  getEventsList(params.value, loading).then(({ content, pageable }) => {
    events.value = content
    params.value.total = pageable?.total || 0
    return content
  })
}

const { data, error } = await useAsyncData("events-list", () => {
  return getEventsList(params.value, loading)
})

if (data.value) {
  params.value.total = data.value.pageable?.total || 0
  events.value = data.value.content || []
}
</script>

<template>
  <div>
    <event-hero />
    <template v-if="events">
      <event-cards :data="events" />
      <ui-pagination
        v-model="params.page"
        :total="params.total"
        :per-page="params.size"
        @update:model-value="paginateEvents"
      />
    </template>
  </div>
</template>

<style scoped></style>
