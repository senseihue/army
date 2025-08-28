<script setup lang="ts">
import { useProjectCategoryStore } from "~/entities/project/category"

const projectCategoryStore = useProjectCategoryStore()
const { category, loading } = storeToRefs(projectCategoryStore)
const { minHeight } = useWindowHeight()
</script>

<template>
  <client-only>
    <div class="project-category-hero" :style="{ minHeight }">
      <!--  Background  -->
      <div v-rellax class="project-category-hero__background" data-rellax-speed="-5">
        <img src="https://dev-portal.miit.uz/uploads/guide/hero.png" alt="Bac kground" />
      </div>

      <!--  Content  -->
      <div v-if="!loading" class="project-category-hero__content container-7xl">
        <h1 class="project-category-hero__content-heading">{{ category?.title }}</h1>
        <p class="project-category-hero__content-text">{{ category?.description }}</p>
      </div>
    </div>
  </client-only>
</template>

<style>
.project-category-hero {
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
      @apply mb-6 text-4xl font-bold text-white md:text-6xl;
    }

    &-text {
      @apply text-white lg:text-lg;
    }
  }
}
</style>
