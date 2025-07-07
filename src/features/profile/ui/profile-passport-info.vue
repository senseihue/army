<script setup lang="ts">
const { t } = useI18n({ useScope: "local" })
const { $session } = useNuxtApp()
const { profile } = $session || {}
</script>

<template>
  <div class="rounded-2xl bg-white p-4">
    <p class="text-lg font-semibold text-blue-midnight">
      {{ t("passport_info") }}
    </p>
    <div v-if="profile?.user" class="mt-5 grid w-full grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
      <div class="flex flex-col gap-1">
        <label class="text-xs font-medium text-blue-command">
          {{ t("passport_number") }}
        </label>
        <p class="text-sm font-medium">
          {{ profile.user.pport_no || "-" }}
        </p>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-xs font-medium text-blue-command">
          {{ t("passport_issued_date") }}
        </label>
        <p class="text-sm font-medium">
          {{ profile.user.pport_issue_date || "-" }}
        </p>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-xs font-medium text-blue-command">
          {{ t("passport_expiry_date") }}
        </label>
        <p class="text-sm font-medium">
          {{ profile.user.pport_expr_date || "-" }}
        </p>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-xs font-medium text-blue-command">
          {{ t("gender") }}
        </label>
        <p class="text-sm font-medium">
          {{ profile.user.gender ? t("genders.male") : t("genders.female") }}
        </p>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-xs font-medium text-blue-command">
          {{ t("date_of_birth") }}
        </label>
        <p class="text-sm font-medium">
          {{ profile.user.birth_date || "-" }}
        </p>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-xs font-medium text-blue-command">
          {{ t("nationality") }}
        </label>
        <p class="text-sm font-medium">
          {{ profile.user.natn || "-" }}
        </p>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-xs font-medium text-blue-command">
          {{ t("country_of_birth") }}
        </label>
        <p class="text-sm font-medium">
          {{ profile.user.birth_cntry || "-" }}
        </p>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-xs font-medium text-blue-command">
          {{ t("citizenship") }}
        </label>
        <p class="text-sm font-medium">
          {{ profile.user.ctzn || "-" }}
        </p>
      </div>
      <div class="col-span-full flex flex-col gap-1">
        <label class="text-xs font-medium text-blue-command">
          {{ t("passport_issued_by") }}
        </label>
        <p class="text-sm font-medium">
          {{ profile.user.pport_issue_place || "-" }}
        </p>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "passport_info": "Passport data",
    "passport_number": "Passport series and number",
    "passport_issued_by": "Passport issued by",
    "passport_issued_date": "Passport issued date",
    "passport_expiry_date": "Passport expiry date",
    "gender": "Gender",
    "date_of_birth": "Date of birth",
    "nationality": "Nationality",
    "country_of_birth": "Country of birth",
    "citizenship": "Citizenship",
    "genders": {
      "male": "Male",
      "female": "Female"
    }
  },
  "ru": {
    "passport_info": "Данные паспорта",
    "passport_number": "Серия и номер паспорта",
    "passport_issued_by": "Паспорт выдан",
    "passport_issued_date": "Дата выдачи паспорта",
    "passport_expiry_date": "Дата окончания действия",
    "gender": "Пол",
    "date_of_birth": "Дата рождения",
    "nationality": "Национальность",
    "country_of_birth": "Страна рождения",
    "citizenship": "Гражданство"
  },
  "oz": {
    "passport_info": "Паспорт маълумотлари",
    "passport_number": "Паспорт серияси ва рақами",
    "passport_issued_by": "Паспортни берган ташкилот",
    "passport_issued_date": "Паспорт берилган сана",
    "passport_expiry_date": "Паспортнинг амал қилиш муддати",
    "gender": "Жинс",
    "date_of_birth": "Туғилган сана",
    "nationality": "Миллати",
    "country_of_birth": "Туғилган мамлакат",
    "citizenship": "Фуқаролик"
  }
}
</i18n>
