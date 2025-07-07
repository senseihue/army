<script setup lang="ts">
import { ProfileHeader } from "~/features/profile"
import { ServiceGrid, ServiceTabs } from "~/features/profile/service"




</script>

<template>
  <div class="w-full">
    <profile-header icon-name="lucide:briefcase" :title="$t('nav.profile.my_services')" />
    <div class="mt-2 grid w-full gap-4 rounded-2xl bg-white p-4">
      <service-tabs />
      <service-grid />
    </div>
  </div>
</template>

<style scoped></style>
