<script setup lang="ts">
import { ref } from "vue"
import { type CarouselConfig, Navigation } from "vue3-carousel"
import { Carousel, Slide } from "vue3-carousel"
import aksu from "@/public/img/reason/culture/aksu_jabagly_2.jpg"
import chorBakr from "@/public/img/reason/culture/chor-bakr.jpg"
import itchanKala from "@/public/img/reason/culture/itchan_kala_khiva_2012.jpg"
import registan from "@/public/img/reason/culture/registan_square_2014.jpg"
import kalon from "@/public/img/reason/culture/le_minaret_et_la_mosquee_kalon_(boukhara_ouzbekistan)_(5658826884).jpg"
import kokGumbaz from "@/public/img/reason/culture/kok-gumbaz_mosque_shahrisabz.jpg"
import "vue3-carousel/carousel.css"

const carouselRef = ref()
const currentSlide = ref(0)

const slideTo = (nextSlide: number) => (currentSlide.value = nextSlide)

const galleryConfig = {
  height: 320
}

const thumbnailsConfig: Partial<CarouselConfig> = {
  height: 128,
  itemsToShow: 4,
  wrapAround: true,
  touchDrag: false,
  gap: 16,
  snapAlign: "start",
  breakpoints: {
    576: {
      itemsToShow: 4,
      gap: 16,
    },
    376: {
      itemsToShow: 3,
      height: 100,
      gap: 10,
    }
  }
}
const { t } = useI18n({ useScope: "local" })
const images = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  url: `https://picsum.photos/seed/${Math.random()}/800/600`
}))

const config: Partial<CarouselConfig> = {
  height: 500,
  itemsToShow: 1,
  wrapAround: true,
  slideEffect: "fade",
  mouseDrag: false,
  touchDrag: false,
  breakpoints: {
    576: {
      height: 500,
    },
    376: {
      height: 350,
    }
  }
}

const slideItems = ref([
  { title: "slides.aksu", url: aksu },
  { title: "slides.chor", url: chorBakr },
  { title: "slides.kokGumbaz", url: kokGumbaz },
  { title: "slides.kalan", url: kalon },
  { title: "slides.registan", url: registan },
  { title: "slides.ichanKala", url: itchanKala }
])
</script>

<template>
  <div class="culture-section">
    <div class="container-7xl">
      <div class="mb-8">
        <p class="text-center text-xl font-semibold text-blue-midnight">
          {{ t("unesco") }}
        </p>
      </div>

      <div class="flex flex-col">
        <div class="mb-4">
          <Carousel v-model="currentSlide" v-bind="config" id="main-slides" ref="carouselRef">
            <Slide
              v-for="image in slideItems"
              :key="image.title"
              :data-vc-slide-item-after-content="t(image.title)"
              :style="{
                '--vc-slide-item-after-content': t(image.title)
              }"
            >
              <img class="h-full w-full select-none object-cover object-center" alt="image" :src="image.url" />
            </Slide>
          </Carousel>
        </div>
      </div>

      <Carousel v-bind="thumbnailsConfig" v-model="currentSlide" id="thumbnails">
        <Slide v-for="image in slideItems" :key="image.title">
          <template #default="{ currentIndex, isActive }">
            <div :class="['thumbnail', { 'is-active': isActive }]" @click="slideTo(currentIndex)">
              <img class="thumbnail-image" alt="Thumbnail Image" :src="image.url" />
            </div>
          </template>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "unesco": "UNESCO World Heritage Sites in Uzbekistan",
    "slides": {
      "aksu": "Aksu-Jabagly Nature Reserve",
      "chor": "Chor-Bakr (Bukhara)",
      "kokGumbaz": "Kok-Gumbaz Mosque (Shahrisabz)",
      "kalan": "Poi Kalan Mosque (Bukhara)",
      "registan": "Registan Square (Samarkand)",
      "ichanKala": "Ichan Kala (Khiva)"
    }
  },
  "ru": {
    "unesco": "Объекты Всемирного наследия ЮНЕСКО в Узбекистане",
    "slides": {
      "aksu": "Природный заповедник Аксук-Жабаглы",
      "chor": "Хор-Бакр (Бухара)",
      "kokGumbaz": "Мечеть Кок-Гумбаз (Шахрисабз)",
      "kalan": "Мечеть Пой-Калян (Бухара)",
      "registan": "Площадь Регистан (Самарканд)",
      "ichanKala": "Ичан-Кала (Хива)"
    }
  },
  "uz": {
    "unesco": "O'zbekistondagi UNESCO Jahon merosi obidalari",
    "slides": {
      "aksu": "Aksu-Jabagly tabiat qo'riqxonasi",
      "chor": "Chor-Bakr (Buxoro)",
      "kokGumbaz": "Kok-Gumbaz masjidi (Shahrisabz)",
      "kalan": "Poi Kalan masjidi (Buxoro)",
      "registan": "Registon maydoni (Samarqand)",
      "ichanKala": "Ichan Kala (Xiva)"
    }
  }
}
</i18n>

<style>
.culture-section {
  .carousel {
    --vc-nav-background: rgba(255, 255, 255, 0.7);
    --vc-nav-border-radius: 100%;
  }

  #main-slides .carousel__slide {
    --vc-slide-item-after-content: '';
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
