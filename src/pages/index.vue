<script lang="ts" setup>
import { HomeHero } from "~/features/home"
import { HomeServices } from "~/widgets/home"
definePageMeta({
  fixedHeader: true,
  isLightHeader: true
})
</script>

<template>
  <div class="antialiased">
    <home-hero />
    <home-services id="services" />
    <!--    <home-about />-->
  </div>
</template>
