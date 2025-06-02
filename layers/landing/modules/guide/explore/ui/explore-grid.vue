<script setup lang="ts">
import { ExploreCard } from "#layers/landing/modules/guide/explore"

const { t } = useI18n({ useScope: "local" })

const cards = computed(() => [
  {
    label: t("agriculture"),
    image: "https://dev-portal.miit.uz/uploads/guide/agriculture.png",
    link: "/guide/explore/agriculture"
  },
  {
    label: t("automotive"),
    image: "https://dev-portal.miit.uz/uploads/guide/auto.png",
    link: "/guide/explore/automotive"
  },
  {
    label: t("chemicals"),
    image: "https://dev-portal.miit.uz/uploads/guide/chemicals.png",
    link: "/guide/explore/chemicals"
  },
  {
    label: t("construction"),
    image: "https://dev-portal.miit.uz/uploads/guide/construction.png",
    link: "/guide/explore/construction"
  },
  {
    label: t("education"),
    image: "https://dev-portal.miit.uz/uploads/guide/education.png",
    link: "/guide/explore/education"
  },
  {
    label: t("energy"),
    image: "https://dev-portal.miit.uz/uploads/guide/energy.png",
    link: "/guide/explore/energy"
  },
  {
    label: t("finance"),
    image: "https://dev-portal.miit.uz/uploads/fin_serv.jpg",
    link: "/guide/explore/finance"
  },
  {
    label: t("metals"),
    image: "https://dev-portal.miit.uz/uploads/guide/metals.png",
    link: "/guide/explore/metals"
  },
  {
    label: t("pharma"),
    image: "https://dev-portal.miit.uz/uploads/guide/pharma.png",
    link: "/guide/explore/pharma"
  },
  {
    label: t("textiles"),
    image: "https://dev-portal.miit.uz/uploads/guide/textiles.png",
    link: "/guide/explore/textiles"
  },
  {
    label: t("technology"),
    image: "https://dev-portal.miit.uz/uploads/guide/technology.webp",
    link: "/guide/explore/technology"
  },
  {
    label: t("tourism"),
    image: "https://dev-portal.miit.uz/uploads/guide/tourism.png",
    link: "/guide/explore/tourism"
  }
])
</script>

<template>
  <section>
    <div class="container-7xl">
      <div class="p-section">
        <div class="grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
          <explore-card v-for="({ image, label, link }, idx) in cards" :key="idx" :link :image :label />
        </div>
      </div>
    </div>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "agriculture": "Agriculture",
    "automotive": "Automotive",
    "chemicals": "Chemicals",
    "construction": "Construction & Housing",
    "education": "Education",
    "energy": "Energy",
    "finance": "Financial Services",
    "metals": "Metals and Mining",
    "pharma": "Pharmaceuticals",
    "textiles": "Textiles",
    "technology": "Technology",
    "tourism": "Tourism"
  },
  "ru": {
    "agriculture": "Сельское хозяйство",
    "automotive": "Автомобилестроение",
    "chemicals": "Химическая промышленность",
    "construction": "Строительство и жилье",
    "education": "Образование",
    "energy": "Энергетика",
    "finance": "Финансовые услуги",
    "metals": "Металлургия и горнодобывающая промышленность",
    "pharma": "Фармацевтика",
    "textiles": "Текстильная промышленность",
    "technology": "Технологии",
    "tourism": "Туризм"
  },
  "uz": {
    "agriculture": "Qishloq xo‘jaligi",
    "automotive": "Avtomobilsozlik",
    "chemicals": "Kimyo sanoati",
    "construction": "Qurilish va uy-joy",
    "education": "Ta'lim",
    "energy": "Energetika",
    "finance": "Moliyaviy xizmatlar",
    "metals": "Metallurgiya va konchilik",
    "pharma": "Farmatsevtika",
    "textiles": "To‘qimachilik sanoati",
    "technology": "Texnologiyalar",
    "tourism": "Turizm"
  }
}
</i18n>
