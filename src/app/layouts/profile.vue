<script setup lang="ts">
import { ProfileSideBar } from "~/features/layout/profile"
</script>

<template>
  <div class="container-7xl antialiased bg-zinc-950
text-zinc-100">
    <div class="flex flex-col antialiased bg-zinc-950
text-zinc-100 gap-4 pb-9 pt-5 md:flex-row md:gap-[18px]">
      <profile-side-bar />
      <slot />
    </div>
  </div>
</template>
