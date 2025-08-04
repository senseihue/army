<template>
  <div class="flex flex-col justify-between gap-3">
    <div>
      <div
        class="mb-4 flex max-h-56 min-h-56 items-center justify-center rounded-xl bg-blue-command p-4 text-xl font-semibold text-white"
      >
        <img v-if="image?.id" class="aspect-video object-cover" alt="" :src="image?.download_link" />
        <Icon v-else class="h-48 w-48" :name="icon" />
      </div>

      <h3 class="font-semibold">{{ title }}</h3>
    </div>

    <div class="flex justify-end">
      <NuxtLinkLocale
        class="inline-block rounded-[32px] bg-green-600 px-12 py-3 text-white hover:bg-green-700"
        :to="`/guide/project/category/${id}`"
      >
        {{ $t("labels.view_here") }}
      </NuxtLinkLocale>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  title: string
  id: number
  icon: any
  image: IFile
}

defineProps<IProps>()
</script>

<style scoped></style>
