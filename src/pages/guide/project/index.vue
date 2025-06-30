<script setup lang="ts">
import ProjectHero from "~/features/project/ui/project-hero.vue"

definePageMeta({ fixedHeader: true })

const { t } = useI18n()
useHead({ title: t("nav.guide.project") })
</script>

<template>
  <div>
    <project-hero />
  </div>
</template>
