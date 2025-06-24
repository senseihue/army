<script setup lang="ts">
interface IProps {
  services: IService[]
}

defineProps<IProps>()

const cleanLink = (service: IService): string => {
  if (service.link.startsWith("/")) {
    return service.link.slice(1) // Remove leading slash
  }
  return service.link // Return as is if no leading slash
}
</script>

<template>
  <ul class="flex flex-col gap-4 sm:flex-row">
    <li v-for="service in services" :key="service.id">
      <nuxt-link-locale class="ui-button ui-button-rounded" :to="`/service/${cleanLink(service)}`">
        {{ service.title }}
      </nuxt-link-locale>
    </li>
  </ul>
</template>

<style scoped></style>
