<script setup lang="ts">
import { ServiceTab, ServiceInfoCard } from "~/features/profile/service"

const { t } = useI18n({ useScope: "local" })
const services = computed(() => [
  {
    title: t("services.business"),
    endpoint: "/profile/my-services/business",
    icon: "mynaui:briefcase"
  },
  {
    title: t("services.licenses"),
    endpoint: "/profile/my-services/licenses",
    icon: "hugeicons:note"
  },
  {
    title: t("services.infrastructure"),
    endpoint: "/profile/my-services/infrastructure",
    icon: "lucide:cpu"
  },
  {
    title: t("services.foreign_trade_operations"),
    endpoint: "/profile/my-services/foreign-trade-operations",
    icon: "bitcoin-icons:exchange-filled"
  },
  {
    title: t("services.tax_information"),
    endpoint: "/profile/my-services/tax-information",
    icon: "heroicons-solid:receipt-tax"
  }
])
</script>

<template>
  <div class="overflow-x-auto">
    <div class="mb-4 flex w-full items-center justify-end gap-4">
      <ui-icon-button variant="flat" rounded icon-name="lucide:chevron-left" color="secondary" />
      <ui-icon-button variant="flat" rounded icon-name="lucide:chevron-right" color="secondary" />
    </div>
    <div class="flex w-full items-center justify-between gap-4">
      <service-tab v-for="service in services" :key="service.title" :icon-name="service.icon" :title="service.title" />
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "services": {
      "business": "Business",
      "licenses": "Licenses and permits",
      "infrastructure": "Infrastructure",
      "foreign_trade_operations": "Foreign trade operations",
      "tax_information": "Tax information"
    }
  },
  "ru": {
    "services": {
      "business": "Бизнес",
      "licenses": "Лицензии и разрешения",
      "infrastructure": "Инфраструктура",
      "foreign_trade_operations": "Внешнеэкономические операции",
      "tax_information": "Налоговая информация"
    }
  },
  "oz": {
    "services": {
      "business": "Бизнес",
      "licenses": "Лицензиялар ва рухсатномалар",
      "infrastructure": "Инфратузилма",
      "foreign_trade_operations": "Ташқи савдо операциялари",
      "tax_information": "Солиқ маълумотлари"
    }
  }
}
</i18n>
