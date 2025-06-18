<script setup lang="ts">
import { RegisterEventForm } from "~/layers/features/forms/register-event"

const { t } = useI18n({
  useScope: "local"
})

definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.query.event_id === "string"
  }
})
</script>

<template>
  <div class="bg-blue-midnight">
    <div class="container-7xl">
      <div class="p-section">
        <div class="py-8 text-center text-white">
          <h3 class="mb-2 text-3xl font-semibold">
            {{ t("title") }}
          </h3>
          <div class="mx-auto max-w-3xl">
            <p>
              {{ t("description") }}
            </p>
          </div>
        </div>
        <register-event-form />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "title": "We are pleased to announce an official site visit to the Republic of Karakalpakstan, scheduled for June 13, 2025.",
    "description": "During the visit, participants will have the opportunity to meet with local government representatives and business leaders, gain valuable insights into the economic potential and business climate of Karakalpakstan"
  }
}
</i18n>
