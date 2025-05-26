<script setup lang="ts">
const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <section class="hero">
    <!-- Background -->
    <div v-rellax class="hero__background" data-rellax-speed="-5">
      <img class="hero__image" alt="Background" src="https://dev-portal.miit.uz/uploads/pages-18-19.jpeg" />
    </div>

    <!-- Content -->
    <div class="container-7xl hero__content">
      <h1 class="hero__title">{{ t("heading") }}</h1>
    </div>
  </section>
</template>

<style scoped>
.hero {
  @apply relative flex min-h-screen flex-col overflow-hidden transition-all duration-500 ease-in-out;

  &__background {
    @apply absolute inset-0 -z-10 bg-blue-midnight;
  }

  &__image {
    @apply h-full w-full object-cover object-center opacity-60;
  }

  &__content {
    @apply z-10 mx-auto grid grow items-center;
  }

  &__title {
    @apply text-center text-3xl font-bold text-white md:text-5xl;
    @apply leading-snug !important;
  }
}
</style>

<i18n lang="json">
{
  "en": {
    "heading": "Introduction to the Investment Promotion Agency under the Ministry of Investment, Industry and Trade of the Republic of Uzbekistan"
  },
  "ru": {
    "heading": "Знакомство с Агентством по привлечению иностранных инвестиций при Министерстве инвестиций, промышленности и торговли Республики Узбекистан"
  },
  "uz": {
    "heading": "O‘zbekiston Respublikasi Investitsiyalar, sanoat va savdo vazirligi huzuridagi Investitsiyalarni jalb etish agentligi faoliyati haqida"
  }
}
</i18n>
