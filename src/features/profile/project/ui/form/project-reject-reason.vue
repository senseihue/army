<script setup lang="ts">
interface IProps {
  state: string
  reason: string
}

const props = defineProps<IProps>()
const { t } = useI18n({ useScope: "local" })

const cardClass = computed(() => ({
  "project-reason-card": true,
  ["project-reason-card__" + props.state]: true
}))
</script>

<template>
  <div :class="cardClass">

  </div>
</template>

<i18n>
{
  "en": {
    "rejected": "Rejected",
    "approved": "Approved",
    "pending": "Pending"
  },
  "ru": {
    "rejected": "Отклонено",
    "approved": "Одобрено",
    "pending": "В ожидании"
  },
  "uz": {
    "rejected": "Rad etildi",
    "approved": "Tasdiqlandi",
    "pending": "Kutilyapti"
  }
}
</i18n>

<style>

.project-reason-card {
  @apply flex flex-col gap-4 p-4 rounded-lg border border-gray-200 bg-white;

  &__rejected {
    @apply border-red-500 bg-red-50;
  }

  &__approved {
    @apply border-green-500 bg-green-50;
  }

  &__pending {
    @apply border-yellow-500 bg-yellow-50;
  }
}
</style>
