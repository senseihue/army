<script setup lang="ts">
import { useServiceStepStore } from "~/entities/service/step"

const serviceStepStore = useServiceStepStore()
const { current } = storeToRefs(serviceStepStore)
const { t } = useI18n({ useScope: "local" })
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
              <div
                class="flex h-[150px] w-[150px] items-center justify-center rounded-xl border-2 border-[#E4E4E7] bg-[#F8FAFC]"
              >
                <img
                  class="h-[130px] w-28 cursor-pointer object-cover"
                  alt=""
                  height="1710"
                  loading="eager"
                  width="1327"
                  :src="document.upload?.download_link"
                />
              </div>
              <p class="max-w-[184px] text-sm font-medium">
                {{ document.title }}
              </p>
            </template>
            <template v-else>
              <div class="col-span-full rounded-xl border-2 bg-[#F8FAFC] p-4">
                <a
                  class="flex cursor-pointer items-center justify-between gap-3 !no-underline"
                  target="_blank"
                  :href="document.upload?.download_link"
                >
                  <div class="flex items-center gap-3 text-blue-midnight">
                    <icon class="text-xl" :name="document.icon"></icon>
                    <p class="text-sm font-semibold">
                      {{ document.title }}
                    </p>
                  </div>
                  <div class="flex items-center gap-3 !text-black">
                    <p class="text-sm font-semibold">
                      {{ t("actions.download") }}
                    </p>
                    <icon class="text-xl" name="ph:download-simple"></icon>
                  </div>
                </a>
              </div>
            </template>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<i18n>
{
  "en": {
    "actions": {
      "download": "Download"
    }
  },
  "ru": {
    "actions": {
      "download": "Скачать"
    }
  },
  "oz": {
    "actions": {
      "download": "Юклаб олиш"
    }
  }
}
</i18n>
