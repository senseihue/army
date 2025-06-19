<script lang="ts" setup>
interface IProps {
  theme?:
    | "transparent"
    | "midnight"
    | "command"
    | "bright"
    | "white"
    | "bondi"
    | "texas"
    | "sand"
    | "light"
    | "olive"
    | "moonstone"
    | "ateneo"
}

withDefaults(defineProps<IProps>(), { theme: "transparent" })
</script>

<template>
  <div class="wrapper" :class="theme">
    <div class="p-section container-7xl">
      <slot />
    </div>
  </div>
</template>

<style>
.wrapper {
  &.midnight {
    @apply bg-blue-midnight;
  }

  &.command {
    @apply bg-blue-command;
  }

  &.bright {
    @apply bg-blue-bright;
  }

  &.white {
    @apply bg-white;
  }

  &.bondi {
    @apply bg-blue-bondi;
  }

  &.texas {
    @apply bg-green-texas;
  }

  &.sand {
    @apply bg-gray-sand;
  }

  &.light {
    @apply bg-blue-light;
  }

  &.olive {
    @apply bg-gray-olive;
  }

  &.moonstone {
    @apply bg-blue-moonstone;
  }

  &.ateneo {
    @apply bg-blue-ateneo;
  }

  &.transparent {
    @apply bg-transparent;
  }
}
</style>
