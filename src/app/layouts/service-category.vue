<script setup lang="ts">
import { ServiceCategoryHero, ServiceCategoryTabs } from "~/widgets/layout/service/category"
</script>

<template>
  <main class="grow">
    <service-category-hero />
    <service-category-tabs />
    <slot />
  </main>
</template>
