<script setup lang="ts">
import { PrivatizationContent, PrivatizationHero } from "#layers/landing/modules/guide/privatization"

definePageMeta({ fixedHeader: true })
</script>

<template>
  <div>
    <privatization-hero />
    <privatization-content />
  </div>
</template>
