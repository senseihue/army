<script setup lang="ts">
import {
  ExploreSectorContent,
  ExploreSectorFooter,
  ExploreSectorHero,
  ExploreSectorSlide,
  ExploreSectorSlider
} from "#layers/landing/modules/guide/explore"
import hero from "@/public/img/guide/explore/metals/hero.png"
import cray from "@/public/img/guide/explore/metals/cray.png"
import mine from "@/public/img/guide/explore/metals/mine.png"
const { t, tm, rt } = useI18n({ useScope: "local" })

useHead({ title: t("heading") })
definePageMeta({ fixedHeader: true })

const fileUrl = "https://dev-portal.miit.uz/uploads/files/metals-and-mining.pdf"

const images = computed(() => ({
  hero: hero,
  slider: cray,
  content: mine
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
    "heading": "Metals and Mining",
    "text": "The metals and mining industry is the cornerstone of Uzbekistan's economy. Rich in mineral resources, the country's extractive sector continues to go from strength to strength. In 2023, its contribution to the country’s GDP was 6%, with $1.5 billion in investments.\n\nWith a favourable investment climate and stable legal framework, metals and mining continues to attract interest from across the globe. For example, gold exports totalled approximately $5 billion in 2022, accounting for about 20-25% of Uzbekistan’s total export earnings.\n\nUzbekistan is also home to two of the biggest mining firms in the world: the Navoi Mining and Metallurgical Company (NMMC), who operate the Muruntau mine, and rank among the top-four gold producers globally, and the Almalyk Mining and Metallurgical Complex (AMMC), Uzbekistan's flagship in non-ferrous metallurgy, with 36,000 miners on their books, producing copper-molybdenum, lead-zinc, gold and silver mining and situated in the Tashkent, Jizzakh, Namangan and Surkhandarya regions.\n\nThe industry also benefits from highly-qualified employees, a low-cost workforce and an abundance of energy resources – which together make Uzbekistan’s metals and mining sector an attractive destination for investment.",
    "slides": [
      {
        "heading": "15",
        "text": "World ranking for gold resources"
      },
      {
        "heading": "$5 bln",
        "text": "Gold exports in 2022"
      },
      {
        "heading": "$200 million",
        "text": "Uranium sales revenue"
      }
    ]
  },
  "ru": {
    "heading": "Металлургия и горнодобывающая промышленность",
    "text": "Металлургическая и горнодобывающая промышленность является фундаментальной основой экономики Узбекистана. Богатый минеральными ресурсами горнодобывающий сектор страны продолжает набирать обороты. В 2023 году вклад данного сектора в ВВП страны составил 6% с инвестициями в размере 1,5 млрд долл. США, экспорт золота в 2022 году составил около 5 млрд долл. США, что составляет около 20-25% от общей экспортной выручки страны.\n\nПри благоприятном инвестиционном климате и стабильной правовой базе металлургия и горнодобывающая промышленность продолжают привлекать интерес со всего мира. Узбекистан также является домом для двух крупнейших горнодобывающих компаний в мире: Навоийский Горно-Металлургический Комбинат (НГМК), один из крупнейших производителей золота в мире, а также Алмалыкский Горно-Металлургический Комбинат (АГМК), который является флагманом в цветной металлургии страны, добывающим медь, молибден, свинец, цинк, золото и серебро.\n\nБлагодаря высококвалифицированным сотрудникам и изобилию энергетических ресурсов металлургический и горнодобывающий сектор Узбекистана является одной из самых привлекательных отраслей для инвесторов.",
    "slides": [
      {
        "heading": "15",
        "text": "Место в мировом рейтинге золотых ресурсов"
      },
      {
        "heading": "$5 млрд",
        "text": "экспорт золота в 2022 году"
      },
      {
        "heading": "$200 млн",
        "text": "выручка от продажи урана"
      }
    ]
  },
  "uz": {
    "heading": "Metall va konchilik sanoati",
    "text": "Metallurgiya va konchilik sanoati O'zbekiston iqtisodiyotining asosiy poydevoridir. Boy minerallarga ega bo'lgan konchilik sektori mamlakatda davom etayotgan o'sish sur'atlarini saqlab qolmoqda. 2023-yilda ushbu sektorning mamlakat YAIMidagi ulushi 6% ni tashkil etdi va 1,5 milliard AQSh dollari miqdorida investitsiyalar o'tkazildi. 2022-yilda oltin eksporti taxminan 5 milliard AQSh dollari bo'lib, bu mamlakatning umumiy eksport daromadining 20-25% ini tashkil qiladi.\n\nYaxshi investitsiya muhiti va barqaror huquqiy baza bilan metallurgiya va konchilik sanoati dunyo bo'ylab qiziqishni jalb etishda davom etmoqda. O'zbekiston, shuningdek, dunyodagi ikkita eng yirik konchilik kompaniyalariga ega: Navoiyskiy Kon-Metallurgiya Kombinati (NKMK), dunyodagi eng yirik oltin ishlab chiqaruvchilardan biri, hamda Almalyk Kon-Metallurgiya Kombinati (AGMK), mamlakatning rangli metallurgiyasida yetakchi bo'lib, mis, molibden, qo'rg'oshin, rux, oltin va kumush qazib olish bilan mashhur.\n\nYuqori malakali xodimlar va energiya resurslarining ko'pligi tufayli O'zbekistonning metallurgiya va konchilik sektori investorlar uchun eng jozibador sohalardan biridir.",
    "slides": [
      {
        "heading": "10",
        "text": "Jahon oltin resurslari reytingidagi o'rin"
      },
      {
        "heading": "5 milliard dollar",
        "text": "2022 yilda oltin eksporti"
      },
      {
        "heading": "200 million dollar",
        "text": "Uranni sotishdan olingan daromad"
      }
    ]
  }
}
</i18n>
