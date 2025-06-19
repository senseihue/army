<script setup lang="ts">
interface IProps {
  sequence: number
  text: string
}

defineProps<IProps>()
</script>

<template>
  <div class="flex items-start gap-12">
    <h3 class="text-4xl font-bold leading-10 text-blue-command">{{ sequence < 10 ? "0" : "" }}{{ sequence }}</h3>
    <p class="text-gray-olive">{{ text }}</p>
  </div>
</template>
