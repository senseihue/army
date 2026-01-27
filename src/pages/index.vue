<script lang="ts" setup>
import {HomeHero} from "~/features/home"
import { HomeServices } from "~/widgets/home"
</script>

<template>
  <div class="antialiased">
    <home-hero />
    <home-services id="services" />
    <!--    <home-about />-->
  </div>
</template>
