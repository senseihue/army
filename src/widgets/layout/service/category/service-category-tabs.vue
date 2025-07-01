<script setup lang="ts">
import { ServiceTabs, ServiceList } from "~/features/service"
import { ServiceCategoryList } from "~/features/service/category"

const route = useRoute()
const router = useRouter()
const localePath = useLocalePath()
const params = {
  server: true,
  query: {
    page: 0,
    size: 100
  }
}

const { data: parentCategories, error } = await useFetch<IResponse<IServiceCategory[]>>(
  "/gateway/siw/public/service/category",
  {
    ...params
  }
)



if (!route.params.category_id && parentCategories.value?.content?.length > 0) {
  await navigateTo(localePath(`/service/category/${parentCategories.value?.content[0]?.id}`))
}

const changeRoute = (category: IServiceCategory) => {
  router.push(localePath(`/service/category/${category.id}`))
}


</script>

<template>
  <section>
    <div class="container-7xl bg-white">
      <div class="pb-4 pt-8">
        <service-tabs :steps="parentCategories?.content" @update="changeRoute" />
      </div>
    </div>
  </section>
</template>
