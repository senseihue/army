<script setup lang="ts">
import type { CarouselConfig, CarouselMethods } from "vue3-carousel"
import { Carousel, Slide } from "vue3-carousel"

const { t, tm } = useI18n({ useScope: "local" })

const carouselRef = ref<CarouselMethods>()
const carouselConfig = computed<Partial<CarouselConfig>>(() => ({
  gap: 24,
  snapAlign: "start",
  wrapAround: true,
  breakpoints: {
    1024: {
      itemsToShow: 2
    },
    640: {
      itemsToShow: 1
    }
  }
}))
</script>

<template>
  <section class="leadership">
    <div class="container-7xl">
      <div class="p-section">
        <div class="leadership__header" data-aos="fade-up" data-aos-delay="50">
          <div class="leadership__nav-button" @click="carouselRef?.prev()">
            <icon class="text-4xl" name="ph:caret-left" />
          </div>

          <h3 class="leadership__heading">{{ t("heading") }}</h3>

          <div class="leadership__nav-button" @click="carouselRef?.next()">
            <icon class="text-4xl" name="ph:caret-right" />
          </div>
        </div>

        <carousel v-bind="carouselConfig" ref="carouselRef">
          <slide class="h-full">
            <!-- TODO: Add leadership slide -->
          </slide>
        </carousel>
      </div>
    </div>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "heading": "Leadership"
  },
  "ru": {
    "heading": "Руководство"
  },
  "uz": {
    "heading": "Rahbariyat"
  }
}
</i18n>
