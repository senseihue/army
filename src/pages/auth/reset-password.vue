<script setup lang="ts">
import { ResetPasswordForm } from "~/features/auth/ui"

const requiredQueries = ['timestamp', 'token', 'email', 'role']

definePageMeta({
  validate: (route) => {
    const missingQueries = requiredQueries.filter(query => !route.query[query])
    if (missingQueries.length > 0) {
      throw showError({ statusCode: 403, statusMessage: `Missing required query parameters` })
    }

    return true
  }
})
</script>

<template>
  <div class="grow bg-blue-command">
    <div class="container-7xl p-section">
      <reset-password-form />
    </div>
  </div>
</template>

<style scoped></style>
