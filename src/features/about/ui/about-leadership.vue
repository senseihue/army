<script setup lang="ts">
import type { CarouselConfig, CarouselMethods } from "vue3-carousel"
import { Carousel, Slide } from "vue3-carousel"
import AboutLeadershipSlide from "~/features/about/ui/about-leadership-slide.vue"

interface IProps {
  leaderships: ILeadership
}

defineProps<IProps>()
const { t } = useI18n({ useScope: "local" })

const carouselRef = ref<CarouselMethods>()
const carouselConfig = computed<Partial<CarouselConfig>>(() => ({
  gap: 24,
  snapAlign: "center",
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
  <section class="leadership">
    <div class="container-7xl">
      <div class="p-section">
        <h3 class="mb-12 text-center text-2xl font-bold text-blue-midnight lg:text-3xl">
          {{ t("heading") }}
        </h3>
        <!--        <div class="leadership__header" data-aos="fade-up" data-aos-delay="50">-->
        <!--          <div class="leadership__nav-button" @click="carouselRef?.prev()">-->
        <!--            <icon class="text-4xl" name="ph:caret-left" />-->
        <!--          </div>-->

        <!--          <h3 class="leadership__heading">{{ t("heading") }}</h3>-->

        <!--          <div class="leadership__nav-button" @click="carouselRef?.next()">-->
        <!--            <icon class="text-4xl" name="ph:caret-right" />-->
        <!--          </div>-->
        <!--        </div>-->

        <carousel v-bind="carouselConfig" ref="carouselRef">
          <slide v-for="slide in leaderships" class="h-full">
            <about-leadership-slide
              :avatar="slide.photo?.thumbnail_link"
              :full-name="slide.name"
              :position="slide.position"
              :working-days="slide.working_days"
              :bio="slide.bio"
              :phone="slide.phone"
              :email="slide.email"
              :key="slide.id"
            />
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
