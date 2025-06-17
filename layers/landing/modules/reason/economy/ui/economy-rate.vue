<template>
  <div>
    <h3 class="text-center !text-lg">{{ title }}</h3>

    <div>
      <p class="text-center">{{ subTitle }}</p>
    </div>

    <div class="flex items-center justify-center gap-20 rounded-xl bg-[#00B0F0] px-10 py-4">
      <div class="flex flex-col items-center gap-0.5">
        <span class="inline-block text-xl font-semibold text-white md:text-3xl">{{ leftNumber }}</span>
        <span class="text-white">{{ leftYear }}</span>
      </div>

      <img class="w-12" alt="chart" src="/public/img/reason/economy/chart.webp" />

      <div class="flex flex-col items-center gap-0.5">
        <span class="inline-block text-xl font-semibold text-white md:text-3xl">{{ rightNumber }}</span>
        <span class="text-white">{{ rightYear }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  title: string
  subTitle: string
  leftNumber: number
  leftYear: number
  rightNumber: number
  rightYear: number
}

defineProps<IProps>()
</script>
