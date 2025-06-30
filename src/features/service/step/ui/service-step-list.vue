<script setup lang="ts">
import { useServiceProcessStore } from "~/entities/service/process"
import { useServiceStepStore } from "~/entities/service/step"

interface IProps {
  service: IService
}

const route = useRoute()
const serviceStepStore = useServiceStepStore()
const { items, current } = storeToRefs(serviceStepStore)
</script>

<template>
  <div>
    <div class="grid gap-2">
      <div>
        <div
          v-for="step in items"
          class="!text-midnight flex cursor-pointer items-center gap-1 rounded-[14px] p-[10px] text-black"
          :class="{
            '!bg-[#D6E8FF]': current?.id === step.id
          }"
          :key="step.id"
        >
          <icon :name="step.icon" />
          <p class="text-sm font-medium" data-v-ea57a248="">
            {{ step.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
