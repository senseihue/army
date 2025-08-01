<script lang="ts" setup>
const model = defineModel()
</script>

<template>
  <div class="relative">
    <div class="absolute bottom-0 left-0 top-0 grid w-12 place-items-center">
      <Icon class="text-2xl text-gray-600" name="lucide:search" />
    </div>

    <input v-bind="$attrs" v-model="model" class="form-input h-12 w-full !pl-12" placeholder="Search..." type="text" />
  </div>
</template>
