<script setup lang="ts">
import { PressCards } from "~/features/media/press"
import { GalleryCards } from "~/features/media/gallery"
</script>

<template>
  <div>
    <press-cards v-if="$route.params.id !== 'gallery'" />
    <gallery-cards v-else />
  </div>
</template>

<style scoped></style>
