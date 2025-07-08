<script setup lang="ts">
import { ProfileHeader } from "~/features/profile"
import { ServiceDetailModal, ServiceGrid, usePersonalServiceService } from "~/features/profile/service"
import { ServiceCategoryTabs, usePersonalServiceCategoryService } from "~/features/profile/service/category"
import { usePersonalServiceStore } from "~/entities/profile/personal-service"

const { getPersonalServiceCategoryList } = usePersonalServiceCategoryService()
const { getPersonalServiceList } = usePersonalServiceService()
const { params } = usePersonalServiceStore()

const get = async () => {
  // await getPersonalServiceCategoryList()
  await getPersonalServiceList()
}

const onChangeCategory = async () => {
  await getPersonalServiceList()
}

onMounted(() => {
  get()
})
</script>

<template>
  <div class="w-full">
    <profile-header icon-name="lucide:briefcase" :title="$t('nav.profile.my_services')" @refresh="get" />
    <div class="mt-2 grid w-full gap-4 rounded-2xl bg-white p-4">
      <service-category-tabs @change="onChangeCategory" />
      <service-grid />
      <ui-pagination
        v-model="params.page"
        :total="params.total"
        :per-page="params.size"
        @update:model-value="getPersonalServiceList"
      />

      <service-detail-modal />
    </div>
  </div>
</template>
