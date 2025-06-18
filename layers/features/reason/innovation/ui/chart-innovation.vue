<script lang="ts" setup>
import apexchart from "vue3-apexcharts"
import type { ApexOptions } from "apexcharts"

const { t } = useI18n({ useScope: "local" })

const createChartOptions = (): ApexOptions => ({
  chart: {
    type: "bar",
    toolbar: {
      show: false
    }
  },
  xaxis: {
    categories: [2020, 2021, 2022, 2023]
  },
  yaxis: {
    labels: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      borderRadius: 12,
      columnWidth: "50%",
      dataLabels: {
        position: "top"
      }
    }
  },
  dataLabels: {
    enabled: true,
    offsetY: -20,
    offsetX: 6,
    style: {
      fontSize: "16px",
      colors: ["#1D1C1C"]
    }
  },
  stroke: {
    width: 10,
    colors: ["transparent"]
  },
  colors: ["#173499"]
})

const creteDonutChartOptions = (labels: Array<string>, colors: Array<string>) => ({
  chart: {
    type: "donut"
  },
  legend: {
    position: "bottom"
  },
  labels,
  colors
})

const charts = ref([
  {
    title: t("chart.innovation_chart.companies"),
    options: createChartOptions(),
    series: [
      {
        name: t("chart.innovation_chart.companies"),
        data: [411, 523, 1122, 1652]
      }
    ],
    type: "bar"
  },
  {
    title: t("chart.innovation_chart.foriegn_it_companies"),
    options: createChartOptions(),
    series: [
      {
        name: t("chart.innovation_chart.foriegn_it_companies"),
        data: [14, 23, 156, 426]
      }
    ],
    type: "bar"
  },
  {
    title: t("chart.innovation_chart.types_it_companies"),
    options: creteDonutChartOptions(
      [
        t("chart.innovation_chart.it_service"),
        t("chart.innovation_chart.products"),
        t("chart.innovation_chart.it_educational")
      ],
      ["#173499", "#DCDCDD", "#10A230"]
    ),

    series: [54, 24, 22],
    type: "donut"
  },
  {
    title: t("chart.innovation_chart.exporters"),
    options: createChartOptions(),
    series: [
      {
        name: t("chart.innovation_chart.exporters"),
        data: [59, 104, 353, 551]
      }
    ],
    type: "bar"
  },
  {
    title: t("chart.innovation_chart.volume"),
    options: createChartOptions(),
    series: [
      {
        name: t("chart.innovation_chart.volume"),
        data: [16.3, 46.6, 140.9, 344]
      }
    ],
    type: "bar"
  },
  {
    title: t("chart.innovation_chart.exports_by_country"),
    options: creteDonutChartOptions(
      [
        t("chart.innovation_chart.north_america"),
        t("chart.innovation_chart.eu_uk"),
        t("chart.innovation_chart.cis"),
        t("chart.innovation_chart.apac"),
        t("chart.innovation_chart.mena")
      ],
      ["#173499", "#0099B5", "#0A6D2C", "#10A230", "#DCDCDD"]
    ),
    series: [44, 24, 20, 8, 4],
    type: "donut"
  }
])
</script>

<template>
  <div class="bg-blue-bright">
    <div class="container-7xl py-20">
      <h2 class="mb-12 text-center text-xl font-bold text-blue-midnight" data-aos="fade-up" data-aos-delay="50">
        {{ t("chart.innovation_chart.title") }}
      </h2>

      <div class="grid gap-2 lg:grid-cols-3">
        <div v-for="(chart, idx) in charts" data-aos="fade-up" :data-aos-delay="50 + idx" :key="idx">
          <h3 class="relative mb-2 text-center text-xl font-semibold text-gray-olive">{{ chart.title }}</h3>
          <ClientOnly>
            <apexchart height="300" :options="chart.options" :series="chart.series" :type="chart.type" />
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "ru": {
    "chart": {
      "innovation_chart": {
        "title": "Путь к совершенству в сфере IT",
        "companies": "Компании (Зарегистрированные в IT-парк)",
        "foriegn_it_companies": "Иностранные IT-компании",
        "types_it_companies": "Типы IT-компаний",
        "exporters": "Экспортеры",
        "volume": "Объем (в млн долларов США)",
        "exports_by_country": "Экспорт по странам",
        "it_service": "IT сервисы",
        "products": "IT Продукты",
        "it_educational": "IT обучение",
        "north_america": "Северная Америка",
        "eu_uk": "ЕС + Великобритания",
        "cis": "СНГ",
        "apac": "Азиатско-Тихоокеанский регион",
        "mena": "Средний Восток и Северная Африка"
      }
    }
  },
  "en": {
    "chart": {
      "innovation_chart": {
        "title": "The path to IT excellence",
        "companies": "Companies",
        "foriegn_it_companies": "Foreign IT companies",
        "types_it_companies": "Types of IT companies",
        "exporters": "Exporters",
        "volume": "Volume (million dollars)",
        "exports_by_country": "Exports by country",
        "it_service": "IT services",
        "products": "Products",
        "it_educational": "IT educational",
        "north_america": "North America",
        "eu_uk": "EU + UK",
        "cis": "CIS",
        "apac": "APAC",
        "mena": "MENA"
      }
    }
  },
  "uz": {
    "chart": {
      "innovation_chart": {
        "title": "IT taraqqiyoti",
        "companies": "Korxonalar",
        "foriegn_it_companies": "Xorijiy IT korxonalar",
        "types_it_companies": "IT korxonalar turlari",
        "exporters": "Eksportchilar",
        "volume": "Hajm (million AQSH dollari)",
        "exports_by_country": "Eksport mamlakat bo'yicha",
        "it_service": "IT xizmatlar",
        "products": "IT mahsulotlar",
        "it_educational": "It ta'lim",
        "north_america": "Shimoliy America",
        "eu_uk": "Evropa ittifoqi + Buyuk Britaniya",
        "cis": "MDH davlatlari",
        "apac": "Osiyo Tinch okeanimintaqa",
        "mena": "Yaqin Sharq Shimoliy Afrika"
      }
    }
  }
}
</i18n>
