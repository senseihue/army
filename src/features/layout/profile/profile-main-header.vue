<script setup lang="ts">
const {$session} = useNuxtApp()
const { profile, loading } = $session || {}

const userInformation = computed(() => {
  if (!profile.value) return null
  return profile.value
})
</script>

<template>
  <div>
    <div>
      <img :src="profile.person.photo_base64" alt="">
    </div>
  </div>
</template>

<style scoped></style>
