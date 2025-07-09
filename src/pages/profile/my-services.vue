<script setup lang="ts">
import { ProfileHeader } from "~/features/profile"
import { ServiceDetailModal, ServiceGrid, usePersonalServiceService } from "~/features/profile/service"
import { ServiceCategoryTabs, usePersonalServiceCategoryService } from "~/features/profile/service/category"
import { usePersonalServiceStore } from "~/entities/profile/personal-service"
import { usePersonalServiceCategoryStore } from "~/entities/profile/personal-service-category"
import { UiLoader } from "~/widgets/loader"

const { t } = useI18n({ useScope: "local" })
const { getPersonalServiceList } = usePersonalServiceService()
const { params, loading } = usePersonalServiceStore()
const personalServiceCategoryStore = usePersonalServiceCategoryStore()
const { current } = storeToRefs(personalServiceCategoryStore)

const categories = computed(() => [
  {
    type: "my_company",
    title: t("services.my_company"),
    icon: "mynaui:briefcase"
  },

  {
    type: "infrastructure",
    title: t("services.infrastructure"),
    icon: "lucide:cpu"
  },
  {
    type: "license",
    title: t("services.licenses"),
    icon: "hugeicons:note"
  },
  {
    type: "foreign_economic_activity",
    title: t("services.foreign_economic_activity"),
    icon: "bitcoin-icons:exchange-filled"
  },
  {
    type: "tax_information",
    title: t("services.tax_information"),
    icon: "heroicons-solid:receipt-tax"
  },
  {
    type: "economic_operations",
    title: t("services.economic_operations"),
    icon: "heroicons-solid:receipt-tax"
  },
  {
    type: "others",
    title: t("services.others"),
    icon: "heroicons-solid:receipt-tax"
  }
])

const get = async () => {
  await getPersonalServiceList()
}

const onChangeCategory = async () => {
  await getPersonalServiceList()
}

onMounted(() => {
  current.value = categories.value[0]
  get()
})
</script>

<template>
  <div class="w-full">
    <profile-header icon-name="lucide:briefcase" :title="$t('nav.profile.my_services')" @refresh="get" />
    <div class="mt-2 grid w-full gap-4 rounded-2xl bg-white p-4">
      <service-category-tabs :categories="categories" @change="onChangeCategory" />
      <ui-loader v-if="loading" />
      <template v-else>
        <service-grid />
        <ui-pagination
          v-model="params.page"
          :total="params.total"
          :per-page="params.size"
          @update:model-value="getPersonalServiceList"
        />
      </template>

      <service-detail-modal />
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "services": {
      "business": "Business",
      "my_company": "My Company",
      "licenses": "Licenses and permits",
      "infrastructure": "Infrastructure",
      "foreign_economic_activity": "Foreign economic activity",
      "economic_operations": "Economic operations",
      "tax_information": "Tax information",
      "others": "Others"
    }
  },
  "ru": {
    "services": {
      "business": "Бизнес",
      "my_company": "Моя компания",
      "licenses": "Лицензии и разрешения",
      "infrastructure": "Инфраструктура",
      "foreign_economic_activity": "Внешнеэкономическая деятельность",
      "economic_operations": "Экономические операции",
      "tax_information": "Налоговая информация",
      "others": "Другое"
    }
  },
  "uz": {
    "services": {
      "business": "Biznes",
      "my_company": "Mening kompaniyam",
      "licenses": "Litsenziyalar va ruxsatnomalar",
      "infrastructure": "Infratuzilma",
      "foreign_economic_activity": "Xorijiy iqtisodiy faoliyat",
      "economic_operations": "Iqtisodiy operatsiyalar",
      "tax_information": "Soliq ma'lumotlari",
      "others": "Boshqalar"
    }
  }
}
</i18n>
