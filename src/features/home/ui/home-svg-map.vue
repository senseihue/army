<script lang="ts" setup>
import regions from "public/map/uzbekistan.json"

const props = defineProps<{
  attachedElementId: string
}>()

const regionId = defineModel<any>()
const line = ref<LeaderLine>()

const drawLine = async (id: string) => {
  if (!props.attachedElementId) return

  if (regionId.value === id) return removeLine()
  removeLine()
  console.log(id)
  console.log(regionId.value)
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

onBeforeUnmount(() => removeLine())
</script>

<template>
  <svg class="h-full w-full" viewBox="0 0 794 518" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path
        v-for="region in regions"
        class="map-region"
        :d="region.path"
        :id="region.id"
        :key="region.id"
        :class="{ '!fill-blue-command': regionId === region.id }"
        @click="drawLine(region.id)"
      />
    </g>
  </svg>
</template>

<style lang="scss">
.map-region {
  @apply relative cursor-pointer fill-blue-bright stroke-white stroke-[3px] transition hover:fill-blue-command/60;
}
</style>
