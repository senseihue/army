<script lang="ts" setup>
import Logo from "~/app/assets/svg/logo.svg"

import {
  MainHeaderNav,
  MainHeaderNavMenu,
  MainHeaderLanguage,
  MainHeaderMenu,
  MainHeaderMenuToggle,
} from "~/features/layout"
import { AuthProfileButtonGroup } from "~/widgets/auth"

const { hideNavMenu } = useHeader()
const route = useRoute()
const position = computed(() => (route?.meta?.fixedHeader ? "fixed" : "sticky"))
</script>

<template>
  <client-only>
    <header class="main-header" :style="{ position }" @mouseleave="hideNavMenu">
      <div class="main-header__inner">
        <div class="container-7xl">
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
              <span class="main-header__divider" />

              <ui-icon-button
                rounded
                variant="ghost"
                color="secondary"
                icon-class="text-xl"
                icon-name="lucide:search"
                to="/search"
                :label="$t('labels.search')"
              />

              <main-header-language />

              <ui-icon-button
                rounded
                variant="ghost"
                color="secondary"
                icon-class="text-xl"
                icon-name="lucide:mail"
                to="/contacts"
                :label="$t('labels.contacts')"
              />

              <auth-profile-button-group />

              <main-header-menu-toggle />
            </div>
          </div>

          <nav class="main-header__sub-nav">
            <main-header-nav />
          </nav>
        </div>

<!--        <main-header-alert />-->
      </div>

      <main-header-menu />
      <main-header-nav-menu />
    </header>
  </client-only>
</template>

<style>
.main-header {
  @apply top-0 z-50 w-full;

  &__inner {
    @apply relative z-50 w-full bg-white;
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
    @apply flex-1 justify-start;
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
