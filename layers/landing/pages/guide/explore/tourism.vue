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

const fileUrl = "https://dev-portal.miit.uz/uploads/files/tourism.pdf"

const images = computed(() => ({
  hero: "https://dev-portal.miit.uz/uploads/image_assetherosizedefaultstatedefault@2x1-4.png",
  slider: "https://dev-portal.miit.uz/uploads/guide/image-assetsmallsizedefaultstatedefault-1-5.png",
  content: "https://dev-portal.miit.uz/uploads/guide/image-assetsmallsizedefaultstatedefault-5.png"
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
    "heading": "Tourism",
    "text": "Tourism in Uzbekistan is flourishing. In 2023, 5.2 million foreign tourists touched down on Uzbek soil, generating approximately $2 billion in revenue. This positions the industry as one of the biggest contributors to the economy – totalling around 3.5% of the country’s GDP.\n\nDomestic tourism is also growing. With a rise of 40% in recent years, Uzbekistan’s wildlife, desert landscapes, lowlands, green forests, fertile valleys and snowy mountains are attracting more than just international visitors. The implementation of tourist-friendly policies, including visa-free travel for citizens of 93 countries, positions Uzbekistan as an enticing proposition for travellers around the world.\n\nThe government have also introduced structural benefits for international investors in this industry, including tax exemptions for high-end hotels and partial reimbursement of construction expenses.\n\nA notable addition to Uzbekistan's tourist attractions is the Tashkent City Mall, a part of the Tashkent City project. With its contemporary architecture and blend of international brands and local products, the Mall has become a popular destination for both tourists and locals, reflecting Uzbekistan's carefully balanced modernization, which preserves its rich cultural heritage.",
    "slides": [
      {
        "heading": "#1",
        "text": "Uzbekistan top of safety rankings"
      },
      {
        "heading": "5.2 m",
        "text": "visitors in 2023"
      },
      {
        "heading": "1,771",
        "text": "hotels by 2025"
      }
    ]
  },
  "ru": {
    "heading": "Туризм",
    "text": "Туризм является одной из самых процветающих отраслей Узбекистана. В 2023 году страну посетили 5,2 миллиона иностранных туристов, что принесло около 2 млрд долл. США дохода, что составляет около 3,5% ВВП страны. Это делает туризм одной из крупнейших отраслей экономики Узбекистана.\n\nВнутренний туризм также демонстрирует рост, увеличившись на 40% за последние годы. Дикая природа, пустынные пейзажи, низменности, зеленые леса, плодородные долины и заснеженные горы Узбекистана привлекают как зарубежных, так и местных путешественников. Реализация политики, благоприятствующей туризму, включая безвизовый режим для граждан 93 стран, делает Узбекистан более привлекательным для путешественников.\n\nПравительство также ввело налоговые льготы для инвесторов в сфере гостиничного бизнеса и частичное возмещение расходов на строительство отелей высокого класса.\n\nЗаметным дополнением к туристическим достопримечательностям Узбекистана является торговый центр «Ташкент Сити Молл», часть более крупного проекта «Ташкент-Сити». С его современной архитектурой и сочетанием международных брендов и местных продуктов торговый центр стал популярным местом как для туристов, так и для местных жителей страны, отражая баланс между современностью и богатым культурным наследием Узбекистана.",
    "slides": [
      {
        "heading": "#1",
        "text": "Узбекистан лидирует в рейтинге безопасности"
      },
      {
        "heading": "5,2 млн",
        "text": "посетителей в 2023 году"
      },
      {
        "heading": "1771",
        "text": "отелей к 2025 году"
      }
    ]
  },
  "uz": {
    "heading": "Turizm",
    "text": "Turizm O'zbekistonning eng rivojlangan sohalaridan biridir. 2023 yilda mamlakatni 5,2 million xorijiy turist tashrif buyurdi, bu taxminan 2 milliard AQSh dollariga teng daromad keltirdi va bu mamlakatning Yalpi Ichki Mahsulotining taxminan 3,5% ni tashkil etdi. Bu turizmi O'zbekiston iqtisodiyotining eng yirik sohalaridan biri qiladi.\n\nIchki turizm ham o'sishni ko'rsatdi, so'nggi yillarda 40% ga oshdi. O'zbekistonning yovvoyi tabiyati, cho'l manzaralari, pasttekisliklar, yashil o'rmonlar, unumdor vodiylari va qorli tog'lari xalqaro va mahalliy sayyohlarni jalb qilmoqda. Turistik vizalar va 93 mamlakat fuqarolari uchun vizasiz rejimning joriy etilishi O'zbekistonni sayyohlar uchun yanada jozibador qiladi.\n\nHukumat mehmonxona biznesi investorlari uchun soliq imtiyozlarini joriy etdi va yuqori darajadagi mehmonxonalar qurilishida xarajatlarning qisman qaytarilishini taqdim etdi.\n\nO'zbekistonning turistik diqqatga sazovor joylariga muhim qo'shimcha sifatida “Toshkent Siti Mall” savdo markazi qo'shildi, bu “Toshkent-Siti” loyihasining bir qismidir. Zamonaviy arxitekturasi va xalqaro brendlar bilan mahalliy mahsulotlarni birlashtirgan savdo markazi, mamlakatdagi turistlar va mahalliy aholi uchun mashhur joyga aylangan bo'lib, zamonaviylik va O'zbekistonning boy madaniyati o'rtasidagi muvozanatni aks ettiradi.",
    "slides": [
      {
        "heading": "#1",
        "text": "O'zbekiston xavfsizlik reytingida yetakchi"
      },
      {
        "heading": "5.2 million",
        "text": "2023 yilda tashrif buyurganlar soni"
      },
      {
        "heading": "1,771",
        "text": "2025 yilga kelib mehmonxonalar soni"
      }
    ]
  }
}
</i18n>
