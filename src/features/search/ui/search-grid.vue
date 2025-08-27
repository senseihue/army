<script setup lang="ts">
import { SearchInput, SearchResultItem, useSearchService } from "~/features/search"
import { useSearchStore } from "~/entities/search"

const searchStore = useSearchStore()
const { debouncedFilterSearchList } = useSearchService()
const { items, params } = storeToRefs(searchStore)
const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <section class="container-7xl">
    <div class="p-section">
      <search-input v-model="params.keyword" @update:model-value="debouncedFilterSearchList" />
      <div v-if="items?.events?.length">
        <h3 class="mb-4 mt-10 text-sm font-bold uppercase text-gray-600">
          {{ t("events") }}
        </h3>
        <div v-for="page in items.events" class="flex flex-col gap-6" :key="page.title">
          <search-result-item :title="page.title" :link="`/event/${page.id}`" :description="page.description" />
        </div>
      </div>
      <div v-if="items?.posts?.length">
        <h3 class="mb-4 mt-10 text-sm font-bold uppercase text-gray-600">
          {{ t("posts") }}
        </h3>
        <div v-for="page in items.posts" class="flex flex-col gap-6" :key="page.title">
          <search-result-item
            :title="page.title"
            :link="`/post/${page.id}`"
            :author="page.author"
            :description="page.description"
          />
        </div>
      </div>
      <div v-if="items?.gallery?.length">
        <h3 class="mb-4 mt-10 text-sm font-bold uppercase text-gray-600">
          {{ t("gallery") }}
        </h3>
        <div v-for="page in items.gallery" class="flex flex-col gap-6" :key="page.title">
          <search-result-item :title="page.title" :link="`/gallery/${page.id}`" :description="page.description" />
        </div>
      </div>
      <!--      <div v-if="items?.pages?.length">-->
      <!--        <h3 class="mb-4 mt-10 text-sm font-bold uppercase text-gray-600">-->
      <!--          {{ t("pages") }}-->
      <!--        </h3>-->
      <!--        <div v-for="page in items.pages" class="flex flex-col gap-6" :key="page.title">-->
      <!--          <search-result-item :title="page.title" :link="`/gallery/${page.id}`" :description="page.description" />-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "pages": "Pages",
    "gallery": "Gallery",
    "events": "Events",
    "posts": "News and Insights"
  },
  "ru": {
    "pages": "Страницы",
    "gallery": "Галерея",
    "events": "События",
    "posts": "Новости и аналитика"
  },
  "uz": {
    "pages": "Sahifalar",
    "gallery": "Galereya",
    "events": "Tadbirlar",
    "posts": "Yangiliklar va tahlillar"
  }
}
</i18n>
