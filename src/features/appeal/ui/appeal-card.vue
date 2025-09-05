<script setup lang="ts">
import { useAppealStore } from "~/entities/appeal"
import { useAppealService } from "~/features/appeal"

interface IProps {
  appeal: IAppeal
}
const props = defineProps<IProps>()

const { resolveAppeal } = useAppealService()
const appealStore = useAppealStore()
const { show } = useModal()

const { current } = storeToRefs(appealStore)

const { t } = useI18n({ useScope: "local" })

const loading = ref(false)
const cardClass = computed(() => ({
  "appeal-card": true,
  ["appeal-card__" + props.appeal.status]: true
}))

const showReplyModal = () => {
  current.value = props.appeal
  show("appeal-reply", props.appeal.id)
}

const resolve = () => {
  resolveAppeal(props.appeal.id, loading)
}

</script>

<template>
  <div :class="cardClass">
    <div class="appeal-card__header">
      <div>
        <icon class="text-2xl" :name="t(`status.${appeal.status}.icon`)"></icon>
      </div>
      <span class="appeal-card__status">
        {{ t(`status.${appeal.status}.label`) }}
      </span>
    </div>
    <div class="appeal-card__content">
      <div class="appeal-card__title">
        {{ appeal.topic.content }}
      </div>
      <div class="appeal-card__info">
        <div class="appeal-card__main">
          <div class="appeal-card__details">
            <span class="appeal-card__label">{{ t("type") }}: {{ appeal.type.content }}</span>
            <span class="appeal-card__label">
              {{ t("created_at") }}: {{ formatDate(appeal.createdAt, "DD.MM.YYYY") }}
            </span>
          </div>
          <div class="appeal-card__actions">
            <div class="flex items-center justify-between gap-[10px]">
              <template v-if="appeal.status === 'reviewed'">
                <ui-icon-button
                  variant="ghost"
                  icon-class="text-[24px] text-black"
                  icon-name="lucide:thumbs-up"
                  @click="resolve"
                />
                <ui-icon-button
                  variant="ghost"
                  icon-class="text-[24px] text-black"
                  icon-name="lucide:thumbs-down"
                  @click="show('appeal-reject', appeal.id)"
                />
              </template>
            </div>
            <div class="flex items-center justify-between gap-[10px]">
              <ui-icon-button
                variant="ghost"
                icon-class="text-[24px] text-black"
                icon-name="ph:chats"
                @click="showReplyModal"
              />
              <ui-icon-button
                variant="ghost"
                icon-class="text-[24px] text-black"
                icon-name="lucide:file-search"
                @click="show('appeal', appeal.id)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.appeal-card {
  @apply flex flex-col overflow-hidden rounded-lg bg-white;

  &__header {
    @apply flex items-center justify-between px-[10px] py-[5px] md:px-[15px] md:py-[5px];
    @apply font-['Inter'] text-[12px] font-medium leading-[21px] text-white;
  }

  &__title {
    @apply font-['Inter'] text-[14px] font-medium leading-[21px] text-blue-midnight;
  }

  &__content {
    @apply flex grow flex-col justify-between gap-[23px] p-[10px] md:p-[10px];
  }

  &__info {
    @apply mt-[10px];
  }

  &__details {
    @apply flex flex-col gap-[10px];
  }

  &__label {
    @apply font-['Inter'] text-[12px] font-medium leading-[21px] text-[#2a3040];
  }

  &__main {
    @apply flex h-full w-full flex-col justify-between gap-[10px];
  }

  &__actions {
    @apply flex items-center justify-between gap-[10px];
  }
}

.appeal-card__resolved {
  @apply border-2 border-solid border-[#10A230];

  .appeal-card__header {
    @apply bg-[#10A230];
  }
}


.appeal-card__new_appeal {
  @apply border-2 border-solid border-blue-command;

  .appeal-card__header {
    @apply bg-blue-command;
  }
}

.appeal-card__reviewed {
  @apply border-2 border-solid border-[#0078B5];

  .appeal-card__header {
    @apply bg-[#0078B5];
  }
}

.appeal-card__in_moderation {
  @apply border-2 border-solid border-[#475569];

  .appeal-card__header {
    @apply bg-[#475569];
  }
}

.appeal-card__not_resolved {
  @apply border-2 border-solid border-[#FF383C];

  .appeal-card__header {
    @apply bg-[#FF383C];
  }
}
</style>

<i18n>
{
  "en": {
    "status": {
      "resolved": {
        "label": "Resolved",
        "icon": "lucide:check-check"
      },
      "reviewed": {
        "label": "Reviewed",
        "icon": "lucide:check"
      },
      "not_resolved": {
        "label": "Not Resolved",
        "icon": "lucide:triangle-alert"
      },
      "in_moderation": {
        "label": "In Moderation",
        "icon": "lucide:user-round-search"
      }
    },
    "created_at": "Added",
    "type": "Type",
    "budget": "Budget"
  },
  "ru": {
    "status": {
      "resolved": {
        "label": "Решено",
        "icon": "lucide:check-check"
      },
      "reviewed": {
        "label": "Рассмотрено",
        "icon": "lucide:check"
      },
      "not_resolved": {
        "label": "Не решено",
        "icon": "lucide:triangle-alert"
      },
      "in_moderation": {
        "label": "На модерации",
        "icon": "lucide:user-round-search"
      }
    },
    "created_at": "Добавлен",
    "type": "Тип",
    "budget": "Бюджет"
  },
  "uz": {
    "status": {
      "resolved": {
        "label": "Hal qilindi",
        "icon": "lucide:check-check"
      },
      "reviewed": {
        "label": "Ko'rib chiqildi",
        "icon": "lucide:check"
      },
      "not_resolved": {
        "label": "Hal qilinmadi",
        "icon": "lucide:triangle-alert"
      },
      "in_moderation": {
        "label": "Moderatsiyada",
        "icon": "lucide:user-round-search"
      }
    },
    "created_at": "Qo'shilgan",
    "type": "Turi",
    "budget": "Byudjet"
  }
}
</i18n>
