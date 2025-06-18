<script lang="ts" setup>
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import { PostContent, PostImages } from "~/features/posts"

dayjs.extend(utc)

interface IProps {
  author?: {
    firstName: string
    lastName: string
  }
  category: string
  subtitle: string
  content: string
  publishDate: string
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
            <h3 class="text-title text-blue-command">
              {{ subtitle }}
            </h3>

            <p class="text-gray-600 md:hidden">
              <span>{{ t(category) }}</span>
              |
              <span v-if="publishDate">{{ dayjs.utc(publishDate).format("MMMM D, YYYY HH:mm") }}</span>
            </p>

            <!--            <p class="font-helvetica text-gray-600">-->
            <!--              {{ t('labels.written_by') }} {{ author?.firstName }} {{ author?.lastName }}-->
            <!--            </p>-->

            <div class="post-content">
              <div v-html="content"></div>
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

  .text-title {
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 2rem;
  }

  @media (min-width: 1024px) {
    .text-title {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }
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
    "publication": "Publications",
    "pr_material": "PR materials",
    "blog": "Blogs",
    "gallery": "Gallery"
  },
  "ru": {
    "news": "Новости",
    "publication": "Публикации",
    "pr_material": "PR материалы",
    "blog": "Блоги",
    "gallery": "Галерея"
  },
  "uz": {
    "news": "Yangiliklar",
    "publication": "Nashrlar",
    "pr_material": "PR materiallari",
    "blog": "Bloglar",
    "gallery": "Galereya"
  }
}
</i18n>
