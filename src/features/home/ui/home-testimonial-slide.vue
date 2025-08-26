<script lang="ts" setup>
interface IProps {
  text: string
  image: IFile
  author: string
}

defineProps<IProps>()
</script>

<template>
  <div class="testimonial-slide">
    <div class="testimonial-slide__image-wrapper">
      <img class="testimonial-slide__image" :src="image?.download_link" :alt="author" />
      <span class="testimonial-slide__quote">‘‘</span>
    </div>

    <p class="testimonial-slide__text">{{ text }}</p>
    <p class="testimonial-slide__author">{{ author }}</p>
  </div>
</template>

<style scoped>
.testimonial-slide {
  @apply flex flex-col items-center gap-4;
}

.testimonial-slide__image-wrapper {
  @apply relative mb-8;
}

.testimonial-slide__image {
  @apply w-full h-full max-w-52 max-h-52 min-h-52 rounded-full;
}

.testimonial-slide__quote {
  @apply absolute left-1/2 top-44 -translate-x-1/2 select-none text-9xl font-bold tracking-wider text-blue-command;
}

.testimonial-slide__text {
  @apply max-w-lg grow text-center text-lg text-blue-midnight lg:text-xl;
}

.testimonial-slide__author {
  @apply whitespace-pre-line text-center text-lg font-bold text-blue-command lg:text-xl;
}
</style>
