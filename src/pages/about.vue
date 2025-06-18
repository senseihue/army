<script setup lang="ts">
import { AboutService, AboutFunction, AboutHero, AboutInfo, AboutAttachment, AboutEntity } from "~/features/about"
import { LeadershipSlides } from "~/widgets/leadership"

const { t } = useI18n()
definePageMeta({ fixedHeader: true })
useHead({ title: t("nav.about.about_us") })
</script>

<template>
  <div>
    <about-hero />
    <about-info />
    <leadership-slides />
    <about-function />
    <about-service />
    <about-attachment />
    <about-entity />
  </div>
</template>
