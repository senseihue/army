<script setup lang="ts">
import { UiLoader } from "~/widgets/loader"

const { t } = useI18n({ useScope: "local" })
const { $session } = useNuxtApp()
const { profile, loading } = $session || {}

const userInformation = computed(() => {
  if (!profile.value) return null
  return profile.value[profile.value.role]
})
</script>

<template>
  <div class="rounded-2xl bg-white p-4">
    <ui-loader v-if="loading" class="min-h-24" />
    <div v-else class="mt-2 flex w-full gap-9 py-4">
      <div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
        <div class="flex flex-col gap-1">
          <label class="text-xs font-medium text-blue-command">
            {{ t("company_name") }}
          </label>
          <p class="text-sm font-medium">
            {{ userInformation.company_name }}
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-xs font-medium text-blue-command">
            {{ t("legal_address") }}
          </label>
          <p class="text-sm font-medium">
            {{ userInformation.legal_address || 'N/A' }}
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-xs font-medium text-blue-command">
            {{ t("website") }}
          </label>
          <p class="text-sm font-medium">
            {{ userInformation.website || 'N/A' }}
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-xs font-medium text-blue-command">
            {{ t("country") }}
          </label>
          <p class="text-sm font-medium">
            {{ userInformation.region?.name || 'N/A' }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "main_info": "Basic information",
    "company_name": "Company Name",
    "legal_address": "Legal Address",
    "website": "Website",
    "country": "Country"
  },
  "ru": {
    "main_info": "Основная информация",
    "company_name": "Название компании",
    "legal_address": "Юридический адрес",
    "website": "Веб-сайт",
    "country": "Страна"
  },
  "uz": {
    "main_info": "Asosiy ma'lumotlar",
    "company_name": "Kompaniya nomi",
    "legal_address": "Yuridik manzil",
    "website": "Veb-sayt",
    "country": "Mamlakat"
  }
}
</i18n>
