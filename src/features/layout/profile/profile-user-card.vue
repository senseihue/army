<script setup lang="ts">
const { $session } = useNuxtApp()
const { profile, loading } = $session || {}

const userInformation = computed(() => {
  if (!profile.value) return null
  return profile.value
})
</script>

<template>
  <div class="mb-[10px] rounded-[14px] bg-white px-2 py-4">
    <div class="flex flex-col items-center gap-1">
      <img class="rounded-2xl overflow-hidden" src="https://picsum.photos/120/120" alt="" />
      <p class="text-sm font-medium leading-9 text-gray-600 dark:text-gray-300">
        {{ userInformation?.name }} {{ userInformation?.middle_name }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
