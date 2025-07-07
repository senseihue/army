<script setup lang="ts">
interface IProps {
  document: IServiceStepDocument
}

defineProps<IProps>()
</script>

<template>
  <div
    class="flex h-[150px] w-[140px] items-center justify-center rounded-xl border-2 border-[#E4E4E7] bg-[#F8FAFC] md:w-[150px]"
  >
    <img
      class="h-[130px] w-28 cursor-pointer object-cover"
      alt=""
      height="1710"
      loading="eager"
      width="1327"
      :src="document.upload?.download_link"
    />
  </div>
  <p class="max-w-[184px] text-sm font-medium">
    {{ document.title }}
  </p>
</template>

<style scoped></style>
