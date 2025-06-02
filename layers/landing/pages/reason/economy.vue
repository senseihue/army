<script setup lang="ts">
import { EconomyHero } from "#layers/landing/modules/reason/economy"
import { ReasonNav} from "#layers/landing/modules/reason/ui"
import EconomyChart from "#layers/landing/modules/reason/economy/ui/economy-chart.vue"
import SectionGrid from "#layers/landing/modules/reason/ui/section-grid.vue"

definePageMeta({ fixedHeader: true })

</script>

<template>
  <div>
    <economy-hero />
    <reason-nav

    />

    <economy-chart />

    <section-grid>
      <template #left>
      </template>
      <template #right>
      </template>
    </section-grid>
    <section-grid>
      <template #left>
      </template>
      <template #right>
      </template>
    </section-grid>
  </div>
</template>


<i18n lang="json">
{
  "en": {
    "chart-description": "The GDP growth in 2024 reached 6.5%, reflecting a strong recovery and robust economic performance. This growth rate indicates a positive outlook for the country's economy. It reflects a high development pace, especially in construction, industry, and agriculture. The government actively supports the private sector and improves business conditions, which helps maintain prospects for continued economic growth.",
    "inflation-rate": {
      "title": "",
      "sub-title": ""
    }
  },
  "ru": {
    "chart-description": "Рост ВВП в 2024 году достиг 6,5%, что свидетельствует о быстром восстановлении и устойчивых экономических показателях. Такие темпы роста указывают на позитивные перспективы для экономики страны. Они отражают высокие темпы развития, особенно в строительстве, промышленности и сельском хозяйстве. Правительство активно поддерживает частный сектор и улучшает условия ведения бизнеса, что помогает поддерживать перспективы дальнейшего экономического роста.",
    "inflation-rate":  {
      "title":  "",
      "sub-title":  ""
    }
  },
  "uz": {
    "chart-description": "2024-yilda yalpi ichki mahsulotning o'sishi 6,5 foizga yetdi, bu tez tiklanish va barqaror iqtisodiy ko'rsatkichlardan dalolat beradi. Bunday o'sish sur'atlari mamlakat iqtisodiyoti uchun ijobiy istiqbollarni ko'rsatadi. Ular, ayniqsa, qurilish, sanoat va qishloq xo'jaligida rivojlanishning yuqori sur'atlarini aks ettiradi. Hukumat xususiy sektorni faol qo'llab-quvvatlaydi va biznes sharoitlarini yaxshilaydi, bu esa keyingi iqtisodiy o'sish istiqbollarini qo'llab-quvvatlashga yordam beradi.",
    "inflation-rate":  {
      "title":  "",
      "sub-title":  ""
    }
  }
}
</i18n>
