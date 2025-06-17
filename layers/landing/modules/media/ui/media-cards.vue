<script setup lang="ts">
import { MediaCard } from "#layers/landing/modules/media"

const data = ref([
  {
    label: "Events in Tashkent to Boost Uzbek-Egyptian Cooperation",
    path: "post/1233",
    image: "https://dev-portal.miit.uz/uploads/3bf29bd4-60c2-4931-8ee3-8a2bd8c078a9_lists_slider_31313.webp",
    publishDate: 1735034400000
  },
  {
    label: "Events in Tashkent to Boost Uzbek-Egyptian Cooperation",
    path: "post/1233",
    image: "https://dev-portal.miit.uz/uploads/3bf29bd4-60c2-4931-8ee3-8a2bd8c078a9_lists_slider_31313.webp",
    publishDate: 1735034400000
  },
  {
    label: "Events in Tashkent to Boost Uzbek-Egyptian Cooperation",
    path: "post/1233",
    image: "https://dev-portal.miit.uz/uploads/3bf29bd4-60c2-4931-8ee3-8a2bd8c078a9_lists_slider_31313.webp",
    publishDate: 1735034400000
  },
  {
    label: "Events in Tashkent to Boost Uzbek-Egyptian Cooperation",
    path: "post/1233",
    image: "https://dev-portal.miit.uz/uploads/3bf29bd4-60c2-4931-8ee3-8a2bd8c078a9_lists_slider_31313.webp",
    publishDate: 1735034400000
  }
])
</script>

<template>
  <section>
    <div class="container-7xl">
      <div class="p-section">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <media-card
            v-for="news in data"
            :label="news.label"
            :path="news.path"
            :image="news.image"
            :publish-date="news.publishDate"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
