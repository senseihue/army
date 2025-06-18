<script setup lang="ts">
interface IProps {
  image: string
  heading: string
}

defineProps<IProps>()

const { minHeight } = useWindowHeight()
</script>

<template>
  <client-only>
    <div class="hero" :style="{ minHeight }">
      <!--  Background  -->
      <div v-rellax class="hero__background" data-rellax-speed="-5">
        <img alt="Background" :src="image" />
      </div>

      <!--  Content  -->
      <div class="hero__content container-7xl">
        <h1 class="hero__content-heading">{{ heading }}</h1>
      </div>
    </div>
  </client-only>
</template>

<style scoped>
.hero {
  @apply relative flex min-h-screen flex-col overflow-hidden transition-all duration-500 ease-in-out;

  &__background {
    @apply absolute inset-0 -z-10 bg-blue-midnight;

    img {
      @apply h-full w-full object-cover object-center opacity-60;
    }
  }

  &__content {
    @apply z-10 grid w-full grow content-center items-center px-4;

    &-heading {
      @apply text-4xl font-bold text-white md:text-6xl;
    }
  }
}
</style>
