<script setup lang="ts">
import { ProfileHeader } from "~/features/profile"
definePageMeta({
  protected: true
})
</script>

<template>
  <div class="w-full">
    <profile-header icon-name="lucide:archive" :title="$t('nav.profile.my_projects')" />
  </div>
</template>

<style scoped></style>
