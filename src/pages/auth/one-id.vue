<script lang="ts" setup>
import { useAuthService } from "~/features/auth"
import type { RouteLocation } from "vue-router"

const { signIn, getRedirectUrl } = useAuthService()
const route = useRoute()

definePageMeta({
  validate: (route: RouteLocation) => {
    if (!route.query.role) {
      throw showError({
        statusCode: 403,
        statusMessage: "Forbidden"
      })
    }
    return true
  }
})

onMounted(() => getRedirectUrl(`${window.location.origin}/sso?role=${route.query.role}`))
</script>

<template>
  <div>
    <div class="grid min-h-dvh w-full place-items-center">
      <ui-spinner size="size-32" />
    </div>
  </div>
</template>
