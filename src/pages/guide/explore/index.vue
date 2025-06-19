<script setup lang="ts">
import { ExploreGrid, ExploreHero } from "~/features/guide/explore"

definePageMeta({ fixedHeader: true })

const { t } = useI18n()
useHead({ title: t("nav.guide.explore") })
</script>

<template>
  <div>
    <explore-hero />
    <explore-grid />
  </div>
</template>
