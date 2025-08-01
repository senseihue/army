<script setup lang="ts">
import { SearchHero, SearchGrid } from "~/features/search"

const { t } = useI18n()
definePageMeta({ fixedHeader: true })
useHead({ title: t("nav.about.search") })
</script>

<template>
  <div>
    <search-hero />
    <search-grid />
  </div>
</template>
