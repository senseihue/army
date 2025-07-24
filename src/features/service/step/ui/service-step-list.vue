<script setup lang="ts">
import { useServiceProcessStore } from "~/entities/service/process"
import { useServiceStepStore } from "~/entities/service/step"
import { useServiceStepService } from "~/features/service/step"

interface IProps {
  service: IService
}

const route = useRoute()
const serviceStepStore = useServiceStepStore()
const { getStep } = useServiceStepService()
const { items, current } = storeToRefs(serviceStepStore)

const changeStep = (step: IServiceStep) => {
  current.value = step
  getStep()
}
</script>

<template>
  <div v-if="items.length > 1">
    <div class="grid gap-2">
      <div>
        <div
          v-for="step in items"
          class="flex cursor-pointer items-center gap-1 rounded-[14px] p-[10px] text-black"
          :class="{
            '!bg-[#D6E8FF] !text-blue-midnight': current?.id === step.id
          }"
          :key="step.id"
          @click="changeStep(step)"
        >
          <icon class="!text-blue-midnight" :name="step.icon" />
          <p class="text-sm font-medium" data-v-ea57a248="">
            {{ step.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
