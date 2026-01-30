<script setup lang="ts">
import { AuthRoleSelectModal } from "@/features/auth/ui"
import { useAuthService } from "~/features/auth"

const modal = useModal()
const authService = useAuthService()

const getRedirectUrl = () => authService.signIn()
</script>

<template>
  <ui-button
    v-bind="$attrs"
    class="ml-2 rounded-full !bg-zinc-100 px-4 py-1.5 text-sm font-medium !text-zinc-900 transition-colors hover:!bg-zinc-200"
    rounded
    color="success"
    :label="$t('labels.sign_in')"
    @click="getRedirectUrl"
  />
</template>
