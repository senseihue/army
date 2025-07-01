<template>
  <div class="rounded-xl bg-blue-command p-4">
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
      <select v-model="sectorModel" class="w-full border-none bg-blue-command p-2 text-sm text-white placeholder:text-white">
        <option :value="undefined" selected>{{ $t('labels.all_sectors') }}</option>
        <option v-for="item in sectors" :key="item?.id" :value="item?.id">{{ item?.title }}</option>
      </select>

      <select v-model="regionModel" class="w-full border-none bg-blue-command p-2 text-sm text-white placeholder:text-white">
        <option :value="undefined" selected>{{ $t('labels.all_regions') }}</option>
        <option v-for="item in regions" :key="item?.id" :value="item?.id">{{ $t(`regions.${item?.code}`) }}</option>
      </select>

      <!--      <select-->
      <!--        v-model="typeModel"-->
      <!--        class="form-select w-full border-none bg-blue-command p-2 text-sm font-bold text-white placeholder:text-white"-->
      <!--      >-->
      <!--        <option :value="undefined" selected>{{ $t('labels.type') }}</option>-->
      <!--        <option v-for="item in type" :key="item?.value" :value="item?.value">{{ item?.label }}</option>-->
      <!--      </select>-->

      <select v-model="amountModel" class="w-full border-none bg-blue-command p-2 text-sm text-white placeholder:text-white">
        <option :value="undefined" selected>{{ $t('labels.amount') }}</option>
        <option v-for="item in amount" :key="item?.value" :value="item?.value">{{ item?.label }}</option>
      </select>

      <select v-model="statusModel" class="w-full border-none bg-blue-command p-2 text-sm text-white placeholder:text-white">
        <option :value="undefined" selected>{{ $t('labels.status') }}</option>
        <option v-for="item in status" :key="item?.value" :value="item?.value">{{ item?.label }}</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts" setup>

const sectorModel = defineModel('sector')
const regionModel = defineModel('region')
const statusModel = defineModel('status')
const typeModel = defineModel('type')
const amountModel = defineModel('amount')

const { t } = useI18n()

const { data: sectors } = useFetch<any['sectors'][]>('/api/sectors', { server: false })
const { data: regions } = useFetch<any['regions'][]>('/api/regions', { server: false })

const status = [
  {
    label: t('project_status.open_for_investment'),
    value: 'open_for_investment',
  },
  {
    label: t('project_status.under_negotiation'),
    value: 'under_negotiation',
  },
  {
    label: t('project_status.closed'),
    value: 'closed',
  },
]

const type = [
  {
    label: 'Greenfield',
    value: 'greenfield',
  },
  {
    label: 'Brownfield',
    value: 'brownfield',
  },
  {
    label: t('labels.ppp'),
    value: 'ppp',
  },
  {
    label: t('labels.privatization'),
    value: 'privatization',
  },
  {
    label: t('labels.financial_instruments'),
    value: 'financial-instruments',
  },
  {
    label: t('labels.startup'),
    value: 'startup',
  },
]

const amount = [
  {
    label: t('labels.up_to_500'),
    value: 500000,
  },
  {
    label: t('labels.500_1'),
    value: 1000000,
  },
  {
    label: t('labels.1_10'),
    value: 10000000,
  },
  {
    label: t('labels.10_50'),
    value: 30000000,
  },
  {
    label: t('labels.50'),
    value: 50000000,
  },
]
</script>

<style></style>
