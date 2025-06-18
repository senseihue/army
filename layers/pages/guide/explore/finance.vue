<script setup lang="ts">
import {
  ExploreSectorContent,
  ExploreSectorHero,
  ExploreSectorSlide,
  ExploreSectorSlider
} from "~/layers/features/guide/explore"
import hero from "public/img/guide/explore/finance/hero.webp"
import stock from "public/img/guide/explore/finance/stock.webp"
import nbu from "public/img/guide/explore/finance/nbu.webp"

const { t, tm, rt } = useI18n({ useScope: "local" })

useHead({ title: t("heading") })
definePageMeta({ fixedHeader: true })

// const fileUrl = "https://dev-portal.miit.uz/uploads/files/agriculture.pdf"

const images = computed(() => ({
  hero,
  slider: stock,
  content: nbu
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
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "heading": "Financial Services",
    "text": "Financial services in Uzbekistan are in a transitional moment. After decades of limited activity on the international scene, the sector is coming alive. In 2024, FDI has risen 47% and the region is becoming a prominent player within green finance. Much of Uzbekistan’s growth can be attributed to the sector – with it contributing a significant 43.3% of the country’s GDP.\n\nThe establishment of the Tashkent International Finance Center (TIFC) is expected to transform banking, capital markets, and insurance services in Uzbekistan by generating between 15,000 and 20,000 jobs and providing tax benefits and simpler regulations for international investors.\n\nFintech is also a rapidly growing subsector. Uzum, Uzbekistan’s first unicorn, has put the country on the map. It’s fintech arm, Uzum Bank, provides various products, enhancing financial inclusion and digital payments adoption.\n\nLet’s not forget: small and medium-sized enterprises (SMEs) are at the heart of the country's economy. In 2021, SMEs accounted for approximately 54% of Uzbekistan's GDP and employed about 78% of its workforce. A major initiative supporting SMEs is the International Islamic Trade Finance Corporation's “Trade Connect Central Asia+ Program”, which aims to facilitate trade finance and boost regional economic cooperation.",
    "slides": [
      {
        "heading": "36",
        "text": "Banks in operation"
      },
      {
        "heading": "43.3%",
        "text": "Contribution to GDP"
      },
      {
        "heading": "47%",
        "text": "FDI investment growth in 2024"
      }
    ]
  },
  "ru": {
    "heading": "Финансовые услуги",
    "text": "Финансовый сектор Узбекистана находится в стадии роста. После десятилетий ограниченной активности на международной арене сектор набирает обороты. В 2024 году объем прямых иностранных инвестиций в сектор вырос на 47%. Сегодня значительная часть экономического роста Узбекистана приходится на финансовый сектор, который составляет 43,3% от ВВП страны.\n\nСоздание Ташкентского Международного финансового Центра (ТМФЦ) должно трансформировать банковский сектор, рынок капитала и страховые услуги Узбекистана, создав от 15 000 до 20 000 рабочих мест и предоставив налоговые льготы и более простое регулирование для международных инвесторов.\n\nФинансовые технологии также являются быстрорастущим подсектором. Uzum – национальная цифровая экосистема, первая компания-единорог Узбекистана. Его финтех-подразделение, Uzum Bank, предлагает различные продукты, повышая финансовую инклюзивность людей.\n\nЦентральную роль в экономике страны играют малые и средние предприятия. В 2021 году доля МСП в ВВП Узбекистана составила около 54%, в них было занято около 78% работников страны. Крупной инициативой по поддержке МСП является программа «Trade Connect Central Asia+» (TCCA+) Международной исламской торгово-финансовой корпорации, направленная на содействие торговому финансированию и стимулированию регионального экономического сотрудничества.",
    "slides": [
      {
        "heading": "36",
        "text": "Количество действующих банков"
      },
      {
        "heading": "43,3%",
        "text": "Вклад в ВВП"
      },
      {
        "heading": "47%",
        "text": "Рост прямых иностранных инвестиций в сектор в 2024 году"
      }
    ]
  },
  "uz": {
    "heading": "Moliyaviy xizmatlar",
    "text": "O'zbekistonning moliyaviy sektori hozirda o'sish bosqichida. O'n yillar davomida xalqaro maydonda cheklangan faollikdan so'ng, sektor tezlashmoqda. 2024-yilda sektorga qilingan to'g'ridan-to'g'ri xorijiy investitsiyalar hajmi 47% ga o'sdi. Bugungi kunda O'zbekiston iqtisodiy o'sishining sezilarli qismi moliyaviy sektor hisobiga kelmoqda, bu sektor mamlakatning YIMining 43,3% ini tashkil etadi.\n\nToshkent Xalqaro Moliyaviy Markazi (TXMM) bank sektorini, kapital bozori va sug'urta xizmatlarini transformatsiya qilib, 15 000 dan 20 000 gacha yangi ish o'rinlarini yaratish, shuningdek, xalqaro investorlarga soliq imtiyozlari va soddalashtirilgan tartibga solish tizimini taqdim etish kerak.\n\nMoliyaviy texnologiyalar ham tez o'sayotgan kichik sektor hisoblanadi. Uzum – milliy raqamli ekotizim bo'lib, O'zbekistonning birinchi unicorn kompaniyasidir. Uning fintech bo'limi, Uzum Bank, turli xil mahsulotlarni taklif etadi va moliyaviy inklyuzivlikni oshiradi.\n\nMamlakat iqtisodiyotida kichik va o'rta biznes sektori muhim rol o'ynaydi. 2021-yilda KOB ning O'zbekiston YAIMidagi ulushi taxminan 54% ni tashkil etdi va mamlakatdagi ishchilarning taxminan 78% i ushbu sektorda ishlaydi. KOB sektorini qo'llab-quvvatlash bo'yicha katta tashabbus sifatida “Trade Connect Central Asia+” (TCCA+) (Savdo Markaziy Osiyoni Bog'laydi+) Xalqaro Islomiy Savdo-Finans Korporatsiyasi tomonidan ishlab chiqilgan dastur, savdo moliyalashtirishini rag'batlantirish va mintaqaviy iqtisodiy hamkorlikni kuchaytirishga qaratilgan.",
    "slides": [
      {
        "heading": "36",
        "text": "Faol banklar soni"
      },
      {
        "heading": "43.3%",
        "text": "YAIMga qo'shgan ulushi"
      },
      {
        "heading": "47%",
        "text": "2024 yilda sektorga to'g'ridan-to'g'ri xorijiy investitsiyalarning o'sishi"
      }
    ]
  }
}
</i18n>
