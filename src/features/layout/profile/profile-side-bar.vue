<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()

const list = computed(() => [
  {
    icon: "lucide:shield-user",
    title: t("nav.profile.main"),
    to: "/profile"
  },
  {
    icon: "mynaui:briefcase",
    title: t("nav.profile.my_services"),
    to: "/profile/my-services"
  },
  {
    icon: "lucide:archive",
    title: t("nav.profile.my_projects"),
    to: "/profile/my-projects"
  }
])
</script>

<template>
  <div class="h-fit min-w-[272px] max-w-full rounded-[14px] bg-white px-2 py-4 sm:max-w-[272px]">
    <div class="grid gap-2">
      <nuxt-link-locale
        v-for="item in list"
        class="flex cursor-pointer items-center gap-3 rounded-[14px] p-[10px] text-black"
        :class="{
          '!bg-[#D6E8FF] !text-blue-midnight': $route.path === localePath(item.to)
        }"
        :key="item.title"
        :to="item.to"
      >
        <icon class="!text-blue-midnight" :name="item.icon" />
        <p class="text-sm font-medium" data-v-ea57a248="">
          {{ item.title }}
        </p>
      </nuxt-link-locale>
    </div>
  </div>
</template>

<style scoped></style>
