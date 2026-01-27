<script lang="ts" setup>
import {
  AdmissionHero,
  useAdmissionService,
  AdmissionModal,
  AdmissionSchoolGrid,
  useAdmissionApi
} from "~/features/admission"

definePageMeta({
  fixedHeader: true,
  isLightHeader: true
})

const { getAdmissionSocialStatusList } = useAdmissionApi()
const { getAdmissionSchoolList } = useAdmissionService()
const route = useRoute()

onMounted(() => {
  getAdmissionSocialStatusList({
    season_id: route.params.season_id as string
  })
  getAdmissionSchoolList()
})
</script>

<template>
  <div class="bg-[#F1F5F9]">
    <div class="text-zinc-100 antialiased">
      <admission-hero />
      <div class="container-7xl p-section">
        <ui-tabs>
          <ui-tab label="All Schools" />
          <ui-tab label="All Schools" />
          <ui-tab label="All Schools" />
        </ui-tabs>
        <admission-school-grid />
      </div>
      <!--    <home-about />-->
    </div>
    <admission-modal></admission-modal>
  </div>
</template>
