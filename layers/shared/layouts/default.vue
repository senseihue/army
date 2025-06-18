<script setup lang="ts">
import { MainFooter, MainHeader } from "~/layers/features/layout"
useFetch()
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
