<script setup lang="ts">
import { PressHero, PressCards, PressTabs } from "~/features/media/press"
import { usePressService } from "~/features/media/press"
import { useGalleryService } from "~/features/media/gallery"
import MediaCards from "~/widgets/media/media-cards.vue"

const mediaTypes = ["news", "publication", "pr_material", "blog", "gallery"]

definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
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
