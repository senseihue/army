<script setup lang="ts"></script>

<template>
  <div class="rounded-2xl bg-white p-4">
    <p class="text-lg font-semibold text-blue-midnight">
      {{ $t("labels.profile.main_info") }}
    </p>
    <div class="mt-2 flex w-full gap-9 py-4">
      <img class="h-28 w-28 rounded-lg object-cover object-center" src="https://picsum.photos/200/300" alt="" />
      <div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div class="flex flex-col gap-1">
          <label class="text-xs font-medium text-blue-command">
            {{ $t("labels.profile.surname") }}
          </label>
          <p class="text-sm font-medium">John Doe</p>
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-xs font-medium text-blue-command">
            {{ $t("labels.profile.name") }}
          </label>
          <p class="text-sm font-medium">John Doe</p>
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-xs font-medium text-blue-command">
            {{ $t("labels.profile.middle_name") }}
          </label>
          <p class="text-sm font-medium">John Doe</p>
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-xs font-medium text-blue-command">
            {{ $t("labels.profile.pinfl") }}
          </label>
          <p class="text-sm font-medium">John Doe</p>
        </div>
      </div>
    </div>
  </div>
</template>
