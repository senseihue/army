<script setup lang="ts">
interface IProps {
  image: string
  text: string
}

defineProps<IProps>()
</script>

<template>
  <section>
    <div class="container-7xl">
      <div class="p-section">
        <div class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          <img class="w-full object-cover object-center" alt="Image" :src="image" />
          <p class="whitespace-pre-line text-gray-600 text-justify">{{ text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
