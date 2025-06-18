<script setup lang="ts">
import { PrivatizationContent, PrivatizationHero } from "~/features/guide/privatization"

definePageMeta({ fixedHeader: true })

const { t } = useI18n()
useHead({ title: t("nav.guide.privatization") })
</script>

<template>
  <div>
    <privatization-hero />
    <privatization-content />
  </div>
</template>
