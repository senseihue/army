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

const iconName = computed(() => {
  switch (props.state) {
    case "rejected":
      return "lucide:circle-alert"
    case "pending":
      return "lucide:user-search"
    default:
      return ""
  }
})
</script>

<template>
  <div v-if="state !== 'approved' && state" :class="cardClass">
    <div class="project-reason-card__title">
      <icon :name="iconName"></icon>
      <span>{{ t(`reason.${state}`) }}</span>
    </div>
    <p class="project-reason-card__description">
      {{ reason || t(`pending_description`) }}
    </p>
  </div>
</template>

<i18n>
{
  "en": {
    "reason": {
      "rejected": "Rejected",
      "approved": "Approved",
      "pending": "Pending"
    },
    "pending_description": "The project has been submitted and is awaiting review by a moderator"
  },
  "ru": {
    "reason": {
      "rejected": "Отклонено",
      "approved": "Одобрено",
      "pending": "В ожидании"
    },
    "pending_description": "Проект отправлен, ожидает проверки модератором"
  },
  "uz": {
    "reason": {
      "rejected": "Rad etildi",
      "approved": "Tasdiqlandi",
      "pending": "Kutilyapti"
    },
    "pending_description": "Loyiha yuborildi, moderator tomonidan tekshirilishini kutmoqda"
  }
}
</i18n>

<style>
.project-reason-card {
  @apply flex flex-col gap-4 rounded-[12px] border border-gray-200 bg-white p-4;

  &__description {
    @apply text-sm italic text-black;
  }

  &__title {
    @apply flex items-center gap-[5px] text-base font-semibold;
  }
}

.project-reason-card__pending {
  @apply border-blue-midnight bg-[#E5F1F7];

  .project-reason-card {
    &__description {
      @apply text-sm italic text-black;
    }

    &__title {
      @apply text-blue-midnight;
    }
  }
}

.project-reason-card__rejected {
  @apply border-[#FF5F57] bg-[#FFEDDD];

  .project-reason-card {
    &__title {
      @apply text-[#FF5F57];
    }
  }
}
</style>
