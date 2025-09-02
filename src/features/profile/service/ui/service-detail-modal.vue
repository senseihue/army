<script setup lang="ts">
import { usePersonalServiceService } from "~/features/profile/service"
import type { AxiosRequestConfig } from "axios"
import { usePersonalServiceStore } from "~/entities/profile/personal-service"
import UiDatePicker from "@vuepic/vue-datepicker"
import { DistrictSelect, TerritorySelect } from "~/features/territory"

const { t } = useI18n({ useScope: "local" })
const { required } = useRule()
const { $session } = useNuxtApp()
const { profile } = $session || {}
const { getPersonalServiceDetail } = usePersonalServiceService()
const personalServiceStore = usePersonalServiceStore()
const { current } = storeToRefs(personalServiceStore)

const paramsCollection = computed(() => requiredParams.value)
const bodyCollection = computed(() => requiredBody.value)
const rules = ref({
  params: {},
  body: {}
})
const activeService = ref<IPersonalService | undefined>(undefined)

const requestConfig = ref<AxiosRequestConfig>({
  params: {},
  method: "GET"
})

const requiredParams = ref<any[]>([])
const requiredBody = ref<any[]>([])

const showForm = ref(false)
const loading = ref(false)

const errors = ref({
  params: {},
  body: {}
})
const state = ref({
  params: {},
  body: {}
})

const regionId = ref()

const getRequestParams = async (service: IPersonalService) => {
  if (service.params) {
    const params = {}

    service.params.forEach((item) => {
      if (item.key === "inn" && profile.value?.[profile.value?.role].tin) {
        params[item.key] = profile.value?.[profile.value?.role].tin
      } else if (item.key === "pinfl" && profile.value?.[profile.value?.role].pin) {
        params[item.key] = profile.value?.[profile.value?.role].pin
      } else if (Object.prototype.hasOwnProperty.call(profile.value?.[profile.value?.role], item.key) && profile.value?.[profile.value?.role][item.key]) {
        params[item.key] = profile.value?.[profile.value?.role][item.key]
      } else {
        requiredParams.value.push(item)
        if (item.required) {
          rules.value.params[item.key] = { required }
        }
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
      if (item.key === "inn" && profile.value?.[profile.value?.role].tin) {
        body[item.key] = profile.value?.[profile.value?.role].tin
      } else if (item.key === "pinfl" && profile.value?.[profile.value?.role].pin) {
        body[item.key] = profile.value?.[profile.value?.role].pin
      } else if (Object.prototype.hasOwnProperty.call(profile.value?.[profile.value?.role], item.key) && profile.value?.[profile.value?.role][item.key]) {
        body[item.key] = profile.value?.[profile.value?.role][item.key]
      } else {
        requiredParams.value.push(item)
        if (item.required) {
          rules.value.body[item.key] = { required }
        }
      }
    })

    requestConfig.value.data = body
    requestConfig.value.method = "POST"

    return Promise.resolve()
  }
  return Promise.resolve()
}

const onRegionChange = (code: string, _option: ITerritory["region"]) => {
  regionId.value = code
}

const onSave = async () => {
  const { vuelidate } = useValidate(state, rules)
  const isValid = await vuelidate.value.$validate()
  errors.value = {
    params: vuelidate.value.params,
    body: vuelidate.value.body
  }
  if (isValid) {
    errors.value = {
      params: {},
      body: {}
    }
    loading.value = true
    await getPersonalServiceDetail(activeService.value.link, state.value).finally(() => {
      showForm.value = false
      loading.value = false
    })
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
    loading.value = true

    await getPersonalServiceDetail(activeService.value.link, requestConfig.value).finally(() => (loading.value = false))
  }
}

const onClose = () => {
  showForm.value = false
  requiredParams.value = []
  requiredBody.value = []
  rules.value = {
    params: {},
    body: {}
  }
  errors.value = {
    params: {},
    body: {}
  }
  state.value = {
    params: {},
    body: {}
  }
  current.value = undefined
  requestConfig.value = {
    params: {},
    method: "GET"
  }
}
</script>

<template>
  <ui-modal
    id="service-detail-modal"
    size="xl"
    :loading
    :label="activeService?.title"
    @before-show="onBeforeShow"
    @hide="onClose"
  >
    <div v-if="showForm" class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
      <template v-for="item in paramsCollection" :key="item.key">
        <ui-form-group
          v-slot="{ id }"
          :required="item.required"
          :hint="errors.params[item.key]?.$errors[0]?.$message"
          :invalid="errors.params[item.key]?.$error"
          :label="item.title"
        >
          <territory-select
            v-if="item.type === 'region'"
            v-model="state.params[item.key]"
            value-prop="code"
            @select="onRegionChange"
          />
          <district-select
            v-else-if="item.type === 'district'"
            v-model="state.params[item.key]"
            fetch-on-open
            :region-code="regionId"
          />
          <ui-date-picker
            v-else-if="item.type === 'date'"
            v-model="state.params[item.key]"
            model-type="yyyy-MM-dd"
            format="dd.MM.yyyy"
            auto-apply
            teleport
            position="left"
            :id
          />
          <ui-input v-else v-model="state.params[item.key]" :type="item.type || 'text'" :id />
        </ui-form-group>
      </template>
      <template v-for="item in bodyCollection" :key="item.key">
        <ui-form-group
          v-slot="{ id }"
          :required="item.required"
          :hint="errors.body[item.key]?.$errors[0]?.$message"
          :invalid="errors.body[item.key]?.$error"
          :label="item.title"
        >
          <territory-select
            v-if="item.type === 'region'"
            v-model="state.body[item.key]"
            value-prop="code"
            @select="onRegionChange"
          />
          <district-select
            v-else-if="item.type === 'district'"
            v-model="state.body[item.key]"
            fetch-on-open
            :region-id="regionId"
          />
          <ui-date-picker
            v-else-if="item.type === 'date'"
            v-model="state.body[item.key]"
            model-type="yyyy-MM-dd"
            format="dd.MM.yyyy"
            auto-apply
            teleport
            position="left"
            :id
          />
          <ui-input v-else v-model="state.body[item.key]" :type="item.type || 'text'" :id />
        </ui-form-group>
      </template>
    </div>
    <div v-else class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
      <template v-if="current?.data">
        <template v-for="(item, index) in current?.data" :key="index">
          <ui-form-group v-for="(value, key) in item" v-slot="{ id }" :label="key.toLocaleString().toUpperCase()">
            <ui-input readonly :model-value="value" :id />
          </ui-form-group>
          <hr class="col-span-full py-4" />
        </template>
      </template>
      <template v-else>
        <div class="col-span-full py-12 text-center">
          <p class="font-semibold text-blue-midnight">
            {{ t("empty_data") }}
          </p>
        </div>
      </template>
    </div>
    <template v-if="showForm" #footer="{ hide }">
      <div class="flex flex-col-reverse items-center justify-end gap-3 p-4 sm:flex-row">
        <ui-button class="" color="secondary" @click="hide">
          {{ $t("actions.cancel") }}
        </ui-button>
        <ui-button class="" @click="onSave">
          {{ $t("actions.send") }}
        </ui-button>
      </div>
    </template>
  </ui-modal>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "empty_data": "No data available"
  },
  "ru": {
    "empty_data": "Нет доступных данных"
  },
  "uz": {
    "empty_data": "Ma'lumotlar mavjud emas"
  }
}
</i18n>
