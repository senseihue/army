<template>
  <div class="group relative min-h-80 opacity-100">
    <div class="relative transition-all group-hover:opacity-90">
      <img v-if="upload.id" class="h-80 w-full object-cover object-center" alt="" :src="upload.download_link" />
      <img v-else class="h-80 w-full object-cover object-center" src="/img/about/hero.webp" alt="image" />
      <div class="bg-blue-bondi absolute bottom-4 left-0 w-full max-w-[85%] rounded-r-2xl px-4 py-0.5 group-hover:hidden">
        <h3 class="text-lg font-semibold text-white">{{ title }}</h3>
      </div>
    </div>

    <div
      class="bg-blue-bondi/80 absolute left-0 top-0 grid h-full w-full cursor-pointer gap-3 p-5 opacity-0 transition-all group-hover:opacity-100"
    >
      <h3 class="font-bold text-white">{{ title }}</h3>

      <ul>
        <li>
          <p>{{ $t("labels.project_cost") }}</p>
          <p>{{ formatCurrency(budget, "$") }}</p>
        </li>

        <li>
          <p>{{ $t("labels.sector") }}</p>
          <p>{{ sector?.content }}</p>
        </li>

        <li>
          <p>{{ $t("labels.project_type") }}</p>
          <p>{{ category.title }}</p>
        </li>

        <li>
          <p>{{ $t("labels.status") }}</p>
          <p>{{ $t(`project_status.${status}`) }}</p>
        </li>
      </ul>

      <div>
        <NuxtLink class="rounded-2xl bg-green-texas px-3 py-1 text-white" :to="`/guide/project/${id}`">
          {{ $t("labels.view_more") }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { formatCurrency } from "~/shared/lib/currency"

interface IProps {
  id: number
  title: string
  upload: IFile
  budget: number
  status: string
  sector: ISector
  category: IProjectCategory
}

defineProps<IProps>()
</script>

<style scoped>
ul {
  @apply grid gap-3 text-white;
}

ul > li {
  @apply grid grid-cols-2 gap-1;
}
</style>
