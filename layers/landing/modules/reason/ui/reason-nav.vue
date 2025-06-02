<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from '#imports'

interface ILink {
  label: string
  link: string
}

const parentRoutePath = 'reason'

const links = ref<ILink[]>([
  { label: 'economy', link: `/${parentRoutePath}/economy` },
  { label: 'talent', link: `/${parentRoutePath}/talent` },
  // { label: 'geography', link: `/${parentRoutePath}/geography` },
  { label: 'natural-resources', link: `/${parentRoutePath}/natural-resources` },
  { label: 'innovation-and-digital', link: `/${parentRoutePath}/innovation-and-digital` },
  { label: 'culture', link: `/${parentRoutePath}/culture` },
  { label: 'living-in-uzbekistan', link: `/${parentRoutePath}/living-in-uzbekistan` },
  { label: '2030-strategy-highlights', link: `/${parentRoutePath}/2030-strategy-highlights` },
  // { label: 'doing-business-in-uzbekistan', link: `/${parentRoutePath}/doing-business-in-uzbekistan` },
  { label: 'supportive-environment', link: `/${parentRoutePath}/supportive-environment` },
])
const { t } = useI18n({ useScope: "local" })
const route = useRoute()
const active = computed(() => links.value.find((item) => item.link === route.path))
</script>

<template>
  <nav class="reason-nav ">
    <ul class="reason-nav__links">
      <li v-for="{ link, label } in links" :key="link">
        <nuxt-link-locale
          :to="link"
          active-class="bg-blue-bondi"
          class="  "
        >
          {{ t(label) }}
        </nuxt-link-locale>
      </li>
    </ul>
  </nav>

  <!--  <UiAccordion v-if="active" :title="active?.label" class="z-10 bg-white md:hidden">-->
  <!--    <ul class="grid border-t border-command/80">-->
  <!--      <li v-for="{ link, label } in links" :key="link" class="border-b">-->
  <!--        <NuxtLink :to="link" active-class="bg-command text-white" class="flex w-full px-4 py-2 font-semibold">-->
  <!--          {{ label }}-->
  <!--        </NuxtLink>-->
  <!--      </li>-->
  <!--    </ul>-->
  <!--  </UiAccordion>-->

  <div v-if="active" class="z-10 w-full overflow-x-scroll bg-midnight md:hidden">
    <ul class="flex min-w-full">
      <li
        v-for="{ link, label } in links"
        :key="link"
        class="border-2 border-l border-r border-black first:border-l-2 last:border-r-2"
      >
        <NuxtLink
          :to="link"
          active-class="bg-command text-white"
          class="inline-block whitespace-nowrap px-2 py-1 text-white"
        >
          {{ t(label) }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.reason-nav {
  @apply  sticky left-0 z-20 hidden bg-blue-command text-white md:block;

  &__links {
    @apply grid grid-cols-3 lg:grid-cols-4;

    a {
      @apply block p-3 text-center font-semibold transition-colors duration-300 ease-in-out hover:bg-blue-bondi;
    }
  }
}
</style>


<i18n lang="json">
{
  "en": {
    "economy": "Economy",
    "talent": "Talent",
    "natural-resources": "Natural resources",
    "innovation-and-digital": "Innovation and Digital",
    "culture": "Culture",
    "living-in-uzbekistan": "Living in Uzbekistan",
    "2030-strategy-highlights": "2030 Strategy Highlights",
    "doing-business-in-uzbekistan": "Doing Business in Uzbekistan",
    "geography": "Geography",
    "supportive-environment": "Supportive Environment"
  },
  "ru": {
    "economy": "Экономика",
    "talent": "Таланты",
    "natural-resources": "Природные ресурсы",
    "innovation-and-digital": "Инновации и цифровые технологии",
    "culture": "Культура",
    "living-in-uzbekistan": "Жизнь в Узбекистане",
    "2030-strategy-highlights": "Основные моменты стратегии 2030",
    "doing-business-in-uzbekistan": "Ведение бизнеса в Узбекистане",
    "geography": "География",
    "supportive-environment": "Поддерживающая среда"
  },
  "uz": {
    "Economy": "Iqtisodiyot",
    "Talent": "Iqtidor",
    "natural-resources": "Tabiiy resurslar",
    "innovation-and-digital": "Innovatsiyalar va raqamli texnologiyalar",
    "culture": "Madaniyat",
    "living-in-uzbekistan": "O'zbekistonda yashash",
    "2030-strategy-highlights": "2030 strategiyasining asosiy yo'nalishlari",
    "doing-business-in-uzbekistan": "O'zbekistonda biznes yuritish",
    "geography": "Geografiya",
    "supportive-environment": "Qo'llab-quvvatlovchi muhit"
  }
}

</i18n>
