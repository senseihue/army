<script setup lang="ts">
interface IProps {}

defineProps<IProps>()

const { locale } = useI18n()
const route = useRoute()
const params = {
  server: true,

  query: {
    category_id: route.params.category_id,
    page: 0,
    size: 100
  }
}

const { content } = await $fetch<IResponse<IService[]>>("/gateway/siw/public/service", { ...params, headers: {
    "Accept-Language": locale.value
  } })
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <nuxt-link-locale
      v-for="service in content"
      class="ui-button ui-button-solid ui-button-rounded ui-button-md ui-button-secondary flex !bg-gray-100 !font-medium !text-black"
      :key="service.id"
      :to="`/service/${service.id}`"
    >
      {{ service.title }}
    </nuxt-link-locale>
  </div>
</template>
