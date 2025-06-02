<script setup lang="ts">
import { ExploreGrid, ExploreHero } from "#layers/landing/modules/guide/explore"

definePageMeta({ fixedHeader: true })
</script>

<template>
  <div>
    <explore-hero />
    <explore-grid />
  </div>
</template>
