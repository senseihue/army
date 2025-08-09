<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()

const { $session } = useNuxtApp()
const { profile, loading } = $session || {}

const list = computed(() => [
  {
    show: true,
    icon: "lucide:shield-user",
    title: t("nav.profile.main"),
    to: "/profile"
  },
  {
    show: true,
    icon: "mynaui:briefcase",
    title: t("nav.profile.my_services"),
    to: "/profile/my-services"
  },
  {
    show: true,
    icon: "lucide:archive",
    title: t("nav.profile.my_projects"),
    to: "/profile/my-projects"
  },
  {
    show: !profile.value?.user?.isResident,
    icon: "solar:password-line-duotone",
    title: t("nav.profile.change_password"),
    to: "/profile/password"
  }
])
</script>

<template>
  <div class="h-fit min-w-[272px] max-w-full rounded-[14px] bg-white px-2 py-4 md:max-w-[272px]">
    <div class="grid gap-2">
      <nuxt-link-locale
        v-for="item in list"
        v-show="item.show"
        class="flex cursor-pointer items-center gap-3 rounded-[14px] p-[10px] text-black"
        :class="{
          '!bg-[#D6E8FF] !text-blue-midnight': $route.path === localePath(item.to)
        }"
        :key="item.title"
        :to="item.to"
      >
        <icon class="!text-blue-midnight" :name="item.icon" />
        <p class="text-sm font-medium">
          {{ item.title }}
        </p>
      </nuxt-link-locale>
    </div>
  </div>
</template>

<style scoped></style>
