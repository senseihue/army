<template>
  <div class="rounded-md bg-gray-50 p-4 text-sm">
    <Icon v-if="icon" class="mb-6 block size-5" :name="icon" />
    <Icon v-else class="mb-6 block size-5" name="lucide:circle-dot" />
    <p class="mb-1 font-medium">{{ title }}</p>
    <p class="text-gray-600">{{ description ?? $t('labels.no_data') }}</p>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title: string
  description?: string
  icon?: string
}

defineProps<IProps>()
</script>

<style scoped></style>
