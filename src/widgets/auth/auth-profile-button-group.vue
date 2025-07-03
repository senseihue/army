<script setup lang="ts">
import { AuthProfileInfo } from "~/features/auth/ui"
import SignInButton from "~/widgets/auth/sign-in-button.vue"
</script>

<template>
  <div class="flex items-center">
    <auth-profile-info />
    <sign-in-button class="mx-2 !hidden sm:!inline-flex" />
  </div>
</template>

<style scoped></style>
