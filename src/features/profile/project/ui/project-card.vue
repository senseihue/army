<script setup lang="ts">
import { usePersonalProjectService } from "~/features/profile/project"

interface IProps {
  project: IPersonalProject
}

const props = defineProps<IProps>()
const { changeVisibilityPersonalProject } = usePersonalProjectService()
const { t } = useI18n({ useScope: "local" })
const localePath = useLocalePath()
const cardClass = computed(() => ({
  "project-card": true,
  ["project-card__" + props.project.state]: true
}))
</script>

<template>
  <div :class="cardClass">
    <div class="project-card__header">
      <div></div>
      <span class="project-card__status">
        {{ t(`status.${project.state}`) }}
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
          <img alt="" :src="project.upload?.thumbnail_link" />
        </div>
        <div class="project-card__main">
          <div class="project-card__details">
            <span class="project-card__label">{{ t("budget") }}: {{ project.budget }}</span>
            <span class="project-card__label">
              {{ t("created_at") }}: {{ formatDate(project.createdAt, "DD.MM.YYYY") }}
            </span>
          </div>
          <div class="project-card__actions">
            <ui-icon-button
              variant="ghost"
              icon-class="text-[24px] text-black"
              icon-name="lucide:file-search"
              :to="localePath({ path: `/profile/my-projects/form/${project.id}` })"
            />
            <ui-icon-button
              v-if="project.state !== 'pending'"
              variant="ghost"
              icon-class="text-[24px] text-black"
              icon-name="lucide:pencil"
              :to="localePath({ path: `/profile/my-projects/form/${project.id}` })"
            />
            <ui-icon-button
              v-if="project.state === 'approved'"
              variant="ghost"
              icon-class="text-[24px] text-black"
              :icon-name="project.draft ? 'lucide:eye-off' : 'lucide:eye'"
              @click="changeVisibilityPersonalProject(project.id)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  @apply flex flex-col overflow-hidden rounded-lg bg-white;

  &__header {
    @apply flex items-center justify-between px-[10px] py-[5px] md:px-[15px] md:py-[5px];
    @apply font-['Inter'] text-[12px] font-medium leading-[21px] text-white;
  }

  &__title {
    @apply font-['Inter'] text-[14px] font-medium leading-[21px] text-blue-midnight;
  }

  &__content {
    @apply flex grow flex-col justify-between p-[10px] md:p-[10px];
  }

  &__info {
    @apply mt-[10px] flex items-start gap-[10px];
  }

  &__image {
    @apply h-[109px] min-w-[134px] overflow-hidden rounded-lg;
    @apply border border-solid border-[#E4E4E7];

    img {
      @apply h-full w-full object-cover;
    }
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

.project-card__approved {
  @apply border-2 border-solid border-[#10A230];

  .project-card__header {
    @apply bg-[#10A230];
  }
}

.project-card__pending {
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
      "pending": "In Moderation"
    },
    "created_at": "Added",
    "budget": "Budget"
  },
  "ru": {
    "status": {
      "approved": "Одобрено",
      "rejected": "Отклонено",
      "pending": "На модерации"
    },
    "created_at": "Добавлен",
    "budget": "Бюджет"
  },
  "uz": {
    "status": {
      "approved": "Tasdiqlangan",
      "rejected": "Rad etilgan",
      "pending": "Moderatsiyada"
    },
    "created_at": "Qo'shilgan",
    "budget": "Byudjet"
  }
}
</i18n>
