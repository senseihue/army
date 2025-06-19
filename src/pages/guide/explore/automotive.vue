<script setup lang="ts">
import {
  ExploreSectorContent,
  ExploreSectorFooter,
  ExploreSectorHero,
  ExploreSectorSlide,
  ExploreSectorSlider
} from "~/features/guide/explore"
import hero from "public/img/guide/explore/auto/hero.webp"
import car from "public/img/guide/explore/auto/car.webp"
import oil from "public/img/guide/explore/auto/oil.webp"

const { t, tm, rt } = useI18n({ useScope: "local" })

useHead({ title: t("heading") })
definePageMeta({ fixedHeader: true })

const fileUrl = "https://dev-portal.miit.uz/uploads/files/automotive.pdf"

const images = computed(() => ({
  hero: hero,
  slider: car,
  content: oil
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
    "heading": "Automotive",
    "text": "Uzbekistan’s automotive sector is one of the country’s most robust industries, and continues to be a key economic driver – generating $5.5 billion in revenue annually. Its global presence is growing too, with $4.4 billion in foreign trade turnover and $146 million in FDI and credits during 2023 alone.\n\nWith a diverse production line including passenger cars, EV and hybrid vehicles, buses, trucks and agricultural machines, Uzbekistan’s capabilities outshine the rest of Central Asia.\n\nUzbekistan’s automotive exports have seen substantial growth since 2018, with passenger and commercial vehicle exports increasing more than ten times. This dramatic trajectory reflects the competitiveness of the industry against international markets and highlights its real investment potential.\n\nThe sector is also dedicated to investment in human capital, with specialised educational institutions and academies to nurture local talent in automotive engineering and manufacturing.",
    "slides": [
      {
        "heading": "$5.5 bln",
        "text": "Revenue in 2023"
      },
      {
        "heading": "$4.4 billion",
        "text": "Foreign trade turnover in 2023"
      },
      {
        "heading": "$146 million",
        "text": "Attracted FDI & credits in 2023"
      }
    ]
  },
  "ru": {
    "heading": "Автомобильная промышленность",
    "text": "Автомобильная промышленность Узбекистана — один из ключевых драйверов роста экономики, генерирующий 5,5 млрд долл. США дохода в год. В 2023 году объем внешней торговли в секторе составил 4,4 млрд долл. США, а прямые иностранные инвестиции — 146 млн долл. США.\n\nБлагодаря разнообразию производственной линейки, включающей легковые автомобили, электромобили и гибридные автомобили, автобусы, грузовики и сельскохозяйственную технику, мощности автомобилестроительной промышленности Узбекистана являются крупнейшими среди всех стран Средней Азии.\n\nС 2018 года экспорт автомобилей увеличился более чем в 10 раз, что отражает конкурентоспособность отрасли на международных рынках и подчеркивает ее инвестиционный потенциал.\n\nОтрасль также вкладывает значительные средства в развитие человеческого капитала, создавая специализированные образовательные учреждения для подготовки кадров в сфере автомобильной инженерии и производства.",
    "slides": [
      {
        "heading": "$5,5 млрд",
        "text": "выручка в 2023 году"
      },
      {
        "heading": "$4,4 млрд",
        "text": "внешнеторговый оборот в 2023 году"
      },
      {
        "heading": "$146 млн",
        "text": "привлеченные прямые иностранные инвестиции и кредиты в 2023 году"
      }
    ]
  },
  "uz": {
    "heading": "Avtomobil saonati",
    "text": "O'zbekistonning avtomobil sanoati — iqtisodiyotning asosiy o'sish omillaridan biri bo'lib, har yili 5.5 milliard dollar daromad keltiradi. 2023 yilda sektorning tashqi savdo hajmi 4.4 milliard dollarni tashkil etdi, to'g'ridan-to'g'ri xorijiy investitsiyalar esa 146 million dollarni tashkil etdi.\n\nAvtomobil sanoati O'zbekistonda eng katta quvvatlarga ega bo'lib, ushbu sohada yengil avtomobillar, elektromobillar va gibrid avtomobillar, avtobuslar, yuk mashinalari va qishloq xo'jaligi texnikasini o'z ichiga olgan xilma-xil ishlab chiqarish liniyasi mavjud. Bu sanoat quvvatlari Markaziy Osiyodagi barcha mamlakatlar orasida eng kattalaridan biridir.\n\n2018 yildan buyon avtomobillar eksporti 10 baravardan ko'proq oshdi, bu esa sanoatning xalqaro bozorlarda raqobatbardoshligini aks ettiradi va uning investitsion potensialini ta'kidlaydi.\n\nSanoat shuningdek, avtomobil muhandisligi va ishlab chiqarish sohasida kadrlar tayyorlash uchun maxsus ta'lim muassasalarini yaratishga katta mablag'lar sarflaydi.",
    "slides": [
      {
        "heading": "5.5 milliard dollar",
        "text": "2023 yildagi daromad"
      },
      {
        "heading": "4.4 milliard dollar",
        "text": "2023 yildagi tashqi savdo aylanmasi"
      },
      {
        "heading": "146 million dollar",
        "text": "2023 yildagi jalb qilingan to'g'ridan-to'g'ri xorijiy investitsiyalar va kreditlar"
      }
    ]
  }
}
</i18n>
