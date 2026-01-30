<script lang="ts" setup>
import {
  AdmissionHero,
  useAdmissionService,
  AdmissionModal,
  AdmissionSchoolGrid,
  useAdmissionApi,
  AdmissionSocialStatusTab
} from "~/features/admission"
import { useAdmissionStore } from "~/entities/admission"
import { useAuthService } from "~/features/auth"
import { useEducationService } from "~/features/profile/education"

definePageMeta({
  fixedHeader: true,
  isLightHeader: true
})
const { getRedirectUrl } = useAuthService()
const { getAdmissionSocialStatusList, getAdmission } = useAdmissionApi()
const { getAdmissionSchoolList } = useAdmissionService()
const { getEducationList } = useEducationService()
const { $session } = useNuxtApp()
const { loggedIn } = $session || {}

const admissionStore = useAdmissionStore()
const { current } = storeToRefs(admissionStore)
const route = useRoute()

const { data, error } = await useAsyncData<IResponse<IAdmission>>(() => getAdmission(route.params.season_id))

if (error.value) {
  throw showError(error.value)
}

const { content } = data.value

current.value = content
onMounted(() => {
  if (!loggedIn.value) {
    getRedirectUrl(window.location.href)
  }
  getEducationList()
  getAdmissionSocialStatusList({
    season_id: route.params.season_id
  })
  getAdmissionSchoolList()
})
</script>

<template>
  <div class="bg-[#F1F5F9]">
    <div class="text-zinc-100 antialiased">
      <admission-hero
        :title="content.title"
        :description="content.description"
        :image="content.season_type.image_path"
      />
      <div class="container-7xl p-section">
        <admission-social-status-tab class="mb-12 md:mb-20" :social-status="content.social_statuses" />
        <admission-school-grid />
      </div>
      <!--    <home-about />-->
    </div>
    <admission-modal></admission-modal>
  </div>
</template>
