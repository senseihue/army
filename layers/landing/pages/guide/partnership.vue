<script setup lang="ts">
import { PartnershipContent, PartnershipHero } from "#layers/landing/modules/guide/partnership"

definePageMeta({ fixedHeader: true })
</script>

<template>
  <div>
    <partnership-hero />
    <partnership-content />
  </div>
</template>
