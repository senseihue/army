<script setup lang="ts">

const { t } = useI18n()
const services = computed(() => ([
  {
    title: t('labels.services.business'),
    endpoint: '/profile/my-services/business',
  }
]))

</script>

<template>
  <div class="flex w-full items-center justify-between gap-4">
    <div>
      <icon class="text-xl text-blue-midnight" name="lucide:briefcase" />
      <h2 class="text-2xl font-bold text-blue-midnight">
        {{ $t("nav.profile.my_services") }}
      </h2>
    </div>
  </div>
</template>
