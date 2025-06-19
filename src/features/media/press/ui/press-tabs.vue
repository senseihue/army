<script setup lang="ts">
const route = useRoute()
const { t } = useI18n({ useScope: "local" })

const tabItems = ref([
  { label: t("tabs.news"), to: "news" },
  { label: t("tabs.publication"), to: "publication" },
  { label: t("tabs.pr_material"), to: "pr_material" },
  { label: t("tabs.blog"), to: "blog" },
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
      "publication": "Publications",
      "pr_material": "PR materials",
      "blog": "Blogs",
      "gallery": "Gallery"
    }
  },
  "ru": {
    "tabs": {
      "news": "Новости",
      "publication": "Публикации",
      "pr_material": "PR материалы",
      "blog": "Блоги",
      "gallery": "Галерея"
    }
  },
  "uz": {
    "tabs": {
      "news": "Yangiliklar",
      "publication": "Nashrlar",
      "pr_material": "PR materiallari",
      "blog": "Bloglar",
      "gallery": "Galereya"
    }
  }
}
</i18n>
