<script setup lang="ts">
import { PressCard } from "~/features/media"

const { t } = useI18n({ useScope: "local" })

const params = ref({
  page: 0,
  total: 1,
  size: 6
})

const pressList = ref<IPress[]>([])

const { data } = await useFetch<IResponse<IPress[]>>("/gateway/siw/public/post", {
  params: params.value
})

pressList.value = data.value?.content || []
</script>

<template>
  <section class="home-media-cards">
    <div class="home-media-cards__background">
      <img alt="Background" src="https://dev-portal.miit.uz/uploads/guide/hero.png" />
    </div>
    <div class="home-media-cards__content container-7xl">
      <div class="p-section">
        <h3 class="home-media-cards__content-heading">{{ t("heading") }}</h3>
        <div class="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <template v-for="news in pressList" :key="news.id">
            <press-card
              :label="news.title"
              :path="`/post/${news.id}`"
              :image="news.photo?.download_link"
              :publish-date="news.publish_date"
            />
          </template>
        </div>
        <div class="text-center">
          <nuxt-link-locale to="/media/news">
            <ui-button size="lg" class="w-[200px]" color="success" rounded>
              {{ t("all-news") }}
            </ui-button>
          </nuxt-link-locale>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.home-media-cards {
  @apply relative flex flex-col overflow-hidden transition-all duration-500 ease-in-out;

  &__background {
    @apply absolute inset-0 -z-10 bg-blue-midnight;

    img {
      @apply h-full w-full object-cover object-center opacity-60;
    }
  }

  &__content {
    @apply z-10 grid w-full grow content-center items-center px-4 text-center;

    & h3 {
      @apply mb-8 text-2xl font-bold text-white lg:text-3xl;
    }

    & p {
      @apply mb-2 text-center text-sm text-gray-600 text-white opacity-60;
    }

    &-heading {
      @apply mb-6 text-4xl font-bold text-white md:text-6xl;
    }

    a {
      @apply text-white lg:text-lg;
    }
  }
}
</style>

<i18n>
{
  "en": {
    "all-news": "All News",
    "heading": "News and Insights"
  },
  "ru": {
    "all-news": "Все новости",
    "heading": "Медиацентр"
  },
  "uz": {
    "all-news": "Barcha yangiliklar",
    "heading": "Media markaz"
  }
}
</i18n>
