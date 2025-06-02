<script setup lang="ts">
import SectionGrid from "#layers/landing/modules/reason/ui/section-grid.vue"

import type { ApexOptions } from 'apexcharts'
import apexchart from 'vue3-apexcharts'

const { t } = useI18n({useScope: 'local'})

const options: ApexOptions = {
  chart: {
    type: 'bar',
    height: 250,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  plotOptions: {
    bar: {
      dataLabels: {
        position: 'center',
        total: {
          enabled: true,
          style: {
            fontSize: '12px',
            fontWeight: 900,
          },
        },
      },
    },
  },
  xaxis: {
    categories: [2019, 2020, 2021, 2022, 2023, 2024],
  },
  title: {
    // text: 'Foreign trade turnover (FTT) (January – December 2024 y., billion US Dollars)',
    // floating: false,
    // offsetY: -6,
    // align: 'center',
    // style: {
    //   color: '#444',
    //   fontSize: '12px',
    // },
  },
}

const series = [
  {
    name: 'Import',
    data: [24.3, 21.2, 25.5, 30.8, 38.1, 38.9],
    color: '#92D050',
  },
  {
    name: 'Export',
    data: [17.5, 15.1, 16.7, 19.7, 24.4, 26.9],
    color: '#076785',
  },
]
</script>

<template>
  <div class="rounded-xl p-2 shadow-2xl">
    <ClientOnly>
      <div>
        <p class="text-center text-xs font-semibold !text-black">
          Foreign trade turnover (FTT) (January – December 2024 y., billion US Dollars)
        </p>
        <apexchart :options="options" :series="series" height="250" type="bar" />
      </div>
    </ClientOnly>
  </div>
</template>

<style scoped></style>
