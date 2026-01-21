<script setup lang="ts">
import { EducationCard } from "~/features/profile/education"
import { useEducationStore } from "~/entities/profile/education"

const { t } = useI18n({ useScope: "local" })
const modal = useModal()
const personalEducationStore = useEducationStore()
const { items, loading } = storeToRefs(personalEducationStore)
const showEditModal = (education: IEducation) => {
  modal.show("education", education)
}
</script>

<template>
  <div class="grid grid-cols-1 gap-x-7 gap-y-3 lg:grid-cols-2">
    <template v-if="items.length > 0">
      <education-card v-for="item in items" :key="item.id" :education-data="item" @edit="showEditModal(item)" />
    </template>
    <template v-else>
      <div class="col-span-full py-12 text-center">
        <p class="font-semibold text-blue-midnight">
          {{ t("empty_education_data") }}
        </p>
      </div>
    </template>
  </div>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "empty_education_data": "Educational information unavailable"
  },
  "ru": {
    "empty_education_data": "Образовательная информация недоступна"
  },
  "uz": {
    "empty_education_data": "Ta'lim ma'lumotlari mavjud emas"
  }
}
</i18n>
