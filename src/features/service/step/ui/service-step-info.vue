<script setup lang="ts">
import { useServiceStepStore } from "~/entities/service/step"
import { ServiceStepDocument } from "~/features/service/step"

const serviceStepStore = useServiceStepStore()
const { current } = storeToRefs(serviceStepStore)
</script>

<template>
  <section class="w-full">
    <div class="rounded-xl bg-white p-4">
      <div class="">
        <div class="mb-4 flex flex-col items-center gap-4 md:flex-row">
          <img
            class="h-full max-h-36 w-full max-w-36 shrink-0 object-contain"
            src="https://dev-portal.miit.uz/uploads/service-steps/info.png"
            alt=""
          />
          <div>
            <h2 class="mb-3 text-2xl font-semibold">
              {{ current?.title }}
            </h2>
            <p class="text-sm">
              {{ current?.description }}
            </p>
          </div>
        </div>
        <div class="content rounded-xl border p-4">
          <div v-html="current?.content"></div>
        </div>
      </div>
      <div class="my-4 grid gap-3"></div>
      <div>
        <service-step-document />
      </div>
    </div>
  </section>
</template>
