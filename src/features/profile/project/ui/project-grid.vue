<script setup lang="ts">
import { ProjectCard, usePersonalProjectService } from "~/features/profile/project"
import { usePersonalProjectStore } from "~/entities/profile/personal-project"

const { getPersonalProjectList } = usePersonalProjectService()
const personalProjectStore = usePersonalProjectStore()
const { items, params, loading } = storeToRefs(personalProjectStore)
const { t } = useI18n({ useScope: "local" })

onMounted(() => {
  getPersonalProjectList()
})
</script>

<template>
  <div class="grid grid-cols-1 gap-x-[18px] gap-y-[15px] xl:grid-cols-3 md:grid-cols-2">
    <template v-if="loading">
      <div class="col-span-full grid min-h-96 place-items-center">
        <ui-spinner size="size-32" />
      </div>
    </template>
    <template v-if="items.length > 0 && !loading">
      <project-card v-for="(project, index) in items" :project :key="index" />
      <div class="col-span-full mt-8">
        <ui-pagination v-model="params.page" :total="params.total" @update:model-value="getPersonalProjectList" />
      </div>
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
