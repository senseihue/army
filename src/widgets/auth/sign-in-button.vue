<script setup lang="ts">
import { useAuthService } from "~/features/auth"

const { getRedirectUrl } = useAuthService()

const getUrl = () => {
  getRedirectUrl(window.location.origin)
}
</script>

<template>
  <client-only>
    <ui-button
      v-bind="$attrs"
      v-if="!$session?.loggedIn.value"
      rounded
      color="success"
      :label="$t('labels.sign_in')"
      @click="getUrl"
    />
  </client-only>
</template>
