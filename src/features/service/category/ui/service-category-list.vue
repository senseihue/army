<script setup lang="ts">
interface IProps {}

defineProps<IProps>()

const route = useRoute()
const params = {
  server: true,
  query: {
    page: 0,
    size: 100,
    parent_id: route.params.category_id || undefined
  }
}

const { data: categories } = await useFetch<IResponse<IServiceCategory[]>>("/gateway/siw/public/service/category", {
  ...params
})
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <nuxt-link-locale
      v-for="category in categories?.content"
      class="ui-button ui-button-solid ui-button-rounded ui-button-md ui-button-secondary flex !bg-gray-100 !font-medium !text-black"
      :key="category.id"
      :to="`/service/category/${category.id}`"
    >
      {{ category.title }}
    </nuxt-link-locale>
  </div>
</template>
