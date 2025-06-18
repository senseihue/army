<script setup lang="ts">
import { useGalleryService } from "~/features/media/gallery"
import { GallerySlider } from "~/features/media/gallery"

const { getGalleryById } = useGalleryService()
const loading = ref(false)

definePageMeta({
  fixedHeader: false,
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
    <gallery-slider :slides="gallery.content.files" />
  </div>
</template>

<style scoped></style>
