<script setup lang="ts">
import { AuthRoleSelectModal } from "@/features/auth/ui"
import { useAuthService } from "~/features/auth"

const modal = useModal()
const authService = useAuthService()

const getRedirectUrl = () => authService.signIn()
</script>

<template>
  <client-only>
    <ui-button
      v-bind="$attrs"
      rounded
      color="success"
      class="ml-2 px-4 py-1.5 text-sm rounded-full !bg-zinc-100 !text-zinc-900 font-medium hover:!bg-zinc-200 transition-colors"
      :label="$t('labels.sign_in')"
      @click="getRedirectUrl"
    />

  </client-only>
</template>
