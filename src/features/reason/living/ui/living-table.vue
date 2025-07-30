<script lang="ts" setup>
interface IProps {
  title?: string
  subTitle?: string
}

defineProps<IProps>()

const { t, tm, rt } = useI18n()
</script>

<template>
  <div class="flex h-full w-full flex-col justify-center bg-blue-command p-6 lg:p-12">
    <p class="ignore-text-format mb-2 text-center text-lg font-bold text-blue-light lg:text-xl">{{ t("title") }}</p>
    <p class="mb-7 text-center text-white lg:text-xl">{{ t("subtitle") }}</p>

    <!-- Add a div to wrap the table and allow horizontal scrolling -->
    <div class="table-wrapper !h-auto !overflow-x-auto">
      <table class="w-full !min-w-[380px]">
        <thead class="bg-transparent">
          <tr>
            <th class="bg-transparent !text-start">{{ t("labels.rank") }}</th>
            <th class="border-r bg-transparent">{{ t("labels.country") }}</th>
            <th class="bg-transparent">{{ t("labels.rank") }}</th>
            <th class="bg-transparent">{{ t("labels.country") }}</th>
          </tr>
        </thead>
        <tbody class="bg-transparent">
          <tr v-for="(row, idx) in tm('rows')" :key="idx">
            <td>{{ rt(row.rank1) }}</td>
            <td class="border-r text-center">{{ rt(row.country1) }}</td>
            <td class="text-center">{{ rt(row.rank2) }}</td>
            <td class="text-center">{{ rt(row.country2) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "labels": {
      "rank": "Rank",
      "country": "Country"
    },
    "rows": [
      {
        "rank1": "01",
        "country1": "Uzbekistan",
        "rank2": "06",
        "country2": "Singapore"
      },
      {
        "rank1": "02",
        "country1": "UAE",
        "rank2": "07",
        "country2": "Iceland"
      },
      {
        "rank1": "03",
        "country1": "KSA",
        "rank2": "08",
        "country2": "Sweden"
      },
      {
        "rank1": "04",
        "country1": "Norway",
        "rank2": "09",
        "country2": "China"
      },
      {
        "rank1": "05",
        "country1": "Estonia",
        "rank2": "10",
        "country2": "Denmark"
      }
    ],
    "title": "Safety Perceptions Index",
    "subtitle": "Capturing the impact of risk in countries around the world"
  },
  "ru": {
    "labels": {
      "rank": "Рейтинг",
      "country": "Страна"
    },
    "rows": [
      {
        "rank1": "01",
        "country1": "Узбекистан",
        "rank2": "06",
        "country2": "Сингапур"
      },
      {
        "rank1": "02",
        "country1": "ОАЭ",
        "rank2": "07",
        "country2": "Исландия"
      },
      {
        "rank1": "03",
        "country1": "Саудовская Аравия",
        "rank2": "08",
        "country2": "Швеция"
      },
      {
        "rank1": "04",
        "country1": "Норвегия",
        "rank2": "09",
        "country2": "Китай"
      },
      {
        "rank1": "05",
        "country1": "Эстония",
        "rank2": "10",
        "country2": "Дания"
      }
    ],
    "title": "Индекс безопасности",
    "subtitle": "Отражение влияния рисков в странах мира"
  },
  "uz": {
    "labels": {
      "rank": "Reyting",
      "country": "Mamlakat"
    },
    "rows": [
      {
        "rank1": "01",
        "country1": "O'zbekiston",
        "rank2": "06",
        "country2": "Singapur"
      },
      {
        "rank1": "02",
        "country1": "Birlashgan Arab Amirliklari",
        "rank2": "07",
        "country2": "Islandiya"
      },
      {
        "rank1": "03",
        "country1": "Saudiya Arabistoni",
        "rank2": "08",
        "country2": "Shvetsiya"
      },
      {
        "rank1": "04",
        "country1": "Norvegiya",
        "rank2": "09",
        "country2": "Xitoy"
      },
      {
        "rank1": "05",
        "country1": "Estoniya",
        "rank2": "10",
        "country2": "Daniya"
      }
    ],
    "title": "Xavfsizlikni anglash indeksi",
    "subtitle": "Dunyo mamlakatlarida xavf ta'sirini hisobga olgan holda"
  }
}
</i18n>

<style lang="css">
.table-wrapper {
  table {
    tbody {
      @apply bg-transparent;
    }

    thead {
      @apply bg-transparent;
    }

    th {
      @apply pl-1.5 text-center align-top text-blue-light first:pl-0 md:text-xl;
    }
  }
}

td {
  @apply py-3 text-sm font-bold text-white md:px-1 md:text-base;
}

.table-wrapper {
  width: 100%;
  overflow-x: auto;
}

table {
  min-width: 380px;
}
</style>
