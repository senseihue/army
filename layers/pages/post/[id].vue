<script setup lang="ts">
import { PostHero, PostSection } from "~/layers/features/posts"
import { useMediaService } from "#layers/landing/modules/media"

const { getMediaById } = useMediaService()
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
const { data: post, error } = await useAsyncData(`post-${route.params.id}`, () => {
  return getMediaById(Number(route.params.id), loading)
})
</script>

<template>
  <div>
    <post-hero :background="post.content.photo.download_link" :title="post.content.title" />
    <post-section
      :author="post.content.author"
      :category="post.content.category"
      :subtitle="post.content.title"
      :content="post.content.content"
      :publish-date="post.content.publish_date"
      :blocks="post.content.blocks"
    />
  </div>
</template>

<style scoped></style>
