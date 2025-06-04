<script lang="ts" setup>
interface ICard {
  label: string
  value: string
}

interface IProps {
  items: ICard[]
  align?: "left" | "right"
  theme?: "midnight" | "bright"
}

withDefaults(defineProps<IProps>(), {
  align: "left",
  theme: "midnight",
  items: () => []
})
</script>

<template>
  <div class="statistic-card" :class="[align, theme]">
    <div class="statistic-card-content">
      <div v-for="({ label, value }, idx) in items" :key="idx">
        <p class="statistic-card-heading ignore-text-format">{{ value }}</p>
        <p class="statistic-card-text ignore-text-format">{{ label }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.statistic-card {
  @apply relative my-10 w-full py-8;

  &.left::before {
    @apply right-0;
  }

  &.right::before {
    @apply left-0 lg:-left-24;
  }

  &::before {
    content: "";
    @apply absolute top-0 -z-10 -mx-4 h-full w-screen md:right-0 md:mx-0;
  }

  .statistic-card-content {
    @apply grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3;
  }

  .statistic-card-heading {
    @apply mb-2 whitespace-pre-line text-4xl font-bold;
  }

  .statistic-card-text {
    @apply whitespace-pre-line font-bold;
  }

  &.bright {
    &::before {
      @apply bg-blue-bright;
    }

    .statistic-card-heading {
      @apply text-blue-command;
    }

    .statistic-card-text {
      @apply text-blue-midnight;
    }
  }

  &.midnight {
    &::before {
      @apply bg-blue-midnight;
    }

    .statistic-card-heading {
      @apply text-blue-300;
    }

    .statistic-card-text {
      @apply text-white;
    }
  }
}
</style>
