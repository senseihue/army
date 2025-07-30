<script setup lang="ts">
import { Slide } from "vue3-carousel"

interface IProps {
  icon: string
  title: string
  index: number
  serviceCategory: any
}

defineProps<IProps>()
</script>

<template>
  <slide>
    <div
      class="text-gray-[#475569] relative h-full w-full flex flex-col items-center justify-evenly cursor-pointer rounded-xl py-3 pl-2 pr-6 text-center transition duration-300"
    >
      <Icon v-if="icon" class="text-xl" :name="icon"  />

      <div>
        <p class="line-clamp-2 grid h-full place-content-center text-[11px] font-[600]">
          {{ title }}
        </p>
        <span v-if="index !== serviceCategory - 1" class="project-clip-border hidden lg:block"></span>
      </div>
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

.project-clip-border {
  @apply absolute right-0 top-0 h-full w-full bg-[#E4E4E7];
  clip-path: polygon(92% 0, 100% 50%, 92% 100%, 91% 100%, 99% 50%, 91% 0);
}
</style>
