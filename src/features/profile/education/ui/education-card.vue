<script setup lang="ts">
interface IProps {
  educationData: IPersonalEducation
}

defineProps<IProps>()
defineEmits<{
  (e: "edit"): void
}>()
</script>

<template>
  <div class="max-w-xl rounded-lg border bg-white p-6 shadow-sm">
    <div class="mb-4 border-b pb-4">
      <h3 class="text-xl font-bold text-gray-900">{{ educationData.school.title }}</h3>
      <span
        v-if="educationData.school_type"
        class="mt-2 inline-block rounded bg-blue-50 px-2 py-1 text-sm font-semibold text-blue-700"
      >
        {{ educationData.school_type.title }}
      </span>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <p class="text-xs uppercase text-gray-500">{{ $t("labels.start_date") }}</p>
        <p class="font-medium text-gray-800">{{ educationData.start_date }}</p>
      </div>
      <div>
        <p class="text-xs uppercase text-gray-500">{{ $t("labels.end_date") }}</p>
        <p class="font-medium text-gray-800">{{ educationData.end_date }}</p>
      </div>

      <div>
        <p class="text-xs uppercase text-gray-500">{{ $t("labels.diploma_number") }}</p>
        <p class="font-medium text-gray-800">{{ educationData.diploma_number }}</p>
      </div>

      <div>
        <p class="text-xs uppercase text-gray-500">{{ $t("labels.diploma_date") }}</p>
        <p class="font-medium text-gray-800">{{ educationData.diploma_date }}</p>
      </div>
    </div>
    <div class="col-span-full mt-6 text-right">
      <ui-button
        class="w-fit !rounded-[14px] !px-[10px] !py-[8px]"
        variant="flat"
        color="secondary"
        :label="$t('actions.edit')"
        @click="$emit('edit')"
      />
    </div>
  </div>
</template>
