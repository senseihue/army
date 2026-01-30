<script setup lang="ts">
interface IProps {
  title: string
  description?: string
  image?: string
}

defineProps<IProps>()

const { getCdnUrl } = cdn()
</script>

<template>
  <section class="relative flex min-h-[50%] flex-col items-center justify-center bg-black/35 px-6 pb-20 pt-24">
    <img
      class="absolute inset-0 z-0 h-full w-full opacity-50"
      :class="{
        'object-cover': image,
        'object-contain': !image
      }"
      :alt="title"
      :src="getCdnUrl(image)"
    />
    <div class="relative z-10 mx-auto max-w-3xl text-center">
      <h1 class="font-display mb-6 text-5xl font-bold tracking-tight md:text-7xl">
        <span class="block text-zinc-100">{{ title }}</span>
        <!--        <span class="bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">-->
        <!--            Ship smarter.-->
        <!--          </span>-->
      </h1>

      <p
        v-if="description"
        class="mx-auto mb-10 max-w-2xl text-balance text-lg leading-relaxed text-zinc-500 md:text-xl"
      >
        {{ description }}
      </p>
    </div>
  </section>
</template>
