<script lang="ts" setup>
interface ILink {
  label: string
  link: string
}

const { t } = useI18n({ useScope: "local" })

const parentRoutePath = "reason"

const links = ref<ILink[]>([
  { label: "economy", link: `/${parentRoutePath}/economy` },
  { label: "talent", link: `/${parentRoutePath}/talent` },
  // { label: 'geography', link: `/${parentRoutePath}/geography` },
  { label: "natural-resources", link: `/${parentRoutePath}/resource` },
  { label: "innovation-and-digital", link: `/${parentRoutePath}/innovation` },
  { label: "culture", link: `/${parentRoutePath}/culture` },
  { label: "living-in-uzbekistan", link: `/${parentRoutePath}/living` },
  { label: "2030-strategy-highlights", link: `/${parentRoutePath}/strategy` },
  // { label: 'doing-business-in-uzbekistan', link: `/${parentRoutePath}/doing-business-in-uzbekistan` },
  { label: "supportive-environment", link: `/${parentRoutePath}/environment` }
])
</script>

<template>
  <nav class="reason-nav">
    <ul class="reason-nav__links">
      <li v-for="{ link, label } in links" :key="link">
        <nuxt-link-locale active-class="bg-blue-bondi" :to="link">
          {{ t(label) }}
        </nuxt-link-locale>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.reason-nav {
  @apply sticky left-0 z-20 hidden bg-blue-command text-white md:block;

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
    "economy": "Iqtisodiyot",
    "talent": "Iqtidor",
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
