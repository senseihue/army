<script setup lang="ts">
interface IProps {
  reply: IAppealReply
}

const props = defineProps<IProps>()
const { t } = useI18n({ useScope: "local" })
const classes = computed(() => ({
  "appeal-reply-item": true,
  "appeal-reply-item__owner": props.reply.owner
}))
</script>

<template>
  <div :class="classes">
    <div class="appeal-reply-item__header">
      <p class="appeal-reply-item__username">
        {{ reply.owner ? t("appeal-reply.owner") : reply.admin }}
      </p>
      <p class="appeal-reply-item__date">
        {{ formatDate(reply.created, "DD.MM.YYYY hh:mm") }}
      </p>
    </div>

    <div class="appeal-reply-item__content">
      <p>
        {{ reply.response }}
      </p>
    </div>
  </div>
</template>

<style>
.appeal-reply-item {
  @apply flex w-full flex-col gap-[5px] max-w-[80%];

  &__owner {
    @apply self-end;
    .appeal-reply-item__header {
      @apply flex-row-reverse;
    }

    .appeal-reply-item__username {
      @apply text-blue-bondi;
    }

    .appeal-reply-item__content p {
      @apply text-[#2A3040];
    }
  }

  &__username {
    @apply font-semibold text-sm text-blue-midnight;
  }

  &__header {
    @apply flex items-center justify-between;
  }

  &__date {
    @apply text-xs text-black italic font-normal;
  }

  &__content {
    @apply border border-[#013D8C66]  p-4 rounded-lg;
    p {
      @apply text-sm text-blue-midnight;
    }
  }
}
</style>

<i18n>
{
  "en": {
    "appeal-reply": {
      "owner": "You"
    }
  },
  "ru": {
    "appeal-reply": {
      "owner": "Вы"
    }
  },
  "uz": {
    "appeal-reply": {
      "owner": "Siz"
    }
  }
}
</i18n>
