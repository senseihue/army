<script setup lang="ts">
import type { CarouselConfig } from "vue3-carousel"
import { Carousel, Navigation } from "vue3-carousel"

const carouselConfig = computed<Partial<CarouselConfig>>(() => ({
  gap: 1,
  snapAlign: "start",
  itemsToShow: 6,
  wrapAround: false
}))
</script>

<template>
  <section class="service-slider">
    <div class="service-slider__grid">
      <div class="service-slider__content" data-aos="fade-right" data-aos-delay="150">
        <carousel v-bind="carouselConfig" class="service-carousel min-h-[88px]">
          <slot />

          <template #addons>
            <navigation>
              <template #prev>
                <Icon class="text-xl" name="ph:caret-left" />
              </template>

              <template #next>
                <Icon class="text-xl" name="ph:caret-right" />
              </template>
            </navigation>
          </template>
        </carousel>
      </div>
    </div>
  </section>
</template>

<style lang="scss">


.service-slider {
  &__grid {
    @apply grid grid-cols-1;
  }

  &__content {
    @apply flex flex-col rounded-2xl bg-white;
  }
}

.carousel__next {
  @apply absolute bg-gray-300 rounded-full right-0 -top-8;
}

.carousel__prev {
  @apply absolute bg-gray-300 rounded-full left-[88%] lg:left-[94%] -top-8;
}

.carousel__next:hover,
.carousel__prev:hover {
  color: #4e1414;
}

.carousel__next--disabled,
.carousel__prev--disabled {
  opacity: 0.3;
}
</style>
