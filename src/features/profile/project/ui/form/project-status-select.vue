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
      "negotiation": "Under  negotiation",
      "open": "Open for investment",
      "closed": "Closed"
    }
  },
  "ru": {
    "project_status": {
      "negotiation": "На стадии переговоров",
      "open": "Открыт для инвестиций",
      "closed": "Закрыт"
    }
  },
  "uz": {
    "project_status": {
      "negotiation": "Kelishuv jarayonida",
      "open": "Sarmoya uchun ochiq",
      "closed": "Yopiq"
    }
  }
}
</i18n>
