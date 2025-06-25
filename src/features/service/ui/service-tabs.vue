<template>
  <div class="mb-4 w-full rounded-2xl bg-white">
    <div class="flex flex-col rounded-2xl border lg:flex-row">
      <div v-for="(step, idx) in steps" class="stepper" :key="step.id" @click="onClick(step, idx)">
        <div :class="stepClasses(idx)">
          <icon
            class="text-xl text-[#CFCFCF]"
            :name="step.icon"
            :class="{
              '!text-blue-midnight': active === idx,
              '!text-green-benzol': idx < active
            }"
          />
        </div>

        <p :class="textClasses(idx)">
          {{ step?.title }}
        </p>

        <span
          v-if="!infoPage && idx !== steps?.length - 1"
          class="clip-border clip-border-step hidden !bg-blue-command lg:block"
        ></span>
        <span
          v-else-if="infoPage && idx !== steps?.length - 1"
          class="clip-border clip-border-info hidden !bg-blue-command lg:block"
        ></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  steps: any
  infoPage?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: "update", step: any, idx: number): void
}>()

const active = ref(0)

const stepClasses = (idx: number) => ({
  "rounded-full border-2 w- p-1.5 h-9 w-9  text-[#CFCFCF] border-[#CFCFCF]": true,
  "!border-blue-midnight !text-blue-midnight": active.value === idx,
  "!border-green-benzol !text-green-benzol": idx < active.value
})

const textClasses = (idx: number) => ({
  "text-xs font-medium text-[#CFCFCF]": true,
  "!text-blue-midnight": active.value === idx,
  "!text-black": idx < active.value
})

const onClick = (step: any, idx: number) => {
  active.value = idx
  emit("update", step, idx)
}
</script>

<style scoped>
.stepper {
  @apply relative flex w-full cursor-pointer items-center gap-2.5 p-4 first:rounded-l-xl last:rounded-r-xl;
}

.clip-border {
  @apply absolute right-0 top-0 h-full w-full bg-[#CFCFCF];
}

.clip-border-step {
  clip-path: polygon(95% 0, 100% 50%, 95% 100%, 94% 100%, 99% 50%, 94% 0);
}

.clip-border-info {
  clip-path: polygon(100% 0, 100% 100%, 95% 100%, 99% 100%, 99% 100%, 99% 0);
}
</style>
