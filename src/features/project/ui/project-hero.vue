<script setup lang="ts">
const { minHeight } = useWindowHeight()
const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <client-only>
    <div class="project-hero" :style="{ minHeight }">
      <!--  Background  -->
      <div v-rellax class="project-hero__background" data-rellax-speed="-5">
        <img src="https://dev-portal.miit.uz/uploads/guide/hero.png" alt="Background" />
      </div>

      <!--  Content  -->
      <div class="project-hero__content container-7xl">
        <h1 class="project-hero__content-heading">{{ t("heading") }}</h1>
        <p class="project-hero__content-text">{{ t("text") }}</p>
      </div>
    </div>
  </client-only>
</template>

<style>
.project-hero {
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
    "heading": "For investors",
    "text": "Up-to-date information, tools and services to support all stages of project implementation in Uzbekistan."
  },
  "ru": {
    "heading": "Для инвесторов",
    "text": "Актуальная информация, инструменты и услуги для поддержки всех этапов реализации проектов в Узбекистане."
  },
  "uz": {
    "heading": "Investorlar uchun",
    "text": "O‘zbekistonda loyihalarni amalga oshirishning barcha bosqichlarini qo‘llab-quvvatlash uchun dolzarb ma’lumotlar, vositalar va xizmatlar."
  }
}
</i18n>
