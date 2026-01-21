<script setup lang="ts">
import { useAuthApi } from "~/features/auth"
import { ProfileHeader, ProfileMainInfo } from "~/features/profile"

definePageMeta({
  protected: true,
  fixedHeader: true
})

const modal = useModal()
const { $session } = useNuxtApp()
const { loading } = $session || {}

const authApi = useAuthApi()
const getProfile = async () => {
  loading.value = true
  try {
    const { content } = await authApi.getProfile()
    $session.profile.value = content.user
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
    <profile-header :title="$t('nav.profile.passport_information')" @refresh="getProfile">

    </profile-header>
    <profile-main-info />
    <!--    <profile-passport-info />-->
  </div>
</template>
