<script setup lang="ts">
import { PressHero, PressCards, PressTabs } from "~/features/media/press"
import { MediaCards } from "~/widgets/media"

const mediaTypes = ["news", "publication", "pr_material", "blog", "gallery"]

definePageMeta({
  validate: async (route) => {
    return typeof route.params.id === "string" && mediaTypes.includes(route.params.id)
  }
})
</script>

<template>
  <div>
    <press-hero />
    <press-tabs />
    <media-cards />
  </div>
</template>

<i18n>
{
  "en": {
    "tabs": {
      "news": "News",
      "publication": "Publications",
      "pr_material": "PR materials",
      "blog": "Blogs",
      "gallery": "Gallery"
    }
  }
}
</i18n>

<style scoped></style>
