<script setup lang="ts">
const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <div class="alert">
    <div class="container-7xl">
      <div class="alert__wrapper">
        <p class="alert__text">{{ t("text") }}</p>

        <ui-button
          class="shrink-0"
          size="xs"
          rounded
          color="success"
          href="https://tiif.online"
          target="_blank"
          :label="t('learn_more')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.alert {
  @apply block bg-blue-midnight;

  &__wrapper {
    @apply flex min-h-14 items-center justify-between gap-2 py-2 xl:justify-center xl:gap-8;
  }

  &__text {
    @apply text-xs font-medium text-white lg:text-sm xl:text-center;
  }
}
</style>

<i18n lang="json">
{
  "en": {
    "text": "Tashkent International Investment Forum 2025",
    "learn_more": "Learn more"
  },
  "uz": {
    "text": "Toshkent Xalqaro Investitsion Forumi 2025",
    "learn_more": "Ko'proq ma'lumot olish"
  },
  "ru": {
    "text": "Ташкентский Международный Инвестиционный Форум 2025",
    "learn_more": "Узнать больше"
  }
}
</i18n>
