<script setup lang="ts">
import { useServiceStore } from "~/entities/service"

const { t } = useI18n({ useScope: "local" })

const route = useRoute()
const { data: service, error } = await useFetch<IResponse<IService>>(
  `/gateway/siw/public/service/${route.params.service_id}`,
  {
    server: true
  }
)

if (error.value) {
  showError(error.value)
}

const serviceStore = useServiceStore()
serviceStore.current = service.value?.content
</script>

<template>
  <div class="service-category-hero" :style="{ minHeight: '100vh' }">
    <!--  Background  -->
    <div class="service-category-hero__background" data-rellax-speed="-5">
      <img src="https://dev-portal.miit.uz/uploads/guide/hero.png" alt="Background" />
    </div>

    <!--  Content  -->
    <div class="service-category-hero__content container-7xl">
      <h1 class="service-category-hero__content-heading">{{ service.content?.title }}</h1>
      <p class="service-category-hero__content-text">{{ service.content?.description }}</p>
    </div>
  </div>
</template>

<style>
.service-category-hero {
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
    "heading": "Doing Business in Uzbekistan",
    "description": "This section describes key aspects of doing business in Uzbekistan, including the legal environment, tax obligations, licensing requirements, and interaction with government agencies. It will help entrepreneurs understand the basic rules and procedures for successfully running a business in the country."
  },
  "ru": {
    "heading": "Ведение бизнеса в Узбекистане",
    "description": "В этом разделе описываются ключевые аспекты ведения бизнеса в Узбекистане, включая правовую среду, налоговые обязательства, лицензионные требования и взаимодействие с государственными органами. Это поможет предпринимателям понять основные правила и процедуры успешного ведения бизнеса в стране"
  },
  "uz": {
    "heading": "O'zbekistonda biznes yuritish",
    "description": "Ushbu bo'limda O'zbekistonda biznes yuritishning asosiy jihatlari, jumladan, huquqiy muhit, soliq majburiyatlari, litsenziyalash talablari va davlat organlari bilan o'zaro munosabatlar bayon etilgan. Bu tadbirkorlarga mamlakatda biznesni muvaffaqiyatli yuritishning asosiy qoidalari va tartiblarini tushunishga yordam beradi."
  }
}
</i18n>
