<script setup lang="ts">
interface IProps {
  title: string
  description?: string
  author?: ISearchResult['author']
  link: string
}

defineProps<IProps>()
</script>

<template>
  <div>
    <nuxt-link class="text-command mb-2 block text-xl font-bold" :to="link">
      {{ title }}
    </nuxt-link>
    <p v-if="author" class="text-sm text-gray-600">
      {{ $t('labels.written_by') }} {{ author.firstName }} {{ author.lastName }}
    </p>
    <p v-if="description" class="text-sm text-gray-600">
      {{ description }}
    </p>
  </div>
</template>

<style scoped></style>
