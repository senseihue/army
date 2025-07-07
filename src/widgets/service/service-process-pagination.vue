<script setup lang="ts">
import { useServiceProcessStore } from "~/entities/service/process"
import { useServiceStepService } from "~/features/service/step"

const { getStepList, getStep } = useServiceStepService()
const serviceProcessStore = useServiceProcessStore()
const { active, items, current } = storeToRefs(serviceProcessStore)

const isNotFirst = computed(() => active.value !== 0)
const isNotLast = computed(() => active.value < items.value.length - 1)

const prevStepTitle = computed(() => items.value.at(active.value - 1)?.title)
const nextStepTitle = computed(() => items.value.at(active.value + 1)?.title)

const prevStep = () => {
  active.value > 0 && active.value--
  current.value = items.value.at(active.value)
  getData()
  setTimeout(() => scrollTo(), 100)
}
const nextStep = () => {
  isNotLast.value && active.value++
  current.value = items.value.at(active.value)
  getData()
  setTimeout(() => scrollTo(), 100)
}

const getData = async () => {
  await getStepList()
  await getStep()
}
</script>

<template>
  <div class="mt-4 flex grow items-end justify-between gap-4">
    <div v-if="isNotFirst" class="flex items-center gap-2">
      <ui-button
        class="!py-3 !font-medium"
        icon-name="lucide:arrow-left"
        color="white"
        rounded
        :label="prevStepTitle"
        @click="prevStep"
      />
    </div>

    <p></p>

    <div v-if="isNotLast" class="flex items-center gap-2">
      <ui-button class="!py-3 !font-medium" rounded color="white" :label="nextStepTitle" @click="nextStep">
        <span class="hidden sm:inline">{{ nextStepTitle }}</span>
        <icon name="lucide:arrow-right"></icon>
      </ui-button>
    </div>
  </div>
</template>
