<script setup lang="ts">
const { t } = useI18n()
const { $session } = useNuxtApp()
const { profile, loggedIn } = $session || {}
const localePath = useLocalePath()
const list = computed(() => [
  {
    icon: "hugeicons:coins-01",
    title: t("nav.profile.main"),
    to: localePath("/profile")
  },
  {
    icon: "hugeicons:chart-evaluation",
    title: t("nav.profile.my_services"),
    to: localePath("/profile/my-services")
  }
])

const user = computed(() => {
  return profile.value ? profile.value[profile.value?.role] : {}
})
</script>

<template>
  <client-only>
    <ui-dropdown  :distance="16">
      <ui-icon-button rounded variant="ghost" color="secondary" icon-class="text-xl" icon-name="lucide:user" />

      <template #body>
        <div>
          <div class="flex flex-col p-3">
            <div class="font-bold uppercase">
              <p class="whitespace-nowrap">{{ user?.name }} {{ user.surname  }}</p>
            </div>
            <div class="">
              <p class="text-sm text-gray-600">{{ profile?.email }}</p>
            </div>
          </div>

          <hr class="dark:border-gray-800" />

          <ui-dropdown-item v-for="{ title, to } in list" :key="title" :to="to" :label="title" />

          <ui-dropdown-item color="danger" :label="$t('actions.sign_out')" @click="$session.clear" />
        </div>
      </template>
    </ui-dropdown>
  </client-only>
</template>
