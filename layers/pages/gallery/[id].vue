<script setup lang="ts">
import { PostHero, PostSection } from "~/layers/features/posts"
import { useMediaService } from "#layers/landing/modules/media"

const { getGalleryById } = useMediaService()
const loading = ref(false)

definePageMeta({
  fixedHeader: true,
  validate: (route) => {
    // Validate that the id is a number
    return typeof route.params.id === "string" && !isNaN(Number(route.params.id))
  }
})

// const data: IPost = {}
const route = useRoute()
const { data: gallery, error } = await useAsyncData(`gallery-${route.params.id}`, () => {
  return getGalleryById(Number(route.params.id), loading)
})
</script>

<template>
  <div>
    <post-section
      :author="gallery.content.author"
      :category="gallery.content.category"
      :subtitle="gallery.content.title"
      :content="gallery.content.content"
      :publish-date="gallery.content.publish_date"
      :blocks="gallery.content.blocks"
    />
  </div>
</template>

<style scoped></style>
