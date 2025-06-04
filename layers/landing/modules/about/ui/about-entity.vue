<script setup lang="ts">
import type { CarouselConfig } from "vue3-carousel"
import { Carousel, Slide, Navigation } from "vue3-carousel"

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
    image: "https://dev-portal.miit.uz/uploads/introduction/davaktiv.uz.png"
  },
  {
    url: "https://gov.uz/en/davaktiv/pages/about",
    image: "https://dev-portal.miit.uz/uploads/introduction/gov.uz.png"
  },
  {
    url: "https://lex.uz/uz",
    image: "https://dev-portal.miit.uz/uploads/introduction/lex.uz.png"
  },
  {
    url: "https://gov.uz/en/miit",
    image: "https://dev-portal.miit.uz/uploads/introduction/miit.uz.png"
  },
  {
    url: "https://my.gov.uz/oz",
    image: "https://dev-portal.miit.uz/uploads/introduction/my.gov.uz.png"
  },
  {
    url: "https://pm.gov.uz/oz",
    image: "https://dev-portal.miit.uz/uploads/introduction/pm.gov.uz.png"
  },
  {
    url: "https://president.uz/en",
    image: "https://dev-portal.miit.uz/uploads/introduction/president.uz.png"
  },
  {
    url: "https://parliament.gov.uz/",
    image: "https://dev-portal.miit.uz/uploads/introduction/senat.uz.png"
  },
  {
    url: "https://my.soliq.uz/main/",
    image: "https://dev-portal.miit.uz/uploads/introduction/soliq.uz.png"
  },
  {
    url: "https://gov.uz/en/toshkent/pages/about",
    image: "https://dev-portal.miit.uz/uploads/introduction/tashkent.uz.png"
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
