<script setup lang="ts">
import { ProjectCategoryDetails, ProjectCategoryHeroDetails } from "~/features/project/category"

definePageMeta({ fixedHeader: true })

const { t } = useI18n()
useHead({ title: t("nav.guide.project_details") })
</script>

<template>
  <div>
    <project-category-hero-details />
    <project-category-details />
  </div>
</template>
