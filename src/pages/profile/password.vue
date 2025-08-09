<script setup lang="ts">
import { ProfileHeader } from "~/features/profile"
import { ProfileChangePasswordForm } from "~/features/profile/ui"

definePageMeta({ nonResidentOnly: true })
</script>

<template>
  <div class="flex w-full flex-col gap-2">
    <profile-header icon-name="lucide:shield-user" :title="$t('nav.profile.change_password')" :show-refresher="false" />

    <div class="mt-2 grid w-full gap-4 rounded-2xl bg-white p-4">
      <profile-change-password-form />
    </div>
  </div>
</template>
