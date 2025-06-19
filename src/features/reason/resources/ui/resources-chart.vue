<template>
  <div class="relative bg-blue-bright">
    <!--  Star  -->
    <div v-if="showIllustration" class="absolute left-10 top-1/2 z-0 -translate-y-1/2 md:right-20">
      <Icon
        class="animation-duration-50s h-96 w-96 animate-spin fill-white md:h-[800px] md:w-[700px]"
        name="icon:star"
      />
    </div>
    <div class="container-7xl py-20">
      <h2
        class="mb-3 text-center text-xl font-bold leading-6 text-blue-midnight"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        {{ t("chart.natural_resources.resources_chart_title") }}
      </h2>
      <div class="mb-12 text-center text-xl italic text-blue-command" data-aos="fade-up" data-aos-delay="50">
        {{ t("chart.natural_resources.resources_chart_description") }}
      </div>
      <div v-for="(chart, index) in charts" class="mb-8" data-aos="fade-up" :data-aos-delay="50 + index" :key="index">
        <h3 class="text-md mb-2 text-center font-semibold">{{ chart.title }}</h3>
        <ClientOnly>
          <apexchart class="bar-chart" height="300" type="bar" :options="chart.options" :series="chart.series" />
        </ClientOnly>
      </div>
      <div class="mt-4 flex gap-2">
        <div class="flex items-center gap-1">
          <span class="inline-block h-4 w-4 bg-blue-800"></span>
          <span class="inline-block text-sm">{{ t("chart.natural_resources.resources_chart_prospective") }}</span>
        </div>
        <div class="flex items-center gap-1">
          <span class="inline-block h-4 w-4 bg-green-400"></span>
          <span class="inline-block text-sm">{{ t("chart.natural_resources.resources_chart_operating") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { ApexOptions } from "apexcharts"
import apexchart from "vue3-apexcharts"

interface IProps {
  showIllustration?: boolean
}

withDefaults(defineProps<IProps>(), {
  showIllustration: false
})

const { t } = useI18n({ useScope: "local" })

// NOTE: need to keep "transparent" option to have gap between blue and green bars
const data = {
  solar: [
    { country: "UZBEKISTAN", prospective: 5697, transparent: 30, operating: 104 },
    { country: "KAZAKHSTAN", prospective: 150, transparent: 30, operating: 1049 },
    { country: "KYRGYZSTAN", prospective: 1350, transparent: 30, operating: null }
  ],
  wind: [
    { country: "UZBEKISTAN", prospective: 3100, transparent: 30, operating: 0 },
    { country: "KAZAKHSTAN", prospective: 3353, transparent: 30, operating: 902 },
    { country: "KYRGYZSTAN", prospective: 1350, transparent: 30, operating: null }
  ]
}

const createChartOptions = (max: number): ApexOptions => ({
  chart: {
    stacked: true,
    stackOnlyBar: true,
    toolbar: {
      show: false
    },
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350
      }
    },
    fontFamily: "Inter"
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "60%",
      dataLabels: {
        position: "center"
      }
    }
  },
  colors: ["#173499", "transparent", "#1fb955"],
  dataLabels: {
    enabled: true,
    formatter: function (val: number) {
      return val > 200 ? val : ""
    },
    style: {
      colors: ["#fff"]
    }
  },
  xaxis: {
    categories: [t("chart.natural_resources.UZB"), t("chart.natural_resources.KZ"), t("chart.natural_resources.KRZ")  ],
    labels: {
      show: true
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    max: max
  },
  yaxis: {
    labels: {
      align: "center",
      style: {
        fontSize: "12px"
      }
    }
  },
  grid: {
    show: false
  },
  legend: {
    show: false
  },
  tooltip: {
    enabled: true
  },
  noData: {
    text: "There is no recorded data",
    align: "center",
    verticalAlign: "middle",
    offsetX: 0,
    offsetY: 0,
    style: {
      color: "#000",
      fontSize: "14px",
      fontFamily: "Inter"
    }
  },
  responsive: [
    {
      breakpoint: 712,
      options: {
        plotOptions: {
          bar: {
            horizontal: false
          }
        }
      }
    }
  ]
})

const charts = [
  {
    title: t("chart.natural_resources.resources_chart_solar"),
    options: createChartOptions(6000),
    series: [
      {
        name: "Prospective",
        data: data.solar.map((item) => item.prospective)
      },
      {
        name: "Transparent",
        data: data.solar.map((item) => item.transparent)
      },
      {
        name: "Operating",
        data: data.solar.map((item) => item.operating)
      }
    ]
  },
  {
    title: t("chart.natural_resources.resources_chart_wind"),
    options: createChartOptions(6000),
    series: [
      {
        name: "Prospective",
        data: data.wind.map((item) => item.prospective)
      },
      {
        name: "Transparent",
        data: data.solar.map((item) => item.transparent)
      },
      {
        name: "Operating",
        data: data.wind.map((item) => item.operating)
      }
    ]
  }
]
</script>

<i18n>
{
  "ru": {
    "chart": {
      "natural_resources": {
        "proven_table_title": "Доказанные ресурсы Узбекистана",
        "proven_table_resources": "Ресурсы",
        "proven_table_rank": "Место в мире",
        "proven_table_presources": "Доказанные ресурсы",
        "resources_chart_title": "Узбекистан обладает наибольшим потенциалом ветровой и солнечной энергии в Центральной Азии",
        "resources_chart_description": "Мощность страны по статусу и типу в мегаваттах",
        "resources_chart_solar": "Солнечная энергия",
        "resources_chart_wind": "Ветровая энергия",
        "resources_chart_prospective": "Перспективная",
        "resources_chart_operating": "Действующая",
        "UZB": "УЗБЕКИСТАН",
        "KZ": "КАЗАХСТАН",
        "KRZ": "КЫРГЫЗСТАН"
      }
    }
  },
  "en": {
    "chart": {
      "natural_resources": {
        "proven_table_title": "Uzbekistan's Proven Resources",
        "proven_table_resources": "Resources",
        "proven_table_rank": "Rank in the World",
        "proven_table_presources": "Proven Resources",
        "resources_chart_title": "Uzbekistan Has the Most Promising Wind and Solar Energy Potential in Central Asia",
        "resources_chart_description": "Country Capacity by Status and Type in Megawatts",
        "resources_chart_solar": "Solar",
        "resources_chart_wind": "Wind",
        "resources_chart_prospective": "Prospective",
        "resources_chart_operating": "Operating",
        "UZB": "UZBEKISTAN",
        "KZ": "KAZAKHSTAN",
        "KRZ": "KYRGYZSTAN"
      }
    }
  },
  "uz": {
    "chart": {
      "natural_resources": {
        "proven_table_title": "O‘zbekistonning tasdiqlangan resurslari",
        "proven_table_resources": "Resurslar",
        "proven_table_rank": "Jahondagi o‘rni",
        "proven_table_presources": "Tasdiqlangan resurslar",
        "resources_chart_title": "O‘zbekiston Markaziy Osiyoda eng istiqbolli shamol va quyosh energiyasi salohiyatiga ega",
        "resources_chart_description": "Mamlakat quvvati holat va tur bo‘yicha megavattlarda",
        "resources_chart_solar": "Quyosh",
        "resources_chart_wind": "Shamol",
        "resources_chart_prospective": "Istiqbolli",
        "resources_chart_operating": "Ishlayotgan",
        "UZB": "O’ZBEKISTON",
        "KZ": "QOZOG’ISTON",
        "KRZ": "QIRG’IZISTON"
      }
    }
  }
}
</i18n>

<style>
.bar-chart path {
  clip-path: inset(0% 0% 0% 0% round 32px);
}
</style>
