<script setup lang="ts">
const { minHeight } = useWindowHeight()
const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <client-only>
    <div class="partnership-hero" :style="{ minHeight }">
      <!--  Background  -->
      <div v-rellax class="partnership-hero__background" data-rellax-speed="-5">
        <img src="https://dev-portal.miit.uz/uploads/guide/hero.png" alt="Background" />
      </div>

      <!--  Content  -->
      <div class="partnership-hero__content container-7xl">
        <h1 class="partnership-hero__content-heading">{{ t("heading") }}</h1>
        <p class="partnership-hero__content-text">{{ t("text") }}</p>
      </div>
    </div>
  </client-only>
</template>

<style>
.partnership-hero {
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
    "heading": "Public-Private Partnership",
    "text": "A private or public partner first develops a concept paper on the Public-Private Partnership (PPP) project as well as a feasibility document packet, then approaches the responsible state authority for approval."
  },
  "ru": {
    "heading": "Государственно-частное партнёрство",
    "text": "Государственно-частное партнёрство (ГЧП) в Узбекистане играет ключевую роль в развитии инфраструктуры и улучшении качества государственных услуг за счёт привлечения инвестиций и опыта частного сектора."
  },
  "uz": {
    "heading": "Davlat-xususiy sheriklik",
    "text": "Xususiy yoki davlat sherik dastlab davlat-xususiy sheriklik (GCHP) loyihasiga oid kontseptsiya hujjatini va texnik-iqtisodiy asoslash hujjatlari to‘plamini tayyorlaydi, so‘ng mas’ul davlat organiga tasdiqlash uchun murojaat qiladi."
  }
}
</i18n>
