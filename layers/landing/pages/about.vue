<script setup lang="ts">
import { AboutFunction, AboutHero, AboutInfo } from "#layers/landing/modules/about"

definePageMeta({ fixedHeader: true })
</script>

<template>
  <div>
    <about-hero />
    <about-info />
    <about-function />
  </div>
</template>
