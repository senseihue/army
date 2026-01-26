<script setup lang="ts">
import { useAdmissionStore } from "~/entities/admission"
import { storeToRefs } from "pinia"

interface IProps {
  admission: IAdmission
}

const props = defineProps<IProps>()
defineEmits<{
  (e: "edit"): void
}>()

const modal = useModal()
const admissionStore = useAdmissionStore()
const { current } = storeToRefs(admissionStore)

const showAdmissionModal = () => {
  current.value = props.admission
  modal.show("admission", props.admission)
}
</script>

<template>
  <div class="w-full max-w-3xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
    <div class="border-b border-slate-100 bg-slate-50/50 px-6 py-5">
      <!--      <span class="text-xs font-bold tracking-wider text-slate-400 uppercase">Application Type</span>-->
      <h2 class="mt-1 text-lg font-bold text-slate-800 md:text-xl">
        {{ admission.title }}
      </h2>
    </div>

    <div class="p-6">
      <div class="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h3 class="text-xl font-bold text-blue-700">{{ admission.season.title }}</h3>
          <p class="invisible mt-1 text-sm text-slate-500">#1</p>
        </div>

        <div class="flex items-center gap-3 rounded-lg border border-blue-100 bg-blue-50 px-4 py-2 text-blue-800">
          <svg class="h-5 w-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          <div class="flex flex-col">
            <!--            <span class="text-[10px] font-bold uppercase tracking-wide opacity-60">Period</span>-->
            <span class="text-sm font-semibold">
              {{ admission.season.start_date }} — {{ admission.season.end_date }}
            </span>
          </div>
        </div>
      </div>

      <div v-if="admission.season.social_statuses?.length > 0">
        <h4 class="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-900">
          <svg class="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          {{ $t("labels.admission_criteria.main") }} ({{ $t("labels.admission_criteria.age_limit") }})
        </h4>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div
            v-for="status in admission.season.social_statuses"
            class="cursor-default rounded-lg border border-slate-200 p-4 transition-colors hover:border-blue-300"
          >
            <div class="mb-2 flex items-center justify-between">
              <span class="text-sm font-semibold text-slate-700">{{ status.title }}</span>
            </div>
            <div class="text-2xl font-bold text-slate-800">
              {{ status.pivot.age_min }}
              <span class="text-lg font-normal text-slate-400">-</span>
              {{ status.pivot.age_max }}
            </div>
            <div class="mt-1 text-xs text-slate-400">{{ $t("labels.years_old") }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-slate-100 bg-slate-50 px-6 py-4 text-right">
      <button
        class="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
        @click="showAdmissionModal"
      >
        {{$t('labels.send_application')}}
      </button>
    </div>
  </div>
</template>
