<script setup lang="ts">
import AboutLeadership from "~/features/about/ui/about-leadership.vue"

const { locale } = useI18n()
const { content } = await $fetch<IResponse<any>>("/gateway/siw/public/leadership", {
  headers: {
    "Accept-Language": locale.value
  }
})
</script>

<template>
  <about-leadership :leaderships="content" />
</template>

<style scoped></style>
