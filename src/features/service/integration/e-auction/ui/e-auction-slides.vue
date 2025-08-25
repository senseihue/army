<script setup lang="ts">
import { ref } from "vue"
import { type CarouselConfig, Navigation } from "vue3-carousel"
import { Carousel, Slide } from "vue3-carousel"
import "vue3-carousel/carousel.css"

interface ISlide {
  slides: any
}

defineProps<ISlide>()

const carouselRef = ref()
const currentSlide = ref(0)

const slideTo = (nextSlide: number) => (currentSlide.value = nextSlide)

const thumbnailsConfig: Partial<CarouselConfig> = {
  height: 90,
  itemsToShow: 4,
  wrapAround: true,
  touchDrag: false,
  gap: 16,
  snapAlign: "start",
  breakpoints: {
    576: {
      itemsToShow: 4,
      gap: 16
    },
    376: {
      itemsToShow: 3,
      gap: 10
    }
  }
}

const config: Partial<CarouselConfig> = {
  height: 381,
  itemsToShow: 1,
  wrapAround: true,
  slideEffect: "fade",
  mouseDrag: false,
  touchDrag: false,
  breakpoints: {
    576: {
      height: 381
    },
    376: {
      height: 281
    }
  }
}
</script>

<template>
  <div class="auction-section">
    <div class="flex flex-col">
      <div class="mb-4">
        <carousel v-model="currentSlide" v-bind="config" id="main-slides" ref="carouselRef">
          <slide
            v-for="(image, idx) in slides"
            :data-vc-slide-item-after-content="$t('labels.general_view')"
            :key="idx"
            :style="{
              '--vc-slide-item-after-content': true
            }"
          >
            <img class="h-full w-full select-none object-cover object-center" alt="image" :src="image.image" />
          </slide>
        </carousel>
      </div>
    </div>

    <carousel v-bind="thumbnailsConfig" v-model="currentSlide" id="thumbnails">
      <slide v-for="(image, idx) in slides" :key="idx">
        <template #default="{ currentIndex, isActive }">
          <div :class="['thumbnail', { 'is-active': isActive }]" @click="slideTo(currentIndex)">
            <img class="thumbnail-image" alt="Image" :src="image.image" />
          </div>
        </template>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<style>
.auction-section {
  .carousel {
    --vc-nav-background: rgba(255, 255, 255, 0.7);
    --vc-nav-border-radius: 100%;
  }

  #main-slides .carousel__slide {
    --vc-slide-item-after-content: "";
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    max-width: 50rem;
    margin-left: auto;
    margin-right: auto;

    img {
      overflow: hidden;
      border-radius: 8px;
    }
  }

  #main-slides .carousel__slide::after {
    content: attr(data-vc-slide-item-after-content);
    display: block;
    @apply text-center;
  }

  #thumbnails {
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    max-width: 50rem;
  }

  .thumbnail {
    height: 100%;
    width: 100%;
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.3s ease-in-out;
  }

  .thumbnail.is-active,
  .thumbnail:hover {
    opacity: 1;
  }

  img {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
