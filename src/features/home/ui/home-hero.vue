<script setup lang="ts">
const isLight = ref(false)
</script>

<template>
  <section class="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 relative">
    <video
      class="absolute z-0 inset-0 w-full h-full object-cover opacity-50"
      muted
      autoplay
      src="/Untitled 1-1.mp4"
      @contextmenu.prevent
    />
    <div class="relative z-10 text-center max-w-3xl mx-auto">
      <h1 class="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
        <span class="text-zinc-100 block">Build faster.</span>
        <span class="bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            Ship smarter.
          </span>
      </h1>

      <p class="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
        The all-in-one platform that helps teams build, deploy, and scale their products 10x faster. No complexity,
        just results.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <nuxt-link-locale to="/"
                          class="group transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          <div :class="{
            'rounded-full': true,
            'shadow-[0_8px_20px_rgba(0,0,0,0.25)]': isLight
          }">

          </div>
        </nuxt-link-locale>
      </div>
    </div>
  </section>
</template>
