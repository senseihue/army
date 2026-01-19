<script setup lang="ts">
import { ProfileHeader } from "~/features/profile"
import { EducationModal, EducationGrid, usePersonalEducationService, EducationCard } from "~/features/profile/education"
import { usePersonalEducationStore } from "~/entities/profile/personal-education"
import { UiLoader } from "~/widgets/loader"

definePageMeta({
  protected: true,
  fixedHeader: true
})
const { t } = useI18n({ useScope: "local" })
const { getPersonalEducationList } = usePersonalEducationService()
const { params, items, loading } = usePersonalEducationStore()

const modal = useModal()
const activeService = ref<IPersonalEducation | null>(null)
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
  await getPersonalEducationList()
}

const onChangeCategory = async () => {
  params.page = 0
  await getPersonalEducationList()
}

const changeService = (service: IPersonalEducation) => {
  activeService.value = service
  modal.show("service-detail-modal", service)
}

onMounted(() => {
  get()
})
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <profile-header icon-name="lucide:briefcase" :title="$t('nav.profile.education')" @refresh="get" />
    <div class="mt-2 grid w-full gap-4 rounded-2xl bg-white p-4">
      <ui-loader v-if="loading" />
      <template v-else>
        <education-grid @show:details="changeService" />
        <ui-pagination
          v-model="params.page"
          :total="params.total"
          :per-page="params.size"
          @update:model-value="getPersonalEducationList"
        />
      </template>

      <education-modal />
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
    },
    "empty_service": "No services available"
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
    },
    "empty_service": "Нет доступных услуг"
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
    },
    "empty_service": "Xizmatlar mavjud emas"
  }
}
</i18n>
