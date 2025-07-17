<script lang="ts" setup>
import regions from "~/app/assets/map/uzbekistan.json"

const props = withDefaults(
  defineProps<{
    attachedElementId: string
    disabled?: boolean
    fillColor?: string
  }>(),
  { fillColor: "#0078B5" }
)
const regionId = defineModel<any>()
const line = ref<LeaderLine>()

const drawLine = async (id: string) => {
  if (!props.attachedElementId) return

  if (regionId.value === id) return removeLine()
  removeLine()

  regionId.value = id
  await nextTick()

  const start = LeaderLine.pointAnchor(document.getElementById(id)!)
  const end = document.getElementById(props.attachedElementId)!

  if (!start || !end) return

  const options: LeaderLine.Options = {
    hide: true,
    path: "grid",
    color: "#013D8C",
    startPlug: "disc",
    startPlugSize: 2,
    startSocket: "top",
    startPlugOutline: true,
    startPlugColor: "#FFFFFF",
    startPlugOutlineColor: "#013D8C",
    endPlug: "behind",
    dash: { len: 4, animation: true }
  }

  line.value = new LeaderLine(start, end, options)
  line.value?.show("draw")
}

const removeLine = () => {
  regionId.value = undefined
  line.value?.remove()
  line.value = undefined
}

const handleClick = (id: string) => {
  if (!props.disabled) {
    drawLine(id)
  }
}

onMounted(() => {
  setTimeout(() => {
    const start = LeaderLine.pointAnchor(document.getElementById(regionId.value)!)

    const end = document.getElementById(props.attachedElementId)!

    if (!start || !end) return
    const options: LeaderLine.Options = {
      hide: true,
      path: "grid",
      color: "#013D8C",
      startPlug: "disc",
      startPlugSize: 2,
      startSocket: "top",
      startPlugOutline: true,
      startPlugColor: "#FFFFFF",
      startPlugOutlineColor: "#013D8C",
      endPlug: "behind",
      dash: { len: 4, animation: true }
    }

    line.value = new LeaderLine(start, end, options)
    line.value?.show("draw")
  }, 500)
})

onBeforeUnmount(() => removeLine())
</script>

<template>
  <svg class="h-full w-full" viewBox="0 0 794 518" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path
        v-for="region in regions"
        :d="region.path"
        :data-disabled="props.disabled"
        :id="region.id"
        :key="region.id"
        :class="['map-region']"
        :style="regionId === region.id ? { fill: props.fillColor } : {}"
        @click="handleClick(region.id)"
      />
    </g>
  </svg>
</template>

<style lang="scss">
.map-region {
  @apply fill-blue-bright relative stroke-white stroke-[3px] transition;
  cursor: pointer;

  &:hover {
    @apply fill-blue-command/60;
  }

  &[data-disabled="true"] {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.9;
  }
}
</style>
