<script setup lang="ts">
import type { CarouselConfig } from "vue3-carousel"
import { Carousel, Slide } from "vue3-carousel"

const carouselConfig = computed<Partial<CarouselConfig>>(() => ({
  snapAlign: "start",
  wrapAround: true,
  itemsToShow: 1,
  autoplay: true,
  slideEffect: "fade",
  transition: 5000
}))
</script>

<template>
  <carousel v-bind="carouselConfig" class="carousel">
    <slide class="h-full">
      <img class="slide-img" src="/img/home/1.JPG" alt="" />
    </slide>
    <slide class="h-full">
      <img class="slide-img" src="/img/home/5.JPG" alt="" />
    </slide>
    <slide class="h-full">
      <img class="slide-img" src="/img/home/6.JPG" alt="" />
    </slide>
  </carousel>
</template>

<style>
.carousel {
  --vc-carousel-height: 100vh !important;
  .slide-img {
    @apply object-cover h-full;
  }
}
</style>
