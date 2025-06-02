<script setup lang="ts">
import type { CarouselConfig } from "vue3-carousel"
import { Carousel, Navigation } from "vue3-carousel"

interface IProps {
  image: string
}

const props = defineProps<IProps>()

const { t } = useI18n({ useScope: "local" })

const carouselConfig = computed<Partial<CarouselConfig>>(() => ({
  gap: 24,
  snapAlign: "start",
  wrapAround: true,
  itemsToShow: 1
}))
</script>

<template>
  <section class="sector-slider">
    <client-only>
      <div v-rellax class="sector-slider__background" data-rellax-percentage="0.4" data-rellax-speed="-1">
        <img alt="Background" :src="image" />
      </div>
    </client-only>

    <div class="container-7xl">
      <div class="p-section">
        <div class="sector-slider__grid">
          <div class="sector-slider__content" data-aos="fade-right" data-aos-delay="150">
            <h3 class="sector-slider__content-heading">{{ t("heading") }}</h3>

            <carousel v-bind="carouselConfig" class="sector-carousel">
              <slot />

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

          <div class="sector-slider__figure" data-aos="fade-left" data-aos-delay="150">
            <img alt="Image" :src="image" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sector-carousel {
  @apply mx-6 px-12;
  --vc-nav-width: 36px;
  --vc-nav-height: 36px;
}

.sector-slider {
  @apply relative overflow-hidden;

  &__background {
    @apply absolute inset-0 -z-10 bg-white;

    img {
      @apply relative h-full w-full object-cover object-center opacity-20;
    }
  }

  &__grid {
    @apply grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20;
  }

  &__content {
    @apply flex flex-col bg-white;

    &-heading {
      @apply bg-blue-midnight py-5 text-center font-bold text-white;
    }
  }

  &__figure {
    @apply relative h-full overflow-hidden;

    img {
      @apply h-full w-full object-cover object-center;
    }
  }
}
</style>

<i18n lang="json">
{
  "en": {
    "heading": "Key Sector Stats"
  },
  "ru": {
    "heading": "Ключевые статистики сектора"
  },
  "uz": {
    "heading": "Asosiy raqamlar"
  }
}
</i18n>
