<script setup lang="ts">
import { useServiceStepStore } from "~/entities/service/step"
import { ServiceDocumentGrid, ServiceDocumentList } from "~/features/service"

const serviceStepStore = useServiceStepStore()
const { items, current } = storeToRefs(serviceStepStore)
</script>

<template>
  <div>
    <ui-accordion
      v-for="accordion in current?.accordions"
      class="service-step-accordion"
      color="gray"
      arrow
      :key="accordion.id"
      :title="accordion.title"
      :icon="accordion.icon"
    >
      <div class="service-step-accordion__content">
        <div v-html="accordion.content"></div>
        <div>
          <div class="grid gap-3">
            <div class="flex flex-wrap items-start gap-3">
              <div
                v-for="document in accordion.documents"
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
        </div>
      </div>
    </ui-accordion>
  </div>
</template>

<style>
.service-step-accordion {
  .ui-accordion {
    @apply border border-[#95AECF];
  }

  &__content {
    @apply grid gap-4 rounded-b-xl border border-[#95AECF] bg-white p-4;
  }
}
</style>
