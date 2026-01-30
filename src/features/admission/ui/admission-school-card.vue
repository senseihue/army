<script setup lang="ts">
import { useAdmissionSchoolStore, useAdmissionStore } from "~/entities/admission"
import { storeToRefs } from "pinia"

interface IProps {
  admissionSchool: ISchool
}

const props = defineProps<IProps>()
defineEmits<{
  (e: "edit"): void
}>()

const { $session } = useNuxtApp()

const { getCdnUrl } = cdn()
const route = useRoute()
const modal = useModal()
const admissionStore = useAdmissionStore()
const admissionSchoolStore = useAdmissionSchoolStore()
const { current } = storeToRefs(admissionSchoolStore)
const { current: season } = storeToRefs(admissionStore)
const { profile } = $session || {}

const showAdmissionSchoolModal = async () => {
  const valid = await validateAgeRequirement()
  if (!valid) {
    modal.show("error-modal", {
      title: "messages.error.age_restriction",
      message: "messages.error.age_restriction_description"
    })
    return
  }
  current.value = props.admissionSchool
  modal.show("admission", props.admissionSchool)
}

const validateAgeRequirement = async () => {
  const socialStatus = season.value?.social_statuses.find(({ id }) => id === Number(route.query.social_status_id))
  console.log(socialStatus, season.value, profile.value)
  if (!socialStatus) return Promise.resolve(false)
  const age = new Date().getFullYear() - new Date(profile.value?.person.birth_date).getFullYear()
  return Promise.resolve(age >= socialStatus.pivot.age_min && age <= socialStatus.pivot.age_max)
}
</script>

<template>
  <div class="flex w-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
    <div class="group relative h-48 overflow-hidden bg-slate-200">
      <img
        class="h-full w-full transition-transform duration-500 group-hover:scale-105"
        alt="University Building"
        :class="{
          'object-cover': admissionSchool.image_path,
          'bg-black/35 object-contain': !admissionSchool.image_path
        }"
        :src="getCdnUrl(admissionSchool.image_path)"
      />
    </div>

    <div class="flex flex-grow flex-col p-6">
      <div>
        <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900">
          {{ admissionSchool.title }}
        </h2>
      </div>

      <div class="mt-auto grid grid-cols-2 gap-3">
        <div class="col-span-full mt-6 gap-y-4">
          <p v-if="admissionSchool.region" class="mb-4 flex items-center gap-1 text-sm text-gray-500">
            <icon name="lucide:map-pin"></icon>
            {{ admissionSchool.region.title }}
          </p>
        </div>
        <ui-button
          class="min-h-[46px] bg-blue-600 px-4 !text-sm !font-semibold text-white shadow-md shadow-blue-200 transition-all"
          color="secondary"
          variant="white"
        >
          {{ $t("labels.details") }}
        </ui-button>

        <ui-button
          class="min-h-[46px] bg-blue-600 px-4 !text-sm !font-semibold text-white shadow-md shadow-blue-200 transition-all"
          @click="showAdmissionSchoolModal"
        >
          {{ $t("labels.send_application") }}
        </ui-button>
      </div>
    </div>
  </div>
</template>
