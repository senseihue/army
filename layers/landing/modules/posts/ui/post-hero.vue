<script setup lang="ts">
const { minHeight } = useWindowHeight()
const { t } = useI18n({ useScope: "local" })

interface IProps {
  minHeight?: string
  title: string
  background: string
}

defineProps<IProps>()
</script>

<template>
  <client-only>
    <div class="post-hero" :style="{ minHeight }">
      <!--  Background  -->
      <div v-rellax class="post-hero__background" data-rellax-speed="-5">
        <img alt="Background" :src="background" />
      </div>

      <!--  Content  -->
      <div v-html="title" class="post-hero__content container-7xl"></div>
    </div>
  </client-only>
</template>

<style>
.post-hero {
  @apply relative flex min-h-screen flex-col overflow-hidden transition-all duration-500 ease-in-out;

  &__background {
    @apply absolute inset-0 -z-10 bg-blue-midnight;

    img {
      @apply h-full w-full object-cover object-center opacity-60;
    }
  }

  &__content {
    @apply z-10 grid w-full grow content-center items-center px-4;

    & h1 {
      @apply text-3xl font-bold text-white md:text-5xl lg:text-[56px];
      @apply leading-snug !important;
    }

    & p {
      @apply text-base md:text-lg;
    }

    &-heading {
      @apply mb-6 text-4xl font-bold text-white md:text-6xl;
    }

    &-text {
      @apply text-white lg:text-lg;
    }
  }
}
</style>

<i18n lang="json">
{
  "en": {
    "heading": "News and Insights"
  },
  "ru": {
    "heading": "Медиацентр"
  },
  "uz": {
    "heading": "Media markaz"
  }
}
</i18n>
