<script setup lang="ts">
import { computed } from "vue"

const route = useRoute()
const { t } = useI18n({ useScope: "local" })

const tabItems = ref([
  { label: t("tabs.news"), to: "news" },
  { label: t("tabs.publications"), to: "publications" },
  { label: t("tabs.pr"), to: "pr" },
  { label: t("tabs.blogs"), to: "blogs" },
  { label: t("tabs.gallery"), to: "gallery" }
])

// const active = computed(() => tabItems.value.find((item) => item.to === route.path))

</script>

<template>
  <div class="container-7xl">
    <div class="p-section">
      <ui-tabs class="media-tabs">
        <ui-tab v-for="tab in tabItems" :active="tab.to === route.params.id" :to="`/media/${tab.to}`">
          <span>
            {{ tab.label }}
          </span>
        </ui-tab>
      </ui-tabs>
    </div>
  </div>
</template>

<style scoped>
.media-tabs {
  @apply flex flex-wrap items-center justify-center gap-x-32 gap-y-8 border-0 bg-transparent;

  &:deep(.ui-tab) {
    &.ui-tab-active {
      @apply text-blue-bondi shadow-none;
    }

    @apply text-lg font-semibold;
  }
}
</style>

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
  },
  "ru": {
    "tabs": {
      "news": "Новости",
      "publications": "Публикации",
      "pr": "PR материалы",
      "blogs": "Блоги",
      "gallery": "Галерея"
    }
  },
  "uz": {
    "tabs": {
      "news": "Yangiliklar",
      "publications": "Nashrlar",
      "pr": "PR materiallari",
      "blogs": "Bloglar",
      "gallery": "Galereya"
    }
  }
}
</i18n>
