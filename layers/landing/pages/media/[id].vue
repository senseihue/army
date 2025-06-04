<script setup lang="ts">
import { MediaHero, MediaCards, MediaTabs } from "#layers/landing/modules/media/ui"

const { t } = useI18n({ useScope: "local" })

</script>

<template>
  <div>
    <media-hero />
    <media-tabs />
    <media-cards />
  </div>
</template>

<i18n>
{
  "en": {
    "tabs": {
      "news": "News",
      "publications": "Publications",
      "pr": "PR materials",
      "blogs": "Blogs",
      "gallery": "Gallery"
    }
  }
}
</i18n>

<style scoped></style>
