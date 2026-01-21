<script setup lang="ts">
interface IProps {
  relativeData: IRelative
}

defineProps<IProps>()
defineEmits<{
  (e: "edit"): void
}>()
</script>

<template>
  <div class="bg-white max-w-2xl w-full shadow-md rounded-xl border border-gray-200 overflow-hidden">

    <div class="px-6 py-5 border-b border-gray-100 flex items-center gap-4">
      <div class="flex flex-col">
        <span class="text-xs font-bold tracking-wide text-gray-400 uppercase mb-0.5">
          {{ relativeData.kinship?.title }} </span>
        <h3 class="text-xl font-semibold text-gray-800 leading-tight">
          {{ relativeData.last_name }} {{ relativeData.first_name }} {{ relativeData.middle_name }}
        </h3>
      </div>
    </div>

    <div class="px-4 py-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
      <div>
        <dt class="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
          {{ $t('labels.birth_date') }}
        </dt>
        <dd class="text-sm font-medium text-gray-900 bg-gray-50 inline-block px-2 py-1 rounded border border-gray-100">
          {{ relativeData.birth_date }}
        </dd>
      </div>

      <div>
        <dt class="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
          {{ $t('labels.birth_place') }}
        </dt>
        <dd class="text-sm font-medium text-gray-900">
          {{ relativeData.birth_place }}
        </dd>
      </div>
      <div>
        <dt class="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
          {{ $t('labels.pin') }}
        </dt>
        <dd class="text-sm font-medium text-gray-900">
          {{ relativeData.pin || 'N/A' }}
        </dd>
      </div>

      <div class="sm:col-span-2"> <dt class="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
        {{ $t('labels.work_place') }}
      </dt>
        <dd class="text-sm font-medium text-gray-900 flex items-start gap-2">
          {{ relativeData.work_place }}
        </dd>
      </div>

      <div class="sm:col-span-2">
        <dt class="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
          {{ $t('labels.address') }}
        </dt>
        <dd class="text-sm font-medium text-gray-900 flex items-start gap-2">
          {{ relativeData.address }}
        </dd>
      </div>


    </div>

    <div class="px-4 pb-3   flex justify-end items-center">
      <ui-button
          class="w-fit !rounded-[14px] !px-[10px]"
          variant="flat"
          color="secondary"
          :label="$t('actions.edit')"
          @click="$emit('edit')"
      />
    </div>

  </div>
</template>
