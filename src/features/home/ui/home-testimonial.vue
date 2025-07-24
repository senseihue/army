<script setup lang="ts">
import type { CarouselConfig, CarouselMethods } from "vue3-carousel"
import { Carousel, Slide } from "vue3-carousel"
import { HomeTestimonialSlide } from "~/features/home"
import StarIn from "~/app/assets/svg/starin.svg"

const { t } = useI18n({ useScope: "local" })

const {data} = await useFetch<IResponse<any>>("/gateway/siw/public/review")

const carouselRef = ref<CarouselMethods>()
const carouselConfig = computed<Partial<CarouselConfig>>(() => ({
  gap: 24,
  snapAlign: "start",
  wrapAround: false,
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
  <section class="testimonial">
    <div class="testimonial__background">
      <star-in class="testimonial__icon" />
    </div>

    <div class="container-7xl">
      <div class="p-section">
        <div class="testimonial__header" data-aos="fade-up" data-aos-delay="50">
          <div class="testimonial__nav-button" @click="carouselRef?.prev()">
            <icon class="text-4xl" name="ph:caret-left" />
          </div>

          <h3 class="testimonial__heading">{{ t("heading") }}</h3>

          <div class="testimonial__nav-button" @click="carouselRef?.next()">
            <icon class="text-4xl" name="ph:caret-right" />
          </div>
        </div>

        <carousel v-bind="carouselConfig" ref="carouselRef">
          <slide v-for="(slide, idx) in data?.content" class="h-full" :key="idx">
            <home-testimonial-slide :text="slide.comment" :image="slide.photo" :author="slide.author" />
          </slide>
        </carousel>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial {
  @apply relative;
}

.testimonial__background {
  @apply absolute left-1/2 top-52 -z-10 w-28 -translate-x-1/2;
}

.testimonial__icon {
  @apply size-28 animate-spin;
  animation-duration: 25s;
}

.testimonial__header {
  @apply mb-12 flex items-center justify-between;
}

.testimonial__nav-button {
  @apply cursor-pointer;
}

.testimonial__heading {
  @apply text-2xl font-bold text-blue-midnight lg:text-3xl;
}
</style>

<i18n lang="json">
{
  "en": {
    "heading": "Views from the market",
  },
  "ru": {
    "heading": "Мнение инвесторов",
  },
  "uz": {
    "heading": "Investorlar fikri",
  }
}
</i18n>
