<script setup lang="ts">
import { AuthProfileInfo } from "~/features/auth/ui"
import { SignInButton } from "~/widgets/auth"

const { $session } = useNuxtApp()
const { loggedIn } = $session || {}
</script>

<template>
  <div class="flex items-center">
    <auth-profile-info v-if="loggedIn" />
    <sign-in-button v-else class="mx-2 !hidden sm:!inline-flex" />
  </div>
</template>
