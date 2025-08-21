<script setup lang="ts">
const { minHeight } = useWindowHeight()
const { t } = useI18n({ useScope: "local" })
</script>

<template>
    <div class="e-auction-hero" :style="{ minHeight }">
      <!--  Background  -->
      <div v-rellax class="e-auction-hero__background" data-rellax-speed="-5">
        <img src="https://dev-portal.miit.uz/uploads/guide/hero.png" alt="Background" />
      </div>

      <!--  Content  -->
      <div class="e-auction-hero__content container-7xl">
        <h1 class="e-auction-hero__content-heading">{{ t("heading") }}</h1>
        <p class="e-auction-hero__content-text">{{ t("text") }}</p>
      </div>
    </div>
</template>

<style>
.e-auction-hero {
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
    "heading": "E-auction",
    "text": ""
  },
  "ru": {
    "heading": "Электронный аукцион",
    "text": ""
  },
  "uz": {
    "heading": "E-auksion",
    "text": ""
  }
}
</i18n>
