<script setup lang="ts">
import { ProfileSideBar } from "~/features/layout/profile"
</script>

<template>
  <div class="container-7xl">
    <div class="flex flex-col gap-4 pb-9 pt-5 md:flex-row md:gap-[18px]">
      <profile-side-bar />
      <slot />
    </div>
  </div>
</template>
