<script lang="ts" setup>
import {AdmissionHero, AdmissionGrid, useAdmissionService, AdmissionModal} from "~/features/admission"

definePageMeta({
  fixedHeader: true,
  isLightHeader: true
})

const { getAdmissionList } = useAdmissionService()

onMounted(() => {
  getAdmissionList()
})
</script>

<template>
  <div class="bg-[#F1F5F9]">
    <div class=" text-zinc-100 antialiased">
      <admission-hero />
      <div class="container-7xl p-section">
        <admission-grid />

      </div>
      <!--    <home-about />-->
    </div>
    <admission-modal></admission-modal>
  </div>
</template>
