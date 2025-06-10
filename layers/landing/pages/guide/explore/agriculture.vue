<script setup lang="ts">
import {
  ExploreSectorContent,
  ExploreSectorFooter,
  ExploreSectorGrid,
  ExploreSectorHero,
  ExploreSectorSlide,
  ExploreSectorSlider
} from "#layers/landing/modules/guide/explore"
import agriculture from "@/public/img/guide/explore/agriculture/hero.webp"
import cottonSmall from "@/public/img/guide/explore/agriculture/cotton-agriculture-small.webp"
import cow from "@/public/img/guide/explore/agriculture/cow.webp"

const { t, tm, rt } = useI18n({ useScope: "local" })

useHead({ title: t("heading") })
definePageMeta({ fixedHeader: true })

const fileUrl = "https://dev-portal.miit.uz/uploads/files/agriculture.pdf"

const images = computed(() => ({
  hero: agriculture,
  slider: cottonSmall,
  content: cow
}))
</script>

<template>
  <div>
    <explore-sector-hero :image="images.hero" :heading="t('heading')" />

    <explore-sector-slider :image="images.slider">
      <explore-sector-slide
        v-for="(slide, idx) in tm('slides')"
        :key="idx"
        :text="rt(slide?.text)"
        :heading="rt(slide?.heading)"
      />
    </explore-sector-slider>

    <explore-sector-content :image="images.content" :text="t('text')" />
    <explore-sector-grid />
    <explore-sector-footer :file-url="fileUrl" />
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "heading": "Agriculture",
    "text": "Agriculture is indeed one of Uzbekistan's most prominent sectors and has experienced a transformational period in recent years.The sector employs over a quarter of the country’s workforce and is critical to its GDP. Government policies have led to an increase in trade and provided farmers with access to the necessary technology, supplies and funding.\n\nObstacles such as water scarcity are becoming less of a threat. The implementation of water-saving irrigation infrastructure is enabling both more efficient water usage and rapid improvements in crop yields, further boosting the sector’s growth and export potential.",
    "slides": [
      {
        "heading": "$8.1 bln",
        "text": "in total import volume"
      },
      {
        "heading": "25.1%",
        "text": "of Uzbekistan's GDP"
      },
      {
        "heading": "+67,800",
        "text": "farms across Uzbekistan"
      }
    ]
  },
  "ru": {
    "heading": "Сельское хозяйство",
    "text": "Сельское хозяйство - один из самых важных секторов экономики Узбекистана, который в последние годы прошёл через масштабный трансформационный период. В секторе занято более четверти рабочей силы страны, и он имеет решающее значение для ВВП Узбекистана. Политика правительства привела к росту торговли и предоставила фермерам доступ к необходимым технологиям, поставкам и финансированию.\n\nВ стране активно проходит строительство и модернизация водосберегающей ирригационной инфраструктуры, что позволяет как более эффективно использовать воду, так и быстро повышать урожайность, стимулируя дальнейший рост сектора и его экспортный потенциал.",
    "slides": [
      {
        "heading": "$8.1 млрд",
        "text": "в общем объёме импорта"
      },
      {
        "heading": "25.1%",
        "text": "доля в ВВП Узбекистана"
      },
      {
        "heading": "+67,800",
        "text": "ферм по всему Узбекистану"
      }
    ]
  },
  "uz": {
    "heading": "Qishloq xo'jaligi",
    "text": "Qishloq xo'jaligi, O'zbekiston iqtisodiyotining eng muhim sektori bo'lib, so'nggi yillarda transformatsion davrni boshdan kechirdi. Sektor mamlakat ishchi kuchining chorakdan ko'prog'ini band qiladi va O'zbekistonning YIMi uchun muhim ahamiyatga ega. Hukumatning siyosati savdoning o'sishiga olib keldi va fermerlarga zarur texnologiyalar, yetkazib berish va moliyalashtirish imkoniyatlarini taqdim etdi.\n\nMamlakatda suvni tejaydigan sug'orish infratuzilmasini qurish va modernizatsiya qilish faol ravishda amalga oshirilmoqda, bu esa suvni yanada samaraliroq foydalanish va hosildorlikni tezda oshirish imkonini beradi, sektor va uning eksport salohiyatining yanada o'sishini rag'batlantiradi.",
    "slides": [
      {
        "heading": "$8.1 milliard AQSh dollari",
        "text": "umumiy import hajmi"
      },
      {
        "heading": "25.1%",
        "text": "O'zbekistonning Yalpi ichki mahsuloti (YIM) dagi ulushi"
      },
      {
        "heading": "+67,800",
        "text": "butun O'zbekistonda joylashgan fermer xo'jaliklari"
      }
    ]
  }
}
</i18n>
