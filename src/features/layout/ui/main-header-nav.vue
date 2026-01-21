<script setup lang="ts">
const { list } = useHeaderNav()
const { showNavMenu } = useHeader()

interface IProps {
  isLight?: boolean
}

defineProps<IProps>()
</script>

<template>
  <ul class="flex items-center gap-1">
    <li v-for="nav in list" :key="nav.to"
        :class="[isLight ? 'text-zinc-700 hover:text-zinc-900' : 'text-zinc-400 hover:text-zinc-100']"
        class="px-4 py-1.5 text-sm rounded-full transition-colors" @mouseenter="showNavMenu(nav)">
      <nuxt-link-locale :to="nav.to">
        <span class="whitespace-nowrap">{{ nav.label }}</span>
        <icon v-if="nav?.dropdown?.length" class="ml-2" name="lucide:chevron-down" />
      </nuxt-link-locale>
    </li>
  </ul>
</template>
