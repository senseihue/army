<script setup lang="ts">
import { useAuthService } from "~/features/auth"

const { getRedirectUrl } = useAuthService()
</script>

<template>
  <client-only>
    <ui-button
      v-bind="$attrs"
      v-if="!$session?.loggedIn.value"
      rounded
      color="success"
      :label="$t('labels.sign_in')"
      @click="getRedirectUrl()"
    />
  </client-only>
</template>
