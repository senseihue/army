<script setup lang="ts">
interface IProps {
  link: string
  image: string
  label: string
}

defineProps<IProps>()
</script>

<template>
  <nuxt-link-locale class="explore-card" :to="link">
    <img class="explore-card__image" :alt="label" :src="image" />

    <div class="explore-card__content">
      <p class="explore-card__content-label">{{ label }}</p>
    </div>
  </nuxt-link-locale>
</template>

<style>
.explore-card {
  @apply relative bg-blue-midnight;

  &__image {
    @apply aspect-[16/12] size-full object-cover object-center opacity-60 transition duration-300 ease-in-out;
  }

  &__content {
    @apply absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center;

    &-label {
      @apply font-bold text-white;
    }
  }

  &:hover > &__image {
    @apply opacity-30;
  }

  &:last-child:nth-child(3n - 2) {
    @apply lg:col-end-3;
  }
}
</style>
