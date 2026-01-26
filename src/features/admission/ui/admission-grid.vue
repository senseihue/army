<script setup lang="ts">
import { AdmissionCard } from "~/features/admission"
import { useAdmissionStore } from "~/entities/admission"

const { t } = useI18n({ useScope: "local" })
const modal = useModal()
const admissionStore = useAdmissionStore()
const { items } = storeToRefs(admissionStore)
</script>

<template>
  <div class="grid grid-cols-1 gap-x-7 gap-y-3 lg:grid-cols-2">
    <template v-if="items.length > 0">
      <admission-card v-for="item in items" :key="item.id" :admission="item" />
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
    "empty_admission_data": "No information about admissions is available."
  },
  "ru": {
    "empty_admission_data": "Информации о родственниках нет"
  },
  "uz": {
    "empty_admission_data": "Qarindoshlar haqida ma'lumot mavjud emas"
  }
}
</i18n>
