<script setup lang="ts">
interface IProps {
  active?: boolean
  title: string
  iconName: string
}

defineProps<IProps>()
</script>

<template>
  <div class="flex min-h-28 min-w-28 cursor-pointer flex-col items-center justify-center gap-[10px] text-center">
    <div
      class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#6D767F]"
      :class="{
        'border-blue-midnight': active
      }"
    >
      <icon
        class="text-xl text-[#6D767F]"
        :name="iconName"
        :class="{
          'text-blue-midnight': active
        }"
      />
    </div>
    <div class="py-2">
      <h2
        class="text-xs font-bold text-[#6D767F]"
        :class="{
          'text-blue-midnight': active
        }"
      >
        {{ title }}
      </h2>
    </div>
  </div>
</template>

<style scoped></style>
