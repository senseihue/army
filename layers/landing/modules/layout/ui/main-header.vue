<script lang="ts" setup>
import Logo from "#layers/landing/assets/svg/logo.svg"
import { useHeaderNavMenu, MainHeaderNav, MainHeaderNavMenu } from "#layers/landing/modules/layout"

const { hideNavMenu } = useHeaderNavMenu()
</script>

<template>
  <header class="main-header" @mouseleave="hideNavMenu">
    <div class="main-header__inner">
      <div class="primary-container">
        <div class="main-header__wrapper">
          <div class="main-header__left">
            <nuxt-link-locale to="/">
              <logo class="h-9 object-contain" />
            </nuxt-link-locale>
          </div>

          <div class="main-header__center">
            <nav class="main-header__nav">
              <main-header-nav />
            </nav>
          </div>

          <div class="main-header__right">
            <span class="main-header__divider"></span>
          </div>
        </div>

        <nav class="main-header__sub-nav">
          <main-header-nav />
        </nav>
      </div>
    </div>

    <main-header-nav-menu />
  </header>
</template>

<style>
.main-header {
  @apply relative top-0 z-50 w-full;

  &__inner {
    @apply relative z-50 w-full bg-white;
  }

  &__wrapper {
    @apply relative flex h-14 items-center justify-between gap-6;

    & > div {
      @apply flex items-center gap-4;
    }
  }

  &__left {
    @apply justify-start;
  }

  &__center {
    @apply flex-1 justify-start;
  }

  &__right {
    @apply justify-end;
  }

  &__divider {
    @apply hidden h-6 w-px bg-gray-300 2xl:block;
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
