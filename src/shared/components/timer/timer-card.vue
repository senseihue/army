<script setup lang="ts">
import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"

dayjs.extend(customParseFormat)

interface IProps {
  label: string
  format?: string
  endTime?: string
}

const props = withDefaults(defineProps<IProps>(), { format: "DD.MM.YYYY HH:mm:ss" })
const difference = defineModel<number>({ default: 0 })

let interval: NodeJS.Timeout | null = null

const clearTimer = () => {
  difference.value = 0
  if (interval) clearInterval(interval)
}

const updateTimer = () => {
  if (!props?.endTime) return clearTimer()
  const now = dayjs()
  const deadline = dayjs(props.endTime, props.format)
  const diff = deadline.diff(now)
  if (diff <= 0) return clearTimer()
  difference.value = diff
}

onMounted(() => {
  updateTimer()
  interval = setInterval(updateTimer, 1000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <div class="rounded-xl border border-blue-midnight p-4">
    <p class="text-center text-sm font-semibold text-blue-midnight">
      {{ label }}
    </p>

    <p class="text-center text-4xl font-bold tabular-nums text-orange-600">
      {{ formatDuration(difference) }}
    </p>

    <div class="flex justify-center gap-2 text-xs font-semibold uppercase text-blue-midnight">
      <span class="w-12 text-center">{{ $t("labels.day") }}</span>
      <span class="w-12 text-center">{{ $t("labels.hour") }}</span>
      <span class="w-12 text-center">{{ $t("labels.minute") }}</span>
      <span class="w-12 text-center">{{ $t("labels.second") }}</span>
    </div>
  </div>
</template>
