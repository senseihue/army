<script setup lang="ts">
import type { CarouselConfig } from "vue3-carousel"
import { Carousel, Slide, Navigation } from "vue3-carousel"
import { HomeStatisticsSlide } from "#layers/landing/modules/home"

import westminster from "@/public/img/reason/talent/wiut-logotype-full.png"
import webster from "@/public/img/reason/talent/webster.png"
import inha from "@/public/img/reason/talent/inha_university.svg"
import mdis from "@/public/img/reason/talent/mdis-logo_full-colour.png"
import turin from "@/public/img/reason/talent/logo-ttpu.png"
import amity from "@/public/img/reason/talent/amity_logo-removebg-preview.png"
import ytit from "@/public/img/reason/talent/ytit_logo-1.png"
import bucheon from "@/public/img/reason/talent/bucheon.svg"

const { t, tm, rt } = useI18n({ useScope: "local" })

const carouselConfig = computed<Partial<CarouselConfig>>(() => ({
  gap: 24,
  snapAlign: "start",
  wrapAround: false,
  breakpoints: {
    1024: {
      itemsToShow: 5
    },
    768: {
      itemsToShow: 2
    },
    640: {
      itemsToShow: 1
    }
  }
}))

const carouselItems = ref([
  {
    href: "https://www.wiut.uz/",
    img: westminster
  },
  {
    href: "https://webster.uz/",
    img: webster
  },
  {
    href: "https://www.mdis.uz/",
    img: mdis
  },
  {
    href: "https://turin.uz/uz/uz-2/",
    img: turin
  },
  {
    href: "https://www.inha.ac.kr/eng/index..do",
    img: inha
  },
  {
    href: "https://www.amity.edu/",
    img: amity
  },
  {
    href: "https://bucheon.uz/en",
    img: bucheon
  },
  {
    href: "https://kiut.uz/en/",
    img: ytit
  }
])

console.log(carouselItems.value)
</script>

<template>
  <section data-aos="fade-up" data-aos-delay="50">
    <div class="container-7xl">
      <div class="pb-12 pt-20 md:pb-20 md:pt-32">
        <h3 class="mb-12 text-center text-2xl font-bold text-blue-command lg:text-3xl">
          {{ t("heading") }}
        </h3>

        <carousel v-bind="carouselConfig" class="carousel">
          <slide v-for="(slide, idx) in carouselItems" class="h-full" :key="idx">
            <a :href="slide.href">
              <template v-if="typeof slide.img === 'object'">
                <component class="h-full w-full object-contain" :is="slide.img" />

              </template>
              <template v-else>
                <img :src="slide.img" :alt="slide.href" />

              </template>
            </a>
          </slide>

          <template #addons>
            <navigation>
              <template #prev>
                <icon class="text-4xl" name="ph:caret-left" />
              </template>

              <template #next>
                <icon class="text-4xl" name="ph:caret-right" />
              </template>
            </navigation>
          </template>
        </carousel>
      </div>
    </div>
  </section>
</template>

<style scoped>
.carousel {
  @apply mb-12 px-10;
  --vc-nav-width: 36px;
  --vc-nav-height: 36px;
}

.carousel:deep(.carousel__track) {
  @apply items-center;
}
</style>

<i18n lang="json">
{
  "en": {
    "heading": "International universities"
  },
  "ru": {
    "heading": "Международные университеты"
  },
  "uz": {
    "heading": "Xalqaro universitetlar"
  }
}
</i18n>
