<template>
  <section class="relative">
    <div class="absolute inset-0 -z-10">
      <img class="h-full w-full" src="/img/home/map.webp" alt="img" />
    </div>

    <div class="container-7xl">
      <div class="p-section">
        <div class="relative">
          <h2 class="text-2xl mb-10 font-bold lg:text-3xl text-blue-midnight text-center">{{$t('labels.investment_of_uzbekistan')}}</h2>

          <div data-aos="zoom-in" data-aos-delay="100">
            <home-svg-map v-model="regionId" attached-element-id="map-card-header" class="my-4" />
          </div>

          <home-svg-map-card :id="regionId"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HomeSvgMap from "~/features/home/ui/home-svg-map.vue"
import HomeSvgMapCard from "~/features/home/ui/home-svg-map-card.vue"

const regionId = ref<string>()
</script>

<style lang="scss" scoped></style>
