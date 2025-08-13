<script setup lang="ts">
import { ProfileHeader, ProfileMainInfo, ProfilePassportInfo, useProfileApi } from "~/features/profile"


definePageMeta({
  protected: true
})

const { $session } = useNuxtApp()
const { loading } = $session || {}

const profileApi = useProfileApi()
const getProfile = async () => {
  loading.value = true
  try {
    const { content } = await profileApi.getProfile()
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
    <profile-header icon-name="lucide:shield-user" :title="$t('nav.profile.main')" @refresh="getProfile" />
<!--    <profile-main-info />-->
<!--    <profile-passport-info />-->
  </div>
</template>
