<script setup lang="ts">
interface IProps {
  title: string
}

defineProps<IProps>()
defineEmits<{
  (e: "show:details"): void
}>()
</script>

<template>
  <div class="flex flex-col gap-2 rounded-xl border border-[#E4E4E7] bg-[#F8FAFC] p-[10px]">
    <div class="py-[10px]">
      <p class="font-semibold text-blue-midnight">
        {{ title }}
      </p>
    </div>
    <ui-button
      class="ml-auto mt-auto w-fit !rounded-[14px] !px-[10px] !py-[8px]"
      variant="flat"
      color="secondary"
      :label="$t('labels.detailed')"
      @click="$emit('show:details')"
    />
  </div>
</template>
