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
    "slides": [
      {
        "image": "https://dev-portal.miit.uz/uploads/new-uzbekistan/marius_f2aVO32qKg.webp",
        "author": "Marius Dan, Franklin Templeton",
        "text": "We are very impressed with the pace of convergence and expansion of the local economy, but we believe that this is just the beginning as Uzbekistan can continue to grow at a more rapid pace than the global GDP growth."
      },
      {
        "image": "https://dev-portal.miit.uz/uploads/new-uzbekistan/image_2024-09-22_17-38-48.png",
        "author": "Konstantin Deykalo, FinSight Ventures",
        "text": "Uzbekistan presents a compelling investment proposition in Central Asia, underpinned by its robust economic fundamentals, favorable demographics, and rapidly expanding digital adoption"
      },
      {
        "image": "https://dev-portal.miit.uz/uploads/new-uzbekistan/ayuna_f2aVO32qKg.webp",
        "author": "Ayuna Nechaeva, London Stock Exchange",
        "text": "Uzbekistan’s government and corporates have raised c.$5 billion equivalent through London’s market, which underscores the level of confidence investors have in the country."
      },
      {
        "image": "https://dev-portal.miit.uz/uploads/new-uzbekistan/group-108.png",
        "author": "Saymon Kihano-Evans, Gemcorp",
        "text": "Uzbekistan has the ability to co-lead a process of enhanced economic growth and stabilisation across the region."
      }
    ]
  },
  "ru": {
    "heading": "Мнение инвесторов",
    "slides": [
      {
        "image": "https://dev-portal.miit.uz/uploads/new-uzbekistan/marius_f2aVO32qKg.webp",
        "author": "Мариус Дэн, Franklin Templeton",
        "text": "Мы впечатлены темпами развития экономики страны и верим, что это только начало, так как Узбекистан может продолжать расти быстрее мирового ВВП"
      },
      {
        "image": "https://dev-portal.miit.uz/uploads/new-uzbekistan/image_2024-09-22_17-38-48.png",
        "author": "Константин Дейкало, FinSight Ventures",
        "text": "Узбекистан представляет собой привлекательное инвестиционное предложение в Центральной Азии, поддержанное его прочными экономическими основами, благоприятной демографией и быстро растущим внедрением цифровых технологий"
      },
      {
        "image": "https://dev-portal.miit.uz/uploads/new-uzbekistan/ayuna_f2aVO32qKg.webp",
        "author": "Аюна Нечаева, Londond Stock Exchange \n (Лондонская фондовая биржа)",
        "text": "Правительство и компании Узбекистана привлекли около 5 миллиардов долларов США через лондонский рынок, что подчеркивает уровень доверия инвесторов к стране"
      },
      {
        "image": "https://dev-portal.miit.uz/uploads/new-uzbekistan/group-108.png",
        "author": "Саймон Кихано-Эванс, Gemcorp",
        "text": "Узбекистан имеет возможность стать одним из лидеров процесса ускорения экономического роста и стабилизации в регионе"
      }
    ]
  },
  "uz": {
    "heading": "Investorlar fikri",
    "slides": [
      {
        "image": "https://dev-portal.miit.uz/uploads/new-uzbekistan/marius_f2aVO32qKg.webp",
        "author": "Marius Den, Franklin Templeton",
        "text": "“Biz mamlakat iqtisodiyotining rivojlanish tezligidan hayratdamiz va bu faqat boshlanishi, deb hisoblaymiz, chunki Oʼzbekiston jahon yalpi ichki mahsuloti ko'rsatkichidan ham tezroq oʼsishda davom etishga qodir”"
      },
      {
        "image": "https://dev-portal.miit.uz/uploads/new-uzbekistan/image_2024-09-22_17-38-48.png",
        "author": "Konstantin Deykalo, FinSightVentures",
        "text": "“Oʼzbekiston Markaziy Osiyodagi juda qiziqarli investitsion taklifdir, bu uning mustahkam iqtisodiyoti, qulay demografik vaziyat va tez oʼsib borayotgan raqamli texnologiyalar bilan bogʼliq”"
      },
      {
        "image": "https://dev-portal.miit.uz/uploads/new-uzbekistan/ayuna_f2aVO32qKg.webp",
        "author": "Ayuna Nechaeva, London fond birjasi",
        "text": "“O'zbekiston hukumati va korxonalari London bozori orqali 5 milliard dollarga teng mablagʼ jalb qildilar, bu mamlakatga investorlarning ishonch darajasini taʼkidlaydi”"
      },
      {
        "image": "https://dev-portal.miit.uz/uploads/new-uzbekistan/group-108.png",
        "author": "Saymon Kihano-Evans, Gemcorp",
        "text": "“Oʼzbekiston mintaqa boʼylab iqtisodiy oʼsish va barqarorlikni oshirishda yetakchilik qilish imkoniyatiga ega”"
      }
    ]
  }
}
</i18n>
