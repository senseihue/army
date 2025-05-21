<script lang="ts" setup>
import { useHeader, useHeaderNav } from "#layers/landing/modules/layout"

const { list } = useHeaderNav()
const { isMenuOpen, toggleMenu } = useHeader()
</script>

<template>
  <transition mode="out-in" name="menu">
    <div v-if="isMenuOpen" class="menu">
      <ul class="menu__list mb-4">
        <li v-for="nav in list" class="menu__item mb-2" :key="nav.to" @click="toggleMenu">
          <nuxt-link-locale class="menu__link" :to="nav.to">{{ nav.label }}</nuxt-link-locale>

          <div v-if="nav?.dropdown?.length" class="menu__list pl-4 pt-2">
            <nuxt-link-locale v-for="{ to, label } in nav?.dropdown" class="menu__link" :key="to" :to>
              {{ label }}
            </nuxt-link-locale>
          </div>
        </li>
      </ul>

      <ui-button class="w-full shrink-0 sm:!hidden" color="success" :label="$t('actions.contact_us')" />
    </div>
  </transition>
</template>

<style>
.menu {
  @apply fixed inset-0 top-14 z-[41] flex w-full flex-col overflow-y-auto bg-white p-4 pt-20 lg:hidden;

  &__list {
    @apply grid w-full grow content-start gap-2 text-sm;
  }

  &__item {
    @apply w-full;
  }

  &__link {
    @apply flex w-full rounded-lg bg-slate-100 p-2 font-medium text-gray-600 transition-colors hover:bg-slate-200 hover:text-gray-950;

    &.router-link-active {
      @apply bg-blue-bondi text-white;
    }
  }
}

.menu-enter-active,
.menu-leave-active {
  transition: 300ms ease-in-out;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}
</style>
