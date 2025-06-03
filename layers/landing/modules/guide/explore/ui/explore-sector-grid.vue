<script setup lang="ts">
import { ExploreSectorCard } from "#layers/landing/modules/guide/explore"

const { t, tm, rt } = useI18n({ useScope: "local" })
</script>

<template>
  <section class="bg-blue-bright">
    <div class="container-7xl">
      <div class="p-section">
        <div class="mb-24">
          <h2 class="text-center text-xl font-bold text-blue-midnight">{{ t("heading") }}</h2>
          <p class="text-center text-xl font-bold text-blue-command">{{ t("text") }}</p>
        </div>

        <div class="grid justify-center gap-24 sm:grid-cols-2 lg:grid-cols-3">
          <explore-sector-card v-for="(card, idx) in tm('cards')" :sequence="idx + 1" :text="rt(card)" :key="idx" />
        </div>
      </div>
    </div>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "heading": "The strategy for the development of agriculture",
    "text": "Key reforms and indicators - 9 strategic priorities",
    "cards": [
      "Ensuring food security of population of the Republic of Uzbekistan",
      "Rational use of natural resources and environmental protection",
      "Development of a system of agricultural science, education, information and consulting services",
      "Creating a favourable agribusiness climate and value chains",
      "The development of modern public administration systems",
      "Rural development",
      "Reducing the role of the state and increasing investment attractiveness",
      "Diversification of government spending in support of the sector",
      "Development of a reliable system of industry statistics"
    ]
  },
  "ru": {
    "heading": "Стратегия развития сельского хозяйства",
    "text": "Ключевые реформы и показатели - 9 стратегических приоритетов",
    "cards": [
      "Обеспечение продовольственной безопасности Республики Узбекистан",
      "Рациональное использование природных ресурсов и охрана окружающей среды",
      "Развитие системы сельскохозяйственной науки, образования, информационных и консультационных услуг",
      "Создание благоприятного климата для агробизнеса и цепочек добавленной стоимости",
      "Развитие современных систем государственного управления",
      "Развитие сельских районов",
      "Снижение роли государства и повышение инвестиционной привлекательности",
      "Диверсификация государственных расходов на поддержку сектора",
      "Развитие надежной системы отраслевой статистики"
    ]
  },
  "uz": {
    "heading": "O'zbekiston Respublikasi qishloq xo'jaligini rivojlantirish strategiyasi",
    "text": "Asosiy islohotlar va ko'rsatkichlar - 9 strategik maqsadlar",
    "cards": [
      "O'zbekiston Respublikasining oziq-ovqat xavfsizligini ta'minlash",
      "Tabiiy resurslardan oqilona foydalanish va atrof- muhitni muhofaza qilish",
      "Qishloq xo'jaligi fanlari, ta'lim, axborot va maslahat xizmatlarini rivojlantirish",
      "Agrobiznes va qo'shilgan qiymat zanjirlarini rivojlantirish uchun qulay iqlim yaratish",
      "Zamonaviy davlat boshqaruvi tizimlarini rivojlantirish",
      "Qishloqlar taraqqiyoti  Qishloq hududlarini rivojlantirish",
      "Sektorda davlat ishtirokini kamaytirish va investitsion jozibadorlikni oshirish",
      "Sektorni qo'llab-quvvatlash uchun davlat xarajatlarini diversifikatsiya qilish",
      "Tarmoqqa oid statistikani ishonchli tizimini rivojlantirish"
    ]
  }
}
</i18n>
