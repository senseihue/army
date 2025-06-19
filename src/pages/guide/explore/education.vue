<script setup lang="ts">
import {
  ExploreSectorContent,
  ExploreSectorFooter,
  ExploreSectorHero,
  ExploreSectorSlide,
  ExploreSectorSlider
} from "~/features/guide/explore"
import hero from "public/img/guide/explore/education/hero.webp"
import laptop from "public/img/guide/explore/education/laptop.webp"
import building from "public/img/guide/explore/education/building.webp"

const { t, tm, rt } = useI18n({ useScope: "local" })

useHead({ title: t("heading") })
definePageMeta({ fixedHeader: true })

const fileUrl = "https://dev-portal.miit.uz/uploads/files/education.pdf"

const images = computed(() => ({
  hero: hero,
  slider: laptop,
  content: building
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
    "heading": "Education",
    "text": "Education is a key pillar of Uzbekistan's long-term economic growth, with ambitious targets set by the government to establish the sector as world-leading. With offerings of a first-class education from pre-school to university, and a 99% national literacy rate, Uzbekistan stands ready to lead the way.\n\nBy 2030, the government has also set a target of 50% university enrolment for high school graduates, with a strong focus on specialised technical fields. To reach this goal, plans are underway to build 30 new universities. A key objective is to partner with foreign universities to establish branches or create dual degree programmes to open doors for international education collaboration. The government has also committed to a considerable 44.2% increase in the higher education budget.\n\nOne of Uzbekistan’s educational strengths is language. With priority given to English, German, Turkish, Arabic, Korean, Japanese and others, this strategy is producing a multilingual workforce which makes Uzbekistan an attractive destination for international companies.",
    "slides": [
      {
        "heading": "99%",
        "text": "literacy rate"
      },
      {
        "heading": "210 universities",
        "text": "(115 state, 65 private, 30 international)"
      },
      {
        "heading": "527,737",
        "text": "employed teachers"
      }
    ]
  },
  "ru": {
    "heading": "Образование",
    "text": "Образование является ключевым аспектом долгосрочного экономического роста Узбекистана. Правительство поставило амбициозные цели, направленные на превращение образовательного сектора в один из лучших в мире. Узбекистан предлагает качественное образование от детских садов до университетов, а уровень грамотности составляет 99%.\n\nК 2030 году правительство планирует достичь 50% охвата выпускников школ высшим образованием с особым акцентом на технические специальности. Для достижения этой цели планируется строительство 30 новых университетов. Одним из ключевых направлений является сотрудничество с иностранными университетами, включающее открытие филиалов и создание совместных программ. Также предусмотрено увеличение бюджета на высшее образование на 44,2%.\n\nОдной из сильных сторон образования Узбекистана является изучение иностранных языков. Приоритетом являются английский, немецкий, турецкий, арабский, корейский, японский, русский и другие. Данная стратегия способствует созданию многоязычной среды профессионалов, что делает Узбекистан привлекательным местом для международных компаний.",
    "slides": [
      {
        "heading": "99%",
        "text": "Уровень грамотности"
      },
      {
        "heading": "210 университетов",
        "text": "(115 государственных, 65 частных, 30 международных)"
      },
      {
        "heading": "527 737",
        "text": "учителей"
      }
    ]
  },
  "uz": {
    "heading": "Ta'lim",
    "text": "Ta'lim O'zbekistonning uzoq muddatli iqtisodiy o'sishida muhim sektor hisoblanadi. Hukumat ta'lim sektorini dunyodagi eng yaxshilaridan biriga aylantirishga qaratilgan ambitsiyali maqsadlarni belgilagan. O'zbekiston bog'cha darajasidan tortib universitetlargacha sifatli ta'lim taklif etadi va savodxonlik darajasi 99% ni tashkil etadi.\n\n2030 yilga kelib hukumat maktab bitiruvchilarining 50% ni oliy ta'lim bilan qamrab olishni, ayniqsa texnik sohalarga e'tibor qaratishni rejalashtirmoqda. Ushbu maqsadga erishish uchun 30 ta yangi universitet qurilishi mo'ljallangan. Muhim yo'nalishlardan biri xalqaro universitetlar bilan hamkorlik qilib, filiallar ochish yoki qo'shma dasturlar yaratish, xalqaro ta'lim hamkorligini rivojlantirishdir. Shuningdek, oliy ta'lim budjetining 44,2% ga oshirilishi rejalashtirilgan.\n\nO'zbekiston ta'limining kuchli tomonlaridan biri tillarni o'rganishdir. Prioritet tillar qatoriga ingliz, nemis, turk, arab, koreys, yapon, rus va boshqa tillar kiradi. Ushbu strategiya ko'p tilli ish kuchini yaratishga yordam beradi, bu esa O'zbekistonni xalqaro kompaniyalar uchun jozibador joyga aylantiradi.",
    "slides": [
      {
        "heading": "99%",
        "text": "Savodxonlik darajasi"
      },
      {
        "heading": "210 universities",
        "text": "(115 davlat, 65 xususiy, 30 xalqaro)"
      },
      {
        "heading": "527,737",
        "text": "O'qituvchilar soni"
      }
    ]
  }
}
</i18n>
