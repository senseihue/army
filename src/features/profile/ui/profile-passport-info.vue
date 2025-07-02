<script setup lang="ts"></script>

<template>
  <div class="rounded-2xl bg-white p-4">
    <p class="text-lg font-semibold text-blue-midnight">
      {{ $t("labels.profile.passport_info") }}
    </p>
    <div class="mt-5 grid w-full grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
      <div class="flex flex-col gap-1">
        <label class="text-xs font-medium text-blue-command">
          {{ $t("labels.profile.passport_number") }}
        </label>
        <p class="text-sm font-medium">John Doe</p>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-xs font-medium text-blue-command">
          {{ $t("labels.profile.passport_issued_date") }}
        </label>
        <p class="text-sm font-medium">John Doe</p>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-xs font-medium text-blue-command">
          {{ $t("labels.profile.passport_expiry_date") }}
        </label>
        <p class="text-sm font-medium">John Doe</p>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-xs font-medium text-blue-command">
          {{ $t("labels.profile.gender") }}
        </label>
        <p class="text-sm font-medium">John Doe</p>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-xs font-medium text-blue-command">
          {{ $t("labels.profile.date_of_birth") }}
        </label>
        <p class="text-sm font-medium">John Doe</p>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-xs font-medium text-blue-command">
          {{ $t("labels.profile.nationality") }}
        </label>
        <p class="text-sm font-medium">John Doe</p>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-xs font-medium text-blue-command">
          {{ $t("labels.profile.country_of_birth") }}
        </label>
        <p class="text-sm font-medium">John Doe</p>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-xs font-medium text-blue-command">
          {{ $t("labels.profile.citizenship") }}
        </label>
        <p class="text-sm font-medium">John Doe</p>
      </div>
      <div class="col-span-full flex flex-col gap-1">
        <label class="text-xs font-medium text-blue-command">
          {{ $t("labels.profile.passport_issued_by") }}
        </label>
        <p class="text-sm font-medium">John Doe</p>
      </div>
    </div>
  </div>
</template>
