<script setup lang="ts">
interface IProps {
  heading: string
  content: string
}

defineProps<IProps>()
</script>

<template>
  <div v-html="heading" class="mb-4 text-xl font-semibold text-blue-command" />
  <div v-html="content" class="content-block-body" />
</template>

<style scoped></style>
