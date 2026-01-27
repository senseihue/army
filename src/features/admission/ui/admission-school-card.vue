<script setup lang="ts">
import { useAdmissionSchoolStore } from "~/entities/admission"
import { storeToRefs } from "pinia"

interface IProps {
  admissionSchool: IAdmissionSchool
}

const props = defineProps<IProps>()
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
  <div class="flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
    <div class="group relative h-48 overflow-hidden bg-slate-200">
      <img
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop"
        alt="University Building"
      />

      <div class="absolute left-4 top-4">
        <span
          class="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur-sm"
        >
          <svg class="h-3 w-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.333c-.27-1.156-1.168-2.072-2.333-2.388V19.5a.5.5 0 01-1 0V11.28c-1.165.316-2.063 1.232-2.333 2.388A3.989 3.989 0 014 15a3.989 3.989 0 01-2.667-1.051 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L8 4.323V3a1 1 0 011-1z"
            />
          </svg>
          Military
        </span>
      </div>

      <div class="absolute right-4 top-4">
        <span class="relative flex h-3 w-3">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span class="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
        </span>
      </div>
    </div>

    <div class="flex flex-grow flex-col p-6">
      <h2 class="mb-2 line-clamp-3 text-xl font-bold leading-tight text-gray-900">
        University of Military Security and Defense of the Republic of Uzbekistan
      </h2>

      <p class="mb-6 flex items-center gap-1 text-sm text-gray-500">
        <svg class="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
        Tashkent city
      </p>

      <div class="mt-auto grid grid-cols-2 gap-3">
        <button
          class="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          Details
        </button>

        <button
          class="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-200 transition-all hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
        >
          Send Admission
        </button>
      </div>
    </div>
  </div>
</template>
