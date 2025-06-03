<script setup lang="ts">
import {
  ExploreSectorContent,
  ExploreSectorFooter,
  ExploreSectorHero,
  ExploreSectorSlide,
  ExploreSectorSlider
} from "#layers/landing/modules/guide/explore"

const { t, tm, rt } = useI18n({ useScope: "local" })

useHead({ title: t("heading") })
definePageMeta({ fixedHeader: true })

const fileUrl = "https://dev-portal.miit.uz/uploads/files/technology.pdf"

const images = computed(() => ({
  hero: "https://dev-portal.miit.uz/uploads/image_assetherosizedefaultstatedefault@2x1-3.png",
  slider: "https://dev-portal.miit.uz/uploads/guide/e-commerce-stock.jpeg",
  content: "https://dev-portal.miit.uz/uploads/guide/apple-pay.jpeg"
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
    "heading": "Technology",
    "text": "Technology is a burgeoning sector for the Uzbek economy. The digital ecosystem’s contribution to the country’s GDP has nearly tripled from 0.99% in 2020 to 2.77% in 2022 – with figures only expected to grow.\n\nThe launch of the IT Park back in 2019 was a significant moment. The development has already seen the creation of 28 new startups and is providing a crucial space for additional resourcing, workshops and the education of Uzbek youth in IT, as well as the development of computer literacy among the wider population.\n\nWith the industry gaining momentum, Uzbekistan has now seen its first ever “unicorn”. Uzum, an e-commerce business focused on fintech, online shopping and food deliveries, is now valued at over $1 billion and is leading the way in creating new opportunities for over 1,000 startups in the region.\n\nUzbekistan is also becoming a major player in IT outsourcing, with exports of services increasing from $169.3 million to $306 million between 2020 and 2022. In 2022, the export of software development services increased to $141 million, compared with $6.2 million in 2019, indicating the realization of the sector's huge, hidden potential.",
    "slides": [
      {
        "heading": "0%",
        "text": "corporate taxes for businesses based in IT Park"
      },
      {
        "heading": "77%",
        "text": "smartphone penetration by 2025"
      },
      {
        "heading": "1,000+",
        "text": "startups in Uzbekistan"
      }
    ]
  },
  "ru": {
    "heading": "Технологии",
    "text": "Технологический сектор становится одним из драйверов экономики Узбекистана. Вклад цифровой экосистемы в ВВП страны почти утроился с 0,99% в 2020 году до 2,77% в 2022 году, и эти показатели продолжают расти.\n\nЗапуск IT-парка в 2019 году стал важным моментом в развитии отрасли. Парк уже дал жизнь 28 новым стартапам и стал ключевым пространством для поддержки молодых узбекских специалистов в IT (AI) и повышения компьютерной грамотности населения.\n\nС развитием технологической отрасли в Узбекистане родилась первая компания-единорог – Uzum, национальная цифровая экосистема. Uzum специализируется на финтех-услугах, E-commerce и на доставке продуктов по всей стране. В настоящее время компания оценена в 1 млрд. долл. США и является лидером в создании новых возможностей для более чем 1000 стартапов в регионе.\n\nУзбекистан также становится крупным игроком в сфере IT-аутсорсинга, увеличивая экспорт услуг с 169,3 млн долл. США до 306 млн долл. США с 2020 по 2022 гг. В 2022 году экспорт услуг по разработке программного обеспечения увеличился до 141 млн долл. США по сравнению с 6,2 млн долл. США в 2019 году.",
    "slides": [
      {
        "heading": "0%",
        "text": "корпоративных налогов для предприятий, базирующихся в IT-парке"
      },
      {
        "heading": "77%",
        "text": "распространение смартфонов к 2025 году"
      },
      {
        "heading": "1000+",
        "text": "стартапов в Узбекистане"
      }
    ]
  },
  "uz": {
    "heading": "Texnologiyalar",
    "text": "Texnologik sektor O'zbekiston iqtisodiyotining asosiy “drayverlaridan” biriga aylanmoqda. Raqamli ekosistemaning mamlakat YaIMidagi ulushi 2020-yilda 0,99% dan 2022-yilda 2,77% ga qadar deyarli uch baravar oshdi va bu ko'rsatkichlar o'sishda davom etmoqda.\n\n2019-yilda IT parkining ishga tushirilishi sektorda muhim bosqich bo'ldi. Park 28 ta yangi startapni yaratdi va yosh o'zbek mutaxassislarini IT sohasida qo'llab-quvvatlash hamda aholining kompyuter savodxonligini oshirish uchun asosiy makon bo'ldi.\n\nTexnologik sektor rivojlanishi bilan mamlakatda birinchi unicorn kompaniya – Uzum, milliy raqamli ekosistema paydo bo'ldi. Uzum fintech xizmatlari, E-commerce va mamlakat bo'ylab mahsulot yetkazib berish bilan shug'ullanadi. Hozirda kompaniya 1 milliard AQSh dollariga baholanmoqda va mintaqadagi 1000 dan ortiq startaplar uchun yangi imkoniyatlar yaratishda yetakchi hisoblanadi.\n\nO'zbekiston shuningdek, IT xizmatlar sohasida katta o'yinchiga aylanyapti, 2020-yildan 2022-yilgacha xizmat eksporti 169,3 million AQSh dollaridan 306 million AQSh dollarigacha oshdi. 2022-yilda dasturiy ta'minotni ishlab chiqish xizmatlari eksporti 2019-yildagi 6,2 million AQSh dollaridan 141 million AQSh dollargacha oshdi.",
    "slides": [
      {
        "heading": "0% korporativ soliqlar",
        "text": "IT parklarida royxatdan o'tgan kompaniyalar uchun"
      },
      {
        "heading": "77%",
        "text": "2025 yilga kelib smartfonlarning O'zbekistonda tarqalishi"
      },
      {
        "heading": "1000+",
        "text": "O'zbekistondagi startaplar soni"
      }
    ]
  }
}
</i18n>
