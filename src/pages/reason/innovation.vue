<script setup lang="ts">
import { ReasonNav, SectionGrid } from "~/features/reason"
import { ChartInnovation } from "~/features/reason/innovation"

definePageMeta({ fixedHeader: false })
const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <div>
    <reason-nav />
    <section-grid>
      <template #left>
        <h3 class="text-center">
          {{ t("title") }}
        </h3>
        <br />
        <p v-html="t('description')" class="text-justify"></p>
      </template>
      <template #right>
        <img class="section-card__image" src="/img/reason/innovation/innovation.webp" alt="" />
      </template>
    </section-grid>
    <section-grid>
      <template #left>
        <div>
          <img class="section-card__image" src="/img/reason/innovation/payment.webp" alt="" />
        </div>
      </template>
      <template #right>
        <br />
        <p v-html="t('description2')" class="text-justify"></p>
      </template>
    </section-grid>

    <chart-innovation />
  </div>
</template>

<i18n>
{
  "en": {
    "title": "Innovation and Digital",
    "description": "With smartphone penetration set to reach 77% by 2025 and over 27 million internet users, Uzbekistan is a digitally literate society, with its young population building the leading tech businesses of tomorrow. <br><br> Central to the economy's growing tech leadership is the IT Park in Tashkent, a dedicated digital business ecosystem that has grown exponentially over the last four years – from 411 businesses in 2020 to 1,552 in 2023. Attracted by a skilled workforce and a total exemption from corporate tax, businesses within the IT Park exported $344 million in IT products and services in 2023.",
    "description2": "A burgeoning IT sector runs in parallel with a constellation of fintech startups that are capitalizing on Uzbekistan's rapidly evolving digital payments and online retail markets. Leading the country's fintech charge is Uzum, an e-commerce business and, with a market value of more than $1 billion, the first Uzbek 'unicorn'. <br><br>    But with over a thousand startups active in Uzbekistan, Uzum will not be the last!"
  },
  "uz": {
    "title": "Innovatsiya va raqamli texnologiyalar",
    "description": "2025 yilga kelib smartfonlar tarqalishi darajasi 77% ga yetishi kutilayotgan va 29 milliondan ortiq internet foydalanuvchilari mavjud bo’lgan O’zbekiston raqamlashib borayotgan jamiyatidir, unda yosh avlod kelajakning texnologik kompaniyalarini yaratmoqda. O’sib borayotgan iqtisodiy texnologik liderlikning markaziy elementi Toshkentdagi IT-parki bo’lib, u so’nggi yillarda 2020 yildagi 411 ta ro’yxatdan o’tgazilgan korxonalar sonidan 2023 yilda 1652 taga o‘sdi.",
    "description2": "Malakali ishchi kuchi va korporativ soliqlardan to’liq ozodlikdan foydalangan holda, IT-park ekotizimiga kiruvchi korxonalar 2023 yilda 344 million AQSh dollaridan ortiq IT mahsulotlari va xizmatlarini eksport qildilar. IT-sektor raqamli to’lovlar va onlayn chakana savdo bozorlarining tez rivojlanishidan foydalangan fintex-startaplar qatorida rivojlanmoqda. <br><br>    Mamlakatning fintex yetakchisi Uzum, O‘zbekiston raqamli ekotizimidir. Bozor qiymati 1 milliard AQSh dollaridan ortiq bo‘lgan bu O‘zbekistonning birinchi 'yunikorn' korxonasidir. Shu jumladan O‘zbekistonda mingdan ortiq faol startaplar mavjud bo‘lganini inobatga olgan holda, Uzum so’nggi bo’lmasligi aniq!"
  },
  "ru": {
    "title": "Инновации и цифровые технологии",
    "description2": " Привлеченные квалифицированной рабочей силой и полным освобождением от корпоративного налога предприятия, входящие в экосистему IT-парка, экспортировали IT-продукцию и услуги на сумму 344 млн долларов США в 2023 году. IT-сектор развивается параллельно с целым рядом финтех-стартапов, которые извлекают выгоду из быстро развивающихся рынков цифровых платежей и онлайн-ритейла в Узбекистане. <br> <br>    Лидером финтех-заряда страны является Uzum, узбекистанская цифровая экосистема. Учитывая ее рыночную стоимость более 1 млрд долларов США, это первый узбекский «единорог». Однако с более чем тысячей активных стартапов в Узбекистане Uzum вряд ли станет последним!",
    "description": "С уровнем распространения смартфонов, которое достигнет 77% к 2025 году, и с более чем 29 миллионами пользователей Интернета, Узбекистан является обществом цифровой грамотности, чье молодое население создает технологические компании будущего. Центральным элементом растущего технологического лидерства экономики является IT-парк в Ташкенте - специализированная цифровая бизнес-экосистема, которая выросла за последние несколько лет с 411 предприятий в 2020 году до 1652 в 2023 году."
  }
}
</i18n>

<style scoped>
.section-card__image {
  width: 100%;
  aspect-ratio: auto;
  @apply object-cover object-center;
}
</style>
