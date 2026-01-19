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
            {{ t("surname") }}
          </label>
          <p class="text-sm font-medium">
            {{ userInformation?.surname }}
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-xs font-medium text-blue-command">
            {{ t("name") }}
          </label>
          <p class="text-sm font-medium">
            {{ userInformation?.name }}
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-xs font-medium text-blue-command">
            {{ t("phone") }}
          </label>
          <p class="text-sm font-medium">
            {{ userInformation?.phone }}
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-xs font-medium text-blue-command">
            {{ t("email") }}
          </label>
          <p class="text-sm font-medium">
            {{ userInformation?.email }}
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-xs font-medium text-blue-command">
            {{ t("email") }}
          </label>
          <p class="text-sm font-medium">
            {{ userInformation?.email }}
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
    "name": "Name",
    "surname": "Surname",
    "phone": "Phone number",
    "email": "Email"
  },
  "ru": {
    "main_info": "Основная информация",
    "name": "Имя",
    "surname": "Фамилия",
    "phone": "Номер телефона",
    "email": "Email"
  },
  "uz": {
    "main_info": "Asosiy ma'lumotlar",
    "name": "Ism",
    "surname": "Familiya",
    "phone": "Telefon raqam",
    "email": "Email"
  }
}
</i18n>
