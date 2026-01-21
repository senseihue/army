<script setup lang="ts">
const { t } = useI18n({ useScope: "local" })
const { $session } = useNuxtApp()
const { profile, loading } = $session || {}

const userInformation = computed(() => {
  if (!profile.value) return null
  return profile.value
})
</script>

<template>
  <div class="flex items-center gap-4 rounded-2xl bg-white p-4">
    <div>
      <img
        class="h-[120px] w-[120px] overflow-hidden rounded-2xl object-cover"
        alt=""
        :src="profile?.person.photo_base64"
      />
    </div>
    <div class="grid w-full grid-cols-4 gap-4">
      <div class="flex flex-col gap-1">
        <p class="font-medium text-gray-1">{{ t("surname") }}</p>
        <h6 class="text-[18px] font-medium text-gray-2">{{ userInformation?.person.last_name }}</h6>
      </div>
      <div class="flex flex-col gap-1">
        <p class="font-medium text-gray-1">{{ t("name") }}</p>
        <h6 class="text-[18px] font-medium text-gray-2">{{ userInformation?.person.last_name }}</h6>
      </div>
      <div class="flex flex-col gap-1">
        <p class="font-medium text-gray-1">{{ t("patronymic") }}</p>
        <h6 class="text-[18px] font-medium text-gray-2">{{ userInformation?.person.middle_name }}</h6>
      </div>
      <div class="flex flex-col gap-1">
        <p class="font-medium text-gray-1">{{ t("pin") }}</p>
        <h6 class="text-[18px] font-medium text-gray-2">{{ userInformation?.person.pin }}</h6>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "main_info": "Basic information",
    "name": "Name",
    "patronymic": "Patronymic",
    "surname": "Surname",
    "pin": "PIN",
  },
  "ru": {
    "main_info": "Основная информация",
    "name": "Имя",
    "patronymic": "Отчество",
    "surname": "Фамилия",
    "pin": "ПИНФЛ",
  },
  "uz": {
    "main_info": "Asosiy ma'lumotlar",
    "name": "Ism",
    "patronymic": "Otasining ismi",
    "surname": "Familiya",
    "pin": "JShShIR",
  }
}
</i18n>