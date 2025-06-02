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
</template>

<style scoped></style>
