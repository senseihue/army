<template>
  <div class="rounded-xl bg-blue-command p-4">
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
      <select
        v-model="sectorModel"
        class="w-full border-none bg-blue-command p-2 text-sm text-white placeholder:text-white"
      >
        <option selected :value="undefined">{{ $t("labels.all_sectors") }}</option>
        <option v-for="item in sectorList" :key="item?.id" :value="item?.id">{{ item?.content }}</option>
      </select>

      <select
        v-model="regionModel"
        class="w-full border-none bg-blue-command p-2 text-sm text-white placeholder:text-white"
      >
        <option selected :value="undefined">{{ $t("labels.all_regions") }}</option>
        <option v-for="item in regionList" :key="item?.id" :value="item?.id">{{ item.region.region }}</option>
      </select>

      <select
        v-model="amountModel"
        class="w-full border-none bg-blue-command p-2 text-sm text-white placeholder:text-white"
      >
        <option selected :value="undefined">{{ $t("labels.all_amount") }}</option>
        <option v-for="item in amountList" :key="item?.id" :value="item?.id">
          {{ item.content }}
        </option>
      </select>

      <select
        v-model="statusModel"
        class="w-full border-none bg-blue-command p-2 text-sm text-white placeholder:text-white"
      >
        <option selected :value="undefined">{{ $t("labels.all_status") }}</option>
        <option v-for="item in status" :key="item?.value" :value="item?.value">{{ item?.label }}</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts" setup>
const sectorModel = defineModel("sector")
const regionModel = defineModel("region")
const statusModel = defineModel("status")
const amountModel = defineModel("amount")

const { t } = useI18n()

const params = ref({
  page: 0,
  size: 999
})

const sectorList = ref<any>([])
const regionList = ref<any>([])
const amountList = ref<any>([])

const { data: sectors } = await useFetch<any>("/gateway/siw/public/service-sector", { params: params.value })
const { data: regions } = await useFetch<any>("/gateway/siw/public/territory", { params: params.value })
const { data: amounts } = await useFetch<any>("/gateway/siw/public/project-amount", { params: params.value })

sectorList.value = sectors.value?.content || []
regionList.value = regions.value?.content || []
amountList.value = amounts.value?.content || []

const status = [
  {
    label: t("project_status.open_for_investment"),
    value: "open_for_investment"
  },
  {
    label: t("project_status.under_negotiation"),
    value: "under_negotiation"
  },
  {
    label: t("project_status.closed"),
    value: "closed"
  }
]
</script>
