<script setup lang="ts">
import type { CarouselConfig } from "vue3-carousel"
import { Carousel, Slide, Navigation } from "vue3-carousel"
import davaktiv from "public/img/about/davaktiv.uz.webp"
import gov from "public/img/about/gov.uz.webp"
import lex from "public/img/about/lex.uz.webp"
import miit from "public/img/about/miit.uz.webp"
import myGov from "public/img/about/my.gov.uz.webp"
import pmGov from "public/img/about/pm.gov.uz.webp"
import president from "public/img/about/president.uz.webp"
import senat from "public/img/about/senat.uz.webp"
import soliq from "public/img/about/soliq.uz.webp"
import tashkent from "public/img/about/tashkent.uz.webp"

const carouselConfig = computed<Partial<CarouselConfig>>(() => ({
  gap: 24,
  snapAlign: "start",
  wrapAround: true,
  breakpoints: {
    1024: {
      itemsToShow: 5
    },
    768: {
      itemsToShow: 3
    },
    640: {
      itemsToShow: 1
    }
  }
}))

const entities = computed(() => [
  {
    url: "https://gov.uz/en/davaktiv/news/view/25777",
    image: davaktiv
  },
  {
    url: "https://gov.uz/en/davaktiv/pages/about",
    image: gov
  },
  {
    url: "https://lex.uz/uz",
    image: lex
  },
  {
    url: "https://gov.uz/en/miit",
    image: miit
  },
  {
    url: "https://my.gov.uz/oz",
    image: myGov
  },
  {
    url: "https://pm.gov.uz/oz",
    image: pmGov
  },
  {
    url: "https://president.uz/en",
    image: president
  },
  {
    url: "https://parliament.gov.uz/",
    image: senat
  },
  {
    url: "https://my.soliq.uz/main/",
    image: soliq
  },
  {
    url: "https://gov.uz/en/toshkent/pages/about",
    image: tashkent
  }
])
</script>

<template>
  <section>
    <div class="container-7xl">
      <div class="p-section">
        <carousel v-bind="carouselConfig" class="carousel">
          <slide v-for="(entity, idx) in entities" class="h-full" :key="idx">
            <a
              class="flex w-full flex-col items-center justify-center"
              rel="noopener noreferrer"
              target="_blank"
              :href="entity.url"
            >
              <img class="w-full" :alt="entity.url" :src="entity.image" />
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

    <div class="p-section bg-blue-bright">
      <div class="flex items-center justify-center">
        <ui-button color="success" size="lg" rounded to="/contacts" :label="$t('labels.contact_us')" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.carousel {
  @apply mb-12 px-16 2xl:-mx-16;
  --vc-nav-width: 36px;
  --vc-nav-height: 36px;
}
</style>
