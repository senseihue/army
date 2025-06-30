<script setup lang="ts">
import { ServiceHero, ServiceTabs } from "~/widgets/layout/service"
</script>

<template>
  <main class="grow">
    <service-hero />
    <div class="bg-[#F1F5F9]">
      <service-tabs />
      <slot />
    </div>
  </main>
</template>

<style scoped></style>
