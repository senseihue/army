<script setup lang="ts">
import { MediaHero, MediaCards, MediaTabs } from "~/layers/features/media/ui"
import { useMediaService } from "#layers/landing/modules/media"

definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === "string" && mediaTypes.includes(route.params.id)
  }
})

const { t } = useI18n({ useScope: "local" })
const route = useRoute()
const { getGalleryList, getMediaList } = useMediaService()

const mediaTypes = ["news", "publication", "pr_material", "blog", "gallery"]

const params = ref({
  category: route.params.id,
  page: 0,
  limit: 10
})

const loading = ref(false)

const { data } = await useAsyncData(`media-${route.params.id}`, () => {
  if (route.params.id === "gallery") {
    return getGalleryList(params.value, loading)
  }
  return getMediaList(params.value, loading)
})
</script>

<template>
  <div>
    <media-hero />
    <media-tabs />
    <media-cards v-if="data?.content" :data="data.content" />
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
