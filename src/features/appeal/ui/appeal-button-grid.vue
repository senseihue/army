<script setup lang="ts">
import { AppealModal, AppealUnauthorizedModal } from "~/features/appeal"

interface IProps {
  variant?: "col" | "row"
}

const props = withDefaults(defineProps<IProps>(), {
  variant: "row"
})

const { $session } = useNuxtApp()
const { loggedIn } = $session || {}
const { t } = useI18n({ useScope: "local" })

const gridClass = computed(() => ({
  "appeal-button-grid": true,
  "appeal-button-grid__col": props.variant === "col",
  "appeal-button-grid__row": props.variant === "row"
}))

const { show } = useModal()

const beforeShow = () => {
  if (!loggedIn.value) {
    show("appeal-unauthorized")
  } else {
    show("appeal")
  }
}
</script>

<template>
  <div :class="gridClass">
    <p class="appeal-button-grid__title">
      {{ t("title") }}
    </p>
    <p class="appeal-button-grid__description">
      {{ t("description") }}
    </p>
    <ui-button :label="$t('actions.send_appeal')" @click="beforeShow"></ui-button>
  </div>
  <appeal-modal />
  <appeal-unauthorized-modal />
</template>

<style>
.appeal-button-grid {
  @apply flex w-full gap-5 bg-white p-4;

  &__col {
    @apply flex-col items-start justify-start rounded-2xl;

    .ui-button {
      @apply ml-auto;
    }
  }

  &__row {
    @apply flex-row items-center justify-end px-0;

    .appeal-button-grid__description {
      @apply hidden;
    }
  }

  &__title {
    @apply text-sm font-bold;
  }

  &__description {
    @apply text-xs font-medium text-[#475569];
  }
}
</style>

<i18n>
{
  "en": {
    "title": "Do you have any complaints or suggestions?",
    "description": "Here you can leave feedback about the system or file a complaint",
    "create_appeal": "Leave feedback"
  },
  "ru": {
    "title": "Есть жалобы или предложения?",
    "description": "Здесь вы можете оставить отзыв о системе или подать жалобу",
    "create_appeal": "Оставить отзыв"
  },
  "uz": {
    "title": "Shikoyat yoki takliflaringiz bormi?",
    "description": "Bu yerda tizim haqida fikr qoldirishingiz yoki shikoyat qilishingiz mumkin",
    "create_appeal": "Fikr qoldirish"
  }
}
</i18n>
