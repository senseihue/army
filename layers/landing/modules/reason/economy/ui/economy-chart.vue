<script setup lang="ts">
import SectionGrid from "#layers/landing/modules/reason/ui/section-grid.vue"

import type { ApexOptions } from 'apexcharts'
import apexchart from 'vue3-apexcharts'

const { t } = useI18n({useScope: 'local'})
const options: ApexOptions = {
  chart: {
    type: 'area',
    height: 250,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    categories: [2019, 2020, 2021, 2022, 2023, 2024],
  },
  title: {
    text: 'GDP growth',
    floating: true,
    offsetY: -6,
    align: 'center',
    style: {
      color: '#444',
    },
  },
}

const series = [
  {
    name: 'Uzbekistan',
    data: [5.7, 1.9, 6.1, 5.4, 6.0, 6.5],
    color: '#80CAFF',
  },
  {
    name: 'Middle East and Central Asia',
    data: [2.0, -2.2, 4.2, 4.1, 3.1, 2.8],
    color: '#3E549F',
  },
]
</script>

<template>
  <div class="rounded-xl p-2 shadow-2xl">
    <ClientOnly>
      <apexchart :options="options" :series="series" height="250" type="area" />
    </ClientOnly>
  </div>
  <section-grid>
    <template #left>

    </template>
    <template #right>
      <p>
        {{ t('description') }}
      </p>
    </template>
  </section-grid>
</template>

<style scoped></style>

<i18n lang="json">
{
  "en": {
    "description": "The GDP growth in 2024 reached 6.5%, reflecting a strong recovery and robust economic performance. This growth rate indicates a positive outlook for the country's economy. It reflects a high development pace, especially in construction, industry, and agriculture. The government actively supports the private sector and improves business conditions, which helps maintain prospects for continued economic growth."

  },
  "ru": {
    "description": "Рост ВВП в 2024 году достиг 6,5%, что свидетельствует о быстром восстановлении и устойчивых экономических показателях. Такие темпы роста указывают на позитивные перспективы для экономики страны. Они отражают высокие темпы развития, особенно в строительстве, промышленности и сельском хозяйстве. Правительство активно поддерживает частный сектор и улучшает условия ведения бизнеса, что помогает поддерживать перспективы дальнейшего экономического роста."
  },
  "uz": {
    "description": "2024-yilda yalpi ichki mahsulotning o'sishi 6,5 foizga yetdi, bu tez tiklanish va barqaror iqtisodiy ko'rsatkichlardan dalolat beradi. Bunday o'sish sur'atlari mamlakat iqtisodiyoti uchun ijobiy istiqbollarni ko'rsatadi. Ular, ayniqsa, qurilish, sanoat va qishloq xo'jaligida rivojlanishning yuqori sur'atlarini aks ettiradi. Hukumat xususiy sektorni faol qo'llab-quvvatlaydi va biznes sharoitlarini yaxshilaydi, bu esa keyingi iqtisodiy o'sish istiqbollarini qo'llab-quvvatlashga yordam beradi."
  }
}
</i18n>
