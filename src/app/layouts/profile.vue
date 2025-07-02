<script setup lang="ts">
import { ProfileSideBar } from "~/features/layout/profile"
</script>

<template>
  <div class="container-7xl">
    <div class="flex flex-col gap-2 pb-9 pt-5 sm:flex-row">
      <profile-side-bar />
      <slot />
    </div>
  </div>
</template>
