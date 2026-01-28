<script setup lang="ts">
import { AdmissionCard } from "~/features/admission"
import { useAdmissionStore } from "~/entities/admission"

const { t } = useI18n({ useScope: "local" })
const modal = useModal()
const admissionStore = useAdmissionStore()
const { items, loading } = storeToRefs(admissionStore)
</script>

<template>
  <div class="grid grid-cols-1 gap-x-7 gap-y-3 lg:grid-cols-2">
    <template v-if="loading">
      <div class="col-span-full grid min-h-96 place-items-center">
        <ui-spinner size="size-32" />
      </div>
    </template>
    <template v-if="items?.length > 0 && !loading">
      <admission-card v-for="item in 5" :key="item" :admission="items[0]" />
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
