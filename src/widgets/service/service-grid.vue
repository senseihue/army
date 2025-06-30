<script setup lang="ts">
import { ServiceList } from "~/widgets/service"
import { ServiceCategoryList } from "~/features/service/category"
import { ServiceStepList, ServiceStepInfo, useServiceStepService } from "~/features/service/step"
import { useServiceProcessStore } from "~/entities/service/process"
import { useServiceStepStore } from "~/entities/service/step"
import { useServiceProcessService } from "~/features/service/process"
import { useServiceStore } from "~/entities/service"

const route = useRoute()
const { t } = useI18n({ useScope: "local" })
const serviceProcessStore = useServiceProcessStore()
const serviceStepStore = useServiceStepStore()
const serviceStore = useServiceStore()
const { getProcessList } = useServiceProcessService()
const { getStepList, getStep } = useServiceStepService()
const { current: service } = storeToRefs(serviceStore)
const { items: steps, current: step } = storeToRefs(serviceStepStore)
const { items: processList, current: process } = storeToRefs(serviceProcessStore)

const getInitialData = async () => {
  await getProcessList()
  await getStepList()
  await getStep()
}
onMounted(() => {
  getInitialData()
})
</script>

<template>
  <section>
    <div class="container-7xl">
      <div class="pb-4">
        <div class="flex flex-col-reverse gap-2 lg:flex-row">
          <div class="w-full">
            <service-step-info />
          </div>
          <div class="sticky right-0 flex w-full max-w-[272px] flex-row gap-5 lg:flex-col">
            <div class="w-full rounded-2xl bg-white px-2 py-4">
              <service-step-list />
              <div class="grid gap-2" data-v-ea57a248="">
                <!---->
                <div v-if="service?.link" class="p-2" data-v-ea57a248="">
                  <a
                    class="ui-button ui-button-rounded ui-button-lg ui-button-solid w-full bg-green-benzol text-white"
                    target="_blank"
                    :href="service?.link"
                  >
                    {{ t("actions.apply-online") }}
                  </a>
                </div>
                <div v-if="service?.upload" class="p-2">
                  <a
                    class="ui-button ui-button-rounded ui-button-lg ui-button-solid w-full bg-gray-100"
                    download=""
                    disabled="false"
                    :href="service.upload?.download_link"
                  >
                    {{ t("actions.download-checklist") }}
                    <icon class="text-lg" name="lucide:check" aria-hidden="true"></icon>
                  </a>
                </div>
              </div>
            </div>
            <div class="w-full rounded-2xl bg-white px-2 py-4">

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n>
{
  "en": {
    "actions": {
      "download-checklist": "Download checklist",
      "apply-online": "Apply online"
    }
  },
  "ru": {
    "actions": {
      "download-checklist": "Скачать чек-лист",
      "apply-online": "Подать онлайн"
    }
  },
  "oz": {
    "actions": {
      "download-checklist": "Юклаб олиш",
      "apply-online": "Онлайн ариза бериш"
    }
  }
}
</i18n>
