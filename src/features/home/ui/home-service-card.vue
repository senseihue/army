<script setup lang="ts">
interface IProps {
  admission: IAdmission
}

defineProps<IProps>()
</script>

<template>
  <div
    class="bg-card text-card-foreground hover:border-primary/50 group flex flex-col justify-between gap-6 overflow-hidden rounded-xl border-2 py-6 pt-0 shadow-sm transition-all duration-300 hover:shadow-lg"
  >
    <div>
      <div class="relative h-48 overflow-hidden">
        <img
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          :alt="admission.title"
          :src="admission.image_path"
        />
      </div>
      <div
        class="@container/card-header has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-4 pt-4"
      >
        <div class="text-xl font-semibold">
          {{ admission.title }}
        </div>
        <div class="text-muted-foreground text-base">
          {{ admission.description }}
        </div>
      </div>
    </div>
    <div class="px-4">
      <nuxt-link-locale v-if="admission.season" class="inline-block w-full" :to="`/admission/${admission.season?.id}`">
        <ui-button class="w-full rounded-lg" :label="$t('labels.send_application')" />
      </nuxt-link-locale>
      <ui-button v-else class="w-full rounded-lg" disabled :label="$t('labels.coming_soon')" />
    </div>
  </div>
</template>

<style scoped></style>
