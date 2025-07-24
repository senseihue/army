<script setup lang="ts">
import { ServiceList } from "~/widgets/service"
import { ServiceCategoryList } from "~/features/service/category"
import { ServiceStepList, ServiceStepInfo, useServiceStepService } from "~/features/service/step"
import { useServiceProcessStore } from "~/entities/service/process"
import { useServiceStepStore } from "~/entities/service/step"
import { useServiceProcessService } from "~/features/service/process"
import { useServiceStore } from "~/entities/service"
import ServiceProcessPagination from "~/widgets/service/service-process-pagination.vue"

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
            <service-process-pagination />
          </div>
          <div class="sticky right-0 flex w-full gap-5 md:max-w-[272px] md:flex-col">
            <div class="w-full rounded-2xl bg-white px-2 py-4">
              <service-step-list />
              <div class="grid gap-2">
                <!---->
                <div v-if="service?.link" class="p-2">
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
            <div class="w-full rounded-2xl bg-white px-4 py-4">
              <p class="mb-4 text-sm font-medium">
                {{ t("report.description") }}
              </p>
<!--              <ui-button class="w-full" color="danger" size="lg" rounded @click="test">-->
<!--                {{ t("actions.send-report") }}-->
<!--              </ui-button>-->
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
    "report": {
      "description": "If you have any difficulties with services, business or the portal, click the button below to send a request."
    },
    "actions": {
      "download-checklist": "Download checklist",
      "apply-online": "Apply online",
      "send-report": "File a complaint"
    }
  },
  "ru": {
    "report": {
      "description": "Если у вас возникли какие-либо трудности с услугами, бизнесом или порталом, нажмите на кнопку ниже, чтобы отправить запрос."
    },
    "actions": {
      "download-checklist": "Скачать чек-лист",
      "apply-online": "Подать онлайн",
      "send-report": "Подать жалобу"
    }
  },
  "oz": {
    "report": {
      "description": "Agar siz xizmatlar, biznes yoki portalni taqdim etish bilan bog'liq muammolarga duch kelsangiz, mijozlarni qo'llab-quvvatlash xizmatiga murojaat qilishingiz kerak."
    },
    "actions": {
      "download-checklist": "Yuklab olish",
      "apply-online": "ONlayn ariza berish",
      "send-report": "Shikoyat qilish"
    }
  }
}
</i18n>
