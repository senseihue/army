<script setup lang="ts">
import { SignInForm } from "~/features/auth/ui"
import type { RouteLocation } from "#vue-router"

const roles = ["investor", "businessman"]

definePageMeta({
  validate: (route: RouteLocation) => {
    if (!route.query?.role || (route.query?.role && !roles.includes(route.query.role as string))) {
      throw showError({ statusCode: 403, statusMessage: "Forbidden" })
    }

    return true
  }
})
</script>

<template>
  <div class="grow bg-blue-command">
    <div class="container-7xl p-section">
      <sign-in-form />
    </div>
  </div>
</template>
