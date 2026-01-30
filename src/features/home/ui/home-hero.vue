<script setup lang="ts">
import { HomeHeroSlider } from "~/features/home"

const isLight = ref(false)

const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <section class="relative flex min-h-[90vh] flex-col items-center justify-end bg-black/50 px-6 pb-12 pt-24">
    <ui-ticker class="z-10"></ui-ticker>
    <div class="absolute inset-0 z-0 h-full w-full">
      <div class="absolute inset-0 z-[2] bg-black/50"></div>
      <img
        class="absolute inset-0 z-0 h-full w-full bg-black/50 object-cover"
        src="/img/home/hf_20260127_122634_8da9a608-cf9e-490c-8727-eaa1bad50bf2.png"
        alt=""
        @contextmenu.prevent
      />
    </div>
    <div class="relative z-10 mx-auto text-center">
      <h1 class="font-display mb-6 text-lg font-bold tracking-tight md:text-[2.5rem]">
        <span class="block text-zinc-100">
          {{ t("title") }}
        </span>
      </h1>

      <p class="mx-auto max-w-2xl text-balance text-lg leading-relaxed text-zinc-200 md:text-xl">
        {{ t("description") }}
      </p>
    </div>
  </section>
</template>

<i18n>
{
  "uz": {
    "title": "ҲАРБИЙ ХИЗМАТ – БУРЧ, ШАРАФ ВА БАРҚАРОР КЕЛАЖАК!",
    "description": "ЎЗБЕКИСТОН РЕСПУБЛИКАСИ МУДОФАА ВАЗИРЛИГИ ҲАРБИЙ - КАСБИЙ САРАЛАШ БОШҚАРМАСИ"
  },
  "ru": {
    "title": "ВОЕННАЯ СЛУЖБА-ДОЛГ, ЧЕСТЬ И СТАБИЛЬНОЕ БУДУЩЕЕ!",
    "description": "УПРАВЛЕНИЕ ВОЕННО-ПРОФЕССИОНАЛЬНОГО ОТБОРА МИНИСТЕРСТВА ОБОРОНЫ РЕСПУБЛИКИ УЗБЕКИСТАН"
  },
  "oz": {
    "title": "HARBIY XIZMAT – BURCH, SHARAF VA BARQAROR KELAJAK!",
    "description": "O‘ZBEKISTON RESPUBLIKASI MUDOFAA VAZIRLIGI HARBIY - KASBIY SARALASH BOSHQARMASI"
  }
}
</i18n>
