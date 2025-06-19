<script setup lang="ts">
import type { CarouselConfig } from "vue3-carousel"
import { Carousel, Slide, Navigation } from "vue3-carousel"
import { HomeStatisticsSlide } from "~/features/home"

const { t, tm, rt } = useI18n({ useScope: "local" })

const carouselConfig = computed<Partial<CarouselConfig>>(() => ({
  gap: 24,
  snapAlign: "start",
  wrapAround: true,
  breakpoints: {
    1024: {
      itemsToShow: 4
    },
    768: {
      itemsToShow: 2
    },
    640: {
      itemsToShow: 1
    }
  }
}))
</script>

<template>
  <section>
    <div class="container-7xl">
      <div class="pb-12 pt-20 md:pb-20 md:pt-32">
        <h3
          class="mb-12 text-center text-2xl font-bold text-blue-command lg:text-3xl"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          {{ t("heading") }}
        </h3>

        <carousel v-bind="carouselConfig" class="carousel">
          <slide v-for="(slide, idx) in tm('slides')" class="h-full" :key="idx">
            <home-statistics-slide
              :label="rt(slide.label)"
              :progress="rt(slide.progress)"
              :description="rt(slide.description)"
            />
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

        <div class="flex justify-center">
          <ui-button size="lg" color="success" rounded :label="$t('nav.reason.label')" />
        </div>
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
        "label": "6.5%",
        "progress": 6.5,
        "description": "Average annual GDP growth"
      },
      {
        "label": "5G",
        "progress": 0,
        "description": "First country in CIS to introduce"
      },
      {
        "label": "$36.9 bln",
        "progress": 0,
        "description": "Attracted foreign investments in 2024"
      },
      {
        "label": "60%",
        "progress": 60,
        "description": "Under the age of 30"
      },
      {
        "label": "23.2 mln",
        "progress": 0,
        "description": "Total labor force"
      },
      {
        "label": "$55.9 bln",
        "progress": 0,
        "description": "Industrial production in 2024"
      },
      {
        "label": "$41.4 bln",
        "progress": 0,
        "description": "Total international reserves (December, 2024)"
      },
      {
        "label": "5.8%",
        "progress": 5.8,
        "description": "Unemployment rate in 2024"
      },
      {
        "label": "$66 bln",
        "progress": 0,
        "description": "Foreign trade turnover in 2024"
      },
      {
        "label": "+$120 billion",
        "progress": 0,
        "description": "In FDI over the past 7 years (2017-2024)"
      },
      {
        "label": "3%",
        "progress": 3,
        "description": "Growth in foreign trade in 2024"
      }
    ]
  },
  "ru": {
    "heading": "Узбекистан в цифрах",
    "slides": [
      {
        "label": "6.5%",
        "progress": 6.5,
        "description": "Среднегодовой рост ВВП"
      },
      {
        "label": "5G",
        "progress": 0,
        "description": "Первая страна в СНГ, внедрившая пятое поколение связи"
      },
      {
        "label": "$36.9 млрд",
        "progress": 0,
        "description": "Объём привлечённых иностранных инвестиций в 2024"
      },
      {
        "label": "60%",
        "progress": 60,
        "description": "Население в возрасте моложе 30"
      },
      {
        "label": "23.2 млн",
        "progress": 0,
        "description": "Tрудовые ресурсы"
      },
      {
        "label": "$55.9 млрд",
        "progress": 0,
        "description": "Объём промышленного производства в 2024 г."
      },
      {
        "label": "$41.4 млрд",
        "progress": 0,
        "description": "Объём международных резервов (Декабрь, 2024 г.)"
      },
      {
        "label": "5.8%",
        "progress": 5.8,
        "description": "Уровень безработицы в 2024 г."
      },
      {
        "label": "$66 млрд",
        "progress": 0,
        "description": "Внешний товарооборот в 2024 г."
      },
      {
        "label": "+$120 млн",
        "progress": 0,
        "description": "Объём иностранных инвестиций за последние 7 лет (2017-2024)"
      },
      {
        "label": "3%",
        "progress": 3,
        "description": "Рост внешней торговли в 2024 г."
      }
    ]
  },
  "uz": {
    "heading": "O‘zbekiston Raqamlarda",
    "slides": [
      {
        "label": "6.5%",
        "progress": 6.5,
        "description": "Yillik o'rtacha Yalpi Ichki Mahsulotining o'sish darajasi"
      },
      {
        "label": "5G",
        "progress": 0,
        "description": "MDH davlatlar orasida beshinchi avlod aloqani joriy qilgan birinchi mamlakat"
      },
      {
        "label": "$36.9 mlrd",
        "progress": 0,
        "description": "2023-yilda jalb qilingan xorijiy sarmoyalar hajmi"
      },
      {
        "label": "60%",
        "progress": 60,
        "description": "Dan ortiq – 30 yoshgacha bo'lgan aholi soni"
      },
      {
        "label": "23.2 mln",
        "progress": 0,
        "description": "Umumiy ishchi kuchi"
      },
      {
        "label": "$55.9 mlrd",
        "progress": 0,
        "description": "2024 - yilda sanoat ishlab chiqarish hajmi"
      },
      {
        "label": "$41.4 mlrd",
        "progress": 0,
        "description": "Umumiy xalqaro zaxiralar hajmi"
      },
      {
        "label": "5.8%",
        "progress": 5.8,
        "description": "Ishsizlik darajasi (Avgust. 2024)"
      },
      {
        "label": "$66 mlrd",
        "progress": 0,
        "description": "Tashqi savdo aylanmasi 2024 y."
      },
      {
        "label": "+$120 billion",
        "progress": 0,
        "description": "7 yil davomida 2017-2024 yillar orasida jalb qilingan xorijiy sarmoyalar hajmi"
      },
      {
        "label": "3%",
        "progress": 3,
        "description": "Tashqi savdo darajasi 2024 y."
      }
    ]
  }
}
</i18n>
