<script setup lang="ts">
import { ExploreCard } from "#layers/landing/modules/guide/explore"
import agriculture from "~/public/img/guide/explore/agriculture/agriculture.webp"
import auto from "@/public/img/guide/explore/auto/auto.webp"
import chemicals from "~/public/img/guide/explore/chemicals/chemicals.webp"
import construction from "~/public/img/guide/explore/construction/construction.webp"
import education from "~/public/img/guide/explore/education/education.webp"
import energy from "~/public/img/guide/explore/energy/energy.webp"
import finance from "~/public/img/guide/explore/finance/finance.webp"
import metals from "~/public/img/guide/explore/metals/metals.webp"
import pharma from "~/public/img/guide/explore/pharma/pharma.webp"
import textiles from "~/public/img/guide/explore/textiles/textiles.webp"
import technology from "~/public/img/guide/explore/technology/technology.webp"
import tourism from "~/public/img/guide/explore/tourism/tourism.webp"

const { t } = useI18n({ useScope: "local" })

const cards = computed(() => [
  {
    label: t("agriculture"),
    image: agriculture,
    link: "/guide/explore/agriculture"
  },
  {
    label: t("automotive"),
    image: auto,
    link: "/guide/explore/automotive"
  },
  {
    label: t("chemicals"),
    image: chemicals,
    link: "/guide/explore/chemicals"
  },
  {
    label: t("construction"),
    image: construction,
    link: "/guide/explore/construction"
  },
  {
    label: t("education"),
    image: education,
    link: "/guide/explore/education"
  },
  {
    label: t("energy"),
    image: energy,
    link: "/guide/explore/energy"
  },
  {
    label: t("finance"),
    image: finance,
    link: "/guide/explore/finance"
  },
  {
    label: t("metals"),
    image: metals,
    link: "/guide/explore/metals"
  },
  {
    label: t("pharma"),
    image: pharma,
    link: "/guide/explore/pharma"
  },
  {
    label: t("textiles"),
    image: textiles,
    link: "/guide/explore/textiles"
  },
  {
    label: t("technology"),
    image: technology,
    link: "/guide/explore/technology"
  },
  {
    label: t("tourism"),
    image: tourism,
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
