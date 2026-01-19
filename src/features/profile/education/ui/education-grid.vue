<script setup lang="ts">
import { EducationCard } from "~/features/profile/education"
import { usePersonalEducationStore } from "~/entities/profile/personal-education"

const { t } = useI18n({ useScope: "local" })
const modal = useModal()
const personalEducationStore = usePersonalEducationStore()
const { items, loading } = storeToRefs(personalEducationStore)
const showEditModal = (education: IPersonalEducation) => {
  modal.show('personal-education', education)
}
</script>

<template>
  <div class="grid grid-cols-1 gap-x-7 gap-y-3 sm:grid-cols-2">
    <template v-if="items.length > 0">
      <education-card v-for="item in items" :key="item.id" :education-data="item" @edit="showEditModal(item)" />
    </template>
    <template v-else>
      <div class="col-span-full py-12 text-center">
        <p class="font-semibold text-blue-midnight">
          {{ t("empty_service") }}
        </p>
      </div>
    </template>
  </div>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "empty_service": "No services available"
  },
  "ru": {
    "empty_service": "Нет доступных услуг"
  },
  "uz": {
    "empty_service": "Xizmatlar mavjud emas"
  }
}
</i18n>
