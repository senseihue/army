<script setup lang="ts">
import type { CarouselConfig } from "vue3-carousel"
import { Carousel, Navigation } from "vue3-carousel"
import { breakpointsTailwind } from "@vueuse/core"

interface IProps {
  itemsCount?: number
}

const props = withDefaults(defineProps<IProps>(), {
  itemsCount: 0
})
const disableArrows = computed(() => {
  return props.itemsCount < 6 || (breakpoints.lg && props.itemsCount < 6) || (breakpoints.md && props.itemsCount < 3)
})
const carouselConfig = computed<Partial<CarouselConfig>>(() => ({
  gap: 1,
  snapAlign: "start",
  itemsToShow: breakpoints.lg ? 6 : breakpoints.md ? 3 : 1,
  wrapAround: false,
  mouseDrag: !disableArrows.value
}))

const breakpoints = useBreakpoints(breakpointsTailwind)
</script>

<template>
  <section class="service-slider">
    <div class="service-slider__grid">
      <div class="service-slider__content" data-aos="fade-right" data-aos-delay="150">
        <carousel v-bind="carouselConfig" class="service-carousel min-h-[88px]">
          <slot />

          <template #addons>
            <navigation :disabled="disableArrows">
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
  @apply absolute -top-8 right-0 rounded-full bg-gray-300;
}

.carousel__prev {
  @apply absolute -top-8 left-[88%] rounded-full bg-gray-300 lg:left-[94%];
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
