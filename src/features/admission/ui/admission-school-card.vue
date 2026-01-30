<script setup lang="ts">
import { useAdmissionSchoolStore } from "~/entities/admission"
import { storeToRefs } from "pinia"

interface IProps {
  admissionSchool: ISchool
}

const props = defineProps<IProps>()
const { getCdnUrl } = cdn()
defineEmits<{
  (e: "edit"): void
}>()

const modal = useModal()
const admissionSchoolStore = useAdmissionSchoolStore()
const { current } = storeToRefs(admissionSchoolStore)

const showAdmissionSchoolModal = () => {
  current.value = props.admissionSchool
  modal.show("admission", props.admissionSchool)
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
        :src="admissionSchool.image_path ? getCdnUrl(admissionSchool.image_path) : '/img/admission/rekruting-logo.png'"
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
