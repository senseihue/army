<script setup lang="ts">
interface IProps {
  iconName: string
  title: string
}

defineProps<IProps>()
defineEmits<{
  (e: "refresh"): void
}>()
</script>

<template>
  <div class="flex w-full items-center justify-between">
    <div class="flex items-center gap-3">
      <icon class="text-xl text-blue-midnight" :name="iconName" />
      <h2 class="text-2xl font-bold text-blue-midnight">
        {{ title }}
      </h2>
    </div>
    <ui-button class="rounded-xl" color="secondary" variant="flat">
      <span>{{ $t("actions.refresh") }}</span>
      <icon name="lucide:refresh-ccw" />
    </ui-button>
  </div>
</template>
