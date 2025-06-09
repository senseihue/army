<script setup lang="ts">
import {
  ExploreSectorContent,
  ExploreSectorFooter,
  ExploreSectorHero,
  ExploreSectorSlide,
  ExploreSectorSlider
} from "#layers/landing/modules/guide/explore"
import hero from "@/public/img/guide/explore/energy/hero.png"
import sunBattery from "@/public/img/guide/explore/energy/sun-battery.png"
import sunBatteryWorker from "@/public/img/guide/explore/energy/sun-battery-worker.png"

const { t, tm, rt } = useI18n({ useScope: "local" })

useHead({ title: t("heading") })
definePageMeta({ fixedHeader: true })

const fileUrl = "https://dev-portal.miit.uz/uploads/files/energy.pdf"

const images = computed(() => ({
  hero: hero,
  slider: sunBattery,
  content: sunBatteryWorker
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
    "heading": "Energy",
    "text": "Uzbekistan’s energy sector is undergoing a transformative period. Traditionally one of the world’s largest natural gas producers, it is now moving towards a greener, more sustainable future.\n\nPreviously, natural gas accounted for 90.5% of Uzbekistan’s energy production, but under government reforms the sector is now actively diversifying its energy portfolio by integrating renewable sources. By 2030, Uzbekistan plans to diversity its power generation system, integrating more solar photovoltaic plants (8%) and wind power plants (7%).\n\nIn Uzbekistan’s natural gas-dominated energy sector, the renewable energy market is growing more attractive to investors thanks, in part, to government support and incentive programmes. At the 2024 Tashkent International Investment Forum, ACWA Power – a leader in the energy transition and a first mover into green hydrogen – signed an agreement worth $4.85 billion with the National Electric Grid of Uzbekistan for Central Asia’s largest wind farm, the Aral 5GW Wind Independent Power Producer (IPP) project in the Karakalpakstan region.\n\nFrom wind and solar to hydroelectric power, Uzbekistan’s energy sector is thriving and provides international investors with a diverse portfolio of investments opportunities – positioning the region as Central Asia’s renewable energy hub.",
    "slides": [
      {
        "heading": "25%",
        "text": "renewable energy target by 2030"
      },
      {
        "heading": "May 2019",
        "text": "Renewable energy law adopted"
      }
    ]
  },
  "ru": {
    "heading": "Энергетика",
    "text": "Энергетический сектор Узбекистана переживает период трансформации. Будучи одним из крупнейших в мире производителей природного газа, страна стремится перейти к более зеленой и устойчивой энергетике.\n\nРанее природный газ составлял 90,5% производства энергии, но в рамках реформ правительство активно диверсифицирует энергетический портфель, используя возобновляемые источники энергии. К 2030 году Узбекистан планирует увеличить долю солнечных и ветровых электростанций до 15% (солнечные установки 8% и ветряные 7%).\n\nВ энергетическом секторе Узбекистана, где преобладает природный газ, рынок возобновляемых источников энергии становится все более привлекательным для инвесторов благодаря в том числе государственной поддержке и программам стимулирования сектора к трансформации. На Ташкентском Международном Инвестиционном Форуме 2024 года компания ACWA Power, лидер в сфере энергетического перехода и технологий зелёного водорода, подписала соглашение стоимостью 4,85 млрд долл. США с Национальной электрической сетью Узбекистана по строительству крупнейшей в Центральной Азии ветряной электростанции «Арал» мощностью 5 ГВт в Республике Каракалпакстан.\n\nОт ветряной и солнечной энергии до гидроэлектроэнергетики — энергетический сектор Узбекистана предоставляет международным инвесторам разнообразный портфель инвестиционных возможностей, позиционируя регион как центр возобновляемой энергетики Центральной Азии.",
    "slides": [
      {
        "heading": "25%",
        "text": "Доля возобновляемой энергии к 2030 году"
      },
      {
        "heading": "В мае 2019 года",
        "text": "принят закон о возобновляемых источниках энергии"
      }
    ]
  },
  "uz": {
    "heading": "Energetika",
    "text": "O'zbekistonning energetika sektori transformatsiya davrini boshdan kechirmoqda. Dunyoning eng yirik tabiiy gaz ishlab chiqaruvchilaridan biri bo'lgan mamlakat, ekologik jihatdan toza va barqaror energetikaga o'tishni maqsad qilmoqda.\n\nAvval tabiiy gaz energiya ishlab chiqarishning 90,5% ni tashkil etgan bo'lsa, endilikda hukumat energetika portfelini diversifikatsiya qilib, qayta tiklanuvchi energiya manbalariga e'tibor qaratmoqda. 2030 yilga kelib, O'zbekiston quyosh va shamol elektr stantsiyalarining ulushini 15% ga oshirishni rejalashtirmoqda (quyosh stantsiyalari 8% va shamol stantsiyalari 7%).\n\nTabiiy gaz ustun bo'lgan energetika sektorida, qayta tiklanuvchi energiya manbalari bozorining jozibadorligi oshmoqda, xususan, davlat qo'llab-quvvatlashi va sektorni transformatsiya qilish dasturlari tufayli. 2024-yilda Toshkent Xalqaro Investitsiya Forumi (TXIF 2024) da ACWA Power – energiya o'tish va yashil vodorod texnologiyalarida yetakchi kompaniya – O'zbekiston Milliy Elektr Tarmog'i bilan 4,85 milliard dollar qiymatidagi bitimni imzoladi. Bitim doirasida markaziy Osiyodagi eng katta shamol elektr stantsiyasi bo'lgan «Arol» loyihasini amalga oshirish rejalashtirilgan bo'lib, u Qoraqalpog'istonda 5 GW quvvatga ega bo'lad.\n\nShamol va quyosh energiyasidan tortib gidroelektr energetikasigacha – O'zbekiston energetika sektori xalqaro investorlarga turli xil investitsiya imkoniyatlarini taqdim etadi, mintaqani Markaziy Osiyoda qayta tiklanuvchi energiya markazi sifatida joylashtiradi.",
    "slides": [
      {
        "heading": "25%",
        "text": "2030 yilga kelib qayta tiklanuvchi energiya ulushi"
      },
      {
        "heading": "May 2019",
        "text": "Qayta tiklanuvchi energiya manbalari to'g'risidagi qonun qabul qilindi"
      }
    ]
  }
}
</i18n>
