<script setup lang="ts">
import type { CarouselConfig } from "vue3-carousel"
import { Carousel, Slide, Navigation } from "vue3-carousel"

const { t, tm, rt } = useI18n({ useScope: "local" })

const carouselConfig = computed<Partial<CarouselConfig>>(() => ({
  gap: 64,
  snapAlign: "start",
  wrapAround: true,
  breakpoints: {
    1024: {
      itemsToShow: 3
    },
    768: {
      itemsToShow: 2
    },
    640: {
      itemsToShow: 1
    }
  }
}))
</script>

<template>
  <section class="bg-blue-midnight">
    <div class="container-7xl">
      <div class="p-section">
        <h3 class="mb-12 text-center text-2xl font-bold text-white lg:text-3xl" data-aos="fade-up" data-aos-delay="50">
          {{ t("heading") }}
        </h3>

        <carousel v-bind="carouselConfig" class="carousel">
          <slide v-for="(slide, idx) in tm('slides')" class="h-full" :key="idx">
            <p class="text-lg font-normal text-white">{{ rt(slide) }}</p>
          </slide>

          <template #addons>
            <navigation>
              <template #prev>
                <icon class="text-4xl text-white" name="ph:caret-left" />
              </template>

              <template #next>
                <icon class="text-4xl text-white" name="ph:caret-right" />
              </template>
            </navigation>
          </template>
        </carousel>

        <a
          class="block px-16 2xl:px-0 italic text-white hover:underline"
          target="_blank"
          href="https://lex.uz/docs/4438440"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {{ t("text") }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.carousel {
  @apply mb-12 2xl:-mx-16 px-16;
  --vc-nav-width: 36px;
  --vc-nav-height: 36px;
}
</style>

<i18n lang="json">
{
  "en": {
    "heading": "The main functions of the Agency",
    "text": "Resolution of the Cabinet of Ministers “On the organization of the activities of the Foreign Investment Attraction Agency under the Ministry of investments and foreign trade of the Republic of Uzbekistan” of the Republic of Uzbekistan, No. 621 of 24.07.2019",
    "slides": [
      "Supporting the implementation of a unified state policy to attract foreign investments, while creating favorable conditions for investors.",
      "Providing information, legal and other support to foreign investors, and facilitating cooperation with government bodies and local businesses.",
      "Managing a database of promising investment projects and monitoring their progress.",
      "Promoting Uzbekistan’s economic and investment potential, and informing foreign business communities about incentives for investors.",
      "Enhancing and maintaining Uzbekistan’s positive international image."
    ]
  },
  "ru": {
    "heading": "Основные функции Агентства",
    "text": "Постановление Кабинета Министров Республики Узбекистан № 621 от 24.07.2019 года «Об организации деятельности Агентства по привлечению иностранных инвестиций при Министерстве инвестиций и внешней торговли Республики Узбекистан»",
    "slides": [
      "Поддержка реализации единой государственной политики по привлечению иностранных инвестиций и созданию благоприятных условий для инвесторов.",
      "Предоставление информационной, юридической и иной поддержки иностранным инвесторам и содействие их взаимодействию с государственными органами и местным бизнесом.",
      "Ведение базы данных перспективных инвестиционных проектов и мониторинг их реализации.",
      "Продвижение экономического и инвестиционного потенциала Узбекистана, а также информирование иностранных деловых кругов о предоставляемых льготах для инвесторов.",
      "Укрепление и поддержание положительного международного имиджа Узбекистана."
    ]
  },
  "uz": {
    "heading": "Agentlikning Asosiy Vazifalari va Funksiyalari",
    "text": "O'zbekiston Respublikasi Vazirlar Mahkamasining «O'zbekiston Respublikasi Investitsiyalar va tashqi savdo vazirligi huzuridagi Xorijiy investitsiyalarni jalb etish agentligi faoliyatini tashkil etish» to'g'risidagi, 24.07.2019-yilning № 621-qarori",
    "slides": [
      "Xorijiy investitsiyalarni jalb etish va investorlar uchun qulay sharoitlar yaratish bo'yicha yagona davlat siyosatini amalga oshirishni qo'llab-quvvatlash.",
      "Xorijiy investorlar uchun axborot, huquqiy va boshqa turdagi yordam ko'rsatish hamda ularning davlat organlari va mahalliy biznes bilan o'zaro aloqalarini qo'llab-quvvatlash.",
      "Kelajakdagi investitsiya loyihalarining ma'lumotlar bazasini yuritish va ularning amalga oshirilishini monitoring qilish.",
      "O'zbekistonning iqtisodiy va investitsion salohiyatini targ'ib qilish hamda xorijiy ishbilarmon doiralarga investorlar uchun taqdim etilayotgan imtiyozlar haqida ma'lumot berish.",
      "O'zbekistonning ijobiy xalqaro imijini mustahkamlash va saqlash."
    ]
  }
}
</i18n>
