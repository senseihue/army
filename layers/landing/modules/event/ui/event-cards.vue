<script setup lang="ts">
import { EventCard } from "#layers/landing/modules/event"

interface IProps {
  data: IEventType[]
}

defineProps<IProps>()
const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <section>
    <div class="container-7xl">
      <div class="p-section">
        <h3 class="text-title mb-10 text-blue-command">
          {{ t("events.heading") }}
        </h3>
        <div class="grid gap-8 md:gap-10">
          <event-card
            v-for="event in data"
            :date="event.date_from"
            :description="event.description"
            :id="event.id"
            :image="event.photo"
            :key="event.id"
            :agenda="event.agenda"
            :location="event.location"
            :name="event.name"
            :path="`/events/${event.id}`"
            :time="event.time"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "events": {
      "heading": "Events Calendar"
    }
  },
  "ru": {
    "events": {
      "heading": "Календарь событий"
    }
  },
  "uz": {
    "events": {
      "heading": "Tadbirlar Kalendar"
    }
  }
}
</i18n>
