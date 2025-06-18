<script setup lang="ts">
import {
  AboutService,
  AboutFunction,
  AboutHero,
  AboutInfo,
  AboutAttachment,
  AboutEntity
} from "~/layers/features/about"

const { t } = useI18n()
definePageMeta({ fixedHeader: true })
useHead({ title: t("nav.about.about_us") })
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
