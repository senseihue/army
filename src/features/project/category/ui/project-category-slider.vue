<script lang="ts" setup>
import type { Swiper } from 'swiper/types'
import { Navigation } from 'swiper/modules';

const modules = [Navigation]
const swiper = ref<Swiper>()

const thumbnailBreakpoints = {
  640: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 6,
  },
}

const onSwiper = (instance: Swiper) => (swiper.value = instance)
</script>

<template>
  <div class="project-service-slider relative">
    <div class="absolute -top-8 right-8">
      <div v-if="swiper?.allowSlidePrev" @click="swiper?.slidePrev()" class="swiper-button-prev" />
      <div v-if="swiper?.allowSlideNext" @click="swiper?.slideNext()" class="swiper-button-next" />
    </div>

    <Swiper :breakpoints="thumbnailBreakpoints" :modules="modules" :slides-per-view="1" :space-between="1" @swiper="onSwiper">
      <slot />
    </Swiper>
  </div>
</template>

<style lang="scss" scoped>
.project-service-slider {
  & .swiper-wrapper {
    @apply flex items-start;
  }

  & .swiper-button-prev {
    @apply -left-10;
  }

  & .swiper-button-next {
    @apply -right-8;
  }

  & .swiper-button-prev,
  & .swiper-button-next {
    @apply top-1/2 m-0 h-8 w-8 -translate-y-1/2 rounded-full bg-gray-olive text-white hover:bg-gray-olive;

    &::after {
      @apply text-base;
    }
  }
}
</style>
