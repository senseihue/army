<script setup lang="ts">
import { ServiceCategoryTab } from "~/features/profile/service/category"
import { usePersonalServiceCategoryStore } from "~/entities/profile/personal-service-category"

const emits = defineEmits<{
  (e: "next"): void
  (e: "prev"): void
  (e: "change", category: IPersonalServiceCategory): void
}>()
const { t } = useI18n({ useScope: "local" })
const personalServiceCategoryStore = usePersonalServiceCategoryStore()
const { active, items, current } = storeToRefs(personalServiceCategoryStore)
const category = computed(() => [
  {
    id: 1,
    title: t("services.business"),
    icon: "mynaui:briefcase"
  },
  {
    id: 2,
    title: t("services.licenses"),
    icon: "hugeicons:note"
  },
  {
    id: 3,
    title: t("services.infrastructure"),
    icon: "lucide:cpu"
  },
  {
    id: 4,
    title: t("services.foreign_trade_operations"),
    icon: "bitcoin-icons:exchange-filled"
  },
  {
    id: 5,
    title: t("services.tax_information"),
    icon: "heroicons-solid:receipt-tax"
  }
])

const prev = () => {
  if (active.value > 0) {
    active.value--
    emits("prev")
  }
}

const next = () => {
  if (active.value < items.value.length - 1) {
    active.value++
    emits("next")
  }
}

const selectCategory = (category: IPersonalServiceCategory, index: number) => {
  active.value = index
  current.value = category
  emits("change", category)
}
</script>

<template>
  <div class="overflow-x-auto">
    <div class="mb-4 flex w-full items-center justify-end gap-4">
      <ui-icon-button variant="flat" rounded icon-name="lucide:chevron-left" color="secondary" @click="prev" />
      <ui-icon-button variant="flat" rounded icon-name="lucide:chevron-right" color="secondary" @click="next" />
    </div>
    <div class="flex w-full items-center justify-between gap-4">
      <service-category-tab
        v-for="(service, index) in category"
        :key="service.title"
        :active="active === index"
        :icon-name="service.icon"
        :title="service.title"
        @click="selectCategory(service, index)"
      />
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
