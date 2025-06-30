<template>
  <div class="container-7xl p-section">
    <div class="mb-12">
      <h3 class="mb-4 text-lg font-bold text-gray-600">{{ t("title") }}</h3>
      <p class="text-gray-600">
        {{ t("description") }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n({ useScope: "local" })
</script>

<i18n lang="json">
{
  "en": {
    "title": "Explore Investment Opportunities",
    "description": "Welcome to the Uzbekistan Investor Portal, where you can explore a wide range of investment opportunities across various sectors. Below, you’ll find categories of projects available for investment. Click on each category to discover specific projects and learn more about their potential."
  },
  "ru": {
    "title": "Title",
    "description": "Description"
  },
  "uz": {
    "title": "Title",
    "description": "Description"
  }
}
</i18n>

<style scoped></style>
