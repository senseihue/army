<script setup lang="ts">
import { EventCards, EventHero } from "#layers/landing/modules/event"
import RegisterEventForm from "#layers/landing/modules/forms/register-event/ui/register-event-form.vue"
</script>

<template>
  <div>
    <event-hero />
    <event-cards :data="[]" />
    <register-event-form />
  </div>
</template>

<style scoped></style>
