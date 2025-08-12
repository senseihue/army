<script setup lang="ts">
interface IProps {
  project: IPersonalProject
}

const props = defineProps<IProps>()
const { t } = useI18n({ useScope: "local" })

const cardClass = computed(() => ({
  "project-card": true,
  ["project-card__" + props.project.status]: true
}))
</script>

<template>
  <div :class="cardClass">
    <div class="project-card__header">
      <div></div>
      <span class="project-card__status">
        {{ t(`status.${project.status}`) }}
      </span>
    </div>
    <div class="project-card__content">
      <div class="project-card__title">
        <nuxt-link-locale :to="`/guide/project/${project.id}`">
          {{ project.title }}
        </nuxt-link-locale>
      </div>
      <div class="project-card__info">
        <div class="project-card__image">
          <img alt="" :src="project.upload?.download_link" />
        </div>
        <div class="project-card__main">
          <div class="project-card__details">
            <span class="project-card__label">{{ t("budget") }}: {{ project.budget }}</span>
            <span class="project-card__label">
              {{ t("created_at") }}: {{ formatDate(project.createdAt, "DD.MM.YYYY") }}
            </span>
          </div>
          <div class="project-card__actions">
            <ui-icon-button variant="ghost" icon-class="text-[24px] text-black" icon-name="lucide:file-search" />
            <ui-icon-button v-if="project.status === 'rejected'" variant="ghost" icon-class="text-[24px] text-black" icon-name="lucide:pencil" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  @apply rounded-lg overflow-hidden bg-white flex flex-col;

  &__header {
    @apply px-[10px] py-[5px] flex items-center justify-between  md:px-[15px] md:py-[5px];
    @apply text-white text-[12px] font-medium leading-[21px] font-['Inter'];
  }

  &__title {
    @apply text-[14px] font-medium leading-[21px] font-['Inter'] text-blue-midnight;
  }

  &__content {
    @apply p-[10px] md:p-[10px] flex flex-col justify-between grow;
  }

  &__info {
    @apply flex items-start gap-[10px] mt-[10px];
  }

  &__image {
    @apply min-w-[134px] h-[109px] overflow-hidden rounded-lg;
    @apply border border-solid border-[#E4E4E7];
    img {
      @apply w-full h-full object-cover;
    }
  }

  &__details {
    @apply flex flex-col gap-[10px];
  }

  &__label {
    @apply text-[12px] font-medium leading-[21px] font-['Inter'] text-[#2a3040];
  }

  &__main {
    @apply flex flex-col h-full w-full justify-between gap-[10px];
  }

  &__actions {
    @apply flex items-center justify-end gap-[10px];
  }
}

.project-card__approved {
  @apply border-2 border-solid border-[#10A230];

  .project-card__header {
    @apply bg-[#10A230];
  }
}

.project-card__in_moderation {
  @apply border-2 border-solid border-[#0078B5];
  .project-card__header {
    @apply bg-[#0078B5];
  }
}

.project-card__rejected {
  @apply border-2 border-solid border-[#FF383C];
  .project-card__header {
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
    "budget": "Budget"
  },
  "ru": {
    "status": {
      "approved": "Одобрено",
      "rejected": "Отклонено",
      "in_moderation": "В модерации"
    },
    "created_at": "Добавлен",
    "budget": "Бюджет"
  },
  "uz": {
    "status": {
      "approved": "Tasdiqlangan",
      "rejected": "Rad etilgan",
      "in_moderation": "Moderatsiyada"
    },
    "created_at": "Qo'shilgan",
    "budget": "Byudjet"
  }
}
</i18n>
