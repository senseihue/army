<script setup lang="ts">
import { useServiceStepStore } from "~/entities/service/step"
import { ServiceDocumentGrid, ServiceDocumentList } from "~/features/service"

const serviceStepStore = useServiceStepStore()
const { current } = storeToRefs(serviceStepStore)
</script>

<template>
  <div>
    <template v-for="group in current?.groups" :key="group.id">
      <div class="flex gap-2 py-3">
        <h3 class="font-semibold text-blue-midnight">
          {{ group.title }}
        </h3>
      </div>
      <div class="grid gap-3">
        <div class="flex flex-wrap items-start gap-3">
          <div
            v-for="document in group.documents"
            :class="{
              'w-full': document.type !== 'image'
            }"
            :key="document.id"
          >
            <template v-if="document.type === 'image'">
              <service-document-grid :document="document" />
            </template>
            <template v-else>
              <service-document-list :document="document" />
            </template>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
