<script setup lang="ts">
interface IProps {
  requestData: IRequest
}

defineProps<IProps>()
defineEmits<{
  (e: "edit"): void
}>()
</script>

<template>
  <div class="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
    <div class="flex items-center justify-between bg-slate-900 px-8 py-6">
      <div>
        <h1 class="text-2xl font-bold tracking-tight text-white">Application: U-2026-1</h1>
        <p class="mt-1 text-sm text-slate-400">Created on Jan 30, 2026</p>
      </div>
      <div class="flex flex-col items-end">
        <span
          class="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-500"
        >
          Pending
        </span>
        <span class="mt-2 text-xs uppercase tracking-widest text-slate-500">ID: #1</span>
      </div>
    </div>

    <div class="p-8">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div class="space-y-4">
          <h2 class="text-xs font-bold uppercase tracking-widest text-gray-400">Institution Details</h2>
          <div class="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <p class="mb-1 text-sm text-gray-500">Target School</p>
            <p class="text-lg font-semibold leading-tight text-gray-800">
              Факультет психологии Университета военной безопасности и обороны Республики Узбекистан
            </p>
            <div class="mt-4 flex gap-4">
              <div>
                <p class="text-[10px] uppercase text-gray-400">Region ID</p>
                <p class="font-medium">1</p>
              </div>
              <div>
                <p class="text-[10px] uppercase text-gray-400">District ID</p>
                <p class="font-medium">5</p>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <h2 class="text-xs font-bold uppercase tracking-widest text-gray-400">Season Information</h2>
          <div class="rounded-xl border border-indigo-100 bg-indigo-50 p-4">
            <p class="mb-1 text-sm font-bold text-indigo-700">Harbiy Oliy Ta'lim uchun 2026</p>
            <p class="mb-3 text-xs text-indigo-600">Заявление на поступление в высшие военные учебные заведения</p>

            <div class="grid grid-cols-2 gap-2 text-sm">
              <div class="rounded border border-indigo-100 bg-white p-2">
                <span class="block text-[10px] uppercase text-gray-400">Starts</span>
                <span class="font-mono text-gray-700">2026-01-01</span>
              </div>
              <div class="rounded border border-indigo-100 bg-white p-2">
                <span class="block text-[10px] uppercase text-gray-400">Ends</span>
                <span class="font-mono text-gray-700">2026-02-28</span>
              </div>
            </div>
          </div>
        </div>

        <div class="md:col-span-2">
          <h2 class="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">Application Parameters</h2>
          <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div class="border-l-4 border-slate-200 py-1 pl-4">
              <p class="text-[10px] uppercase text-gray-500">User ID</p>
              <p class="text-lg font-semibold text-gray-700">2</p>
            </div>
            <div class="border-l-4 border-slate-200 py-1 pl-4">
              <p class="text-[10px] uppercase text-gray-500">Language ID</p>
              <p class="text-lg font-semibold text-gray-700">1</p>
            </div>
            <div class="border-l-4 border-slate-200 py-1 pl-4">
              <p class="text-[10px] uppercase text-gray-500">Reject Re-request</p>
              <p class="text-lg font-semibold uppercase text-green-600">True</p>
            </div>
            <div class="border-l-4 border-slate-200 py-1 pl-4">
              <p class="text-[10px] uppercase text-gray-500">Checked</p>
              <p class="text-lg font-semibold uppercase text-red-500">False</p>
            </div>
          </div>
        </div>
      </div>

      <hr class="my-8 border-gray-100" />

      <div class="flex flex-col justify-between font-mono text-[11px] text-gray-400 md:flex-row">
        <p>CREATED_AT: 2026-01-30 13:22:23</p>
        <p>UPDATED_AT: 2026-01-30 13:22:23</p>
        <p>SYSTEM_UUID: U-2026-1</p>
      </div>
    </div>

    <div class="flex justify-end space-x-3 border-t border-gray-100 bg-gray-50 px-8 py-4">
      <button class="rounded-lg px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-200">
        Edit JSON
      </button>
      <button
        class="rounded-lg bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700"
      >
        Approve Application
      </button>
    </div>
  </div>
</template>
