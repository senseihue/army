<script setup lang="ts">
import { UiLoader } from "~/widgets/loader"

const { t } = useI18n({ useScope: "local" })
const { $session } = useNuxtApp()
const { profile, loading } = $session || {}

const userInformation = computed(() => {
  if (!profile.value) return null
  return profile.value
})
</script>

<template>
  <div class="rounded-2xl bg-white p-4">
    <ui-loader v-if="loading" class="min-h-24" />
    <div v-else class="mt-2 flex w-full gap-9 py-4">
      <div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div class="flex flex-col gap-1">
          <label class="font-medium text-gray-1">
            {{ t("passport_number") }}
          </label>
          <p class="text-[18px] font-medium text-gray-2">
            {{ userInformation?.person?.passport_number || "N/A" }}
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <label class="font-medium text-gray-1">
            {{ t("passport_issued_date") }}
          </label>
          <p class="text-[18px] font-medium text-gray-2">
            {{ userInformation?.person?.passport_issue_date || "N/A" }}
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <label class="font-medium text-gray-1">
            {{ t("passport_expiry_date") }}
          </label>
          <p class="text-[18px] font-medium text-gray-2">
            {{ userInformation?.person?.passport_expiry_date || "N/A" }}
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <label class="font-medium text-gray-1">
            {{ t("gender") }}
          </label>
          <p class="text-[18px] font-medium text-gray-2">
            {{ userInformation?.person?.gender ? t("genders.male") : t("genders.female") }}
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <label class="font-medium text-gray-1">
            {{ t("date_of_birth") }}
          </label>
          <p class="text-[18px] font-medium text-gray-2">
            {{ userInformation?.person?.date_of_birth || "N/A" }}
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <label class="font-medium text-gray-1">
            {{ t("nationality") }}
          </label>
          <p class="text-[18px] font-medium text-gray-2">
            {{ userInformation?.person?.nationality || "N/A" }}
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <label class="font-medium text-gray-1">
            {{ t("place_of_birth") }}
          </label>
          <p class="text-[18px] font-medium text-gray-2">
            {{ userInformation?.person?.place_of_birth || "N/A" }}
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <label class="font-medium text-gray-1">
            {{ t("country_of_birth") }}
          </label>
          <p class="text-[18px] font-medium text-gray-2">
            {{ userInformation?.person?.country || "N/A" }}
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <label class="font-medium text-gray-1">
            {{ t("citizenship") }}
          </label>
          <p class="text-[18px] font-medium text-gray-2">
            {{ userInformation?.person?.citizenship || "N/A" }}
          </p>
        </div>
        <div class="col-span-full flex flex-col gap-1">
          <label class="font-medium text-gray-1">
            {{ t("passport_issued_by") }}
          </label>
          <p class="text-[18px] font-medium text-gray-2">
            {{ userInformation?.person?.passport_issued_by || "N/A" }}
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
    "patronymic": "Patronymic",
    "surname": "Surname",
    "pin": "PIN",
    "passport_number": "Passport series and number",
    "passport_issued_date": "Date of issue",
    "passport_expiry_date": "Date of expiry",
    "passport_issued_by": "Issued by",
    "gender": "Gender",
    "date_of_birth": "Date of birth",
    "nationality": "Nationality",
    "country_of_birth": "Country of birth",
    "citizenship": "Citizenship",
    "place_of_birth": "Place of birth",
    "genders": {
      "male": "Male",
      "female": "Female"
    }
  },
  "ru": {
    "main_info": "Основная информация",
    "name": "Имя",
    "patronymic": "Отчество",
    "surname": "Фамилия",
    "pin": "ПИНФЛ",
    "passport_number": "Серия и номер паспорта",
    "passport_issued_date": "Дата выдачи",
    "passport_expiry_date": "Дата истечения срока",
    "passport_issued_by": "Кем выдан",
    "gender": "Пол",
    "date_of_birth": "Дата рождения",
    "nationality": "Национальность",
    "country_of_birth": "Страна рождения",
    "citizenship": "Гражданство",
    "place_of_birth": "Место рождения",
    "genders": {
      "male": "Мужской",
      "female": "Женский"
    }
  },
  "uz": {
    "main_info": "Asosiy ma'lumotlar",
    "name": "Ism",
    "patronymic": "Otasining ismi",
    "surname": "Familiya",
    "pin": "JShShIR",
    "passport_number": "Pasport seriyasi va raqami",
    "passport_issued_date": "Berilgan sana",
    "passport_expiry_date": "Amal qilish muddati",
    "passport_issued_by": "Kim tomondan berilgan",
    "gender": "Jinsi",
    "date_of_birth": "Tug'ilgan sana",
    "nationality": "Millati",
    "country_of_birth": "Tug'ilgan mamlakat",
    "citizenship": "Fuqaroligi",
    "place_of_birth": "Tug'ilgan joyi",
    "genders": {
      "male": "Erkak",
      "female": "Ayol"
    }
  }
}
</i18n>
