<script setup lang="ts">
import { ProfileHeader } from "~/features/profile"
import { ServiceTabs } from "~/features/profile/my-services"
</script>

<template>
  <div class="w-full">
    <profile-header icon-name="lucide:briefcase" :title="$t('nav.profile.my_services')" />
    <div class="rounded-2xl bg-white p-4">
      <service-tabs />
    </div>
  </div>
</template>

<style scoped></style>
