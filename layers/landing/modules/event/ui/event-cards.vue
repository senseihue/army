<script setup lang="ts">
import { EventCard } from "#layers/landing/modules/event"

interface IProps {
  data: {
    id: string
    date: number[] | []
    description: string
    image: string
    forumAgenda: string[]
    location: string
    name: string
    path: string
    time: number | null
  }[]
}

defineProps<IProps>()
const { t } = useI18n({useScope: 'local'})
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
            :date="event.date"
            :description="event.description"
            :image="event.image"
            :key="event.id"
            :agenda="event.forumAgenda"
            :location="event.location"
            :name="event.name"
            :path="event.path"
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
    },
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
