<script setup lang="ts">
import {useAdmissionStore} from "~/entities/admission";
import {storeToRefs} from "pinia";

interface IProps {
  admissionData: IAdmission
}

const props = defineProps<IProps>()
defineEmits<{
  (e: "edit"): void
}>()

const modal = useModal()
const admissionStore = useAdmissionStore()
const { current } = storeToRefs(admissionStore)

const showAdmissionModal = () => {
  current.value = props.admissionData
  modal.show('admission', props.admissionData)
}

</script>

<template>
  <div class="bg-white max-w-3xl w-full rounded-xl shadow-sm border border-slate-200 overflow-hidden">

    <div class="px-6 py-5 border-b border-slate-100 bg-slate-50/50">
      <span class="text-xs font-bold tracking-wider text-slate-400 uppercase">Application Type</span>
      <h2 class="text-lg md:text-xl font-bold text-slate-800 mt-1">
        Заявление на поступление в высшие военные учебные заведения
      </h2>
    </div>

    <div class="p-6">

      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h3 class="text-xl font-bold text-blue-700">
            Harbiy Oliy Ta'lim uchun 2026
          </h3>
          <p class="text-sm text-slate-500 mt-1">Admission Season #1</p>
        </div>

        <div class="flex items-center gap-3 bg-blue-50 text-blue-800 px-4 py-2 rounded-lg border border-blue-100">
          <svg class="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          <div class="flex flex-col">
            <span class="text-[10px] uppercase font-bold tracking-wide opacity-60">Period</span>
            <span class="text-sm font-semibold">2026-01-01 — 2026-02-28</span>
          </div>
        </div>
      </div>

      <div>
        <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-2">
          <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Eligibility Criteria (Age Limits)
        </h4>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">

          <div class="border border-slate-200 rounded-lg p-4 hover:border-blue-300 transition-colors cursor-default">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-semibold text-slate-700">Гражданин</span>
            </div>
            <div class="text-2xl font-bold text-slate-800">
              17 <span class="text-slate-400 text-lg font-normal">-</span> 23
            </div>
            <div class="text-xs text-slate-400 mt-1">years old</div>
          </div>

          <div class="border border-slate-200 rounded-lg p-4 hover:border-blue-300 transition-colors cursor-default">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-semibold text-slate-700">Военный</span>
            </div>
            <div class="text-2xl font-bold text-slate-800">
              18 <span class="text-slate-400 text-lg font-normal">-</span> 25
            </div>
            <div class="text-xs text-slate-400 mt-1">years old</div>
          </div>

          <div class="border border-slate-200 rounded-lg p-4 hover:border-blue-300 transition-colors cursor-default">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-semibold text-slate-700">Студент</span>
            </div>
            <div class="text-2xl font-bold text-slate-800">
              18 <span class="text-slate-400 text-lg font-normal">-</span> 26
            </div>
            <div class="text-xs text-slate-400 mt-1">years old</div>
          </div>

        </div>
      </div>

    </div>

    <div class="bg-slate-50 px-6 py-4 border-t border-slate-100 text-right">
      <button @click="showAdmissionModal" class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded shadow-sm transition-colors">
        Apply Now
      </button>
    </div>

  </div>
</template>
