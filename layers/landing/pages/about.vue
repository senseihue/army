<script setup lang="ts">
import {
  AboutService,
  AboutFunction,
  AboutHero,
  AboutInfo,
  AboutAttachment,
  AboutEntity
} from "#layers/landing/modules/about"

definePageMeta({ fixedHeader: true })
</script>

<template>
  <div>
    <about-hero />
    <about-info />
    <about-function />
    <about-service />
    <about-attachment />
    <about-entity />
  </div>
</template>
