<script setup lang="ts">
import { ServiceHero, ServiceTabs } from "~/widgets/layout/service"
</script>

<template>
  <main class="grow">
    <service-hero />
    <service-tabs />
    <slot />
  </main>
</template>

<style scoped></style>
