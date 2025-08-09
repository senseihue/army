<script setup lang="ts">
interface Props {
  image: string
  label: string
  value: string
}

defineProps<Props>()
const model = defineModel<any>()
</script>

<template>
  <label class="auth-select-radio" :for="value">
    <input v-model="model" class="hidden" type="radio" :id="value" :value="value" />
    <img :src="image" :alt="label" />
    <span>{{ label }}</span>
  </label>
</template>

<style scoped>
.auth-select-radio {
  &:has(input[type="radio"]:checked) {
    @apply  border-blue-midnight ring ring-blue-midnight/20;
  }

  @apply flex flex-row items-center gap-4 sm:flex-col sm:justify-center p-4 sm:gap-2 sm:p-10;
  @apply rounded-2xl border-2 border-blue-light cursor-pointer hover:border-blue-midnight/60;
  @apply transition-colors duration-300 ease-in-out;
}
</style>
