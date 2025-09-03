<script setup lang="ts">
interface IProps {
  appeal: IAppeal
}

const props = defineProps<IProps>()
const { show } = useModal()
const { t } = useI18n({ useScope: "local" })
const cardClass = computed(() => ({
  "appeal-card": true,
  ["appeal-card__" + props.appeal.status]: true
}))
</script>

<template>
  <div :class="cardClass">
    <div class="appeal-card__header">
      <div></div>
      <span class="appeal-card__status">
        {{ t(`status.${appeal.status}`) }}
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
            <div >
              <template v-if="">
                <ui-icon-button
                  variant="ghost"
                  icon-class="text-[24px] text-black"
                  icon-name="lucide:thumbs-up"
                  @click="show('appeal-replies', appeal.id)"
                />
                <ui-icon-button
                  variant="ghost"
                  icon-class="text-[24px] text-black"
                  icon-name="lucide:down"
                  @click="show('appeal-replies', appeal.id)"
                />
              </template>
            </div>
            <ui-icon-button
              variant="ghost"
              icon-class="text-[24px] text-black"
              icon-name="ph:chats-duotone"
              @click="show('appeal-replies', appeal.id)"
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
    @apply flex items-center justify-end gap-[10px];
  }
}

.appeal-card__approved {
  @apply border-2 border-solid border-[#10A230];

  .appeal-card__header {
    @apply bg-[#10A230];
  }
}

.appeal-card__in_moderation {
  @apply border-2 border-solid border-[#0078B5];

  .appeal-card__header {
    @apply bg-[#0078B5];
  }
}

.appeal-card__rejected {
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
      "approved": "Approved",
      "rejected": "Rejected",
      "in_moderation": "In Moderation"
    },
    "created_at": "Added",
    "type": "Type",
    "budget": "Budget"
  },
  "ru": {
    "status": {
      "approved": "Одобрено",
      "rejected": "Отклонено",
      "in_moderation": "На модерации"
    },
    "created_at": "Добавлен",
    "type": "Тип",
    "budget": "Бюджет"
  },
  "uz": {
    "status": {
      "approved": "Tasdiqlangan",
      "rejected": "Rad etilgan",
      "in_moderation": "Moderatsiyada"
    },
    "created_at": "Qo'shilgan",
    "type": "Turi",
    "budget": "Byudjet"
  }
}
</i18n>
