<script setup lang="ts">
import { PostHero, PostSection } from "~/features/posts"
import { usePressService } from "~/features/media/press"

const { getPressById } = usePressService()
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
  return getPressById(Number(route.params.id), loading)
})
</script>

<template>
  <div>
    <post-hero :background="post.content.photo?.download_link" :title="post.content.title" />
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
