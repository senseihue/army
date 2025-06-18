<script setup lang="ts">
import {
  ExploreSectorContent,
  ExploreSectorFooter,
  ExploreSectorHero,
  ExploreSectorSlide,
  ExploreSectorSlider
} from "~/layers/features/guide/explore"
import hero from "public/img/guide/explore/textiles/hero.webp"
import atlas1 from "public/img/guide/explore/textiles/atlas1.webp"
import atlas2 from "public/img/guide/explore/textiles/atlas2.webp"

const { t, tm, rt } = useI18n({ useScope: "local" })

useHead({ title: t("heading") })
definePageMeta({ fixedHeader: true })

const fileUrl = "https://dev-portal.miit.uz/uploads/files/textiles.pdf"

const images = computed(() => ({
  hero,
  slider: atlas1,
  content: atlas2
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
    <explore-sector-footer :file-url="fileUrl" />
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "heading": "Textiles",
    "text": "Textiles have long been a part of Uzbekistan's history. Centred around one of the world’s most important historical trading routes, the Silk Road, this industry is flourishing as a modern-day investment opportunity.\n\nIn the past five years, the sector has welcomed investments amounting to $3.3 billion, with export figures reaching an impressive $3.2 billion. Strategically, the textiles industry is important for many reasons and the creation of the Specialized Textile Industrial Zones (TIZ) is evidence of this. These zones are designed to attract investments by offering favourable conditions in which to operate.\n\nBoasting a workforce of 510,000, textiles is a catalyst for economic growth, job creation and ensuring the maintenance of this country’s rich cultural heritage. Once again, Uzbekistan is positioning itself as Central Asia’s textiles hub.",
    "slides": [
      {
        "heading": "100%",
        "text": "Cotton processed into yarn in 2023"
      },
      {
        "heading": "510k",
        "text": "Textiles workforce"
      },
      {
        "heading": "$3.3 bln",
        "text": "Investments over last 5 years"
      }
    ]
  },
  "ru": {
    "heading": "Текстильная промышленность",
    "text": "Текстильная промышленность Узбекистана имеет давние исторические корни и традиции.\n\nЗа последние пять лет объем инвестиций в этот сектор достиг 3,3 млрд долл. США, а экспорт составил 3,2 млрд долл. США. Одним из стратегических шагов стало создание специализированных текстильных промышленных зон (СТПЗ), направленных на привлечение инвестиций за счет создания благоприятных условий для ведения бизнеса в сфере текстильной промышленности.\n\nТекстильная отрасль, в которой заняты 510 000 человек, играет ключевую роль в создании рабочих мест и поддержании богатого культурного наследия страны. Благодаря динамичному развитию отрасли сегодня Узбекистан снова утверждается в роли текстильного центра Центральной Азии.",
    "slides": [
      {
        "heading": "100%",
        "text": "Переработка хлопка в пряжу в 2023 г."
      },
      {
        "heading": "510 000",
        "text": "рабочих мест"
      },
      {
        "heading": "$3,3 млрд",
        "text": "инвестиции за последние 5 лет"
      }
    ]
  },
  "uz": {
    "heading": "To'qimachilik sanoati",
    "text": "To'qimachilik sanoati O'zbekistonning qadimiy tarixiy ildizlari va an'analarga ega. So'nggi besh yil ichida ushbu sektorga kiritilgan investitsiyalar 3,3 milliard AQSh dollariga yetdi, eksport esa 3,2 milliard AQSh dollarini tashkil etdi. Strategik qadam sifatida maxsus matolar sanoati zonalari (MSPZ) tashkil etildi, bu investitsiyalarni jalb qilish uchun matolar sanoatida biznes yuritish uchun qulay sharoitlar yaratishga qaratilgan.\n\nMatolar sanoatida 510 000 kishi ishlaydi va bu sektor ish o'rinlarini yaratishda va mamlakatning boy madaniy merosini saqlashda muhim rol o'ynaydi. Sektorning dinamik rivojlanishi tufayli bugungi kunda O'zbekiston markaziy Osiyoning matolar markazi sifatida yana bir bor tan olingan.",
    "slides": [
      {
        "heading": "100%",
        "text": "2023 yilda paxta tolasini qayta ishlash"
      },
      {
        "heading": "510.000",
        "text": "Ish o'rinlari"
      },
      {
        "heading": "3.3 milliard dollar",
        "text": "So'nggi 5 yil ichidagi investitsiyalar"
      }
    ]
  }
}
</i18n>
