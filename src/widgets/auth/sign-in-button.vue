<script setup lang="ts">
import { AuthRoleSelectModal } from "@/features/auth/ui"

const modal = useModal()
const { $session } = useNuxtApp()

const showModal = () => modal.show("auth-role-select-modal")
</script>

<template>
  <client-only>
    <ui-button
      v-bind="$attrs"
      v-if="$session?.loggedIn"
      rounded
      color="success"
      :label="$t('labels.sign_in')"
      @click="showModal"
    />

    <auth-role-select-modal />
  </client-only>
</template>
