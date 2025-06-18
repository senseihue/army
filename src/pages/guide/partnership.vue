<script setup lang="ts">
import { PartnershipContent, PartnershipHero } from "~/features/guide/partnership"

definePageMeta({ fixedHeader: true })

const { t } = useI18n()
useHead({ title: t("nav.guide.partnership") })
</script>

<template>
  <div>
    <partnership-hero />
    <partnership-content />
  </div>
</template>
