<template>
  <div class="flex flex-col justify-between gap-3">
    <div>
      <div
        class="mb-4 flex min-h-56 items-center justify-center rounded-xl bg-blue-command p-4 text-center text-xl font-semibold text-white"
      >
        <Icon class="h-48 w-48" :name="icon" />
      </div>

      <h3 class="font-semibold">{{ title }}</h3>
    </div>

    <div class="flex justify-end">
      <NuxtLink
        class="inline-block rounded-[32px] bg-green-600 px-12 py-3 text-white hover:bg-green-700"
        :to="`/guide/project/category/${id}`"
      >
        {{ $t("labels.view_here") }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  title: string
  id: number
  icon: any
}

defineProps<IProps>()
</script>

<style scoped></style>
