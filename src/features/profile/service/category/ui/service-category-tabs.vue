<script setup lang="ts">
import { ServiceCategoryTab } from "~/features/profile/service/category"
import { usePersonalServiceCategoryStore } from "~/entities/profile/personal-service-category"

interface IProps {
  categories: IPersonalServiceCategory[]
}

defineProps<IProps>()
const emits = defineEmits<{
  (e: "next"): void
  (e: "prev"): void
  (e: "change", category: IPersonalServiceCategory): void
}>()
const personalServiceCategoryStore = usePersonalServiceCategoryStore()
const { active, items, current } = storeToRefs(personalServiceCategoryStore)

const prev = () => {
  if (active.value > 0) {
    active.value--
    emits("prev")
  }
}

const next = () => {
  if (active.value < items.value.length - 1) {
    active.value++
    emits("next")
  }
}

const selectCategory = (category: IPersonalServiceCategory, index: number) => {
  active.value = index
  current.value = category
  emits("change", category)
}
</script>

<template>
  <div class="overflow-x-auto">
    <div class="mb-4 flex w-full items-center justify-end gap-4">
      <ui-icon-button variant="flat" rounded icon-name="lucide:chevron-left" color="secondary" @click="prev" />
      <ui-icon-button variant="flat" rounded icon-name="lucide:chevron-right" color="secondary" @click="next" />
    </div>
    <div class="flex w-full items-center justify-between gap-4">
      <service-category-tab
        v-for="(item, index) in categories"
        :key="item.type"
        :active="active === index"
        :icon-name="item.icon"
        :title="item.title"
        @click="selectCategory(item, index)"
      />
    </div>
  </div>
</template>
