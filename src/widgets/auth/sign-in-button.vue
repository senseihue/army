<script setup lang="ts">
import { AuthRoleSelectModal } from "@/features/auth/ui"

const { $session } = useNuxtApp()
const modal = useModal()

</script>

<template>
  <client-only>
    <ui-button v-bind="$attrs" v-if="$session?.loggedIn" rounded color="success" :label="$t('labels.sign_in')"
      @click="() => modal.show('auth-role-select-modal')" />
    <auth-role-select-modal />
  </client-only>
</template>
