<template>
  <div class="container-7xl p-section">
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else class="grid grid-cols-1 gap-8">
      {{ project }}
      <h2 class="mb-4 text-2xl font-semibold lg:text-3xl">{{ project?.title }}</h2>
      <p v-if="project?.budget">{{ project?.budget }}</p>
      <img v-if="project?.upload?.id" alt="img" class="aspect-video w-full rounded-md object-cover object-center" :src="project?.upload?.download_link" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProjectService } from "~/features/project"

const route = useRoute()

const loading = ref<boolean>(false)
const project = ref<IProjectById>()

const projectService = useProjectService()

onMounted(() => projectService.getProjectById(+route.params.id, project, loading))
</script>

<style scoped></style>
