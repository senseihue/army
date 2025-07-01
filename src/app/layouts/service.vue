<script setup lang="ts">
import { ServiceHero, ServiceProcessTabs } from "~/widgets/layout/service"
</script>

<template>
  <main class="grow">
    <service-hero />
    <div class="bg-[#F1F5F9]">
      <service-process-tabs />
      <slot />
    </div>
  </main>
</template>
