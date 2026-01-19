<script setup lang="ts">
import { useAuthApi } from "~/features/auth"
import { ProfileHeader, ProfileMainInfo } from "~/features/profile"

definePageMeta({
  protected: false,
  fixedHeader: true

})

const { $session } = useNuxtApp()
const { loading } = $session || {}

const authApi = useAuthApi()
const getProfile = async () => {
  loading.value = true
  try {
    const { content } = await authApi.getProfile()
    $session.profile.value = content
    $session.loaded.value = true
  } catch (error: any) {
    $session.loaded.value = true
    $session.clear()
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="flex w-full flex-col gap-2">
    <profile-header icon-name="lucide:shield-user" :title="$t('nav.profile.account')" @refresh="getProfile" />
    <profile-main-info />
<!--    <profile-passport-info />-->
  </div>
</template>
