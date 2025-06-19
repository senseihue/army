<script setup lang="ts">
import { Slide } from "vue3-carousel"

interface IProps {
  heading: string
  text: string
}

defineProps<IProps>()
</script>

<template>
  <slide>
    <div class="sector-slider__slide">
      <h3 class="sector-slider__slide-heading">{{ heading }}</h3>
      <p class="sector-slider__slide-text">{{ text }}</p>
    </div>
  </slide>
</template>

<style scoped>
.sector-slider__slide {
  @apply flex h-full min-h-80 flex-col items-center justify-center;

  &-heading {
    @apply mb-2 text-center text-2xl font-bold leading-10 text-blue-command lg:text-3xl;
  }

  &-text {
    @apply text-center text-sm font-bold text-blue-midnight;
  }
}
</style>
