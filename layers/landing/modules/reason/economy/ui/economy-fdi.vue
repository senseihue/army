<template>
  <div class="p-section container-7xl">
    <ClientOnly>
      <div>
        <p class="text-center font-bold text-[#0543c1] sm:text-lg md:text-xl">
          {{ t('FDI_INFLOW_TITLE') }}
        </p>
        <apexchart :options="options" :series="series" height="250" type="bar" />
      </div>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import type { ApexOptions } from 'apexcharts'
import apexchart from 'vue3-apexcharts'

const { t } = useI18n({ useScope: 'local' })
const options: ApexOptions = {
  chart: {
    type: 'bar',
    height: 250,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      dataLabels: {
        position: 'top',
      },
    },
  },
  dataLabels: {
    enabled: true,
    offsetY: -15,
    style: {
      fontSize: '12px',
      colors: ['#0078B5', '#013D8C'],
    },
  },
  xaxis: {
    categories: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
  },
  title: {
    // text: 'FDI INFLOWS IN 2017 – 2024, MLN USD',
    // floating: true,
    // offsetY: -6,
    // align: 'center',
    // style: {
    //   fontSize: '18px',
    //   color: '#0543c1',
    // },
  },
}

const series = [
  {
    name: 'Projects',
    data: [111, 300, 345, 635, 812, 981, 1402, 2680],
    color: '#203864',
  },
  {
    name: 'FDI',
    data: [3349, 2848, 4200, 6685, 8612, 9989, 22372, 34653],
    color: '#064AD4',
  },
]
</script>

<style scoped></style>

<i18n lang="json">
{
  "en": {
    "FDI_INFLOW_TITLE": "FDI INFLOWS IN 2017 – 2024, MLN USD"
  },
  "uz": {
    "FDI_INFLOW_TITLE": "2017 – 2024 YILLARDA FDI OQIMI, MLN. USD"
  },
  "ru": {
    "FDI_INFLOW_TITLE": "ПРИТОК ПИИ В 2017-2024 ГГ., МЛН ДОЛЛ. США"
  }
}
</i18n>
