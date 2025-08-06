<template>
  <div>
    <service-integration-hero />
    <service-integration-list />
    <service-integration-e-auction-modal />
  </div>
</template>

<script setup lang="ts">
import {
  ServiceIntegrationEAuctionModal,
  ServiceIntegrationHero,
  ServiceIntegrationList
} from "~/features/service/integration"
</script>

<style scoped></style>
