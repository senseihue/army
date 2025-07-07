<template>
  <div class="bg-gray-100">
    <div class="container-7xl p-section">
      <div v-if="loading">Loading...</div>
      <div v-else class="grid gap-5">
        <ul class="flex items-center gap-2 pb-4">
          <li class="flex items-center gap-1 text-sm font-semibold text-blue-command">
            <Icon name="ph:house" size="20" />
            <NuxtLink to="/guide/project/category">{{ $t("labels.project_category") }}</NuxtLink>
          </li>
          <li class="mt-1.5 text-blue-command">
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
          <div class="mb-5 flex gap-6" ref="projectSection">
            <div class="grid grow gap-5 rounded-xl bg-white p-4">
              <h3 class="text-xl font-semibold">{{ $t("labels.investment_proposals") }}</h3>

              <project-filter
                v-model:amount="query.amount"
                v-model:region="query.region"
                v-model:sector="query.sector"
                v-model:status="query.status"
              />

              <div v-if="projectList.length" class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                <project-card v-for="project in projectList" v-bind="project" :key="project.id" />
              </div>
              <p v-else class="text-center">Loading...</p>
            </div>
          </div>
        </div>

        <div class="flex gap-5">
          <div class="relative grid w-full gap-5 rounded-xl bg-white p-4">
            <h3 class="font-semibold">{{ $t("labels.where_to_start") }}</h3>

            <div v-if="category?.service_categories?.length" class="rounded-2xl border">
              <project-category-slider>
                <project-category-slide
                  v-for="(slide, idx) in category?.service_categories"
                  :key="idx"
                  :title="slide.title"
                  :icon="slide.icon"
                  :index="idx"
                  :service-category="category?.service_categories?.length"
                  @click="onClickCategory(slide.id)"
                />
              </project-category-slider>
            </div>

            <div v-else class="text-center">Loading...</div>

            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <a
                v-for="(online, idx) in serviceList"
                class="flex min-h-[93px] items-center justify-between rounded-xl border bg-gray-50 px-4 py-6 transition-all hover:bg-gray-100"
                href="https://new.birdarcha.uz/"
                target="_blank"
                :key="idx"
              >
                <span>{{ online?.title }}</span>
                <span class="flex items-center justify-center rounded-full bg-green-400 p-1">
                  <Icon class="icon text-white" filled name="lucide:chevron-right" />
                </span>
              </a>
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
import ProjectCategorySlide from "~/features/project/category/ui/project-category-slide.vue"

const { t } = useI18n({ useScope: "local" })
const projectCategoryService = useProjectCategoryService()
const projectService = useProjectService()
const loading = ref<boolean>(false)
const route = useRoute()
const category = ref<IProjectCategoryById>()
const projectList = ref<IProject[]>([])
const serviceList = ref<any[]>([])

const query = ref({
  sector: undefined,
  region: undefined,
  amount: undefined,
  status: undefined,
  category: route.params.id
})

const getProjectAllList = () => {
  projectService.getProjectList(query.value, projectList, loading)
}

const onClickCategory = async (id: number) => {
  const data = await $fetch("/gateway/siw/public/service", {
    params: { size: 999, category_id: id }
  })
  serviceList.value = data.content || []
}

onMounted(() => {
  projectCategoryService.getProjectCategoryById(+route.params.id, category, loading)
  getProjectAllList()
})

watch(
  query,
  () => {
    getProjectAllList()
  },
  { deep: true }
)
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
