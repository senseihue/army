<script setup lang="ts">
const { minHeight } = useWindowHeight()
const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <client-only>
    <div class="news-hero" :style="{ minHeight }">
      <!--  Background  -->
      <div v-rellax class="news-hero__background" data-rellax-speed="-5">
        <img src="https://dev-portal.miit.uz/uploads/guide/hero.png" alt="Background" />
      </div>

      <!--  Content  -->
      <div class="news-hero__content container-7xl">
        <h1 class="news-hero__content-heading">{{ t("heading") }}</h1>
      </div>
    </div>
  </client-only>
</template>

<style>
.news-hero {
  @apply relative flex min-h-screen flex-col overflow-hidden transition-all duration-500 ease-in-out;

  &__background {
    @apply absolute inset-0 -z-10 bg-blue-midnight;

    img {
      @apply h-full w-full object-cover object-center opacity-60;
    }
  }

  &__content {
    @apply z-10 grid w-full grow content-center items-center px-4;

    &-heading {
      @apply mb-6 text-4xl font-bold text-white md:text-6xl;
    }

    &-text {
      @apply text-white lg:text-lg;
    }
  }
}
</style>

<i18n lang="json">
{
  "en": {
    "heading": "News and Insights"
  },
  "ru": {
    "heading": "Медиацентр"
  },
  "uz": {
    "heading": "Media markaz"
  }
}
</i18n>
