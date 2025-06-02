<script setup lang="ts">

import SectionGrid from "#layers/landing/modules/reason/ui/section-grid.vue"
import { ReasonNav } from "#layers/landing/modules/reason/ui"
definePageMeta({
  fixedHeader: false
})

const { t } = useI18n({ useScope: "local", warnHtmlMessage: false })
</script>

<template>
<div>
  <reason-nav />
  <section-grid>
    <template #left>
      <div>
        <h3 class="text-center">
          {{ t("reason.living-uzbekistan.title") }}
        </h3>
        <br />
        <p class="text-justify">
          {{ t("reason.living-uzbekistan.description") }}
        </p>
      </div>
    </template>
    <template #right>
      <div>
        <img class="section-card__image" src="/public/img/reason/supportive-environment/environment-1.png" alt="" />
      </div>
    </template>
  </section-grid>
  <section-grid>
    <template #right>
      <div>
        <h3 class="text-center">
          {{ t("reason.entry-regulations.title") }}
        </h3>
        <br />
        <p class="text-justify">
          {{ t("reason.entry-regulations.description") }}
        </p>
      </div>
    </template>
    <template #left>
      <div>
        <img class="section-card__image" src="/public/img/reason/supportive-environment/environment-2.png" alt="" />
      </div>
    </template>
  </section-grid>
</div>
</template>

<style scoped>
.section-card__image {
  width: 100%;
  aspect-ratio: auto;
  @apply object-cover object-center;
}
</style>

<i18n lang="json">
{
  "en": {
    "reason": {
      "living-uzbekistan": {
        "title": "Living in Uzbekistan",
        "description": "The Republic of Uzbekistan is a country located in Central Asia. Its capital is Tashkent, which is also the largest city in the country. Covering an area of 448,900 km², Uzbekistan is a country rich in history and culture, standing out as a regional hub with a distinct blend of traditions and modernity. The capital, Tashkent, holds a special administrative status and serves as the country's economic and cultural center.",
        "description1": "Uzbekistan’s administrative structure is diverse, comprising the autonomous Republic of Karakalpakstan, several regions (known as viloyat), rural districts (tuman), urban districts, and cities with regional subordination. Smaller communities, including villages called kishlaks and auls, reflect the country's deep-rooted traditions and close-knit society.",
        "description2": "Living in the UTC +5 time zone (MSK +2) and connected globally by the international code +998, Uzbekistan is an exciting destination for those interested in its historical heritage, strategic location, and the economic opportunities it offers as a modernizing nation.",
        "description3": "Mild climate, more than 300 sunny days make Uzbekistan favorable for agriculture and tourism. Uzbekistan’s stable and secure environment, coupled with its rapidly growing economy and dynamic young population, fosters a vibrant and optimistic atmosphere where bold ideas are encouraged, and every contribution is valued."
      },
      "entry-regulations": {
        "title": "Entry Regulations",
        "description": "Uzbekistan has simplified its entry regulations, making it easier for foreigners to visit and stay in the country. This includes streamlined visa processes and various options for long-term stays.",
        "description1": "Uzbekistan’s administrative structure is diverse, comprising the autonomous Republic of Karakalpakstan, several regions (known as viloyat), rural districts (tuman), urban districts, and cities with regional subordination. Smaller communities, including villages called kishlaks and auls, reflect the country's deep-rooted traditions and close-knit society.",
        "description2": ""
      }
    }
  }
}
</i18n>
