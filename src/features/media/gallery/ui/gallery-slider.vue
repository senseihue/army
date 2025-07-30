<script setup lang="ts">
import { ref } from "vue"
import { type CarouselConfig, Navigation } from "vue3-carousel"
import { Carousel, Slide } from "vue3-carousel"
import "vue3-carousel/carousel.css"

interface IProps {
  slides: IFile[]
  title: string
}

defineProps<IProps>()

const carouselRef = ref()
const currentSlide = ref(0)

const slideTo = (nextSlide: number) => (currentSlide.value = nextSlide)

const thumbnailsConfig: Partial<CarouselConfig> = {
  height: 128,
  wrapAround: false,
  touchDrag: false,
  gap: 16,
  snapAlign: "center",
  breakpoints: {
    576: {
      itemsToShow: 4,
      gap: 16
    },
    376: {
      itemsToShow: 3,
      height: 100,
      gap: 10
    }
  }
}

const config: Partial<CarouselConfig> = {
  height: 500,
  itemsToShow: 1,
  wrapAround: false,
  slideEffect: "fade",
  mouseDrag: false,
  touchDrag: false,
  breakpoints: {
    576: {
      height: 500
    },
    376: {
      height: 350
    }
  }
}
</script>

<template>
  <div class="culture-section my-8">
    <div class="container-7xl">
      <h3 class="mb-8 text-2xl font-bold lg:text-3xl">
        {{ title }}
      </h3>
      <div class="flex flex-col">
        <div class="mb-4">
          <carousel v-model="currentSlide" v-bind="config" id="main-slides" ref="carouselRef">
            <slide v-for="image in slides" :key="image.id">
              <img
                class="h-full w-full select-none object-cover object-center"
                alt="image"
                :src="image.download_link"
              />
            </slide>
          </carousel>
        </div>
      </div>

      <carousel v-bind="thumbnailsConfig" v-model="currentSlide" id="thumbnails">
        <slide v-for="image in slides" :key="image.id">
          <template #default="{ currentIndex, isActive }">
            <div :class="['thumbnail', { 'is-active': isActive }]" @click="slideTo(currentIndex)">
              <img class="thumbnail-image" alt="Thumbnail Image" :src="image.download_link" />
            </div>
          </template>
        </slide>

        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
  </div>
</template>
<style>
.culture-section {
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

  & .swiper-button-prev,
  & .swiper-button-next {
    @apply relative text-black;

    &::after {
      @apply text-xl font-bold;
    }
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

.investment-guide-slider {
  @apply flex items-center justify-center;
  overflow-y: visible !important;

  .carousel__slide img {
    max-width: 350px !important;
    min-width: 350px !important;
    width: 350px !important;
    height: 250px !important;
    transform: scaleY(0.7) scaleX(0.9);
    transition: all 0.3s ease-in-out;
  }

  & .carousel__slide--active {
    transform: scaleY(1.45) scaleX(1.75) !important;
    z-index: 2;
  }

  @media (max-width: 1024px) {
    .carousel-slide {
      transform: none;
      margin-right: 10px !important;
    }

    & .carousel__slide--active {
      transform: none !important;
    }
  }
}
</style>
