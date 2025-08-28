<script setup lang="ts">
import { SidebarMenu } from "vue-sidebar-menu"
import type { SidebarMenuList } from "~/entities/layout/layout.model"

const localePath = useLocalePath()
const { t } = useI18n()

const route = useRoute()

const { $session } = useNuxtApp()
const { profile } = $session || {}
const getActive = (path: string) => {
  return { "router-link-active": route.fullPath.includes(path) }
}
const menu = computed<SidebarMenuList>(() => [
  {
    title: t("nav.profile.main"),
    icon: { element: "icon", class: "text-xl", attributes: { name: "lucide:shield-user" } },
    child: [
      {
        title: t("nav.profile.account"),
        // icon: { element: "icon", class: "text-xl", attributes: { name: "solar:text-square-2-bold-duotone" } },
        href: localePath("/profile"),
        class: { "router-link-active": route.fullPath === localePath("/profile") }
      },
      {
        title: t("nav.profile.company"),
        // icon: { element: "icon", class: "text-xl", attributes: { name: "solar:dollar-bold-duotone" } },
        href: localePath("/profile/company"),
        class: getActive("/profile/company")
      },
      {
        hidden: profile?.value?.is_resident,
        title: t("nav.profile.change_password"),
        // icon: { element: "icon", class: "text-xl", attributes: { name: "solar:dollar-bold-duotone" } },
        href: localePath("/profile/password"),
        class: getActive("/profile/password")
      }
    ]
  },
  {
    title: t("nav.profile.my_projects"),
    icon: { element: "icon", class: "text-xl", attributes: { name: "lucide:archive" } },
    href: localePath("/profile/my-projects"),
    class: getActive("/profile/my-projects")
  }
])
const isCollapsed = ref(false)

</script>

<template>
  <div class="h-fit min-w-[272px] max-w-full rounded-[14px] bg-white px-2 py-4 md:max-w-[272px]">
    <client-only>
      <sidebar-menu
        class="app-sidebar lg:!flex"
        hide-toggle
        disable-hover
        width="256px"
        width-collapsed="64px"
        :menu="menu"
        :collapsed="isCollapsed"
      >
        <template #dropdown-icon>
          <icon class="text-lg" name="lucide:chevron-right" />
        </template>
      </sidebar-menu>
    </client-only>
  </div>
</template>

<style>
.v-sidebar-menu {
  @apply box-border flex w-full flex-col text-left;
  @apply transition-all duration-300 ease-in-out;

  &.vsm_expanded {
  }

  &.vsm_collapsed {
    .vsm--header {
      @apply w-0 opacity-0;
    }
  }

  &.vsm_rtl {
  }

  .vsm--scroll-wrapper {
    @apply h-full overflow-y-auto overflow-x-hidden;
    margin: 0 !important;

    &::-webkit-scrollbar-thumb {
      @apply bg-gray-200 dark:bg-gray-800;
    }

    &::-webkit-scrollbar-track {
      @apply bg-gray-100 dark:bg-gray-950;
    }
  }

  .vsm--item {
    @apply block !w-full whitespace-break-spaces;

    &.vsm--item_open > .vsm--link {
      @apply dark:bg-gray-800 dark:text-gray-100;
    }
  }

  .vsm--link {
    @apply relative flex h-9 w-full items-center gap-2 rounded-lg px-2;
    @apply select-none overflow-hidden text-sm font-medium leading-9 no-underline;
    @apply transition-all duration-300 ease-in-out;
    @apply text-gray-600 dark:text-gray-300;

    &.vsm--link_active.vsm--link_level-1,
    &.router-link-active.vsm--link_level-1 {
      @apply !bg-[#D6E8FF] !text-blue-midnight;

      & .vsm--icon {
        @apply text-blue-midnight;
      }
    }

    &.vsm--link_active.router-link-active.vsm--link_level-2 {
      @apply rounded-[14px] border border-[#023D8D] text-blue-midnight;
    }

    &.vsm--link_active.vsm--link_level-2,
    &.router-link-active.vsm--link_level-2 {
      @apply font-medium;

      & .vsm--icon {
        @apply text-blue-midnight;
      }
    }

    &.vsm--link_level-1 {
      .vsm--icon {
        @apply shrink-0 rounded;
      }
    }

    &.vsm--link_level-2 {
      @apply px-[25px] py-[10px];
    }

    &.vsm--link_disabled {
      @apply pointer-events-none opacity-40;
    }
  }

  .vsm--title {
    @apply flex w-full items-center justify-between leading-none;
  }

  .vsm--title_hidden {
    @apply hidden;
  }

  .vsm--icon {
    @apply text-center text-gray-600 dark:text-gray-300;
  }

  .vsm--arrow {
    @apply h-6 w-6 rotate-90 text-center transition-transform duration-300 ease-in-out;

    .vsm--arrow_open {
      @apply rotate-180;
    }

    .vsm--arrow_slot:after {
      display: none;
    }
  }

  .vsm--badge {
  }

  .vsm--header {
    @apply px-2 py-1 pb-2 pt-2 text-sm font-medium text-gray-400;
    @apply transition-all duration-300 ease-in-out;
  }

  .vsm--header:not(:first-child) {
    @apply pt-6;
  }

  .vsm--menu {
    @apply grid gap-2;
    width: 100% !important;
  }

  .vsm--dropdown {
    @apply my-[10px] grid gap-[10px];
    @apply list-none;

    & > .vsm--menu {
      @apply mt-1 rounded-md bg-gray-950 p-1;
    }
  }

  .vsm--item_mobile .vsm--title {
    @apply hidden;
  }

  .vsm--child_mobile {
    @apply hidden;
  }

  .vsm--mobile-bg {
  }

  .vsm--toggle-btn {
  }

  &.vsm_relative {
    position: relative;
    height: 100%;
  }

  .expand-enter-active,
  .expand-leave-active {
    transition: height 0.3s ease;
    overflow: hidden;
  }

  .expand-enter,
  .expand-leave-to {
    height: 0 !important;
  }

  .slide-animation-enter-active {
    transition: width 0.3s ease-in-out;
  }

  .slide-animation-leave-active {
    transition: width 0.3s ease-in-out;
  }

  .slide-animation-enter,
  .slide-animation-leave-to {
    width: 0 !important;
  }

  .fade-animation-enter-active {
    transition:
      opacity 0.2s ease-in-out,
      visibility 0.2s ease-in-out;
  }

  .fade-animation-leave-active {
    transition:
      opacity 0.2s ease-in-out,
      visibility 0.2s ease-in-out;
  }

  .fade-animation-enter,
  .fade-animation-leave-to {
    opacity: 0 !important;
    visibility: hidden !important;
  }
}

.app-sidebar {
  @apply border-r bg-white dark:border-gray-800 dark:bg-gray-900;
}

.app-sidebar-header {
  @apply relative flex flex-shrink-0 items-center justify-between gap-2 overflow-hidden px-3 py-3 lg:gap-4;
  @apply border-b border-dashed dark:border-gray-800;
}

.app-sidebar-footer {
  @apply flex w-full shrink-0 items-center gap-4 p-4;
}

.app-sidebar-overlay-enter-active,
.app-sidebar-overlay-leave-active {
  @apply transition duration-200 ease-in-out;
}

.app-sidebar-overlay-enter-from,
.app-sidebar-overlay-leave-to {
  @apply opacity-0;
}

.app-sidebar-slide-enter-active,
.app-sidebar-slide-leave-active {
  @apply transition duration-200 ease-in-out;
}

.app-sidebar-slide-enter-from,
.app-sidebar-slide-leave-to {
  @apply -translate-x-full opacity-0;
}
</style>
