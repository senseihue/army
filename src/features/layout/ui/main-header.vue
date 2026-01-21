<script lang="ts" setup>
import Logo from "~/app/assets/svg/logo-white.svg"

import {
  MainHeaderNav,
  MainHeaderNavMenu,
  MainHeaderMenu,
  MainHeaderMenuToggle
} from "~/features/layout"
import { AuthProfileButtonGroup } from "~/widgets/auth"

const { hideNavMenu } = useHeader()
const route = useRoute()
const position = computed(() => (!route?.meta?.fixedHeader ? "fixed" : "sticky"))
</script>

<template>
  <header class="main-header container-7xl" :class="[position, {is_light: route?.meta?.isLightHeader}]" @mouseleave="hideNavMenu">
    <div class="main-header__inner">
      <nuxt-link-locale class="font-display text-lg font-semibold text-zinc-100" to="/">
        <logo class="object-contain" />
      </nuxt-link-locale>
      <div class="flex items-center gap-1">
        <main-header-nav />

        <auth-profile-button-group />

<!--        <main-header-menu-toggle />-->
      </div>

      <!--        <main-header-alert />-->
    </div>

    <main-header-menu />
    <main-header-nav-menu />
  </header>
</template>

<style>
.main-header {
  @apply left-0 right-0 top-0 z-40 py-4;

  &__inner {
    @apply mx-auto flex h-12 items-center justify-between rounded-full border border-zinc-800/50 bg-zinc-900/70 px-6 backdrop-blur-md;
    &.is_light {
      @apply !border-zinc-200 !bg-zinc-100 !text-zinc-900;
    }
  }

  &__wrapper {
    @apply relative flex h-14 items-center justify-between gap-6;

    & > div {
      @apply flex items-center;
    }
  }

  &__left {
    @apply justify-start;
  }

  &__center {
    @apply flex items-center gap-1;
  }

  &__right {
    @apply justify-end;
  }

  &__divider {
    @apply mr-2 hidden h-6 w-px bg-gray-300 2xl:block;
  }

  &__nav {
    @apply hidden 2xl:flex;
  }

  &__sub-nav {
    @apply hidden items-start border-t lg:flex 2xl:hidden;
  }

  &__list {
    @apply flex items-center justify-center gap-6;

    li {
      @apply py-2.5;

      a {
        @apply flex items-center text-sm font-medium text-gray-600 transition-colors hover:text-black;

        &.router-link-active {
          @apply text-blue-bondi;
        }
      }
    }
  }
}
</style>
