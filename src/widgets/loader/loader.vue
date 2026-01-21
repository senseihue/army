<script setup lang="ts">
interface IProps {
  size?: string
}

withDefaults(defineProps<IProps>(), { size: "size-6" })
</script>

<template>
  <div class="flex h-full min-h-56 w-full items-center justify-center gap-2">
    <ui-spinner :size="size" />
    <p>
      {{ $t("actions.loading") }}
    </p>
  </div>
</template>
