<script setup lang="ts">
import { ProjectCategoryHero, ProjectCategoryBlock } from "~/features/project/category"

definePageMeta({ fixedHeader: true })

const { t } = useI18n()
useHead({ title: t("nav.guide.project_category") })
</script>

<template>
  <div>
    <project-category-hero />
    <project-category-block/>
  </div>
</template>
