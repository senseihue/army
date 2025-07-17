<script lang="ts" setup>
import { HomeAbout, HomeHero, HomeMap, HomeReport, HomeSector, HomeStatistics, HomeTestimonial } from "~/features/home"
import { HomeMediaCards } from "~/widgets/home"
</script>

<template>
  <div>
    <home-hero />
    <home-about />
    <home-report />
    <home-statistics />
    <home-sector />
    <home-map />
    <home-testimonial />
    <home-media-cards />
  </div>
</template>
