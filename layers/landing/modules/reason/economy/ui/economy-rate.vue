<template>
  <section-grid>
    <h3 v-if="title" class="text-center !text-lg">{{ title }}</h3>
    <p>
      Inflation in Uzbekistan has remained around 9-10% in recent years, which is higher than in developed countries but
      in line with other developing economies. The Central Bank of Uzbekistan follows an inflation targeting policy to
      manage inflation levels and ensure price predictability for businesses. Interest rates also vary, stimulating
      economic activity and ensuring access to credit for businesses.
    </p>
    <div class="flex items-center justify-center gap-20 rounded-xl bg-[#00B0F0] px-10 py-4">
      <div class="flex flex-col items-center gap-0.5">
        <span class="inline-block text-xl font-semibold text-white md:text-3xl">{{ leftNumber }}</span>
        <span class="text-white">{{ leftYear }}</span>
      </div>

      <img class="w-12" alt="chart" src="/img/chart.png" />

      <div class="flex flex-col items-center gap-0.5">
        <span class="inline-block text-xl font-semibold text-white md:text-3xl">{{ rightNumber }}</span>
        <span class="text-white">{{ rightYear }}</span>
      </div>
    </div>
  </section-grid>
</template>

<script lang="ts" setup>
import { editorField, numberField, textField } from "#pruvious"
import SectionGrid from "#layers/landing/modules/reason/ui/section-grid.vue"

interface IRate {

}

defineProps({
  title: textField({ label: "Title" }),
  subTitle: editorField({
    label: "Subtitle",
    toolbar: ["paragraph", "left", "center", "right", "justify", "bold", "italic", "underline"]
  }),
  leftNumber: textField({ label: "Left number", required: true }),
  leftYear: numberField({ label: "Left year", required: true, default: 2020 }),
  rightNumber: textField({ label: "Right number", required: true }),
  rightYear: numberField({ label: "Right year", required: true, default: 2021 })
})
</script>

<style scoped></style>
