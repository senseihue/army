<script setup lang="ts">
import { AdmissionSchoolCard, useAdmissionService } from "~/features/admission"
import { useAdmissionSchoolStore } from "~/entities/admission"

const { t } = useI18n({ useScope: "local" })
const admissionSchoolStore = useAdmissionSchoolStore()
const { items, loading, params } = storeToRefs(admissionSchoolStore)
const { getAdmissionSchoolList } = useAdmissionService()
</script>

<template>
  <div class="grid grid-cols-1 gap-x-7 gap-y-3 lg:grid-cols-3">
    <template v-if="loading">
      <div class="col-span-full grid min-h-96 place-items-center">
        <ui-spinner size="size-32" />
      </div>
    </template>
    <template v-if="items?.length > 0 && !loading">
      <admission-school-card v-for="item in items" :key="item.id" :admission-school="item" />
      <div class="col-span-full mt-8 flex justify-center">
        <ui-pagination v-model="params.page" :total="params.total" @change="getAdmissionSchoolList" />
      </div>
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
