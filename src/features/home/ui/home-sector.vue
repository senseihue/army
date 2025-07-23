<script setup lang="ts">
const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <section class="sector">
    <div v-rellax class="sector__background" data-rellax-percentage="0.4" data-rellax-speed="-4.5">
      <img class="sector__background-image" src="/img/home/sector.webp" alt="Sector background" />
    </div>

    <div class="container-7xl">
      <div class="p-section">
        <div class="sector__grid">
          <div class="sector__content" data-aos="fade-right" data-aos-delay="50">
            <h3 class="sector__heading">{{ t("heading") }}</h3>
            <p class="sector__description">{{ t("description") }}</p>
            <ui-button class="w-min" size="lg" color="success" rounded :label="t('our_sectors')" />
          </div>

          <div class="sector__image-wrapper" data-aos="zoom-in" data-aos-delay="100">
            <img
              v-rellax
              class="sector__image"
              src="/img/home/sector.webp"
              alt="Sector"
              data-rellax-percentage="0.5"
              data-rellax-speed="-2"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sector {
  @apply relative overflow-hidden;

  &__background {
    @apply absolute inset-0 -z-10 -my-10 bg-white;

    &-image {
      @apply h-full w-full object-cover object-center opacity-10;
    }
  }

  &__grid {
    @apply grid grid-cols-1 gap-8 lg:grid-cols-2;
  }

  &__content {
    @apply order-2 flex flex-col gap-6 lg:order-1 pr-16;
  }

  &__heading {
    @apply text-2xl font-bold text-blue-command lg:text-3xl;
  }

  &__description {
    @apply mb-4 text-base text-gray-700 text-justify;
  }

  &__image {
    @apply h-full w-full object-cover object-center;
  }

  &__image-wrapper {
    @apply relative h-fit overflow-hidden lg:order-2;
  }
}
</style>

<i18n lang="json">
{
  "en": {
    "our_sectors": "Our sectors",
    "heading": "Doing business in Uzbekistan",
    "description": "Committed to economic and civic liberalisation, and boasting a young and highly educated population, Uzbekistan is seizing its growth moment. Businesses from around the world are investing in a country in which government, regulator, workforce and local community are aligned. Whether you’re pioneering wind and solar energy generation or developing groundbreaking digital and financial technologies, the New Uzbekistan wants to be your partner!"
  },
  "ru": {
    "our_sectors": "Наши секторы",
    "heading": "Ведение бизнеса в Узбекистане",
    "description": "Узбекистан, реализуя политику экономической и гражданской либерализации и обладая молодым и высокообразованным населением, использует все возможности для роста. Компании со всего мира инвестируют в страну, в которой правительство, регуляторы и местные сообщества объединены идей развития. Независимо от того, являетесь ли вы компанией в области генерации ветровой и солнечной энергии или разрабатываете новаторские цифровые и финансовые технологии, Новый Узбекистан хочет стать вашим партнером!"
  },
  "uz": {
    "our_sectors": "Bizning Iqtisodiyot tarmoqlarimiz",
    "heading": "O’zbekistonda biznes yuritish",
    "description": "O’zbekiston iqtisodiy va fuqarolik liberallashtirish siyosatini amalga oshirib, yosh va yuqori malakali aholi yordamida rivojlanib bormoqda. Dunyo bo’ylab korxonalar hukumat va mahalliy jamoalar rivojlanish g’oyasi bilan birlashgan mamlakatga sarmoya kiritmoqdalar. Agar siz shamol va quyosh energiyasi sohasida faoliyat yuritayotgan korxona yoki innovatsion raqamli va moliyaviy texnologiyalarni ishlab chiqayotgan bo‘lsangiz, Yangi O‘zbekiston sizning hamkoringiz bo’lishni istaydi!"
  }
}
</i18n>
