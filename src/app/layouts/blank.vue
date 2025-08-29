<template>
  <main>
    <auth-error-modal />

    <slot />
  </main>
</template>
<script setup lang="ts">
import { AuthErrorModal } from "~/entities/auth/ui"
</script>
