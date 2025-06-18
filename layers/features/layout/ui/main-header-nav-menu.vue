<script lang="ts" setup>
import { useHeader } from "~/layers/features/layout"

const { navMenu } = useHeader()
const contentRef = ref<HTMLDivElement>()

const start = (el: Element) => nextTick(() => (contentRef.value!.style.height = `${el.scrollHeight}px`))
const end = () => nextTick(() => (contentRef.value!.style.height = "0"))
</script>

<template>
  <transition name="nav-menu" @after-leave="end" @enter="start">
    <div v-if="navMenu?.dropdown?.length" class="nav-menu" ref="contentRef">
      <div class="nav-menu__container">
        <transition name="nav-menu__list" mode="out-in" @enter="start">
          <ul class="nav-menu__list" :key="navMenu.to">
            <li v-for="({ to, label }, idx) in navMenu?.dropdown" :key="idx">
              <nuxt-link-locale :to>{{ label }}</nuxt-link-locale>
            </li>
          </ul>
        </transition>
      </div>
    </div>
  </transition>
</template>

<style>
.nav-menu {
  @apply absolute left-0 top-full z-30 max-h-dvh w-full border-b bg-white/90 backdrop-blur-md;
  @apply transition-all duration-150 ease-linear;

  &__container {
    @apply mx-auto w-full max-w-7xl 2xl:max-w-5xl;
  }

  &__list {
    @apply grid gap-6 px-4 py-6 md:grid-cols-3 2xl:px-7;

    li {
      a {
        @apply text-sm font-medium text-gray-600 transition-colors hover:text-black;

        &.router-link-active {
          @apply text-blue-bondi;
        }
      }
    }
  }
}

.nav-menu-enter-active,
.nav-menu-leave-active {
  transition: 300ms ease-in-out;
}

.nav-menu-enter-from,
.nav-menu-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.nav-menu__list-enter-active,
.nav-menu__list-leave-active {
  transition: opacity 300ms ease-in-out;
}

.nav-menu__list-enter-from,
.nav-menu__list-leave-to {
  opacity: 0;
}
</style>
