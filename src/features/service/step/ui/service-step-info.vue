<script setup lang="ts">
import { useServiceStepStore } from "~/entities/service/step"
import { ServiceStepAccordion, ServiceStepDocument } from "~/features/service/step"

const serviceStepStore = useServiceStepStore()
const { current, loadingCurrent } = storeToRefs(serviceStepStore)
const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <section class="w-full">
    <div class="grid gap-4 rounded-xl bg-white p-4">
      <div class="">
        <div class="mb-4 flex flex-col items-center gap-4 md:flex-row">
          <img
            v-if="current?.upload"
            class="h-full max-h-36 w-full max-w-36 shrink-0 object-contain"
            alt=""
            :src="current.upload?.download_link"
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
        <div v-if="current?.content" class="content rounded-xl border p-4">
          <div v-html="current?.content"></div>
        </div>
      </div>
      <div v-if="loadingCurrent">
        <div class="flex h-96 w-full items-center justify-center">
          <span class="text-lg font-semibold text-gray-500">
            {{ t("loading") }}
          </span>
        </div>
      </div>
      <template v-else>
        <service-step-document />
        <service-step-accordion />
      </template>
    </div>
  </section>
</template>

<i18n>
{
  "en": {
    "loading": "Loading..."
  },
  "ru": {
    "loading": "Загрузка..."
  },
  "uz": {
    "loading": "Yuklanmoqda..."
  }
}
</i18n>
