<script lang="ts" setup>
interface IProps {
  title: string
  arrow?: boolean
  shown?: boolean
  color?: "primary" | "secondary" | string
  icon?: any
}

const props = withDefaults(defineProps<IProps>(), { color: "primary" })

const isShown = ref(props.shown || false)
const content = ref<HTMLElement>()

const accordionClass = computed(() => ({
  "active": isShown.value,
  "ui-accordion": true,
  ["ui-accordion-" + props.color]: true,
  "border-b !rounded-b-none border-b-[#95AECF]": isShown.value
}))

const toggle = () => (isShown.value = !isShown.value)
const show = () => (isShown.value = true)
const hide = () => (isShown.value = false)
const start = (el: any) => nextTick(() => (el.style.height = el.scrollHeight + "px"))
const end = (el: any) => nextTick(() => (el.style.height = "0"))
const afterEnter = (el: any) => nextTick(() => (el.style.height = "auto"))
const beforeLeave = (el: any) => nextTick(() => (el.style.height = el.scrollHeight + "px"))

onMounted(() => window.addEventListener("resize", hide))
onBeforeUnmount(() => window.removeEventListener("resize", hide))
</script>

<template>
  <div class="grid">
    <div :class="accordionClass" @click="toggle">
      <slot name="title">
        <div class="flex items-center gap-3">
          <span v-if="icon" class="block">
            <icon class="block h-6 w-6" :name="icon" />1
          </span>
          <h3 class="ignore-text-format font-semibold" :class="{ 'text-midnight': arrow }">{{ title }}</h3>
        </div>
      </slot>

      <div v-if="arrow">
        <Icon v-if="isShown" class="text-midnight text-xl" filled name="ph:caret-up" />
        <Icon v-else class="text-midnight text-xl" filled name="ph:caret-down" />
      </div>
    </div>

    <Transition
      appear
      mode="out-in"
      name="ui-accordion"
      @after-enter="afterEnter"
      @after-leave="end"
      @before-leave="beforeLeave"
      @enter="start"
    >
      <div v-show="isShown" class="ignore-text-format" ref="content">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<style lang="css">
.ui-accordion {
  @apply flex cursor-pointer select-none items-center justify-between gap-3 px-4 py-2.5 transition-colors;
}

.ui-accordion-enter-active,
.ui-accordion-leave-active {
  transition: 200ms ease-in-out;
  overflow: hidden;
}

.ui-accordion-enter-from,
.ui-accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}

.ui-accordion-primary {
  @apply bg-midnight text-white;
}

.ui-accordion-primary.active {
  @apply bg-command;
}

.ui-accordion-secondary {
  @apply bg-gray-100 text-black;
}

.ui-accordion-secondary.active {
  @apply bg-gray-200;
}

.ui-accordion-gray {
  @apply rounded-xl bg-[#F8FAFC] text-black;
}

.ui-accordion-gray.active {
  @apply bg-[#F8FAFC];
}
</style>
