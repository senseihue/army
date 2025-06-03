<script lang="ts" setup>
const { t, tm, rt } = useI18n({ useScope: "local" })
</script>

<template>
  <div class="bg-blue-ateneo p-2 md:px-8 md:py-16">
    <h3 class="ignore-text-format mb-8 text-center text-lg font-bold text-blue-moonstone lg:text-xl">
      {{ t("title") }}
    </h3>
    <table class="table-wrapper w-full">
      <thead class="bg-transparent">
        <tr>
          <th class="text-start">{{ t("labels.resources") }}</th>
          <th>{{ t("labels.rank_world") }}</th>
          <th>{{ t("labels.proven") }}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(row, idx) in tm('resources')" :key="idx">
          <td>{{ rt(row.resource) }}</td>
          <td class="text-center">{{ rt(row.rank) }}</td>
          <td class="text-center">{{ rt(row.proven) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="css" scoped>
table.table-wrapper {
  tbody {
    @apply bg-transparent;
  }

  thead {
    @apply bg-transparent;
  }

  th {
    @apply p-2 align-top text-xl text-blue-moonstone bg-transparent border-0;
  }

  td {
    @apply px-2 py-4 font-semibold text-white;
  }
}
</style>

<i18n>
{
  "en": {
    "title": "Uzbekistan's Proven Resources",
    "labels": {
      "resources": "Resources",
      "rank_world": "Rank in the World",
      "proven": "Proven Resources"
    },
    "resources": [
      {
        "resource": "Gold",
        "rank": "15",
        "proven": "184 mln oz"
      },
      {
        "resource": "Natural Gas",
        "rank": "10",
        "proven": "187 trln m³"
      },
      {
        "resource": "Copper",
        "rank": "10",
        "proven": "44,7 mln t"
      },
      {
        "resource": "Uranium",
        "rank": "16",
        "proven": "139,2 thous t"
      }
    ]
  },
  "ru": {
    "title": "Доказанные ресурсы Узбекистана",
    "labels": {
      "resource": "Ресурс",
      "rank_world": "Место в мире",
      "proven": "Доказанные ресурсы"
    },
    "resources": [
      {
        "resource": "Золото",
        "rank": "15",
        "proven": "184 млн унций"
      },
      {
        "resource": "Природный газ",
        "rank": "10",
        "proven": "187 трлн м³"
      },
      {
        "resource": "Медь",
        "rank": "10",
        "proven": "44,7 млн т"
      },
      {
        "resource": "Уран",
        "rank": "16",
        "proven": "139,2 тыс т"
      }
    ]
  },
  "uz": {
    "title": "O'zbekistonning tasdiqlangan resurslari",
    "labels": {
      "resources": "Resurs",
      "rank_world": "Dunyo bo'yicha o'rni",
      "proven": "Tasdiqlangan resurslar"
    },
    "resources": [
      {
        "resource": "Oltin",
        "rank": "15",
        "proven": "184 mln untsiya"
      },
      {
        "resource": "Tabiiy gaz",
        "rank": "10",
        "proven": "187 trln m³"
      },
      {
        "resource": "Mis",
        "rank": "10",
        "proven": "44,7 mln tonna"
      },
      {
        "resource": "Uran",
        "rank": "16",
        "proven": "139,2 ming tonna"
      }
    ]
  }
}
</i18n>
