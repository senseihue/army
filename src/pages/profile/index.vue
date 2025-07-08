<script setup lang="ts">
import { ProfileHeader, ProfileMainInfo, ProfilePassportInfo } from "~/features/profile"
</script>

<template>
  <div class="flex w-full flex-col gap-2">
    <profile-header icon-name="lucide:shield-user" :title="$t('nav.profile.main')" />
    <profile-main-info />
    <profile-passport-info />
  </div>
</template>
