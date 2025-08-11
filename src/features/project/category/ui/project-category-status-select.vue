<script setup lang="ts">
import UiSelect from "@vueform/multiselect"

const { t } = useI18n()

const statusList = computed(() => status)

const status = [
  {
    label: t("project_status.open_for_investment"),
    value: "open_for_investment"
  },
  {
    label: t("project_status.under_negotiation"),
    value: "under_negotiation"
  },
  {
    label: t("project_status.closed"),
    value: "closed"
  }
]
</script>

<template>
  <ui-select v-bind="$attrs" autocomplete="off" :can-deselect="false" :options="statusList" />
</template>
