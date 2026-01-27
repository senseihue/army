<script setup lang="ts">
const isLight = ref(false)
</script>

<template>
  <section class="relative flex min-h-screen flex-col items-center justify-center px-6 pb-20 pt-24">
    <video
      class="absolute inset-0 z-0 h-full w-full object-cover "
      muted
      autoplay
      src="/Untitled 1-1.mp4"
      @contextmenu.prevent
    />
    <div class="relative z-10 mx-auto text-center">
      <h1 class="font-display mb-6 text-5xl font-bold tracking-tight md:text-7xl">
        <span class="block text-zinc-100">SADOQAT - MATONAT - INTELLEKT</span>
        <!--        <span class="bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">-->
        <!--          Ship smarter.-->
        <!--        </span>-->
      </h1>

      <p class="mx-auto mb-10 max-w-2xl text-balance text-lg leading-relaxed text-zinc-500 md:text-xl">
        MUDOFAA VAZIRLIGI HARBIY - KASBIY SARALASH BOSHQARMASI
      </p>

      <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <nuxt-link-locale
          class="group transition-transform duration-300 hover:scale-105 active:scale-95"
          to="/#services"
        >
          <ui-button
            class="ml-2 rounded-full !bg-zinc-100 px-4 py-1.5 text-sm font-medium !text-zinc-900 transition-colors hover:!bg-zinc-200"
            rounded
            :label="$t('labels.send_application')"
          />
        </nuxt-link-locale>
      </div>
    </div>
  </section>
</template>
