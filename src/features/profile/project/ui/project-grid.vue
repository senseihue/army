<script setup lang="ts">
import { ProjectCard } from "~/features/profile/project"

const projects = [
  {
    title: "Производство воздушных, масляных и других фильтров для автомобилей",
    status: "approved",
    statusIcon: "hidden", // зелёная иконка с глазом-зачёркнутым
    budget: 1_200_000,
    createdAt: 1754919617,
    upload: {
      download_link: "https://picsum.photos/200/300"
    }
  },
  {
    title: "Производство свечей интерферона",
    status: "in_moderation",
    budget: 1_200_000,
    createdAt: 1754919617,
    upload: {
      download_link: "https://picsum.photos/200/300"
    }
  },
  {
    title: "Производство свечей интерферона",
    status: "in_moderation",
    budget: 1_200_000,
    createdAt: 1754919617,
    upload: {
      download_link: "https://picsum.photos/200/300"
    }
  },
  {
    title: "Производство свечей интерферона",
    status: "rejected",
    budget: 1_200_000,
    createdAt: 1754919617,
    upload: {
      download_link: "https://picsum.photos/200/300"
    }
  },
  {
    title: "Совместное производство медных кабелей",
    status: "in_moderation",
    budget: 1_200_000,
    createdAt: 1754919617,
    upload: {
      download_link: "https://picsum.photos/200/300"
    }
  },
  {
    title: "Производство свечей интерферона",
    status: "approved",
    statusIcon: "visible", // зелёная иконка с глазом
    budget: 1_200_000,
    createdAt: 1754919617,
    upload: {
      download_link: "https://picsum.photos/200/300"
    }
  }
]

const { t } = useI18n({ useScope: "local" })
</script>

<template>
  <div class="grid grid-cols-1 gap-x-[18px] gap-y-[15px] sm:grid-cols-3">
    <template v-if="projects.length > 0">
      <project-card v-for="(project, index) in projects" :project :key="index" />
    </template>
    <template v-else>
      <div class="col-span-full py-12 text-center">
        <p class="font-semibold text-blue-midnight">
          {{ t("empty_projects") }}
        </p>
      </div>
    </template>
  </div>
</template>

<style scoped></style>

<i18n>
{
  "en": {
    "empty_projects": "No projects available"
  },
  "ru": {
    "empty_projects": "Нет доступных проектов"
  },
  "uz": {
    "empty_projects": "Loyihalar mavjud emas"
  }
}
</i18n>
