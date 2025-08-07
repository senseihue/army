<script setup lang="ts">
import { useAuthService } from "~/entities/auth"

const { $session } = useNuxtApp()
const { getRedirectUrl } = useAuthService()

const getUrl = () => {
  getRedirectUrl(`${window.location.origin}/sso`)
}
</script>

<template>
  <client-only>
    <ui-button
      v-bind="$attrs"
      v-if="$session?.loggedIn"
      rounded
      color="success"
      :label="$t('labels.sign_in')"
      @click="getUrl"
    />
  </client-only>
</template>
