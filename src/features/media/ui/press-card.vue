<script lang="ts" setup>
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)

interface IProps {
  image: string | undefined
  path: string
  label: string
  publishDate: string
  dateClass?: string
  labelClass?: string
}

defineProps<IProps>()
</script>

<template>
  <div>
    <nuxt-link-locale :to="path">
      <img v-if="image" class="mb-4 aspect-video w-full object-cover object-center" :src="image" :alt="label" />
    </nuxt-link-locale>

    <p v-if="publishDate" class="mb-2 text-sm text-gray-600" :class="dateClass">
      {{ dayjs.utc(publishDate).format("MMMM D, YYYY HH:mm") }}
    </p>

    <nuxt-link-locale class="line-clamp-2 text-lg font-bold" :to="path" :class="labelClass">
      {{ label }}
    </nuxt-link-locale>
  </div>
</template>
