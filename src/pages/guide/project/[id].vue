<template>
  <div class="container-7xl p-section">
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else class="grid grid-cols-1 gap-8">
      <h2 class="mb-4 text-2xl font-semibold lg:text-3xl">{{ project?.title }}</h2>
      <p v-if="project?.budget">{{ project?.budget }}</p>
      <img
        v-if="project?.upload?.id"
        class="aspect-video w-full rounded-md object-cover object-center"
        alt="img"
        :src="project?.upload?.download_link"
      />

      <div>
        <p class="mb-8 text-xl font-semibold">{{ $t("labels.project_information") }}</p>
        <div class="mb-8 grid gap-4 sm:grid-cols-3 lg:gap-6">
          <project-info-card :title="$t('labels.irr')" :description="project?.irr" />
          <project-info-card :title="$t('labels.npv')" :description="project?.npv" />
          <project-info-card :title="$t('labels.pp')" :description="project?.pp" />
          <project-info-card :title="$t('labels.sector')" :description="project?.sector.content" />
          <project-info-card :title="$t('labels.status')" :description="$t(`project_status.${project?.status}`)" />
          <project-info-card :title="$t('labels.email')" :description="project?.email" />
          <project-info-card :title="$t('labels.phone')" :description="project?.phone" />
        </div>
      </div>

      <div v-html="project?.content"></div>

      <div>
        <h3 class="mb-4 text-xl font-semibold">{{ $t("labels.project_location") }}</h3>

        <iframe
          class="rounded-lg border-0"
          height="400"
          width="100%"
          :src="`https://maps.google.com/maps?q=${project?.latitude ?? '41.31469012975017'},${project?.longitude ?? '69.28002422052592'}&z=15&output=embed`"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProjectInfoCard, useProjectService } from "~/features/project"

const route = useRoute()

const loading = ref<boolean>(false)
const project = ref<IProjectById>()

const projectService = useProjectService()

onMounted(() => projectService.getProjectById(+route.params.id, project, loading))
</script>

<style scoped></style>
