<script setup lang="ts">
const { minHeight } = useWindowHeight()
</script>

<template>
  <client-only>
    <div
      class="relative flex min-h-screen flex-col overflow-hidden transition-all duration-500 ease-in-out"
      :style="{ minHeight }"
    >
      <!--  Background  -->
      <div v-rellax class="absolute inset-0 -z-10 bg-blue-midnight" data-rellax-speed="-5">
        <img
          class="h-full w-full object-cover object-center opacity-60"
          src="https://dev-portal.miit.uz/uploads/tashkent-buildings.jpeg"
          alt="Background"
        />
      </div>

      <!--  Content  -->
      <div class="container-7xl z-10 grid grow items-center">
        <div class="pb-4 pt-16 md:text-left">
          <h1 class="text-4xl font-bold text-white md:text-6xl">Why Uzbekistan</h1>
        </div>
      </div>
    </div>
  </client-only>
</template>
