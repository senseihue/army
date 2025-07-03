<script setup lang="ts">

const { t } = useI18n({useScope: "local"})
const { $session } = useNuxtApp()
const { profile } = $session || {}
</script>

<template>
  <div class="rounded-2xl bg-white p-4">
    <p class="text-lg font-semibold text-blue-midnight">
      {{ t("main_info") }}
    </p>
    <div v-if="profile?.user" class="mt-2 flex w-full gap-9 py-4">
      <img class="h-28 w-28 rounded-lg object-cover object-center" src="https://picsum.photos/200/300" alt="" />
      <div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div class="flex flex-col gap-1">
          <label class="text-xs font-medium text-blue-command">
            {{ t("surname") }}
          </label>
          <p class="text-sm font-medium">
            {{ profile.user.sur_name }}
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-xs font-medium text-blue-command">
            {{ t("name") }}
          </label>
          <p class="text-sm font-medium">
            {{ profile.user.first_name }}
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-xs font-medium text-blue-command">
            {{ t("middle_name") }}
          </label>
          <p class="text-sm font-medium">
            {{ profile.user.mid_name }}
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-xs font-medium text-blue-command">
            {{ t("pinfl") }}
          </label>
          <p class="text-sm font-medium">
            {{ profile.user.pin }}
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
    "middle_name": "Middle name",
    "pinfl": "PINOI"
  },
  "ru": {
    "main_info": "Основная информация",
    "name": "Имя",
    "surname": "Фамилия",
    "middle_name": "Отчество",
    "pinfl": "ПИНФЛ"
  },
  "oz": {
    "main_info": "Асосий маълумотлар",
    "name": "Исм",
    "surname": "Фамилия",
    "middle_name": "Отчество",
    "pinfl": "ПИНФЛ",
  }
}
</i18n>
