<script setup lang="ts">
import UiSelect from "@vueform/multiselect"
const { t, tm } = useI18n({useScope: "local"})

const roleList = computed(() => {
  return Object.keys(tm("project_status"))?.map((key: string) => ({ value: key, label: t(`project_status.${key}`) }))
})

</script>

<template>
  <ui-select v-bind="$attrs" :options="roleList" />
</template>

<i18n>
{
  "en": {
    "project_status": {
      "under_negotiation": "Under  negotiation",
      "open_for_investment": "Open for investment",
      "closed": "Closed"
    }
  },
  "ru": {
    "project_status": {
      "under_negotiation": "На стадии переговоров",
      "open_for_investment": "Открыт для инвестиций",
      "closed": "Закрыт"
    }
  },
  "uz": {
    "project_status": {
      "under_negotiation": "Kelishuv jarayonida",
      "open_for_investment": "Sarmoya uchun ochiq",
      "closed": "Yopiq"
    }
  }
}
</i18n>
