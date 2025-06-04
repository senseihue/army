<script lang="ts" setup>
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import { PostContent, PostImages } from "#layers/landing/modules/posts"

dayjs.extend(utc)

interface IProps {
  author: {
    firstName: string
    lastName: string
  }
  category: string
  subtitle: string
  publishDate: number
  blocks: { name: string; fields: any }[]
}

defineProps<IProps>()
const { t } = useI18n({ useScope: "local" })
const dynamicBlocks: Record<string, any> = {
  Content: PostContent,
  MultipleImages: PostImages
}
</script>

<template>
  <section class="relative">
    <div class="container-7xl">
      <div class="p-section">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-6">
          <div class="hidden text-gray-600 md:col-span-2 md:block">
            <span>{{ t(category) }}</span>
            |
            <span v-if="publishDate">{{ dayjs.utc(publishDate).format("MMMM D, YYYY HH:mm") }}</span>
          </div>

          <div class="flex flex-col gap-6 md:col-span-4">
            <div v-html="subtitle" class="text-title text-blue-command" />

            <p class="text-gray-600 md:hidden">
              <span>{{ t(category) }}</span>
              |
              <span v-if="publishDate">{{ dayjs.utc(publishDate).format("MMMM D, YYYY HH:mm") }}</span>
            </p>

            <!--            <p class="font-helvetica text-gray-600">-->
            <!--              {{ t('labels.written_by') }} {{ author?.firstName }} {{ author?.lastName }}-->
            <!--            </p>-->

            <div class="post-content">
              <template v-for="(block, i) in blocks" :key="i">
                <component v-bind="block.fields" :is="dynamicBlocks[block.name]"></component>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css">
.post-content {
  h1:not(.ignore-text-format),
  h2:not(.ignore-text-format),
  h3:not(.ignore-text-format),
  h4:not(.ignore-text-format),
  h5:not(.ignore-text-format),
  h6:not(.ignore-text-format) {
    @apply font-sans text-2xl font-bold text-blue-command lg:text-3xl;
  }

  p:not(.ignore-text-format) {
    @apply text-gray-600;
  }
}

.content-block-body a {
  @apply text-blue-midnight underline;
}

.content-block-body ul,
.content-block-body ol {
  list-style: revert;
  margin: revert;
  padding: revert;
}
</style>

<i18n>
{
  "en": {
    "news": "News",
    "publications": "Publications",
    "pr": "PR materials",
    "blogs": "Blogs",
    "gallery": "Gallery"
  },
  "ru": {
    "news": "Новости",
    "publications": "Публикации",
    "pr": "PR материалы",
    "blogs": "Блоги",
    "gallery": "Галерея"
  },
  "uz": {
    "news": "Yangiliklar",
    "publications": "Nashrlar",
    "pr": "PR materiallari",
    "blogs": "Bloglar",
    "gallery": "Galereya"
  }
}
</i18n>
