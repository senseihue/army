<script setup lang="ts">
import { MainFooter, MainHeader } from "~/features/layout"
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <main-header />

    <main class="flex flex-col grow">
      <slot />
    </main>

    <main-footer />
    <toaster close-button rich-colors invert position="top-right" />

  </div>

</template>
