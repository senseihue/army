<script setup lang="ts">
import { PressCard } from "~/features/media/press"

interface IProps {
  data: IPress[]
}

defineProps<IProps>()
</script>

<template>
  <section>
    <div class="container-7xl">
      <div class="p-section">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <template v-for="news in data" :key="news.id">
            <press-card
              v-if="news.category && news.category !== 'gallery'"
              :label="news.title"
              :path="`/post/${news.id}`"
              :image="news.photo?.download_link"
              :publish-date="news.publish_date"
            />
            <press-card
              v-else
              :label="news.title"
              :path="`/gallery/${news.id}`"
              :image="news.files[0]?.download_link"
              :publish-date="news.publish_date"
            />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
