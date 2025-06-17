<script setup lang="ts">
useHead({ titleTemplate: (title) => (title ? `${title} - Invest Uzbekistan` : "Invest Uzbekistan") })
</script>

<template>
  <div>
    <nuxt-loading-indicator color="#06b6d4" />
    <nuxt-route-announcer />

    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
    <toaster close-button rich-colors invert position="top-right" />
  </div>
</template>
