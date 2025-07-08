<script setup lang="ts">
import { usePersonalServiceService } from "~/features/profile/service"
import type { AxiosRequestConfig } from "axios"
import { usePersonalServiceStore } from "~/entities/profile/personal-service"
import { useVuelidate } from "@vuelidate/core"
import { ValidateEach } from "@vuelidate/components"

const vuelidate = useVuelidate()
const { required } = useRule()
const { $session } = useNuxtApp()
const { profile } = $session || {}
const { getPersonalServiceDetail } = usePersonalServiceService()
const personalServiceStore = usePersonalServiceStore()
const { current } = storeToRefs(personalServiceStore)

const paramsCollection = computed(() => requiredParams.value)
const bodyCollection = computed(() => requiredBody.value)
const rules = ref({})
const activeService = ref<IPersonalService | undefined>(undefined)

const requestConfig = ref<AxiosRequestConfig>({
  params: {},
  method: "GET"
})
const requiredParams = ref<any[]>([])
const requiredBody = ref<any[]>([])

const showForm = ref(false)

const getRequestParams = async (service: IPersonalService) => {
  if (service.params) {
    const params = {}

    service.params.forEach((item) => {
      if (Object.prototype.hasOwnProperty.call(profile.value, item.key)) {
        params[item.key] = profile.value[item.key]
      } else {
        requiredParams.value.push(item)
        rules.value[item.key] = { required }
      }
    })

    requestConfig.value.params = params
    return Promise.resolve()
  }
  return Promise.resolve()
}
const getRequestBody = async (service: IPersonalService) => {
  if (service.body) {
    const body = {}

    service.body.forEach((item) => {
      if (Object.prototype.hasOwnProperty.call(profile.value, item.key)) {
        body[item.key] = profile.value[item.key]
      } else {
        requiredBody.value.push(item)
        rules.value[item.key] = { required }
      }
    })

    requestConfig.value.data = body
    requestConfig.value.method = "POST"

    return Promise.resolve()
  }
  return Promise.resolve()
}

const onSave = async () => {
  const isValid = await vuelidate.value.$validate()
  if (isValid) {
    if (paramsCollection.value.length > 0) {
      paramsCollection.value.forEach((item) => {
        requestConfig.value.params[item.key] = item[item.key]
      })
    }
    if (bodyCollection.value.length > 0) {
      bodyCollection.value.forEach((item) => {
        requestConfig.value.data[item.key] = item[item.key]
      })
    }

    await getPersonalServiceDetail(activeService.value.link, requestConfig.value)
    showForm.value = false
  }
}

const onBeforeShow = async (service: IPersonalService) => {
  await getRequestParams(service)
  await getRequestBody(service)
  activeService.value = service
  if (Object.keys(requiredParams.value).length > 0) {
    showForm.value = true
  } else {
    showForm.value = false
    getPersonalServiceDetail(activeService.value.link, requestConfig.value)
  }
}

const onClose = () => {
  showForm.value = false
  requiredParams.value = []
  requiredBody.value = []
  rules.value = {}
  requestConfig.value = {
    params: {},
    method: "GET"
  }
}
</script>

<template>
  <ui-modal id="service-detail-modal" @shown="onBeforeShow" @close="onClose">
    <div v-if="showForm" class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
      <validate-each v-for="(item, index) in paramsCollection" :key="index" :state="item" :rules="rules">
        <template #default="{ v }">
          <ui-form-group
            v-slot="{ id }"
            required
            :hint="v[item.key].$errors[0]?.$message"
            :invalid="!!v[item.key].$errors[0]?.$message"
            :label="item.title"
          >
            <ui-input v-model="v[item.key].$model" :id />
          </ui-form-group>
        </template>
      </validate-each>
      <validate-each v-for="(item, index) in bodyCollection" :key="index" :state="item" :rules="rules">
        <template #default="{ v }">
          <ui-form-group
            v-slot="{ id }"
            required
            :hint="v[item.key].$errors[0]?.$message"
            :invalid="!!v[item.key].$errors[0]?.$message"
            :label="item.title"
          >
            <ui-input v-model="v[item.key].$model" :id />
          </ui-form-group>
        </template>
      </validate-each>
    </div>
    <div v-else class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
      <template v-for="(item, index) in current?.data" :key="index">
        <ui-form-group v-for="(value, key) in item" v-slot="{ id }" :label="key.toLocaleString().toUpperCase()">
          <ui-input readonly disabled :model-value="value" :id />
        </ui-form-group>
        <hr class="col-span-full py-4" />
      </template>
    </div>
    <template v-if="showForm" #footer="{ hide }">
      <div class="flex flex-col-reverse items-center justify-between gap-3 p-4 sm:flex-row">
        <ui-button class="w-full" color="secondary" @click="hide">
          {{ $t("actions.cancel") }}
        </ui-button>
        <ui-button class="w-full" @click="onSave">
          {{ $t("actions.send") }}
        </ui-button>
      </div>
    </template>
  </ui-modal>
</template>

<style scoped></style>
