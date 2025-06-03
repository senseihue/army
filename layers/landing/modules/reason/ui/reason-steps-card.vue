<script lang="ts" setup>
interface IProps {
  theme?: "midnight" | "command"
  steps: { heading: string; text: string }[]
  showIllustration?: boolean
  positionAbscissa?: number
  positionOrdinate?: number
}

withDefaults(defineProps<IProps>(), {
  theme: "midnight",
  showIllustration: true,
  positionAbscissa: 0,
  positionOrdinate: 0
})
</script>

<template>
  <div class="steps-card" :class="theme">
    <!--  Star  -->
    <div
      v-if="showIllustration"
      class="absolute right-[100px] z-0"
      :style="{
        top: positionOrdinate + 'px',
        right: positionAbscissa + 'px'
      }"
    >
      <Icon class="animation-duration-50s h-96 w-96 animate-spin fill-white" name="icon:star" />
    </div>
    <div class="grid gap-16">
      <div v-for="({ heading, text }, idx) in steps" class="steps-card-content" :key="idx">
        <p class="steps-card-heading ignore-text-format">{{ heading }}</p>
        <p class="steps-card-text ignore-text-format">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.steps-card {
  @apply relative px-8 py-16;

  &.command {
    @apply bg-blue-command;

    .steps-card-heading {
      @apply text-white/90;
    }

    .steps-card-text {
      @apply text-white;
    }
  }

  &.midnight {
    @apply bg-blue-midnight;

    .steps-card-heading {
      @apply text-blue-300;
    }

    .steps-card-text {
      @apply text-white;
    }
  }

  .steps-card-content {
    @apply flex items-start;
  }

  .steps-card-heading {
    @apply w-20 shrink-0 text-4xl font-bold;
  }
}
</style>
