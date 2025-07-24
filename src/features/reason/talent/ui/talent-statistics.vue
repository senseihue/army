<script setup lang="ts">
import { HomeStatisticsSlide } from "~/features/home"

const { tm, rt } = useI18n({ useScope: "local" })
</script>

<template>
  <section>
    <div class="container-7xl" data-aos="fade-up" data-aos-delay="50">
      <div class="grid grid-cols-1 pb-12 pt-20 md:grid-cols-2 md:pb-20 md:pt-32 lg:grid-cols-4">
        <home-statistics-slide
          v-for="(slide, idx) in tm('slides')"
          :key="idx"
          :label="rt(slide.label)"
          :progress="rt(slide.progress)"
          :description="rt(slide.description)"
        />
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
</style>

<i18n lang="json">
{
  "en": {
    "heading": "Uzbekistan In Numbers",
    "slides": [
      {
        "label": "76%",
        "progress": 76,
        "description": "Pre-school"
      },
      {
        "label": "100",
        "progress": 100,
        "description": "School"
      },
      {
        "label": "42%",
        "progress": 42,
        "description": "Higher"
      },
      {
        "label": "6%",
        "progress": 6,
        "description": "GDP allocated to education"
      }
    ]
  },
  "ru": {
    "heading": "Узбекистан в цифрах",
    "slides": [
      {
        "label": "70%",
        "progress": 70,
        "description": "Дошкольное учреждение "
      },
      {
        "label": "100",
        "progress": 100,
        "description": "Школа"
      },
      {
        "label": "41%",
        "progress": 41,
        "description": "Выше"
      },
      {
        "label": "6%",
        "progress": 6,
        "description": "ВВП, выделяемый на образование"
      }
    ]
  },
  "uz": {
    "heading": "O‘zbekiston Raqamlarda",
    "slides": [
      {
        "label": "70%",
        "progress": 70,
        "description": "Maktabgacha ta'lim"
      },
      {
        "label": "100",
        "progress": 100,
        "description": "O'rta ta'lim"
      },
      {
        "label": "41%",
        "progress": 41,
        "description": "Yuqori ta'lim"
      },
      {
        "label": "6%",
        "progress": 6,
        "description": "Ta'limga ajratilgan YAIM"
      }
    ]
  }
}
</i18n>
