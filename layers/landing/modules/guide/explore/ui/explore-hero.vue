<script setup lang="ts">
const { minHeight, minHeightPx } = useWindowHeight()
const { t } = useI18n({ useScope: "local" })
const scrollTo = () => window.scrollTo({ top: minHeightPx.value, behavior: "smooth" })
</script>

<template>
  <client-only>
    <div class="explore-hero" :style="{ minHeight }">
      <!--  Background  -->
      <div v-rellax class="explore-hero__background" data-rellax-speed="-5">
        <img src="https://dev-portal.miit.uz/uploads/guide/hero.png" alt="Background" />
      </div>

      <!--  Content  -->
      <div class="explore-hero__content container-7xl">
        <h1 class="explore-hero__content-heading">{{ t("heading") }}</h1>
        <p class="explore-hero__content-text">{{ t("text") }}</p>

        <button class="explore-hero__content-button" @click="scrollTo">
          <icon class="size-10 animate-bounce text-white lg:size-14" name="mdi-light:arrow-down-circle" />
        </button>
      </div>
    </div>
  </client-only>
</template>

<style>
.explore-hero {
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
      @apply mb-6 text-center text-4xl font-bold text-white md:text-6xl;
    }

    &-text {
      @apply mx-auto max-w-2xl text-center text-white lg:text-lg;
    }

    &-button {
      @apply absolute bottom-32 left-1/2 z-10 -translate-x-1/2 cursor-pointer;
    }
  }
}
</style>

<i18n lang="json">
{
  "en": {
    "heading": "Investment Guide",
    "text": "A wealth of new opportunities are continually emerging across different sectors, opening up exciting possibilities for investors."
  },
  "ru": {
    "heading": "Руководство по инвестициям",
    "text": "В различных секторах постоянно появляется множество новых возможностей, открывающих захватывающие перспективы для инвесторов."
  },
  "uz": {
    "heading": "Sarmoya kiritish bo'yicha qo'llanma",
    "text": "Turli sektorlarda doim yangi imkoniyatlar paydo bo'lmoqda, bu esa investorlar uchun qiziqarliistiqbollarni ochmoqda."
  }
}
</i18n>
