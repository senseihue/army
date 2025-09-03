<script setup lang="ts">
import { ProfileHeader } from "~/features/profile"
import { AppealGrid, useAppealService } from "~/features/appeal"

definePageMeta({
  protected: true
})

const { getAppealList } = useAppealService()
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <profile-header
      icon-name="lucide:message-circle-warning"
      :title="$t('nav.profile.appeals')"
      @refresh="getAppealList"
    />
    <div class="mt-2 grid w-full gap-4 rounded-2xl bg-white p-4">
      <appeal-grid />
    </div>
  </div>
</template>

<style scoped></style>
