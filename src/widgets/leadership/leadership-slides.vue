<script setup lang="ts">
import AboutLeadership from "~/features/about/ui/about-leadership.vue"

const { data } = await useFetch("/gateway/siw/public/leadership")
</script>

<template>
  <about-leadership :leaderships="data.content" />
</template>

<style scoped></style>
