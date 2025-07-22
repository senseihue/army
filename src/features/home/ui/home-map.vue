<template>
  <section class="relative">
    <div class="absolute inset-0 -z-10">
      <img class="h-full w-full" src="/img/home/map.webp" alt="img" />
    </div>

    <div class="container-6xl">
      <div class="p-section">
        <div class="relative">
          <h2 class="text-2xl font-bold lg:text-3xl text-blue-midnight text-center">Investment map of Uzbekistan</h2>

          <div data-aos="zoom-in" data-aos-delay="100">
<!--            <home-svg-map v-model="regionId" attached-element-id="map-card-header" />-->
          </div>


        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HomeSvgMap from "~/features/home/ui/home-svg-map.vue"

const regionId = ref<string>("")
</script>

<style lang="scss" scoped></style>
