<script setup lang="ts">
import { ResetPasswordForm } from "~/features/auth/ui"

const requiredQueries = ["time", "token", "email", "uuid"]
definePageMeta({
  validate: async (route) => {
    const missingQueries = requiredQueries.filter((query) => !route.query[query])
    if (missingQueries.length > 0) {
      throw showError({ statusCode: 403, statusMessage: `Missing required query parameters` })
    }

    const { content } = await $fetch<IResponse<any>>("/gateway/core/auth/check-reset-link", {
      method: "POST",
      params: {
        uuid: route.query.uuid
      }
    })

    if (!content) {
      throw showError({ statusCode: 403, statusMessage: `Invalid or expired reset link` })
    }
    return true
  }
})
</script>

<template>
  <div class="bg-blue-command grow">
    <div class="container-7xl p-section">
      <reset-password-form />
    </div>
  </div>
</template>

<style scoped></style>
