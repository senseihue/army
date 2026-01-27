<script setup lang="ts">
import { AdmissionSchoolCard } from "~/features/admission"
import { useAdmissionSchoolStore } from "~/entities/admission"

const { t } = useI18n({ useScope: "local" })
const admissionSchoolStore = useAdmissionSchoolStore()
const { items } = storeToRefs(admissionSchoolStore)
</script>

<template>
  <div class="grid grid-cols-1 gap-x-7 gap-y-3 lg:grid-cols-2">
    <template v-if="items?.length > 0">
      <admission-school-card v-for="item in 5" :key="item" :admission="items[0]" />
    </template>
    <template v-else>
      <div class="col-span-full py-12 text-center">
        <p class="font-semibold text-blue-midnight">
          {{ t("empty_admission_data") }}
        </p>
      </div>
    </template>
  </div>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "empty_admission_data": "No admission data available"
  },
  "ru": {
    "empty_admission_data": "Нет данных о приеме"
  },
  "uz": {
    "empty_admission_data": "Qabul haqida ma'lumot mavjud emas"
  }
}
</i18n>
