<script lang="ts" setup>
import { HomeStatisticsProgress } from "~/layers/features/home"

interface IProps {
  label?: string
  progress: string
  description?: string
}

defineProps<IProps>()
</script>

<template>
  <div class="flex w-full flex-col justify-center gap-4">
    <home-statistics-progress :label :progress />
    <p v-if="description" class="text-body text-center">{{ description }}</p>
  </div>
</template>
