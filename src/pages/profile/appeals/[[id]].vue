<script setup lang="ts">
import { ProfileHeader } from "~/features/profile"
import { AppealGrid, AppealRejectModal, AppealReplyModal, useAppealService } from "~/features/appeal"

definePageMeta({
  protected: true
})

const route = useRoute()
const { getAppealList } = useAppealService()

const localePath = useLocalePath()
const refresh = async () => {
  if (route.params.id) await navigateTo(localePath("/profile/appeals"))
  else getAppealList()
}
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <profile-header icon-name="lucide:message-circle-warning" :title="$t('nav.profile.appeals')" @refresh="refresh" />
    <div class="mt-2 grid w-full gap-4 rounded-2xl bg-white p-4">
      <appeal-grid />
    </div>
    <appeal-reply-modal />
    <appeal-reject-modal />
  </div>
</template>

<style scoped></style>
