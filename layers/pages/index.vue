<script lang="ts" setup>
import {
  HomeAbout,
  HomeHero,
  HomeReport,
  HomeSector,
  HomeStatistics,
  HomeTestimonial
} from "~/layers/features/home"
</script>

<template>
  <div>
    <home-hero />
    <home-about />
    <home-report />
    <home-statistics />
    <home-sector />
    <home-testimonial />
  </div>
</template>
