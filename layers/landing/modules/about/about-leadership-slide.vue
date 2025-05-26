<script setup lang="ts">
interface IProps {
  bio: string
  phone: string
  email: string
  avatar: string
  fullName: string
  position: string
  workingDays: string
}

defineProps<IProps>()
</script>

<template>
  <div class="leadership-slide">
    <img class="leadership-slide__image" :src="avatar" :alt="fullName" />

    <div class="leadership-slide__content">
      <p class="leadership-slide__content-heading">{{ fullName }}</p>
      <p>{{ position }}</p>
      <p>{{ $t("labels.working_days") }}: {{ workingDays }}</p>

      <p>
        <span>{{ $t("labels.phone") }}:</span>
        <a class="leadership-slide__content-link" :href="`tel:${phone}`">{{ phone }}</a>
      </p>

      <p>
        <span>{{ $t("labels.email") }}</span>
        <a class="leadership-slide__content-link" :href="`mailto:${email}`">{{ email }}</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.leadership-slide {
  @apply flex flex-col items-center gap-4;

  &__image {
    @apply size-52 rounded-full object-cover object-center;
  }

  &__content {
    @apply text-center text-sm;

    &-heading {
      @apply text-lg font-bold text-blue-command;
    }

    &-link {
      @apply text-blue-command hover:underline;
    }
  }
}
</style>
