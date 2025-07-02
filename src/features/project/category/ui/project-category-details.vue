<template>
  <div class="bg-gray-100">
    <div class="container-7xl p-section">
      <div v-if="loading">Loading...</div>
      <div v-else class="grid gap-5">
        <ul class="flex items-center gap-2 pb-4">
          <li class="flex items-center gap-1 text-sm font-semibold text-blue-command">
            <Icon name="ph:house" size="20" />
            <NuxtLink to="/guide/project/category">Project category</NuxtLink>
          </li>
          <li>
            <Icon name="ph:caret-right" />
          </li>
          <li>
            <p class="text-sm font-semibold text-gray-400">{{ category?.title }}</p>
          </li>
        </ul>

        <div class="flex w-full flex-col items-center gap-4 rounded-xl bg-white p-4 md:flex-row">
          <div
            class="flex h-full max-h-32 min-h-32 w-full min-w-32 max-w-32 shrink-0 items-center justify-center rounded-lg bg-blue-command"
          >
            <Icon class="size-28 text-white" :name="category?.icon || 'ph:star'" />
          </div>

          <div class="w-full">
            <h3 class="mb-4 text-lg font-bold text-gray-600">{{ category?.title }}</h3>
            <p class="text-gray-600">
              {{ category?.description }}
            </p>
          </div>
        </div>

        <div class="grow">
          <div v-if="category" class="mb-5 flex gap-6" ref="projectSection">
            <div class="grid grow gap-5 rounded-xl bg-white p-4">
              <h3 class="text-xl font-semibold">{{ $t("labels.investment_proposals") }}</h3>

              <project-filter
                v-model:amount="query.amount"
                v-model:region="query.region"
                v-model:sector="query.sector"
                v-model:status="query.status"
                v-model:type="query.type"
              />

              <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                <project-card v-for="project in projectList" v-bind="project" :key="project.id" />
              </div>
            </div>
          </div>
        </div>

        <div class="flex gap-5">
          <div class="grid w-full gap-5 rounded-xl bg-white p-4">
            <h3 class="font-semibold">{{ $t("labels.where_to_start") }}</h3>

            <div class="rounded-2xl border">
              <project-category-slider>
                <SwiperSlide v-for="(item, idx) in category?.service_categories" class="!h-auto" :key="idx">
                  <div
                    class="text-gray-[#475569] relative h-full cursor-pointer rounded-xl py-3 pl-2 pr-6 text-center transition duration-300"
                  >
                    <Icon v-if="item.icon" :name="item.icon" />

                    <div>
                      <p>{{ item.title }}</p>
                      <span class="project-clip-border hidden lg:block"></span>
                    </div>
                  </div>
                </SwiperSlide>
              </project-category-slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProjectCategoryService } from "~/features/project/category"
import ProjectCard from "~/features/project/ui/project-card.vue"
import { ProjectFilter, useProjectService } from "~/features/project"
import ProjectCategorySlider from "~/features/project/category/ui/project-category-slider.vue"

const { t } = useI18n({ useScope: "local" })
const projectCategoryService = useProjectCategoryService()
const projectService = useProjectService()
const loading = ref<boolean>(false)
const route = useRoute()
const category = ref<IProjectCategoryById>()
const projectList = ref<IProject[]>([])

const query = ref({
  sector: undefined,
  region: undefined,
  type: undefined,
  amount: undefined,
  status: undefined,
  category: route.params.id
})

onMounted(() => {
  projectCategoryService.getProjectCategoryById(+route.params.id, category, loading)
  projectService.getProjectList(query.value, projectList, loading)
})
</script>

<i18n lang="json">
{
  "en": {
    "title": "Explore Investment Opportunities",
    "description": "Welcome to the Uzbekistan Investor Portal, where you can explore a wide range of investment opportunities across various sectors. Below, you’ll find categories of projects available for investment. Click on each category to discover specific projects and learn more about their potential."
  },
  "ru": {
    "title": "Title",
    "description": "Description"
  },
  "uz": {
    "title": "Title",
    "description": "Description"
  }
}
</i18n>

<style scoped>
.project-clip-border {
  @apply absolute right-0 top-0 h-full w-full bg-[#E4E4E7];
  clip-path: polygon(92% 0, 100% 50%, 92% 100%, 91% 100%, 99% 50%, 91% 0);
}
</style>
