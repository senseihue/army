<script setup lang="ts">
import { MainFooter, MainHeader } from "~/features/layout"
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <main-header />

    <main class="grow">
      <slot />
    </main>

    <main-footer />
  </div>
</template>
