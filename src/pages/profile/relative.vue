<script setup lang="ts">
import { ProfileHeader } from "~/features/profile"
import { RelativeModal, RelativeGrid, useRelativeService } from "~/features/profile/relative"
import { useRelativeStore } from "~/entities/profile/relative"
import { UiLoader } from "~/widgets/loader"

definePageMeta({
  protected: true,
  fixedHeader: true,
  isLightHeader: true
})
const { getRelativeList } = useRelativeService()
const { params, loading } = useRelativeStore()

const modal = useModal()

const get = async () => {
  await getRelativeList()
}


onMounted(() => {
  get()
})
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <profile-header icon-name="lucide:briefcase" :title="$t('nav.profile.relative')" @refresh="get">
      <template #action>
        <ui-button class="rounded-xl" color="secondary" variant="flat" @click="modal.show('relative')">
          <span>{{ $t("actions.add") }}</span>
          <icon name="lucide:plus" />
        </ui-button>
      </template>
    </profile-header>
    <div class="mt-2 grid w-full gap-4 rounded-2xl bg-white p-4">
      <ui-loader v-if="loading" />
      <template v-else>
        <relative-grid  />
        <ui-pagination
          v-model="params.page"
          :total="params.total"
          :per-page="params.per_page"
          @update:model-value="getRelativeList"
        />
      </template>

      <relative-modal />
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
