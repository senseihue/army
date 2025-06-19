<script setup lang="ts">
import {
  ExploreSectorContent,
  ExploreSectorFooter,
  ExploreSectorHero,
  ExploreSectorSlide,
  ExploreSectorSlider
} from "~/features/guide/explore"
import hero from "public/img/guide/explore/construction/hero.webp"
import mosque from "public/img/guide/explore/construction/mosque.webp"
import build from "public/img/guide/explore/construction/build.webp"

const { t, tm, rt } = useI18n({ useScope: "local" })

useHead({ title: t("heading") })
definePageMeta({ fixedHeader: true })

const fileUrl = "https://dev-portal.miit.uz/uploads/files/construction-and-housing.pdf"

const images = computed(() => ({
  hero: hero,
  slider: mosque,
  content: build
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
    "heading": "Construction Housing",
    "text": "Sustainable development sits at the core of Uzbekistan’s construction and housing sector. With the government wanting to build a brighter future for the country’s people, there have been significant improvements to sanitation and the availability of fresh drinking water, along with investment in more energy-efficient projects.\n\nAffordable housing programmes such as Obod Qishloq\" (Prosperous Village) and \"Obod Mahalla\" (Prosperous Neighbourhood) and Uzbekistan’s green mortgage markets – where banks offer lower rates for homes designed to reduce water and energy consumption – showcase the positive steps the country is making in moving towards a sustainable future for the next generation.\n\nPublic-private partnerships (PPPs) are also driving major developments, including two projects in Bukhara and Namangan totalling $206.2 million, not to mention the ambitious Olympic Town development.\n\nThe construction sector alone contributes 7% to the country’s GDP and employs an estimated 1.5 million workers across different construction related roles.",
    "slides": [
      {
        "heading": "$140 million",
        "text": "Attracted investments"
      },
      {
        "heading": "5",
        "text": "PPP companies working in partnership"
      },
      {
        "heading": "1.5 million",
        "text": "workforce across constructions sector"
      }
    ]
  },
  "ru": {
    "heading": "Строительство и жилье",
    "text": "Строительная отрасль Узбекистана нацелена на устойчивое развитие. Правительство активно идет к цели улучшения жилищных условия жителей страны, был достигнут значительный прогресс в области водоснабжения, доступности свежей питьевой воды, а также в области стимулирования инвестиций в более энергоэффективные проекты.\n\nПрограммы доступного жилья, такие как «Обод қишлоқ» (Процветающее село) и «Обод маҳалла» (Процветающий район), а также «зеленые» ипотечные кредиты, в рамках которых банки предлагают сниженные процентные ставки на объекты, в которых внедрены технологии сокращения потребления воды и энергии, демонстрируют позитивные шаги на пути устойчивого развития.\n\nГосударственно-частные партнерства (ГЧП) играют важную роль в строительном секторе, включая два проекта в Бухаре и Намангане на общую сумму 206,2 млн долл. США, а также амбициозный проект «Олимпийский городок».\n\nСтроительная отрасль вносит 7% в ВВП страны и предоставляет рабочие места примерно 1,5 млн человек.",
    "slides": [
      {
        "heading": "$140 млн",
        "text": "Привлеченные инвестиции"
      },
      {
        "heading": "5 компаний",
        "text": "работающих в рамках ГЧП"
      },
      {
        "heading": "1,5 млн",
        "text": "работников в строительном секторе"
      }
    ]
  },
  "uz": {
    "heading": "Qurilish va turar-joy",
    "text": "O'zbekiston qurilish sohasi barqaror rivojlanishga yo'naltirilgan. Hukumat mamlakat aholisi turar-joy sharoitlarini yaxshilash maqsadida faol harakat qilmoqda, ichimlik suvi ta'minoti, energiya samaradorligi yuqori bo'lgan loyihalarga investitsiyalar kiritish sohasida katta yutuqlarga erishildi.\n\n“Obod qishloq” va “Obod mahalla” kabi arzon uy-joy dasturlari, shuningdek, suv va energiya iste'molini qisqartiradigan texnologiyalar joriy etilgan obyektlar uchun banklar tomonidan pasaytirilgan foiz stavkalarini taklif etadigan “yashil” ipoteka bozorlarini o'z ichiga olgan dasturlar barqaror rivojlanish yo'lida ijobiy qadamlarni ko'rsatmoqda..\n\nDavlat-xususiy sheriklik (DXS) qurilish sohasida muhim rol o'ynaydi, jumladan, Buxoro va Namanganda umumiy qiymati 206,2 million AQSh dollariga teng ikki loyiha, shuningdek, “Olimpiya shaharchasi” kabi ambitsiyali loyiha mavjud.",
    "slides": [
      {
        "heading": "140 million dollar",
        "text": "Jalb qilingan investitsiyalar hajmi"
      },
      {
        "heading": "5",
        "text": "Davlat-xususiy sheriklik doirasida ishlayotgan kompaniyalar"
      },
      {
        "heading": "1.5 million",
        "text": "Qurilish sohasidagi ishchilar soni"
      }
    ]
  }
}
</i18n>
