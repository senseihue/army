<script setup lang="ts">
import UiSelect from "@vueform/multiselect"

const { t, tm } = useI18n()

const roleList = computed(() => {
  return Object.keys(tm("purpose"))?.map((key: string) => ({ value: key, label: t(`purpose.${key}`) }))
})
</script>

<template>
  <ui-select v-bind="$attrs" :options="roleList" />
</template>

<i18n>
{
  "en": {
    "purpose": {
      "exploring_investment_opportunities": "Exploring Investment Opportunities",
      "media": "Media",
      "vacancies": "Vacancies",
      "other": "Other"
    }
  },
  "ru": {
    "purpose": {
      "exploring_investment_opportunities": "Изучение инвестиционных возможностей",
      "media": "Медиа",
      "vacancies": "Вакансии",
      "other": "Другое"
    }
  }
}
</i18n>
